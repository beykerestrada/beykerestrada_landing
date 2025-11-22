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
    startHere: {
      label: string
      title: string
      subtitle: string
      card: {
        title: string
        body: [string, string]
        bullets: [string, string, string]
        price: string
        ctaLabel: string
      }
    }
    projects: {
      label: string
      title: string
      subtitle: string
      items: {
        id: string
        tag: string
        title: string
        oneLiner: string
        description: string
        bullets: [string, string, string]
        price: string
        ctaLabel: string
        meta: string
      }[]
    }
    partnership: {
      label: string
      title: string
      subtitle: string
      items: {
        id: string
        tag: string
        title: string
        oneLiner: string
        description: string
        bullets: [string, string, string]
        price: string
        ctaLabel: string
      }[]
    }
    agencies: {
      label: string
      title: string
      subtitle: string
      card: {
        tag: string
        title: string
        description: string
        bullets: [string, string, string]
        meta: string
        ctaLabel: string
      }
    }
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
      title: "Ways we can work together",
      intro:
        "I take on a limited number of deep engagements; from clarifying where to start; to designing your Business OS in Notion; to maintaining the automations that keep everything moving.",
      startHere: {
        label: "01 · Start here",
        title: "Not sure where to start?",
        subtitle: "Get a clear picture of your systems before you commit to a bigger project.",
        card: {
          title: "Systems & Notion audit",
          body: [
            "I review your Notion workspace; core workflows and existing automations.",
            "You get a clear diagnosis of what is working; what is slowing you down; and a practical roadmap for your next steps.",
          ],
          bullets: [
            "Deep dive into your current workspace and processes",
            "Map of bottlenecks; risks and duplicated work",
            "Prioritized plan; quick wins and medium term improvements",
          ],
          price: "From $600+ (credited toward a project if you move forward)",
          ctaLabel: "Request an audit",
        },
      },
      projects: {
        label: "02 · Project engagements",
        title: "Focused projects to design or upgrade your systems.",
        subtitle: "From full Business OS design to targeted automation projects around the tools you already use.",
        items: [
          {
            id: "business-os",
            tag: "Flagship project",
            title: "Business OS design & implementation",
            oneLiner: "Turn scattered tools and docs into one operating system in Notion.",
            description:
              "We map how your team works; design your Business OS in Notion; and implement it with the dashboards; databases and automations your operation needs to run smoothly.",
            bullets: [
              "Systems architecture; data model and permissions",
              "Notion based OS for projects; tasks; CRM; knowledge and reporting",
              "Key automations using n8n or Zapier",
            ],
            price: "From $3,000+",
            ctaLabel: "Discuss your context",
            meta: "Typical timeline; 4–8 weeks depending on scope.",
          },
          {
            id: "automation-projects",
            tag: "Automation builds",
            title: "Tailored automation projects (n8n, Zapier & more)",
            oneLiner: "Remove repetitive manual work while keeping your existing tools.",
            description:
              "We design and build automations around the stack you already use; connecting forms; CRMs; inboxes and internal tools so information flows without constant copy paste.",
            bullets: [
              "Workflow discovery; triggers and failure points",
              "Automations built in n8n; Zapier or similar platforms",
              "Error handling; logging and documentation for handover",
            ],
            price: "From $1,200+",
            ctaLabel: "Request a scoped project",
            meta: "",
          },
        ],
      },
      partnership: {
        label: "03 · Ongoing partnership",
        title: "Keep your systems healthy once they are in place.",
        subtitle: "Retainers for the architecture and operations work most teams do not want in house.",
        items: [
          {
            id: "notion-architect",
            tag: "For evolving workspaces",
            title: "Notion Architect on retainer",
            oneLiner: "Architecture and design support so your workspace grows without turning into a mess.",
            description:
              "I act as your Notion Architect; planning structural changes; designing new spaces; and keeping the workspace coherent as more teams and workflows move into Notion.",
            bullets: [
              "Monthly sessions for structure; views and permissions",
              "Design of new areas; dashboards and databases",
              "Guidance so your internal team can build safely on top",
            ],
            price: "Monthly retainer",
            ctaLabel: "Explore retainers",
          },
          {
            id: "automation-ops",
            tag: "For automation heavy teams",
            title: "Automation Ops partner",
            oneLiner: "Someone who owns the day to day health of your automations.",
            description:
              "I maintain and update your n8n or Zapier instances; monitor failures; debug edge cases and design new workflows as the business changes; so your systems do not depend on heroic fixes.",
            bullets: [
              "Maintenance and updates for n8n; Zapier and related integrations",
              "Monitoring; debugging and recovery for failed runs",
              "Design and launch of new workflows on demand",
            ],
            price: "Monthly retainer",
            ctaLabel: "Explore retainers",
          },
        ],
      },
      agencies: {
        label: "04 · For agencies",
        title: "White label systems implementation for agencies.",
        subtitle: "Partnerships for agencies that want to offer systems and automations without building an internal delivery team.",
        card: {
          tag: "For strategic partners",
          title: "White label systems implementation for agencies",
          description:
            "For marketing; growth and consulting agencies that want to offer Notion based systems and automations to their clients without building an internal team. I deliver the work under your brand while you keep the client relationship and strategy.",
          bullets: [
            "White label delivery under your brand and processes",
            "Scoped Business OS and automation projects for your clients",
            "Clear collaboration model and SLAs so we can scale together",
          ],
          meta: "Partner rates shared after an initial fit call.",
          ctaLabel: "Discuss partnership",
        },
      },
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
      title: "Formas de trabajar juntos",
      intro:
        "Trabajo con un número limitado de proyectos profundos; desde clarificar por dónde empezar; hasta diseñar tu Business OS en Notion; hasta mantener las automatizaciones que mantienen todo en movimiento.",
      startHere: {
        label: "01 · Empieza aquí",
        title: "¿No sabes por dónde empezar?",
        subtitle: "Obtén una imagen clara de tus sistemas antes de comprometerte con un proyecto más grande.",
        card: {
          title: "Auditoría de sistemas y Notion",
          body: [
            "Reviso tu espacio de trabajo en Notion; flujos principales y automatizaciones existentes.",
            "Obtienes un diagnóstico claro de qué funciona; qué te frena; y una hoja de ruta práctica para tus próximos pasos.",
          ],
          bullets: [
            "Análisis profundo de tu workspace y procesos actuales",
            "Mapa de cuellos de botella; riesgos y trabajo duplicado",
            "Plan priorizado; victorias rápidas y mejoras a mediano plazo",
          ],
          price: "Desde 600 USD+ (se descuenta si avanzas a un proyecto)",
          ctaLabel: "Solicitar auditoría",
        },
      },
      projects: {
        label: "02 · Proyectos puntuales",
        title: "Proyectos enfocados para diseñar o mejorar tus sistemas.",
        subtitle: "Desde el diseño completo de un Business OS hasta proyectos de automatización enfocados en las herramientas que ya usas.",
        items: [
          {
            id: "business-os",
            tag: "Proyecto insignia",
            title: "Diseño e implementación de Business OS",
            oneLiner: "Convertir herramientas y documentos dispersos en un sistema operativo en Notion.",
            description:
              "Mapeamos cómo trabaja tu equipo; diseñamos tu Business OS en Notion; e implementamos con los tableros; bases de datos y automatizaciones que tu operación necesita para funcionar con fluidez.",
            bullets: [
              "Arquitectura de sistemas; modelo de datos y permisos",
              "OS en Notion para proyectos; tareas; CRM; conocimiento y reportes",
              "Automatizaciones clave con n8n o Zapier",
            ],
            price: "Desde 3.000 USD+",
            ctaLabel: "Hablar sobre tu contexto",
            meta: "Timeline típico; 4–8 semanas según el alcance.",
          },
          {
            id: "automation-projects",
            tag: "Construcción de automatizaciones",
            title: "Proyectos de automatización a medida (n8n, Zapier y más)",
            oneLiner: "Elimina trabajo manual repetitivo manteniendo tus herramientas actuales.",
            description:
              "Diseñamos y construimos automatizaciones alrededor del stack que ya usas; conectando formularios; CRMs; bandejas de entrada y herramientas internas para que la información fluya sin copiar y pegar constantemente.",
            bullets: [
              "Descubrimiento de flujos; disparadores y puntos de falla",
              "Automatizaciones construidas en n8n; Zapier o plataformas similares",
              "Manejo de errores; logging y documentación para transferencia",
            ],
            price: "Desde 1.200 USD+",
            ctaLabel: "Solicitar proyecto a medida",
            meta: "",
          },
        ],
      },
      partnership: {
        label: "03 · Acompañamiento continuo",
        title: "Mantén tus sistemas saludables una vez implementados.",
        subtitle: "Retainers para el trabajo de arquitectura y operaciones que la mayoría de los equipos no quiere tener internamente.",
        items: [
          {
            id: "notion-architect",
            tag: "Para workspaces en evolución",
            title: "Notion Architect en retainer",
            oneLiner: "Soporte de arquitectura y diseño para que tu workspace crezca sin convertirse en un desastre.",
            description:
              "Actúo como tu Arquitecto de Notion; planificando cambios estructurales; diseñando nuevos espacios; y manteniendo el workspace coherente a medida que más equipos y flujos se mueven a Notion.",
            bullets: [
              "Sesiones mensuales para estructura; vistas y permisos",
              "Diseño de nuevas áreas; tableros y bases de datos",
              "Guía para que tu equipo interno pueda construir de forma segura encima",
            ],
            price: "Retainer mensual",
            ctaLabel: "Ver opciones de retainer",
          },
          {
            id: "automation-ops",
            tag: "Para equipos con muchas automatizaciones",
            title: "Automation Ops partner",
            oneLiner: "Alguien que se responsabiliza de la salud diaria de tus automatizaciones.",
            description:
              "Mantengo y actualizo tus instancias de n8n o Zapier; monitoreo fallas; depuro casos extremos y diseño nuevos flujos a medida que el negocio cambia; para que tus sistemas no dependan de arreglos heroicos.",
            bullets: [
              "Mantenimiento y actualizaciones para n8n; Zapier e integraciones relacionadas",
              "Monitoreo; debug y recuperación de ejecuciones fallidas",
              "Diseño y lanzamiento de nuevos flujos bajo demanda",
            ],
            price: "Retainer mensual",
            ctaLabel: "Ver opciones de retainer",
          },
        ],
      },
      agencies: {
        label: "04 · Para agencias",
        title: "Implementación white label para agencias.",
        subtitle: "Alianzas para agencias que quieren ofrecer sistemas y automatizaciones sin construir un equipo interno de entrega.",
        card: {
          tag: "Para socios estratégicos",
          title: "Implementación white label para agencias",
          description:
            "Para agencias de marketing; crecimiento y consultoría que quieren ofrecer sistemas en Notion y automatizaciones a sus clientes sin construir un equipo interno. Entrego el trabajo bajo tu marca mientras mantienes la relación con el cliente y la estrategia.",
          bullets: [
            "Entrega white label bajo tu marca y procesos",
            "Proyectos de Business OS y automatización para tus clientes",
            "Modelo de colaboración claro y SLAs para escalar juntos",
          ],
          meta: "Tarifas para socios compartidas después de una llamada inicial de fit.",
          ctaLabel: "Hablar sobre alianza",
        },
      },
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
