"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { t } from "../i18n/translations";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const { lang } = useLang();
  const T = t[lang].leadModal;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  // Focus first field when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => nameRef.current?.focus(), 60);
    } else {
      // Reset form when closed
      setStatus("idle");
      setName("");
      setEmail("");
      setMessage("");
      setErrorMsg("");
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/leads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? T.errorGeneric);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : T.errorGeneric);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-pico-950/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-pico-900 border border-pico-700 rounded-2xl shadow-2xl overflow-hidden">

        {/* Top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-pico-primary/60 via-pico-primary to-pico-primary/60" />

        <div className="px-7 py-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-pico-muted hover:text-pico-text hover:bg-pico-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {status === "success" ? (
            /* ── SUCCESS STATE ── */
            <div className="py-4 text-center">
              <div className="w-12 h-12 rounded-full bg-pico-primary/10 border border-pico-primary/30 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M4 11l5 5 9-9" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-lg text-pico-text mb-2">{T.successTitle}</h2>
              <p className="text-sm text-pico-muted leading-relaxed mb-6">{T.successSub}</p>
              <button
                onClick={onClose}
                className="btn-primary w-full justify-center py-2.5 text-sm"
              >
                {T.successClose}
              </button>
            </div>
          ) : (
            /* ── FORM STATE ── */
            <>
              <div className="mb-5">
                <div className="badge-primary mb-3 w-fit">{T.badge}</div>
                <h2 id="lead-modal-title" className="font-display font-bold text-xl text-pico-text mb-1.5">
                  {T.title}
                </h2>
                <p className="text-sm text-pico-muted leading-relaxed">{T.sub}</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-pico-muted mb-1.5" htmlFor="lead-name">
                    {T.nameLabel}
                  </label>
                  <input
                    ref={nameRef}
                    id="lead-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={T.namePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-pico-950 border border-pico-700 rounded-lg text-sm text-pico-text placeholder:text-pico-700 focus:outline-none focus:border-pico-primary/60 focus:ring-1 focus:ring-pico-primary/30 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-pico-muted mb-1.5" htmlFor="lead-email">
                    {T.emailLabel}
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={T.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-pico-950 border border-pico-700 rounded-lg text-sm text-pico-text placeholder:text-pico-700 focus:outline-none focus:border-pico-primary/60 focus:ring-1 focus:ring-pico-primary/30 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-pico-muted mb-1.5" htmlFor="lead-message">
                    {T.messageLabel}
                  </label>
                  <textarea
                    id="lead-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={T.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-pico-950 border border-pico-700 rounded-lg text-sm text-pico-text placeholder:text-pico-700 focus:outline-none focus:border-pico-primary/60 focus:ring-1 focus:ring-pico-primary/30 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-start gap-2 px-3.5 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="7" cy="7" r="6" stroke="#F87171" strokeWidth="1.3" />
                      <path d="M7 4v3" stroke="#F87171" strokeWidth="1.3" strokeLinecap="round" />
                      <circle cx="7" cy="9.5" r="0.6" fill="#F87171" />
                    </svg>
                    <p className="text-xs text-red-400">{errorMsg || T.errorGeneric}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center py-2.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round" />
                      </svg>
                      {T.sending}
                    </>
                  ) : T.submitBtn}
                </button>
              </form>

              <p className="mt-4 text-center text-2xs text-pico-700">{T.privacy}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
