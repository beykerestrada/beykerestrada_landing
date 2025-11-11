import { DEFAULT_LOCALE, LOCALE_COOKIE, type Locale } from "./config"

export type SiteDictionary = {
  meta: {
    title: string
    description: string
  }
  header: {
    brand: string
    nav: {
      services: string
      value: string
      process: string
      contact: string
    }
    hireCta: string
    themeToggle: string
    languageToggle: string
    languageNames: Record<Locale, string>
  }
  hero: {
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  method: {
    title: string
    intro: string
    steps: { title: string; description: string }[]
  }
  workflows: {
    badge: string
    title: string
    intro: string
    steps: { title: string; description: string }[]
  }
  value: {
    badge: string
    title: string
    subtitle: string
    cards: { title: string; desc: string }[]
  }
  services: {
    badge: string
    title: string
    subtitle: string
    intro: string // ← AÑADIDO
    fromLabel: string
    learnMoreCta: string
    primaryCta: string // ← AÑADIDO
    secondaryCta: string // ← AÑADIDO
    cards: {
      title: string
      summary: string
      bullets: string[]
      price: string
    }[]
    addon: {
      badge: string
      title: string
      summary: string
      cta: string
    }
  }
  process: {
    badge: string
    title: string
    subtitle: string
    steps: { title: string; desc: string }[]
  }
  finalCta: {
    badge: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    expectation: string
  }
  whoIWorkWith: {
    eyebrow: string
    title: string
    bullets: { title: string; detail: string }[]
    note: string
  }
  caseSnapshot: {
    eyebrow: string
    title: string
    client: string
    scope: string
    outcome: string
  }
  footer: {
    description: string
    legal: string
    hireCta: string
    brand: string
    cta: string
  }
}

// --- TRADUCCIONES ---

const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    meta: {
      title: "Beyker Estrada · Notion, n8n Systems",
      description: "I build Notion systems and n8n automations that reduce friction and scale teams.",
    },
    header: {
      brand: "Beyker Estrada",
      nav: {
        services: "Services",
        value: "Value",
        process: "Process",
        contact: "Contact",
      },
      hireCta: "Hire on Upwork →",
      themeToggle: "Toggle color theme",
      languageToggle: "Change language",
      languageNames: {
        en: "English",
        es: "Español",
      },
    },
    hero: {
      title: "I design systems for people who think deeply and work better with structure.",
      subtitle:
        "My name is Beyker Estrada. I help teams and solo founders make sense of their work—by building clear, scalable systems in Notion and automating the parts they shouldn’t touch twice.",
      primaryCta: "Hire via Upwork",
      secondaryCta: "Book a call",
    },
    method: {
      title: "How I Work",
      intro: "A clear structure to build fast, without chaos or handoffs.",
      steps: [
        {
          title: "1. Reduce friction",
          description: "We simplify everything—turning chaos into workflows and single sources of truth.",
        },
        {
          title: "2. Build systems fast",
          description: "No lengthy specs or endless back and forth. We build while we think.",
        },
        {
          title: "3. Create clarity",
          description: "You get dashboards that show progress, surface blockers, and guide action.",
        },
      ],
    },
    workflows: {
      badge: "Workflows",
      title: "What my systems actually look like",
      intro: "Examples of real systems I build to streamline operations.",
      steps: [
        {
          title: "Notion Control Hub",
          description: "A central dashboard connecting Projects, Tasks, and Company OS for visibility and action.",
        },
        {
          title: "n8n Lead Flow",
          description: "Webhook intake → enrichment → routing. No manual follow-ups or handoffs.",
        },
      ],
    },
    value: {
      badge: "Where the leverage is",
      title: "Operational clarity without the complexity.",
      subtitle:
        "Engagements combine systems thinking with hands-on build so that your team gains leverage immediately.",
      cards: [
        {
          title: "Reduce operational friction",
          desc: "Tight workflows, single sources of truth, and automations that replace handoffs.",
        },
        {
          title: "Ship systems fast",
          desc: "Strategy, build, and iteration moved into one engagement with clear ownership.",
        },
        {
          title: "Leadership visibility",
          desc: "Executive-ready dashboards that surface risk, velocity, and the signals that matter.",
        },
      ],
    },
    services: {
      badge: "Services",
      title: "Build the infrastructure that keeps momentum high.",
      subtitle:
        "Every engagement includes discovery, design sprints, implementation, and enablement so your team adopts fast.",
      intro: "High-leverage systems for clarity and scale.",
      fromLabel: "From",
      learnMoreCta: "Request details",
      primaryCta: "View profile on Upwork",
      secondaryCta: "Request a consultation",
      cards: [
        {
          title: "Notion systems",
          summary: "Company operating system tuned to decision velocity.",
          bullets: ["Company OS", "CRM & pipeline views", "Cross-functional projects"],
          price: "$1,500",
        },
        {
          title: "n8n automation builds",
          summary: "Orchestrated workflows that keep teams in sync without manual effort.",
          bullets: ["Data syncs & enrichment", "Lifecycle & email automations", "CRM hygiene routines"],
          price: "$1,800",
        },
        {
          title: "Operational architecture",
          summary: "Systems blueprint that scales onboarding, collaboration, and reporting.",
          bullets: ["Process design & SOPs", "Onboarding workflows", "Automation roadmap"],
          price: "$2,000",
        },
      ],
      addon: {
        badge: "Add-on",
        title: "Workspace audit & consultation",
        summary:
          "Not sure where to begin? Book a consultation — I’ll review your current workspace, map gaps, and deliver actionable recommendations for the next build.",
        cta: "Book a consultation call",
      },
    },
    process: {
      badge: "Process",
      title: "A grounded path from idea to adoption.",
      subtitle: "Engagements stay lean, transparent, and accountable — so you always know what is shipping next.",
      steps: [
        {
          title: "Discover",
          desc: "Context deep dive, success metrics, and tooling audit.",
        },
        {
          title: "Design",
          desc: "Systems architecture, prototypes, and approval loops.",
        },
        {
          title: "Build",
          desc: "Iterative implementation with checkpoints for stakeholders.",
        },
        {
          title: "Test",
          desc: "QA, edge cases, and documentation before rollout.",
        },
        {
          title: "Handoff + Support",
          desc: "Enablement, training, and support for the first sprint post-launch.",
        },
      ],
    },
    finalCta: {
      badge: "Final step",
      title: "Engage with a strategic systems partner.",
      subtitle:
        "Clarify the next build, align on decision cadence, and keep your operating stack evolving with the realities of your team.",
      primaryCta: "Schedule a Strategy Session",
      secondaryCta: "Discuss Your System Needs",
      expectation: "We focus on founders and teams building scalable, operationally excellent companies.",
    },
    whoIWorkWith: {
      eyebrow: "Who I work with",
      title: "For founders and operators building resilient, scalable systems",
      bullets: [
        {
          title: "Founders stewarding complex operations",
          detail: "Hands-on leaders bringing clarity to how product, go-to-market, and delivery teams move in sync.",
        },
        {
          title: "Operators scaling high-leverage teams",
          detail:
            "Ops, BizOps, and Chiefs of Staff designing rituals, data, and automations for predictable execution.",
        },
        {
          title: "Product builders embedding intelligence",
          detail: "Teams weaving AI, workflows, and human context into the stack without losing governance or pace.",
        },
      ],
      note: "Not a fit for one-off tasks or automation hacks.",
    },
    caseSnapshot: {
      eyebrow: "Recent Work",
      title: "A systems engagement example",
      client: "Client: Revenue operations team scaling across 4 business units.",
      scope: "System scope: Notion OS + n8n automations + reporting layer connected to CRM and product data.",
      outcome:
        "Outcome: Single source of truth for priorities, 40% faster standups, clear decision cadence across leads.",
    },
    footer: {
      description: "Beyker Estrada — Senior automation consultant.",
      legal: "Contracts and payments via Upwork.",
      hireCta: "Hire me on Upwork",
      brand: "Beyker Estrada",
      cta: "Let’s work together",
    },
  },

  es: {
    meta: {
      title: "Beyker Estrada · Sistemas en Notion y n8n",
      description: "Diseño sistemas en Notion y automatizaciones con n8n que reducen fricción y escalan equipos.",
    },
    header: {
      brand: "Beyker Estrada",
      nav: {
        services: "Servicios",
        value: "Valor",
        process: "Proceso",
        contact: "Contacto",
      },
      hireCta: "Contrata en Upwork",
      themeToggle: "Cambiar tema de color",
      languageToggle: "Cambiar idioma",
      languageNames: {
        en: "English",
        es: "Español",
      },
    },
    hero: {
      title: "Diseño sistemas para personas que piensan en serio y trabajan mejor con estructura.",
      subtitle:
        "Soy Beyker Estrada. Ayudo a equipos y fundadores a darle sentido a su trabajo—construyendo sistemas claros en Notion y automatizando las partes que no deberían hacerse dos veces.",
      primaryCta: "Contratar por Upwork",
      secondaryCta: "Agendar llamada",
    },
    method: {
      title: "Mi forma de trabajar",
      intro: "Una estructura clara para avanzar rápido, sin caos ni reprocesos.",
      steps: [
        {
          title: "1. Reducir fricción",
          description: "Simplificamos todo—convirtiendo caos en flujos y fuentes únicas de verdad.",
        },
        {
          title: "2. Construir sistemas rápido",
          description: "Nada de specs eternos o idas y vueltas. Pensamos y construimos al mismo tiempo.",
        },
        {
          title: "3. Crear claridad",
          description: "Vas a tener tableros que muestran avances, bloqueos y lo que hay que hacer.",
        },
      ],
    },
    workflows: {
      badge: "Workflows",
      title: "Así se ven mis sistemas en la práctica",
      intro: "Ejemplos reales de sistemas que he construido para escalar operaciones.",
      steps: [
        {
          title: "Control Hub en Notion",
          description:
            "Dashboard central conectando Proyectos, Tareas y Company OS para dar visibilidad y guiar la acción.",
        },
        {
          title: "Flujo de leads con n8n",
          description: "Webhook → enriquecimiento → enrutamiento. Sin seguimientos manuales ni entregas pendientes.",
        },
      ],
    },
    value: {
      badge: "Donde está el apalancamiento",
      title: "Claridad operativa sin complejidad innecesaria.",
      subtitle: "Los proyectos combinan pensamiento sistémico con ejecución directa para generar impacto inmediato.",
      cards: [
        {
          title: "Reduce la fricción operativa",
          desc: "Flujos precisos, fuentes únicas de información y automatizaciones que sustituyen entregas manuales.",
        },
        {
          title: "Entrega sistemas rápido",
          desc: "Estrategia, construcción e iteración en una misma colaboración con responsabilidad clara.",
        },
        {
          title: "Visibilidad para liderazgo",
          desc: "Tableros ejecutivos que muestran riesgo, velocidad y las señales que importan.",
        },
      ],
    },
    services: {
      badge: "Servicios",
      title: "Infraestructura operativa para mantener el impulso.",
      subtitle:
        "Cada proyecto incluye descubrimiento, diseño, implementación y habilitación para que el equipo adopte rápido.",
      intro: "Sistemas con alto apalancamiento para claridad y escala.",
      fromLabel: "Desde",
      learnMoreCta: "Solicitar detalles",
      primaryCta: "Ver perfil en Upwork",
      secondaryCta: "Solicitar consulta",
      cards: [
        {
          title: "Sistemas en Notion",
          summary: "Sistema operativo empresarial orientado a la toma de decisiones.",
          bullets: ["Company OS", "Vistas de CRM y pipeline", "Proyectos cross-funcionales"],
          price: "US$1,500",
        },
        {
          title: "Automatizaciones con n8n",
          summary: "Flujos orquestados que mantienen equipos sincronizados sin trabajo manual.",
          bullets: [
            "Sincronizaciones y enriquecimiento de datos",
            "Automatizaciones de lifecycle y email",
            "Rutinas de higiene de CRM",
          ],
          price: "US$1,800",
        },
        {
          title: "Arquitectura operativa",
          summary: "Blueprint de procesos que escala onboarding, colaboración y reporting.",
          bullets: ["Diseño de procesos y SOPs", "Workflows de onboarding", "Roadmap de automatización"],
          price: "US$2,000",
        },
      ],
      addon: {
        badge: "Add-on",
        title: "Auditoría de workspace y consulta",
        summary:
          "¿No sabes por dónde comenzar? Agenda una consulta: audito tu workspace, identifico brechas y te entrego recomendaciones accionables para el siguiente build.",
        cta: "Agenda una consulta",
      },
    },
    process: {
      badge: "Proceso",
      title: "Un camino claro desde la idea hasta la adopción.",
      subtitle:
        "La colaboración se mantiene ágil, transparente y con responsables, para que siempre sepas qué se entrega después.",
      steps: [
        {
          title: "Descubrir",
          desc: "Análisis de contexto, métricas objetivo y auditoría de herramientas.",
        },
        {
          title: "Diseñar",
          desc: "Arquitectura de sistemas, prototipos y ciclos de aprobación.",
        },
        {
          title: "Construir",
          desc: "Implementación iterativa con checkpoints para stakeholders.",
        },
        {
          title: "Probar",
          desc: "QA, casos borde y documentación antes del lanzamiento.",
        },
        {
          title: "Entrega + Soporte",
          desc: "Habilitación, training y soporte para el primer sprint post lanzamiento.",
        },
      ],
    },
    finalCta: {
      badge: "Último paso",
      title: "Trabaja con un socio estratégico en sistemas.",
      subtitle:
        "Definimos el próximo build, alineamos cadencias de decisión y mantenemos tu stack operativo en sintonía con la realidad del equipo.",
      primaryCta: "Agenda una sesión estratégica",
      secondaryCta: "Conversemos sobre tus sistemas",
      expectation:
        "Nos enfocamos en fundadores y equipos que construyen compañías operativamente excelentes y escalables.",
    },
    whoIWorkWith: {
      eyebrow: "Con quién trabajo",
      title: "Para fundadores y operadores que construyen sistemas resilientes",
      bullets: [
        {
          title: "Fundadores con operaciones complejas",
          detail:
            "Líderes involucrados que buscan claridad sobre cómo producto, go-to-market y delivery se sincronizan.",
        },
        {
          title: "Operadores que escalan equipos de alto apalancamiento",
          detail:
            "Ops, BizOps o Chiefs of Staff que diseñan rituales, datos y automatizaciones para ejecutar con precisión.",
        },
        {
          title: "Constructores de producto que integran inteligencia",
          detail: "Equipos que incorporan IA, workflows y contexto humano sin perder gobernanza ni ritmo.",
        },
      ],
      note: "No es un fit para tareas puntuales o automatizaciones improvisadas.",
    },
    caseSnapshot: {
      eyebrow: "Trabajo reciente",
      title: "Ejemplo de un engagement de sistemas",
      client: "Cliente: Equipo de revenue operations escalando en 4 unidades de negocio.",
      scope: "Alcance: Notion OS + automatizaciones en n8n + capa de reporting conectada a CRM y datos de producto.",
      outcome: "Resultado: Fuente única de verdad, standups 40% más ágiles y cadencia clara entre responsables.",
    },
    footer: {
      description: "Beyker Estrada — Consultor senior en automatización.",
      legal: "Contratos y pagos disponibles vía Upwork.",
      hireCta: "Contrata en Upwork",
      brand: "Beyker Estrada",
      cta: "Trabajemos juntos",
    },
  },
}

export function getDictionary(locale: Locale = DEFAULT_LOCALE): SiteDictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
}

export function getLanguageName(locale: Locale, target: Locale) {
  const dict = getDictionary(target)
  return dict.header.languageNames[locale]
}

export { LOCALE_COOKIE }
