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
    trustIndicator: string
    urgencyNote: string
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
    intro: string
    fromLabel: string
    learnMoreCta: string
    primaryCta: string
    secondaryCta: string
    popularBadge: string
    guaranteeNote: string
    cards: {
      title: string
      summary: string
      bullets: string[]
      price: string
      isPopular?: boolean
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
      title: "Transform disconnected operations into a business that runs on systems",
      subtitle:
        "From 20+ hours per week in operational firefighting to a centralized system that runs your business—typically in 4-6 weeks. I work with founders and teams who need their operations to work for them, not against them.",
      primaryCta: "Book a working session",
      secondaryCta: "View Upwork profile",
      trustIndicator: "Trusted by growing service businesses and agencies",
      urgencyNote: "Limited to 3 deep projects per quarter · Next availability: Early 2026",
    },
    method: {
      title: "How we move from chaos to clarity",
      intro: "A structured process that starts from how your business really works today and lands in a system your team actually uses.",
      steps: [
        {
          title: "Operational diagnosis",
          description:
            "We map your current processes, tools and recurring problems. The goal is to see how work actually flows, not how it looks in a slide.",
        },
        {
          title: "System architecture",
          description:
            "We design how your business should run as a system. Where information lives, how tasks move, what gets automated and what leadership needs to see every day.",
        },
        {
          title: "Build and automation",
          description:
            "I implement your Business OS in Notion and connect the necessary tools with automations. From lead intake and client management to projects, finances and reporting.",
        },
        {
          title: "Decision dashboards",
          description:
            "We create the views and dashboards that matter for each role. Everyone sees what they need without chasing updates.",
        },
        {
          title: "Rollout and training",
          description:
            "We onboard your team, remove friction and close gaps so the system becomes part of everyday work instead of another abandoned project.",
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
      title: "Business operating systems for teams already in motion",
      subtitle:
        "I prefer a few deep projects rather than many scattered ones. Work is focused on building the systems that will matter for years, not weeks.",
      intro: "Clear offers built around architecture, implementation and ongoing evolution of your operating system.",
      fromLabel: "From",
      learnMoreCta: "Request details",
      primaryCta: "Discuss your context",
      secondaryCta: "Request a systems audit",
      popularBadge: "Most Popular",
      guaranteeNote: "If you don't see ROI in the first 90 days, I'll refine it at no extra cost",
      cards: [
        {
          title: "Business OS design and implementation",
          summary:
            "Full engagement where we map your operation, design your Business OS and implement it with automations and dashboards.",
          bullets: [
            "End to end systems architecture",
            "Notion based Business OS implementation",
            "Automation of critical workflows",
          ],
          price: "$3,000+",
          isPopular: true,
        },
        {
          title: "Operational systems audit",
          summary:
            "A focused review of your current tools, workflows and data model. You keep a clear diagnosis and a prioritized action plan.",
          bullets: [
            "Audit of tools and processes",
            "Systems blueprint and gaps",
            "Prioritized roadmap for improvements",
          ],
          price: "$900+",
        },
        {
          title: "Ongoing systems advisory",
          summary:
            "For teams that already run on a system and want a strategic partner to evolve it as the business grows.",
          bullets: [
            "Monthly improvements and iterations",
            "New automations and modules over time",
            "Direct access for operational questions",
          ],
          price: "Monthly retainer",
        },
      ],
      addon: {
        badge: "For strategic partners",
        title: "White-label systems implementation for agencies",
        summary:
          "For marketing and growth agencies looking to offer automation and operational systems as a service to their clients. I partner with you to deliver Business OS implementations under your brand while you focus on client relationships and core strategy.",
        cta: "Discuss partnership",
      },
    },
    process: {
      badge: "Process",
      title: "How we move from scattered tools to a real operating system",
      subtitle:
        "A structured process that starts from how your business really works today and lands in a system your team actually uses.",
      steps: [
        {
          title: "Operational diagnosis",
          desc: "We map your current processes, tools and recurring problems. The goal is to see how work really flows today, not how it is supposed to work on paper.",
        },
        {
          title: "System architecture",
          desc: "We design how your business should run as a system — where information lives, how tasks move, what gets automated and what leadership needs to see every day.",
        },
        {
          title: "Build and automation",
          desc: "I implement your Business OS in Notion and connect the necessary tools through automations. From lead intake and client management to projects, finances and reporting.",
        },
        {
          title: "Dashboards and decision layer",
          desc: "We design the views and dashboards that matter for you and your team. So everyone sees what they need to move work forward without asking for updates.",
        },
        {
          title: "Rollout and training",
          desc: "We onboard your team, adjust friction points and close gaps. The system becomes part of how you work day to day, not another abandoned project.",
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
      title: "Transformo operaciones desconectadas en un negocio que funciona con sistemas",
      subtitle:
        "De 20+ horas semanales apagando incendios operativos a un sistema centralizado que dirige tu negocio—típicamente en 4-6 semanas. Trabajo con founders y equipos que necesitan que sus operaciones trabajen para ellos, no en su contra.",
      primaryCta: "Reserva una sesión de trabajo",
      secondaryCta: "Ver perfil en Upwork",
      trustIndicator: "De confianza para negocios de servicios y agencias en crecimiento",
      urgencyNote: "Limitado a 3 proyectos profundos por trimestre · Próxima disponibilidad: Inicio 2026",
    },
    method: {
      title: "Cómo pasamos del caos a la claridad",
      intro:
        "Un proceso estructurado que parte de cómo funciona tu negocio hoy y termina en un sistema que tu equipo realmente usa.",
      steps: [
        {
          title: "Diagnóstico operativo",
          description:
            "Mapeamos tus procesos actuales, tus herramientas y los problemas que se repiten. Queremos ver cómo fluye el trabajo en la realidad, no solo en un diagrama.",
        },
        {
          title: "Arquitectura del sistema",
          description:
            "Diseñamos cómo debe funcionar tu negocio como sistema. Dónde vive la información, cómo se mueven las tareas, qué se automatiza y qué necesita ver liderazgo cada día.",
        },
        {
          title: "Construcción y automatización",
          description:
            "Implemento tu Business OS en Notion y conecto las herramientas necesarias con una capa de automatización. Desde la entrada de leads y gestión de clientes hasta proyectos, finanzas y reporting.",
        },
        {
          title: "Tableros para decidir",
          description:
            "Creamos vistas y tableros pensados para cada rol. Cada persona ve lo que necesita sin perseguir actualizaciones.",
        },
        {
          title: "Despliegue y adopción",
          description:
            "Aterrizamos el sistema con tu equipo, quitamos fricciones y cerramos brechas para que se convierta en parte del trabajo diario y no en otro proyecto olvidado.",
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
      title: "Sistemas operativos de negocio para equipos que ya están en juego",
      subtitle:
        "Prefiero pocos proyectos profundos en lugar de muchos dispersos. El foco está en construir los sistemas que van a sostener tu operación durante años.",
      intro: "Ofertas claras centradas en arquitectura, implementación y evolución continua de tu sistema operativo.",
      fromLabel: "Desde",
      learnMoreCta: "Pedir detalles",
      primaryCta: "Hablemos de tu contexto",
      secondaryCta: "Solicitar una auditoría de sistemas",
      popularBadge: "Más Popular",
      guaranteeNote: "Si no ves ROI en los primeros 90 días, lo refinaré sin costo adicional",
      cards: [
        {
          title: "Diseño e implementación de Business OS",
          summary:
            "Proyecto completo donde mapeamos tu operación, diseñamos tu Business OS y lo implementamos con automatizaciones y tableros.",
          bullets: [
            "Arquitectura integral de sistemas",
            "Implementación de Business OS en Notion",
            "Automatización de flujos críticos",
          ],
          price: "US$3,000+",
          isPopular: true,
        },
        {
          title: "Auditoría de sistemas operativos",
          summary:
            "Revisión enfocada de tus herramientas, workflows y modelo de datos. Te quedas con un diagnóstico claro y un plan de acción priorizado.",
          bullets: [
            "Auditoría de herramientas y procesos",
            "Blueprint del sistema y brechas",
            "Roadmap priorizado de mejoras",
          ],
          price: "US$900+",
        },
        {
          title: "Asesoría continua en sistemas",
          summary:
            "Para equipos que ya corren sobre un sistema y quieren un socio estratégico para evolucionarlo a medida que el negocio crece.",
          bullets: [
            "Mejoras e iteraciones mensuales",
            "Nuevas automatizaciones y módulos con el tiempo",
            "Acceso directo para decisiones operativas",
          ],
          price: "Retainer mensual",
        },
      ],
      addon: {
        badge: "Para socios estratégicos",
        title: "Implementación de sistemas white-label para agencias",
        summary:
          "Para agencias de marketing y crecimiento que buscan ofrecer automatización y sistemas operacionales como servicio a sus clientes. Me asocio contigo para entregar implementaciones de Business OS bajo tu marca mientras te enfocas en las relaciones con clientes y estrategia central.",
        cta: "Discutir alianza",
      },
    },
    process: {
      badge: "Proceso",
      title: "Cómo pasamos de herramientas dispersas a un sistema operativo real",
      subtitle:
        "Un proceso estructurado que parte de cómo funciona tu negocio hoy y termina en un sistema que tu equipo realmente usa.",
      steps: [
        {
          title: "Diagnóstico operativo",
          desc: "Mapeamos tus procesos actuales, herramientas y problemas recurrentes. El objetivo es ver cómo fluye realmente el trabajo hoy, no cómo se supone que debería funcionar en papel.",
        },
        {
          title: "Arquitectura del sistema",
          desc: "Diseñamos cómo debe funcionar tu negocio como sistema — dónde vive la información, cómo se mueven las tareas, qué se automatiza y qué necesita ver el liderazgo cada día.",
        },
        {
          title: "Construcción y automatización",
          desc: "Implemento tu Business OS en Notion y conecto las herramientas necesarias mediante automatizaciones. Desde la captación de leads y gestión de clientes hasta proyectos, finanzas y reporting.",
        },
        {
          title: "Tableros y capa de decisión",
          desc: "Diseñamos las vistas y tableros que importan para ti y tu equipo. Para que todos vean lo que necesitan para avanzar el trabajo sin pedir actualizaciones.",
        },
        {
          title: "Despliegue y capacitación",
          desc: "Incorporamos a tu equipo, ajustamos puntos de fricción y cerramos brechas. El sistema se convierte en parte de cómo trabajas día a día, no en otro proyecto abandonado.",
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
