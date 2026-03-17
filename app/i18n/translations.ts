export const t = {
  en: {
    // Navbar
    nav: {
      features: "Features",
      howItWorks: "How it works",
      useCases: "Use cases",
      specs: "Specs",
      faq: "FAQ",
      download: "Download",
    },
    // Hero
    hero: {
      badge: "USB HID automation device",
      headline1: "Your presence.",
      headline2: "Always on.",
      sub: "PICO is a programmable USB device that generates realistic human keyboard and mouse activity. Plug it in — it runs.",
      cta: "Download Configurator",
      learnMore: "See how it works",
      trust1: "No drivers",
      trust2: "100% offline",
      trust3: "Open firmware",
    },
    // Problem
    problem: {
      label: "The problem",
      heading: "Presence detection is broken",
      sub: "Modern monitoring tools flag inactivity — not productivity. PICO solves the signal problem at the hardware level.",
      card1Title: "Activity monitors",
      card1Body: "Idle timers, screenshot tools, and input trackers watch for mouse movement and keystrokes — not actual output.",
      card2Title: "Software solutions leave traces",
      card2Body: "Script-based automation and virtual input drivers require elevated OS permissions, appear in process lists, and can conflict with platform restrictions. A software approach introduces exactly the kind of footprint you're trying to avoid.",
    },
    // Features
    features: {
      label: "Features",
      heading: "Built different",
      sub: "Hardware-level input generation that looks and feels like a real user.",
    },
    // HowItWorks
    how: {
      label: "Setup",
      heading: "Three steps",
      sub: "Flash, configure, plug in. No drivers, no accounts, no cloud.",
      step1Title: "Flash the firmware",
      step1Body: "Download the firmware package and copy it to the PICO's CIRCUITPY drive. Takes under 2 minutes.",
      step2Title: "Configure with the app",
      step2Body: "Open the desktop configurator, set your text blocks, timing, and behavior profile. Save directly to the device.",
      step3Title: "Plug in and go",
      step3Body: "Connect PICO to any USB port. It starts generating activity immediately — no setup required on the host machine.",
    },
    // UseCases
    useCases: {
      label: "Use cases",
      heading: "Who uses PICO",
      sub: "Any context where input activity needs to be maintained without manual interaction.",
    },
    // TechSpecs
    specs: {
      label: "Specs",
      heading: "Under the hood",
      sub: "RP2040-based hardware with open CircuitPython firmware.",
    },
    // FAQ
    faq: {
      label: "FAQ",
      heading: "Common questions",
      sub: "Questions about setup, compatibility, legal use, and how the device works.",
      warning: "This is a technical tool. How you use it is your responsibility. Ensure you comply with your employment agreements, platform terms, and local laws.",
      items: [
        {
          q: "Is this tool legal to use?",
          a: "PICO is a generic USB HID device — the same class as any keyboard or mouse. In most jurisdictions, sending input to your own machine via a USB peripheral is not illegal in itself. However, using any tool to falsify working hours, breach employment contracts, or defraud clients can be illegal and carries serious professional and legal consequences. Read your contracts carefully. If in doubt, consult a lawyer in your jurisdiction.",
        },
        {
          q: "Does it transmit any data to the internet?",
          a: "No. The RP2040 microcontroller has no network hardware. The firmware has no network stack. All configuration is stored as a plain JSON file directly on the device's flash memory (the CIRCUITPY drive). Nothing is transmitted, logged, or phoned home — ever.",
        },
        {
          q: "Will it work on macOS and Linux?",
          a: "Yes. The device uses the standard USB HID class, which is supported natively by every modern operating system — Windows, macOS, and Linux. No driver installation is required on any of these platforms. The desktop configurator app currently requires Windows, but the device itself works everywhere.",
        },
        {
          q: "Do I need to install software on the target machine?",
          a: "No. The device identifies itself as a standard USB keyboard and mouse. The target machine sees it as a regular peripheral — no driver prompt, no software install, no elevated permissions required on the machine it's connected to.",
        },
        {
          q: "What does the pre-built option include?",
          a: "Pre-built units come with the RP2040 board, flashed firmware, and a 3D-printed enclosure. The desktop configurator app (.exe installer) and default config.json are also included. Contact us to specify your text content or custom behavior profile before assembly.",
        },
        {
          q: "Will my employer or platform detect it?",
          a: "We make no claims about detection resistance, and we do not market PICO as a detection-evasion tool. The device presents as a standard USB peripheral. Whether any specific monitoring tool flags it depends entirely on that tool's implementation. Use it responsibly and in contexts where you're authorized to do so.",
        },
        {
          q: "Can I customize the typing patterns?",
          a: "Yes — all behavioral parameters are configurable via the desktop app: typo probability, minimum and maximum pause before and after each text, keyboard session probability, mouse-only session probability, and whether mouse movement and idle sessions are enabled. Text blocks (up to 30) are fully editable.",
        },
      ],
    },
    // CTA
    cta: {
      badge: "Available now",
      heading1: "Get PICO Human",
      heading2: "Presence Pro",
      sub: "Flash the firmware, configure your text blocks, and have a working device in under 30 minutes. Pre-assembled units with 3D-printed enclosures are available on request.",
      downloadBtn: "Download Configurator",
      prebuiltBtn: "Request pre-built unit",
      contactNote: "Questions about licensing, bulk orders, or custom profiles?",
      trust1Label: "Fully offline",
      trust1Sub: "No network hardware on-device",
      trust2Label: "No drivers",
      trust2Sub: "HID class — OS native",
      trust3Label: "Open firmware",
      trust3Sub: "Python source, editable",
      trust4Label: "30-min setup",
      trust4Sub: "Flash, configure, plug in",
    },
    // Lead modal
    leadModal: {
      badge: "Pre-built units",
      title: "Request a pre-built unit",
      sub: "We'll reach out within 1–2 business days with pricing, availability, and shipping options.",
      nameLabel: "Your name",
      namePlaceholder: "Jane Smith",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message (optional)",
      messagePlaceholder: "Country, quantity, custom text blocks, questions…",
      submitBtn: "Send request",
      sending: "Sending…",
      privacy: "No spam. Your info is only used to process your request.",
      errorGeneric: "Something went wrong. Please try again or email us directly.",
      successTitle: "Request received!",
      successSub: "We'll be in touch within 1–2 business days. Check your inbox for a confirmation.",
      successClose: "Got it",
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
      legal: "PICO Human Presence Pro is a hardware automation tool. All use is subject to the EULA. The creator accepts no liability for employment consequences, contract breaches, or any other damages arising from use or misuse. All third-party product names are trademarks of their respective owners.",
    },
  },

  es: {
    // Navbar
    nav: {
      features: "Características",
      howItWorks: "Cómo funciona",
      useCases: "Casos de uso",
      specs: "Especificaciones",
      faq: "Preguntas",
      download: "Descargar",
    },
    // Hero
    hero: {
      badge: "Dispositivo USB HID de automatización",
      headline1: "Tu presencia.",
      headline2: "Siempre activa.",
      sub: "PICO es un dispositivo USB programable que genera actividad realista de teclado y ratón. Conéctalo — y funciona.",
      cta: "Descargar Configurador",
      learnMore: "Ver cómo funciona",
      trust1: "Sin drivers",
      trust2: "100% sin internet",
      trust3: "Firmware abierto",
    },
    // Problem
    problem: {
      label: "El problema",
      heading: "La detección de presencia está rota",
      sub: "Las herramientas de monitoreo modernas detectan inactividad — no productividad. PICO resuelve el problema de la señal a nivel de hardware.",
      card1Title: "Monitores de actividad",
      card1Body: "Los temporizadores de inactividad, herramientas de captura de pantalla y rastreadores de entrada observan el movimiento del ratón y las pulsaciones — no el trabajo real.",
      card2Title: "Las soluciones de software dejan rastros",
      card2Body: "La automatización por scripts y los drivers virtuales requieren permisos elevados del sistema, aparecen en las listas de procesos y pueden entrar en conflicto con restricciones de la plataforma.",
    },
    // Features
    features: {
      label: "Características",
      heading: "Construido diferente",
      sub: "Generación de entrada a nivel de hardware que se ve y se siente como un usuario real.",
    },
    // HowItWorks
    how: {
      label: "Configuración",
      heading: "Tres pasos",
      sub: "Flashea, configura, conecta. Sin drivers, sin cuentas, sin nube.",
      step1Title: "Flashea el firmware",
      step1Body: "Descarga el paquete de firmware y cópialo a la unidad CIRCUITPY del PICO. Tarda menos de 2 minutos.",
      step2Title: "Configura con la app",
      step2Body: "Abre el configurador de escritorio, define tus bloques de texto, tiempos y perfil de comportamiento. Guarda directamente en el dispositivo.",
      step3Title: "Conecta y listo",
      step3Body: "Conecta el PICO a cualquier puerto USB. Comienza a generar actividad de inmediato — sin configuración en la máquina host.",
    },
    // UseCases
    useCases: {
      label: "Casos de uso",
      heading: "Quién usa PICO",
      sub: "Cualquier contexto donde se necesite mantener actividad de entrada sin interacción manual.",
    },
    // TechSpecs
    specs: {
      label: "Especificaciones",
      heading: "Bajo el capó",
      sub: "Hardware basado en RP2040 con firmware abierto en CircuitPython.",
    },
    // FAQ
    faq: {
      label: "FAQ",
      heading: "Preguntas frecuentes",
      sub: "Preguntas sobre configuración, compatibilidad, uso legal y cómo funciona el dispositivo.",
      warning: "Esta es una herramienta técnica. La responsabilidad de cómo la uses es tuya. Asegúrate de cumplir con tus contratos laborales, términos de plataforma y leyes locales.",
      items: [
        {
          q: "¿Es legal usar esta herramienta?",
          a: "PICO es un dispositivo USB HID genérico — la misma clase que cualquier teclado o ratón. En la mayoría de jurisdicciones, enviar entrada a tu propia máquina mediante un periférico USB no es ilegal en sí mismo. Sin embargo, usar cualquier herramienta para falsificar horas de trabajo, incumplir contratos laborales o defraudar clientes puede ser ilegal y conlleva graves consecuencias. Lee tus contratos cuidadosamente.",
        },
        {
          q: "¿Transmite datos a internet?",
          a: "No. El microcontrolador RP2040 no tiene hardware de red. El firmware no tiene pila de red. Toda la configuración se almacena como un archivo JSON directamente en la memoria flash del dispositivo (la unidad CIRCUITPY). Nada se transmite, registra ni envía — jamás.",
        },
        {
          q: "¿Funciona en macOS y Linux?",
          a: "Sí. El dispositivo usa la clase USB HID estándar, compatible de forma nativa con todos los sistemas operativos modernos — Windows, macOS y Linux. No se requiere instalación de drivers en ninguna de estas plataformas. La app configuradora actualmente requiere Windows, pero el dispositivo funciona en todas partes.",
        },
        {
          q: "¿Necesito instalar software en la máquina objetivo?",
          a: "No. El dispositivo se identifica como un teclado y ratón USB estándar. La máquina objetivo lo ve como un periférico normal — sin solicitud de driver, sin instalación de software, sin permisos elevados requeridos.",
        },
        {
          q: "¿Qué incluye la opción pre-ensamblada?",
          a: "Las unidades pre-ensambladas incluyen la placa RP2040, firmware instalado y una carcasa impresa en 3D. También se incluyen la app configuradora (.exe) y el config.json por defecto. Contáctanos para especificar tu contenido de texto o perfil de comportamiento personalizado.",
        },
        {
          q: "¿Mi empleador o plataforma lo detectará?",
          a: "No hacemos afirmaciones sobre resistencia a la detección y no comercializamos PICO como herramienta de evasión. El dispositivo se presenta como un periférico USB estándar. Si alguna herramienta de monitoreo específica lo detecta depende completamente de la implementación de esa herramienta.",
        },
        {
          q: "¿Puedo personalizar los patrones de escritura?",
          a: "Sí — todos los parámetros de comportamiento son configurables: probabilidad de errores tipográficos, pausas mínimas y máximas, probabilidad de sesión de teclado, probabilidad de sesión solo de ratón, y si el movimiento del ratón y las sesiones inactivas están habilitadas. Los bloques de texto (hasta 30) son completamente editables.",
        },
      ],
    },
    // CTA
    cta: {
      badge: "Disponible ahora",
      heading1: "Obtén PICO Human",
      heading2: "Presence Pro",
      sub: "Flashea el firmware, configura tus bloques de texto y ten un dispositivo funcionando en menos de 30 minutos. Unidades pre-ensambladas con carcasa impresa en 3D disponibles bajo pedido.",
      downloadBtn: "Descargar Configurador",
      prebuiltBtn: "Solicitar unidad pre-ensamblada",
      contactNote: "¿Preguntas sobre licencias, pedidos al por mayor o perfiles personalizados?",
      trust1Label: "Sin internet",
      trust1Sub: "Sin hardware de red en el dispositivo",
      trust2Label: "Sin drivers",
      trust2Sub: "Clase HID — nativo del SO",
      trust3Label: "Firmware abierto",
      trust3Sub: "Código Python, editable",
      trust4Label: "Configuración en 30 min",
      trust4Sub: "Flashea, configura, conecta",
    },
    // Lead modal
    leadModal: {
      badge: "Unidades pre-ensambladas",
      title: "Solicitar una unidad pre-ensamblada",
      sub: "Nos pondremos en contacto en 1–2 días hábiles con precios, disponibilidad y opciones de envío.",
      nameLabel: "Tu nombre",
      namePlaceholder: "Juan García",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@correo.com",
      messageLabel: "Mensaje (opcional)",
      messagePlaceholder: "País, cantidad, bloques de texto personalizados, preguntas…",
      submitBtn: "Enviar solicitud",
      sending: "Enviando…",
      privacy: "Sin spam. Tu información solo se usa para procesar tu solicitud.",
      errorGeneric: "Algo salió mal. Inténtalo de nuevo o escríbenos directamente.",
      successTitle: "¡Solicitud recibida!",
      successSub: "Te contactaremos en 1–2 días hábiles. Revisa tu bandeja de entrada para la confirmación.",
      successClose: "Entendido",
    },
    // Footer
    footer: {
      rights: "Todos los derechos reservados.",
      legal: "PICO Human Presence Pro es una herramienta de automatización de hardware. Todo uso está sujeto al EULA. El creador no acepta responsabilidad por consecuencias laborales, incumplimientos de contrato ni cualquier otro daño derivado del uso o mal uso.",
    },
  },
};
