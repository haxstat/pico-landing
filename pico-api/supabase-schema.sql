-- ─────────────────────────────────────────────
--  PICO — Supabase Schema
--  Run this in: Supabase → SQL Editor → New query
-- ─────────────────────────────────────────────

-- ── LEADS ────────────────────────────────────
-- People who expressed interest in a pre-built unit
create table if not exists leads (
  id          uuid        default gen_random_uuid() primary key,
  name        text        not null,
  email       text        not null unique,
  message     text        default '',
  source      text        default 'landing_prebuilt',
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Index for quick lookups by email
create index if not exists leads_email_idx on leads (email);
create index if not exists leads_created_at_idx on leads (created_at desc);

-- ── ORDERS ───────────────────────────────────
-- Confirmed Stripe purchases
create table if not exists orders (
  id                uuid        default gen_random_uuid() primary key,
  stripe_session_id text        not null unique,
  name              text        not null,
  email             text        not null,
  address           jsonb       default '{}',
  amount_cents      integer     not null default 0,
  payment_status    text        not null default 'paid',
  shipped_at        timestamptz,
  tracking_number   text,
  notes             text        default '',
  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

create index if not exists orders_email_idx on orders (email);
create index if not exists orders_created_at_idx on orders (created_at desc);
create index if not exists orders_payment_status_idx on orders (payment_status);

-- ── ROW LEVEL SECURITY ────────────────────────
-- Leads and orders should NOT be readable by anonymous users.
-- Only service_role key (used by the Worker) can write/read.
alter table leads  enable row level security;
alter table orders enable row level security;

-- Block all access from anon/authenticated roles
-- (service_role bypasses RLS automatically)
create policy "No public access to leads"
  on leads for all
  using (false);

create policy "No public access to orders"
  on orders for all
  using (false);

-- ── OPTIONAL: VIEW FOR YOURSELF ──────────────
-- A handy view to check recent activity from the Supabase dashboard
-- (service_role can still query tables directly, this is just convenience)
create or replace view recent_activity as
  select
    'lead'      as type,
    name,
    email,
    message     as detail,
    created_at
  from leads
  union all
  select
    'order'     as type,
    name,
    email,
    concat('$', (amount_cents/100.0)::numeric(10,2), ' — ', payment_status) as detail,
    created_at
  from orders
  order by created_at desc;
