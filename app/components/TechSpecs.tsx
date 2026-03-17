const SPECS = [
  {
    group: "Hardware",
    items: [
      { label: "MCU", value: "RP2040 · dual-core ARM Cortex-M0+ @ 133 MHz" },
      { label: "Flash", value: "2 MB onboard (CircuitPython + firmware + config)" },
      { label: "Status indicator", value: "NeoPixel RGB LED (green = active)" },
      { label: "Control", value: "Onboard push button · 250 ms debounce" },
      { label: "Power", value: "USB bus-powered · no external supply needed" },
      { label: "Enclosure", value: "3D-printed case (optional, custom per order)" },
    ],
  },
  {
    group: "Firmware",
    items: [
      { label: "Runtime", value: "CircuitPython 10.0.3 (Adafruit RP2040 build)" },
      { label: "Language", value: "Python · editable source, no compilation" },
      { label: "Libraries", value: "adafruit_hid (keyboard + mouse) · neopixel" },
      { label: "Config format", value: "JSON stored on CIRCUITPY drive" },
      { label: "Config fields", value: "texts[] · typo_prob · pause ranges · session probabilities" },
    ],
  },
  {
    group: "USB HID behavior",
    items: [
      { label: "USB class", value: "HID (keyboard + mouse, separate endpoints)" },
      { label: "USB identity", value: "Standard keyboard + mouse peripheral" },
      { label: "Driver required", value: "None — HID class is OS-native" },
      { label: "OS support", value: "Windows · macOS · Linux · any HID-capable OS" },
      { label: "Typing speed", value: "80–300 ms per character (randomized)" },
      { label: "Typo rate", value: "0.0–1.0 configurable (default: 0.08)" },
    ],
  },
  {
    group: "Session engine",
    items: [
      { label: "Text blocks", value: "Up to 30 configurable (default: 20 active)" },
      { label: "Session types", value: "Keyboard · Mouse-only · Idle" },
      { label: "Default distribution", value: "60% keyboard · 40% mouse-only" },
      { label: "Pause before text", value: "0.8–3.0 s (min/max configurable)" },
      { label: "Pause after text", value: "10–20 s (min/max configurable)" },
      { label: "Mouse segments", value: "8–13 per route · sinusoidal easing" },
      { label: "Mouse deviation", value: "±60 px lateral variation per segment" },
    ],
  },
  {
    group: "Desktop configurator",
    items: [
      { label: "Platform", value: "Windows 10 / 11 (installer via Inno Setup)" },
      { label: "Framework", value: "Python + PySide6 · packaged as .exe" },
      { label: "Device detection", value: "Auto-scan for CIRCUITPY drive" },
      { label: "Version", value: "1.0.0" },
    ],
  },
  {
    group: "Privacy & security",
    items: [
      { label: "Network", value: "None — RP2040 has no network hardware" },
      { label: "Data transmission", value: "Zero · fully air-gapped" },
      { label: "Telemetry", value: "None" },
      { label: "Config storage", value: "Local JSON on device flash only" },
    ],
  },
];

export default function TechSpecs() {
  return (
    <section className="py-24 sm:py-32" id="specs">
      <div className="divider mb-0" />
      <div className="section-container pt-24">
        <div className="max-w-xl mb-14">
          <div className="section-label mb-3">Technical specifications</div>
          <h2 className="section-heading text-3xl sm:text-4xl mb-4">
            Everything in one place
          </h2>
          <p className="section-subtext text-base">
            Full hardware, firmware, and behavioral specifications for engineers
            evaluating the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SPECS.map((group, gi) => (
            <div key={gi} className="card-base p-6">
              <h3 className="font-display font-semibold text-pico-text text-sm mb-4 flex items-center gap-2.5">
                <span className="w-1 h-4 rounded-full bg-pico-primary/70 inline-block" />
                {group.group}
              </h3>
              <div className="space-y-2">
                {group.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex gap-4 py-1.5 border-b border-pico-700/30 last:border-0"
                  >
                    <dt className="text-xs text-pico-muted font-mono shrink-0 min-w-[120px]">
                      {item.label}
                    </dt>
                    <dd className="text-xs text-pico-text font-mono">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
