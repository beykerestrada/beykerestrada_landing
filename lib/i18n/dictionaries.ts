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
    badge: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  method: {
    badge: string
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
    intro: string
    audit: {
      badge: string
      title: string
      description: string
      bullets: [string, string, string]
      price: string
      ctaLabel: string
    }
    primary: {
      id: string
      badge: string | null
      title: string
      description: string
      bullets: [string, string, string]
      price: string
      ctaLabel: string
      type: "project" | "retainer"
    }[]
    secondary: {
      id: string
      badge: string | null
      title: string
      description: string
      bullets: [string, string, string]
      price: string
      ctaLabel: string
      type: "retainer" | "partner"
    }[]
  }
  process: {
    badge: string
    title: string
    intro: string
    steps: { label: string; title: string; description: string }[]
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
    metrics: { label: string; value: string }[]
  }
  contact: {
    badge: string
    title: string
    subtitle: string
    responseTime: string
    email: string
    emailLabel: string
  }
  leadMagnet: {
    badge: string
    title: string
    subtitle: string
    benefits: string[]
    ctaPlaceholder: string
    ctaButton: string
    privacyNote: string
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
      title: "Beyker Estrada · Business Operating Systems",
      description:
        "I transform disconnected operations into clear, centralized and automated systems that give teams time and leadership control.",
    },
    header: {
      brand: "Beyker Estrada",
      nav: {
        services: "Services",
        value: "Value",
        process: "Process",
        contact: "Contact",
      },
      hireCta: "Hire on Upwork",
      themeToggle: "Toggle color theme",
      languageToggle: "Change language",
      languageNames: {
        en: "English",
        es: "Español",
      },
    },
    hero: {
      badge: "Systems that make work flow",
      title: "I build Notion systems and n8n automations so your team can work with clarity and less friction.",
      subtitle:
        "I turn scattered work into a single operating system, a place where decisions, tasks, dashboards and automated workflows stay organized and easy to maintain.",
      primaryCta: "Start a scoped engagement on Upwork",
      secondaryCta: "Book a strategy session",
    },
    method: {
      badge: "How I work",
      title: "A clear structure that keeps projects fast and predictable.",
      intro: "I work through a simple path that reduces friction, avoids chaos, and keeps every step visible. Nothing vague. No endless revisions. One rhythm from discovery to delivery.",
      steps: [
        {
          title: "Reduce friction",
          description:
            "I map how your team works today: tools, documents, tasks, workflows. We identify bottlenecks and simplify everything into one source of truth inside Notion.",
        },
        {
          title: "Build systems fast",
          description:
            "We design dashboards, processes, views, and automations with a live working approach. You see every decision in real time so the system takes shape quickly.",
        },
        {
          title: "Create clarity",
          description:
            "We document the structure, define ownership, and put in place the exact workflows your team will follow. Everyone understands what to do and where to do it.",
        },
      ],
    },
    workflows: {
      badge: "Systems in practice",
      title: "What these systems look like in real teams",
      intro:
        "Each engagement is tailored ; but most systems fall into a few recognizable patterns that combine clients, work, numbers and decisions.",
      steps: [
        {
          title: "Sales and CRM workspace",
          description:
            "A Notion based CRM connected to Calendly and email. Leads move across clear stages, follow ups are visible and pipeline is something you see, not something you ask for.",
        },
        {
          title: "Finance and operations control",
          description:
            "A simple operational finance system that tracks payments to suppliers, payments from clients, tax exposure and profitability so the owner stops guessing and starts deciding.",
        },
        {
          title: "Coaching business OS",
          description:
            "Clients, sessions, payments and acquisition channels in one place with a dashboard that shows revenue, funnel health and service performance.",
        },
        {
          title: "Team collaboration and delivery",
          description:
            "Shared projects and tasks for the team ; strategic views for management. Less follow up, fewer surprises and a clearer sense of where work is stuck.",
        },
      ],
    },
    value: {
      badge: "Where the leverage is",
      title: "Operational clarity the whole team can feel",
      subtitle:
        "The goal is not a pretty workspace. The goal is a business that runs on explicit processes, shared data and predictable execution instead of improvisation and heroic efforts.",
      cards: [
        {
          title: "Time back for the people who decide",
          desc: "Systems and automations take over repetitive and low leverage work so leadership can focus on strategy and key conversations.",
        },
        {
          title: "Alignment without more meetings",
          desc: "When work, clients and numbers live in one system, teams align through shared views instead of extra status calls.",
        },
        {
          title: "Decisions grounded in real data",
          desc: "Dashboards and reporting show what is happening across pipeline, workload and performance so decisions stop relying on guesswork.",
        },
      ],
    },
    services: {
      badge: "Services",
      title: "Business operating systems, automations, and ongoing partnership for teams already in motion",
      intro:
        "I take on a few deep engagements at a time, not endless small tasks. Most clients begin with an audit or a focused project, then move into a retainer when their system is ready to scale.",
      audit: {
        badge: "Not sure where to start?",
        title: "Systems & Notion audit",
        description:
          "A complete review of your Notion workspace, your core workflows, and your current automations. You get a clear diagnosis of what is working, what is slowing you down, and a step by step roadmap to improve your operations.",
        bullets: [
          "Deep analysis of your workspace and processes",
          "Clear identification of bottlenecks, risks, and duplicated work",
          "Prioritized roadmap with actionable next steps",
        ],
        price: "From $600+ (credited toward a project if you move forward)",
        ctaLabel: "Request an audit",
      },
      primary: [
        {
          id: "business-os",
          badge: "Most popular",
          title: "Business OS design & implementation",
          description:
            "A full engagement where we map how your team works, design your Business OS in Notion, and implement it with dashboards, automations, and the structure your operation needs to run smoothly.",
          bullets: [
            "End to end systems architecture",
            "Notion based OS; projects, tasks, CRM, knowledge, reporting",
            "Key automations with n8n or Zapier",
          ],
          price: "From $3,000+",
          ctaLabel: "Discuss your context",
          type: "project",
        },
        {
          id: "automation-projects",
          badge: null,
          title: "Tailored automation projects (n8n, Zapier & more)",
          description:
            "Focused automation work around your existing tech stack. Ideal for removing repetitive manual tasks without having to rebuild everything.",
          bullets: [
            "Workflow discovery and analysis",
            "Automation design and build in n8n, Zapier or similar tools",
            "Error handling, logging and documentation",
          ],
          price: "From $1,200+",
          ctaLabel: "Request a scoped project",
          type: "project",
        },
        {
          id: "notion-architect",
          badge: null,
          title: "Notion Architect on retainer",
          description:
            "Ongoing partnership to evolve and maintain the architecture of your Notion workspace. We scale your system without letting complexity take over.",
          bullets: [
            "Monthly sessions for structure, views and permissions",
            "Design of new internal spaces and dashboards",
            "Guidance so your team builds safely",
          ],
          price: "Monthly retainer",
          ctaLabel: "Explore retainers",
          type: "retainer",
        },
      ],
      secondary: [
        {
          id: "automation-ops",
          badge: null,
          title: "Automation Ops partner",
          description:
            "For teams that rely on n8n or Zapier and want someone dependable to maintain, debug, update, and extend their automations. I own the operations of your automation stack.",
          bullets: [
            "Maintenance of n8n, Zapier and related integrations",
            "Monitoring, debugging and recovery for failed runs",
            "New workflow design and implementation as needs evolve",
          ],
          price: "Monthly retainer",
          ctaLabel: "Explore retainers",
          type: "retainer",
        },
        {
          id: "white-label",
          badge: "For strategic partners",
          title: "White label systems implementation for agencies",
          description:
            "For agencies looking to deliver Business OS and automation services under their brand. I handle the architecture and implementation while you keep the client relationship and strategy.",
          bullets: [
            "Delivered under your brand, tools and communication style",
            "Full systems and automation projects for your clients",
            "Clear collaboration model designed to scale together",
          ],
          price: "",
          ctaLabel: "Discuss partnership",
          type: "partner",
        },
      ],
    },
    process: {
      badge: "Process",
      title: "How we move from scattered tools to a real operating system.",
      intro:
        "A structured process that starts from how your business really works today and lands in a system your team actually uses.",
      steps: [
        {
          label: "01",
          title: "Operational diagnosis",
          description:
            "We map your current processes; tools and recurring problems. The goal is to see how work really flows today; not how it is supposed to work on paper.",
        },
        {
          label: "02",
          title: "System architecture",
          description:
            "We design how your business should run as a system; where information lives; how tasks move; what gets automated and what leadership needs to see every day.",
        },
        {
          label: "03",
          title: "Build and automation",
          description:
            "We turn the architecture into real Notion workspaces and n8n workflows; shipped in small slices you can test with real work; not demo data.",
        },
        {
          label: "04",
          title: "Rollout and support",
          description:
            "We roll out the system with your team; refine what does not feel natural and stay close during the first weeks so adoption is smooth and the system sticks.",
        },
      ],
    },
    finalCta: {
      badge: "Next step",
      title: "Ready to stop running on scattered tools",
      subtitle:
        "If your business already has motion but your operation feels heavier than it should, we should talk. The sooner you design a real operating system, the easier it is to scale without burning yourself or your team.",
      primaryCta: "Book a working session",
      secondaryCta: "Hire me on Upwork",
      expectation:
        "I focus on founders and teams who are serious about building a business that runs on systems instead of constant heroic effort.",
    },
    whoIWorkWith: {
      eyebrow: "Who I work with",
      title: "For founders and operators who care about how the business actually runs",
      bullets: [
        {
          title: "Growing service businesses and agencies",
          detail:
            "Teams with enough clients and projects to feel the cost of disconnected tools, manual updates and unclear ownership.",
        },
        {
          title: "Founders too involved in operations",
          detail:
            "Leaders who spend a large part of their week pushing work forward and want systems to take over that role.",
        },
        {
          title: "Teams with tools ; but no real system",
          detail:
            "Companies that use several apps ; but lack a single source of truth and a predictable way to execute work.",
        },
      ],
      note: "Not a fit for one off tasks, quick hacks or people who only want a template.",
    },
    caseSnapshot: {
      eyebrow: "Recent work",
      title: "Example of a systems engagement",
      client: "Client: Service business with a small team and growing project load.",
      scope:
        "Scope: Notion based Business OS, CRM and projects hub, finance and operations tracking plus an automation layer connecting forms, calendar and email.",
      outcome:
        "Outcome: A single place to see clients, work and numbers. Less chasing people for updates and more time spent on decisions and delivery.",
      metrics: [
        { label: "Time saved per week", value: "15+ hours" },
        { label: "Manual tasks automated", value: "12" },
        { label: "Implementation time", value: "5 weeks" },
      ],
    },
    contact: {
      badge: "Get in touch",
      title: "Let's talk about your operations",
      subtitle: "Reach out to discuss your context, ask questions about the approach or schedule a diagnostic call.",
      responseTime: "I typically respond within 24 hours",
      email: "contact@beykerestrada.com",
      emailLabel: "Email me directly",
    },
    leadMagnet: {
      badge: "Free resource",
      title: "Get the Business OS Readiness Checklist",
      subtitle: "A practical guide to assess if your operations are ready for systems transformation—and what to prepare before we start.",
      benefits: [
        "15-point diagnostic to assess your current state",
        "Key readiness indicators for systems transformation",
        "What to prepare before implementing a Business OS",
      ],
      ctaPlaceholder: "your@email.com",
      ctaButton: "Send me the checklist",
      privacyNote: "No spam. Unsubscribe anytime.",
    },
    footer: {
      description: "Business operations and systems design for teams that are past the tools phase.",
      legal: "Contracts and payments handled through Upwork or direct agreement.",
      hireCta: "Hire me on Upwork",
      brand: "Beyker Estrada",
      cta: "Let us work together",
    },
  },

  es: {
    meta: {
      title: "Beyker Estrada · Sistemas Operativos de Negocio",
      description:
        "Transformo operaciones desconectadas en sistemas claros, centralizados y automatizados que devuelven tiempo al equipo y control al liderazgo.",
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
      badge: "Sistemas que hacen que el trabajo fluya",
      title: "Construyo sistemas en Notion y automatizaciones en n8n para que tu equipo trabaje con claridad y menos fricción.",
      subtitle:
        "Convierto trabajo disperso en un sistema operativo único, un lugar donde decisiones, tareas, tableros y flujos automatizados se mantienen organizados y fáciles de mantener.",
      primaryCta: "Inicia un proyecto acotado en Upwork",
      secondaryCta: "Agenda una sesión estratégica",
    },
    method: {
      badge: "Cómo trabajo",
      title: "Una estructura clara que mantiene los proyectos ágiles y predecibles.",
      intro:
        "Trabajo con una ruta simple que reduce fricción, evita el caos y mantiene cada paso visible. Nada vago. Sin revisiones infinitas. Un solo ritmo desde el discovery hasta la entrega.",
      steps: [
        {
          title: "Reducir fricción",
          description:
            "Mapeo cómo trabaja hoy tu equipo: herramientas, documentos, tareas, flujos. Identificamos cuellos de botella y simplificamos todo en una única fuente de verdad dentro de Notion.",
        },
        {
          title: "Construir sistemas rápido",
          description:
            "Diseñamos dashboards, procesos, vistas y automatizaciones en sesiones de trabajo en vivo. Ves cada decisión en tiempo real, así el sistema toma forma rápido.",
        },
        {
          title: "Crear claridad",
          description:
            "Documentamos la estructura, definimos responsables y establecemos los flujos exactos que seguirá tu equipo. Todos saben qué hacer y dónde hacerlo.",
        },
      ],
    },
    workflows: {
      badge: "Sistemas en práctica",
      title: "Cómo se ven estos sistemas en equipos reales",
      intro:
        "Cada proyecto se adapta a tu contexto ; pero la mayoría de los sistemas terminan siendo variaciones de algunos patrones claros que conectan clientes, trabajo, números y decisiones.",
      steps: [
        {
          title: "Workspace de ventas y CRM",
          description:
            "CRM en Notion conectado con Calendly y correo. Los leads avanzan por etapas claras, los seguimientos son visibles y el pipeline se ve en un tablero, no en una conversación suelta.",
        },
        {
          title: "Control financiero y operativo",
          description:
            "Sistema operativo financiero para registrar pagos a proveedores, cobros de clientes, impuestos y rentabilidad. Decisiones basadas en números claros, no en intuición.",
        },
        {
          title: "Business OS para coaching",
          description:
            "Clientes, sesiones, pagos y canales de adquisición en un solo lugar con un tablero que muestra ingresos, salud del embudo y rendimiento de cada servicio.",
        },
        {
          title: "Colaboración y entrega de equipo",
          description:
            "Proyectos y tareas compartidas para el equipo ; vistas estratégicas para management. Menos persecución, menos sorpresas y más claridad sobre dónde se traba el trabajo.",
        },
      ],
    },
    value: {
      badge: "Dónde está el apalancamiento",
      title: "Claridad operativa que se siente en el día a día",
      subtitle:
        "El objetivo no es tener un workspace bonito. El objetivo es tener un negocio que funciona sobre procesos explícitos, datos compartidos y ejecución predecible en lugar de improvisación y esfuerzos heroicos.",
      cards: [
        {
          title: "Más tiempo para quienes deciden",
          desc: "Los sistemas y las automatizaciones se quedan con el trabajo repetitivo de poco retorno. Tú te quedas con las decisiones y las conversaciones importantes.",
        },
        {
          title: "Alineación sin más reuniones",
          desc: "Cuando el trabajo, los clientes y los números viven en un solo sistema, la alineación se da en las vistas compartidas, no en más reuniones de seguimiento.",
        },
        {
          title: "Decisiones basadas en la realidad",
          desc: "Tableros y reporting que muestran pipeline, carga de trabajo y rendimiento. Decisiones que dejan de depender del olfato y se apoyan en datos.",
        },
      ],
    },
    services: {
      badge: "Servicios",
      title: "Sistemas operativos de negocio, automatizaciones y acompañamiento continuo para equipos que ya están en marcha",
      intro:
        "Trabajo con pocos proyectos profundos a la vez; no con una lista infinita de tareas sueltas. La mayoría de los clientes comienza con una auditoría o un proyecto enfocado y luego pasa a un retainer cuando el sistema está listo para escalar.",
      audit: {
        badge: "¿No sabes por dónde empezar?",
        title: "Auditoría de sistemas y Notion",
        description:
          "Reviso en detalle tu espacio de trabajo en Notion, tus flujos clave y las automatizaciones que ya tienes. Obtienes un diagnóstico claro de qué funciona, qué te frena y un plan de acción paso a paso para mejorar tus operaciones.",
        bullets: [
          "Análisis profundo de tu espacio de trabajo y procesos",
          "Identificación clara de cuellos de botella, riesgos y trabajo duplicado",
          "Hoja de ruta priorizada con próximos pasos accionables",
        ],
        price: "Desde 600 USD+ (se descuenta si avanzas a un proyecto)",
        ctaLabel: "Solicitar auditoría",
      },
      primary: [
        {
          id: "business-os",
          badge: "Más contratado",
          title: "Diseño e implementación de Business OS",
          description:
            "Proyecto completo en el que mapeamos cómo trabaja tu equipo, diseñamos tu Business OS en Notion y lo implementamos con tableros, automatizaciones y la estructura que tu operación necesita para funcionar con fluidez.",
          bullets: [
            "Arquitectura de sistemas de principio a fin",
            "OS en Notion; proyectos, tareas, CRM, conocimiento, reportes",
            "Automatizaciones clave con n8n o Zapier",
          ],
          price: "Desde 3.000 USD+",
          ctaLabel: "Hablar sobre tu contexto",
          type: "project",
        },
        {
          id: "automation-projects",
          badge: null,
          title: "Proyectos de automatización a medida (n8n, Zapier y más)",
          description:
            "Trabajo de automatización enfocado alrededor de las herramientas que ya usas. Ideal para eliminar tareas manuales repetitivas sin tener que reconstruir todo.",
          bullets: [
            "Descubrimiento y análisis de tus flujos actuales",
            "Diseño e implementación de automatizaciones en n8n, Zapier u otras plataformas",
            "Manejo de errores, logging y documentación",
          ],
          price: "Desde 1.200 USD+",
          ctaLabel: "Solicitar proyecto a medida",
          type: "project",
        },
        {
          id: "notion-architect",
          badge: null,
          title: "Notion Architect en retainer",
          description:
            "Acompañamiento continuo para evolucionar y mantener la arquitectura de tu espacio de trabajo en Notion. Escalamos el sistema sin dejar que la complejidad se descontrole.",
          bullets: [
            "Sesiones mensuales para estructura, vistas y permisos",
            "Diseño de nuevos espacios internos y tableros",
            "Guía para que tu equipo construya sin romper lo que ya funciona",
          ],
          price: "Retainer mensual",
          ctaLabel: "Ver opciones de retainer",
          type: "retainer",
        },
      ],
      secondary: [
        {
          id: "automation-ops",
          badge: null,
          title: "Automation Ops partner",
          description:
            "Para equipos que dependen de n8n o Zapier y quieren alguien confiable que mantenga, depure, actualice y amplíe sus automatizaciones. Me hago cargo del lado operativo de tu stack de automatización.",
          bullets: [
            "Mantenimiento de n8n, Zapier e integraciones relacionadas",
            "Monitoreo, debug y recuperación de ejecuciones con error",
            "Diseño e implementación de nuevos flujos a medida que el negocio cambia",
          ],
          price: "Retainer mensual",
          ctaLabel: "Ver opciones de retainer",
          type: "retainer",
        },
        {
          id: "white-label",
          badge: "Para socios estratégicos",
          title: "Implementación white label para agencias",
          description:
            "Para agencias que quieren ofrecer Business OS y servicios de automatización bajo su propia marca. Yo me encargo de la arquitectura y la implementación mientras tú mantienes la relación y la estrategia con el cliente.",
          bullets: [
            "Entrega bajo tu marca, procesos y herramientas",
            "Proyectos completos de sistemas y automatización para tus clientes",
            "Modelo de colaboración claro, preparado para escalar juntos",
          ],
          price: "",
          ctaLabel: "Hablar sobre una alianza",
          type: "partner",
        },
      ],
    },
    process: {
      badge: "Proceso",
      title: "Cómo pasamos de herramientas dispersas a un sistema operativo real.",
      intro:
        "Un proceso estructurado que parte de cómo funciona realmente tu negocio hoy y termina en un sistema que tu equipo realmente usa.",
      steps: [
        {
          label: "01",
          title: "Diagnóstico operacional",
          description:
            "Mapeamos tus procesos actuales, herramientas y problemas recurrentes. El objetivo es ver cómo fluye realmente el trabajo hoy; no cómo se supone que funciona en el papel.",
        },
        {
          label: "02",
          title: "Arquitectura del sistema",
          description:
            "Diseñamos la estructura: flujos de trabajo, bases de datos, vistas, automatizaciones y puntos de integración. Todo antes de construir.",
        },
        {
          label: "03",
          title: "Construcción y automatización",
          description:
            "Implementamos Notion + n8n. Creamos tableros, bases de datos, workflows y webhooks. Probamos en paralelo contigo y ajustamos según sea necesario.",
        },
        {
          label: "04",
          title: "Lanzamiento y soporte",
          description:
            "Te transferimos todo: acceso completo, documentación interna y 30 días de soporte posterior al lanzamiento para asegurar que el sistema se mantenga.",
        },
      ],
    },
    finalCta: {
      badge: "Siguiente paso",
      title: "¿Listo para dejar de depender de herramientas dispersas",
      subtitle:
        "Si tu negocio ya tiene movimiento ; pero tu operación se siente más pesada de lo que debería, hablemos. Mientras antes diseñes un sistema operativo real, más fácil será escalar sin quemarte tú ni tu equipo.",
      primaryCta: "Reserva una sesión de trabajo",
      secondaryCta: "Contrata en Upwork",
      expectation:
        "Me enfoco en founders y equipos que quieren construir una empresa que funcione sobre sistemas y no sobre esfuerzo heroico permanente.",
    },
    whoIWorkWith: {
      eyebrow: "Con quién trabajo",
      title: "Para fundadores y operadores a los que les importa cómo funciona el negocio por dentro",
      bullets: [
        {
          title: "Negocios de servicios y agencias en crecimiento",
          detail:
            "Equipos con suficientes clientes y proyectos como para sentir el coste de herramientas desconectadas, actualizaciones manuales y responsabilidades difusas.",
        },
        {
          title: "Founders demasiado metidos en la operación",
          detail:
            "Líderes que dedican gran parte de su semana a empujar el trabajo y quieren que los sistemas se queden con esa carga.",
        },
        {
          title: "Equipos con muchas herramientas ; pero sin sistema",
          detail:
            "Empresas que ya usan varias apps ; pero no tienen una fuente única de verdad ni una forma predecible de ejecutar el trabajo.",
        },
      ],
      note: "No es un fit para tareas sueltas, hacks rápidos o quien solo quiere una plantilla.",
    },
    caseSnapshot: {
      eyebrow: "Trabajo reciente",
      title: "Ejemplo de un proyecto de sistemas",
      client: "Cliente: Negocio de servicios con un pequeño equipo y carga creciente de proyectos.",
      scope:
        "Alcance: Business OS en Notion, hub de clientes y proyectos, seguimiento financiero y operativo, más capa de automatización conectando formularios, calendario y correo.",
      outcome:
        "Resultado: Un solo lugar para ver clientes, trabajo y números. Menos tiempo persiguiendo actualizaciones y más tiempo tomando decisiones y entregando valor.",
      metrics: [
        { label: "Tiempo ahorrado por semana", value: "15+ horas" },
        { label: "Tareas manuales automatizadas", value: "12" },
        { label: "Tiempo de implementación", value: "5 semanas" },
      ],
    },
    contact: {
      badge: "Contacto",
      title: "Hablemos de tu operación",
      subtitle: "Escríbeme para hablar de tu contexto, hacer preguntas sobre el enfoque o agendar una llamada de diagnóstico.",
      responseTime: "Normalmente respondo en menos de 24 horas",
      email: "contact@beykerestrada.com",
      emailLabel: "Escríbeme directamente",
    },
    leadMagnet: {
      badge: "Recurso gratuito",
      title: "Obtén el Checklist de Preparación para Business OS",
      subtitle: "Una guía práctica para evaluar si tus operaciones están listas para la transformación de sistemas—y qué preparar antes de empezar.",
      benefits: [
        "Diagnóstico de 15 puntos para evaluar tu estado actual",
        "Indicadores clave de preparación para transformación de sistemas",
        "Qué preparar antes de implementar un Business OS",
      ],
      ctaPlaceholder: "tu@email.com",
      ctaButton: "Envíame el checklist",
      privacyNote: "Sin spam. Cancela cuando quieras.",
    },
    footer: {
      description: "Operaciones del negocio y diseño de sistemas para equipos que ya superaron la fase de herramientas sueltas.",
      legal: "Contratos y pagos gestionados vía Upwork o acuerdo directo.",
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
