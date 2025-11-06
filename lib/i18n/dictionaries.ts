// lib/i18n/dictionaries.ts
import { DEFAULT_LOCALE, LOCALE_COOKIE, Locale } from "./config";

export type SiteDictionary = {
  meta: {
    title: string;
    description: string;
  };
  header: {
    brand: string;
    nav: {
      services: string;
      value: string;
      process: string;
      contact: string;
      products: string;
      blog: string;
    };
    hireCta: string;
    themeToggle: string;
    languageToggle: string;
    languageNames: Record<Locale, string>;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    points: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  value: {
    badge: string;
    title: string;
    subtitle: string;
    cards: { title: string; desc: string }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    fromLabel: string;
    learnMoreCta: string;
    cards: {
      title: string;
      summary: string;
      bullets: string[];
      price: string;
    }[];
    addon: {
      badge: string;
      title: string;
      summary: string;
      cta: string;
    };
  };
  featuredProducts: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    items: { title: string; type: string; summary: string }[];
  };
  productsPage: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
    };
    intro: {
      title: string;
      description: string;
    };
    categories: {
      title: string;
      items: { slug: string; title: string; type: string; summary: string; linkText: string }[];
    };
    backToLibrary: string;
    library: Record<
      string,
      {
        title: string;
        description: string;
        items: {
          title: string;
          type: string;
          summary: string;
          highlights: string[];
          action: string;
          href?: string;
        }[];
      }
    >;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  finalCta: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    description: string;
    legal: string;
    hireCta: string;
  };
};

const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    meta: {
      title: "Beyker Estrada · Notion, n8n Systems",
      description:
        "I build Notion systems and n8n automations that reduce friction and scale teams.",
    },
    header: {
      brand: "Beyker Estrada",
      nav: {
      services: "Services",
      value: "Value",
      process: "Process",
      contact: "Contact",
      products: "Products",
      blog: "Blog",
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
      badge: "Notion & n8n systems for scaling teams",
      title: "I build systems and automations that help teams scale without chaos.",
      subtitle:
        "Notion systems, n8n automations, and operational workflows that remove friction and increase clarity for every stakeholder.",
      points: [
        "Designing operational architecture for venture-backed teams that need traction without bottlenecks.",
        "Hands-on build partner across Notion, n8n, and the tools you already rely on.",
      ],
      primaryCta: "Hire me on Upwork",
      secondaryCta: "Book a strategy call",
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
    fromLabel: "From",
    learnMoreCta: "Request details",
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
        summary: "Not sure where to begin? Book a consultation — I’ll review your current workspace, map gaps, and deliver actionable recommendations for the next build.",
        cta: "Book a consultation call",
      },
    },
    featuredProducts: {
      badge: "Featured products",
      title: "Ready-to-use systems and accelerators.",
      subtitle: "Templates, automations, and curriculum built from real client engagements — ship a solution without starting from scratch.",
      cta: "View the full library",
      items: [
        {
          title: "Notion Company OS template",
          type: "Notion template",
          summary: "Executive dashboards, team workspaces, and pipeline views designed for seed to Series B teams.",
        },
        {
          title: "n8n lifecycle automation pack",
          type: "n8n workflow",
          summary: "Automations covering lead routing, enrichment, and lifecycle messaging with plug-and-play nodes.",
        },
        {
          title: "Notion x n8n systems bootcamp",
          type: "Course",
          summary: "Self-paced curriculum teaching your ops team the patterns I use to ship production systems.",
        },
      ],
    },
    productsPage: {
      hero: {
        title: "Operational products crafted for modern teams.",
        subtitle: "A growing library of Notion templates, n8n automations, and learning products that help you deploy leverage fast.",
        description: "Each product is battle-tested with high-velocity teams and includes documentation plus optional upgrade paths if you need bespoke support.",
        cta: "Request a custom build",
      },
      intro: {
        title: "Explore by format",
        description: "Pick what fits your roadmap today — templates to launch, workflow packs to automate, or deep-dive training to upskill your operators.",
      },
      categories: {
        title: "Product library",
        items: [
          {
            slug: "notion-templates",
            title: "Notion templates",
            type: "Templates",
            summary: "Company OS, CRM, and strategy execution spaces engineered for clarity and adoption.",
            linkText: "Browse templates",
          },
          {
            slug: "n8n-automations",
            title: "n8n automation packs",
            type: "Automations",
            summary: "Workflow bundles for handoffs, lifecycle, and analytics — ready to deploy or extend.",
            linkText: "Browse automations",
          },
          {
            slug: "courses-playbooks",
            title: "Courses & playbooks",
            type: "Learning",
            summary: "Structured curriculum and playbooks to train your team on system design and automation ops.",
            linkText: "Browse courses",
          },
        ],
      },
      backToLibrary: "Back to products",
      library: {
        "notion-templates": {
          title: "Notion templates",
          description: "Templates architected from live client systems so your team gets clarity, governance, and momentum from day one.",
          items: [
            {
              title: "Notion Company OS blueprint",
              type: "Template",
              summary: "End-to-end operating system for product-led teams with executive dashboards, governance, and quarterly planning.",
              highlights: [
                "Leadership and team scorecards linked to goals",
                "CRM, projects, and knowledge base stitched together",
                "Handoff-ready documentation with implementation guide",
              ],
              action: "Get the template",
            },
            {
              title: "Revenue workspace kit",
              type: "Template",
              summary: "Pipeline, account plans, mutual action plans, and enablement hub to help GTM teams stay coordinated.",
              highlights: [
                "Deals, renewal, and expansion trackers with alerts",
                "Executive dashboards for forecast and coverage",
                "Playbook vault with version control baked in",
              ],
              action: "Request access",
            },
          ],
        },
        "n8n-automations": {
          title: "n8n automation packs",
          description: "Production-ready workflows that handle routing, enrichment, alerts, and reporting without stitching scripts together.",
          items: [
            {
              title: "Lifecycle orchestration bundle",
              type: "Automation pack",
              summary: "Lead capture to onboarding automation with enrichments, dedupe, and SLA notifications.",
              highlights: [
                "Webhook intake with branching for source-specific logic",
                "Clear error handling and monitoring dashboards",
                "Email and Slack notifications configurable per team",
              ],
              action: "Get the automations",
            },
            {
              title: "Analytics sync kit",
              type: "Automation pack",
              summary: "Automate data syncs between Notion, data warehouse, and BI tools for live reporting.",
              highlights: [
                "Bi-directional sync patterns with conflict resolution",
                "Scheduling presets and retry logic baked in",
                "Documentation for extending nodes to your stack",
              ],
              action: "Request automations",
            },
          ],
        },
        "courses-playbooks": {
          title: "Courses & playbooks",
          description: "Train your operators and team leads to build, maintain, and scale Notion + n8n systems the right way.",
          items: [
            {
              title: "Notion x n8n systems bootcamp",
              type: "Course",
              summary: "Self-paced curriculum covering system design, automation strategy, and governance best practices.",
              highlights: [
                "Video modules, templates, and implementation tasks",
                "Office hours templates for internal enablement",
                "Capability assessments and planning worksheets",
              ],
              action: "Join the bootcamp",
            },
            {
              title: "Ops architecture playbook",
              type: "Playbook",
              summary: "Step-by-step methodologies to map processes, select automation candidates, and govern changes.",
              highlights: [
                "Workshop agendas and stakeholder interview scripts",
                "Prioritization frameworks for automation backlog",
                "Rollout and change management checklists",
              ],
              action: "Get the playbook",
            },
          ],
        },
      },
    },
    process: {
      badge: "Process",
      title: "A grounded path from idea to adoption.",
      subtitle:
        "Engagements stay lean, transparent, and accountable — so you always know what is shipping next.",
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
      title: "Ready to streamline your operations?",
      subtitle: "Kick off with a scoped engagement on Upwork or book a strategy session to map the next build.",
      primaryCta: "Hire me on Upwork",
      secondaryCta: "Book a strategy call",
    },
    footer: {
      description: "Beyker Estrada — Senior automation consultant.",
      legal: "Contracts and payments via Upwork.",
      hireCta: "Hire me on Upwork",
    },
  },
  es: {
    meta: {
      title: "Beyker Estrada · Sistemas en Notion y n8n",
      description:
        "Diseño sistemas en Notion y automatizaciones con n8n que reducen fricción y escalan equipos.",
    },
    header: {
      brand: "Beyker Estrada",
      nav: {
      services: "Servicios",
      value: "Valor",
      process: "Proceso",
      contact: "Contacto",
      products: "Productos",
      blog: "Blog",
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
      badge: "Sistemas en Notion y n8n para equipos en crecimiento",
      title: "Construyo sistemas y automatizaciones que permiten escalar sin caos.",
      subtitle:
        "Sistemas en Notion, automatizaciones con n8n y flujos operativos que eliminan fricción y dan claridad a cada responsable.",
      points: [
        "Arquitectura operativa para equipos con inversión que necesitan tracción sin cuellos de botella.",
        "Acompañamiento práctico en Notion, n8n y las herramientas que ya usa tu equipo.",
      ],
      primaryCta: "Contrátame en Upwork",
      secondaryCta: "Agenda una sesión estratégica",
    },
    value: {
      badge: "Donde está el apalancamiento",
      title: "Claridad operativa sin complejidad innecesaria.",
      subtitle:
        "Los proyectos combinan pensamiento sistémico con ejecución directa para generar impacto inmediato.",
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
      fromLabel: "Desde",
      learnMoreCta: "Solicitar detalles",
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
          bullets: ["Sincronizaciones y enriquecimiento de datos", "Automatizaciones de lifecycle y email", "Rutinas de higiene de CRM"],
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
        summary: "¿No sabes por dónde comenzar? Agenda una consulta: audito tu workspace, identifico brechas y te entrego recomendaciones accionables para el siguiente build.",
        cta: "Agenda una consulta",
      },
    },
    featuredProducts: {
      badge: "Productos destacados",
      title: "Sistemas y aceleradores listos para usar.",
      subtitle: "Plantillas, automatizaciones y formación creadas a partir de proyectos reales — implementa sin partir de cero.",
      cta: "Ver biblioteca completa",
      items: [
        {
          title: "Plantilla Notion Company OS",
          type: "Plantilla Notion",
          summary: "Dashboards ejecutivos, espacios de equipo y vistas de pipeline para equipos seed a Serie B.",
        },
        {
          title: "Pack de automatizaciones n8n lifecycle",
          type: "Workflow n8n",
          summary: "Automatizaciones para ruteo, enriquecimiento y lifecycle messaging con nodos plug-and-play.",
        },
        {
          title: "Bootcamp Notion x n8n systems",
          type: "Curso",
          summary: "Programa self-paced que enseña los patrones que uso para lanzar sistemas en producción.",
        },
      ],
    },
    productsPage: {
      hero: {
        title: "Productos operativos creados para equipos modernos.",
        subtitle: "Biblioteca en crecimiento de plantillas Notion, automatizaciones n8n y productos educativos para desplegar leverage rápido.",
        description: "Cada producto está probado con equipos de alta velocidad e incluye documentación y opciones de upgrade si necesitas soporte a medida.",
        cta: "Solicita un build personalizado",
      },
      intro: {
        title: "Explora por formato",
        description: "Elige lo que tu roadmap necesita hoy: plantillas para lanzar, packs de workflows para automatizar o formación para escalar a tu equipo.",
      },
      categories: {
        title: "Biblioteca de productos",
        items: [
          {
            slug: "notion-templates",
            title: "Plantillas Notion",
            type: "Plantillas",
            summary: "Company OS, CRM y espacios de ejecución diseñados para claridad y adopción.",
            linkText: "Ver plantillas",
          },
          {
            slug: "n8n-automations",
            title: "Packs de automatización n8n",
            type: "Automatizaciones",
            summary: "Bundles de workflows para handoffs, lifecycle y analytics — listos para desplegar o extender.",
            linkText: "Ver automatizaciones",
          },
          {
            slug: "courses-playbooks",
            title: "Cursos y playbooks",
            type: "Aprendizaje",
            summary: "Currículos estructurados para formar a tu equipo en diseño de sistemas y operaciones de automatización.",
            linkText: "Ver cursos",
          },
        ],
      },
      backToLibrary: "Volver a productos",
      library: {
        "notion-templates": {
          title: "Plantillas Notion",
          description: "Plantillas diseñadas a partir de sistemas reales para que tu equipo gane claridad, gobierno y momentum desde el día uno.",
          items: [
            {
              title: "Blueprint de Company OS",
              type: "Plantilla",
              summary: "Sistema operativo end-to-end para equipos product-led con dashboards ejecutivos, gobierno y planeación trimestral.",
              highlights: [
                "Scorecards de liderazgo y equipos conectados a objetivos",
                "CRM, proyectos y base de conocimiento integrados",
                "Documentación lista para handoff con guía de implementación",
              ],
              action: "Obtener plantilla",
            },
            {
              title: "Kit de revenue workspace",
              type: "Plantilla",
              summary: "Pipelines, account plans, mutual action plans y hub de enablement para coordinación GTM.",
              highlights: [
                "Trackers de deals, renovaciones y expansion con alertas",
                "Dashboards ejecutivos para forecast y coverage",
                "Repositorio de playbooks con control de versiones",
              ],
              action: "Solicitar acceso",
            },
          ],
        },
        "n8n-automations": {
          title: "Packs de automatización n8n",
          description: "Workflows listos para producción que manejan ruteo, enriquecimiento, alertas y reporting sin mantener scripts dispersos.",
          items: [
            {
              title: "Bundle de orquestación lifecycle",
              type: "Pack de automatizaciones",
              summary: "Automatización desde captura de leads hasta onboarding con enriquecimiento, dedupe y notificaciones SLA.",
              highlights: [
                "Intake por webhook con lógica por fuente",
                "Manejo de errores y tableros de monitoreo incluidos",
                "Notificaciones por email y Slack configurables por equipo",
              ],
              action: "Obtener automatizaciones",
            },
            {
              title: "Kit de sincronización analytics",
              type: "Pack de automatizaciones",
              summary: "Automatiza sincronizaciones entre Notion, data warehouse y BI para reporting en vivo.",
              highlights: [
                "Patrones bi-direccionales con resolución de conflictos",
                "Programaciones predefinidas y lógica de reintentos",
                "Documentación para extender nodos a tu stack",
              ],
              action: "Solicitar automatizaciones",
            },
          ],
        },
        "courses-playbooks": {
          title: "Cursos y playbooks",
          description: "Forma a tus operadores y líderes para construir, mantener y escalar sistemas Notion + n8n correctamente.",
          items: [
            {
              title: "Bootcamp Notion x n8n systems",
              type: "Curso",
              summary: "Currículo self-paced sobre diseño de sistemas, estrategia de automatización y mejores prácticas de gobierno.",
              highlights: [
                "Módulos en video, plantillas y tareas de implementación",
                "Plantillas de office hours para enablement interno",
                "Evaluaciones de capacidad y worksheets de planeación",
              ],
              action: "Unirte al bootcamp",
            },
            {
              title: "Playbook de arquitectura operativa",
              type: "Playbook",
              summary: "Metodologías paso a paso para mapear procesos, seleccionar automatizaciones y gobernar cambios.",
              highlights: [
                "Agendas de workshop y guiones de entrevistas",
                "Frameworks de priorización para backlog de automatización",
                "Checklists de rollout y change management",
              ],
              action: "Obtener playbook",
            },
          ],
        },
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
      title: "¿Listo para optimizar tus operaciones?",
      subtitle:
        "Comencemos con un alcance definido en Upwork o agenda una sesión estratégica para mapear el siguiente build.",
      primaryCta: "Contrátame en Upwork",
      secondaryCta: "Agenda una sesión estratégica",
    },
    footer: {
      description: "Beyker Estrada — Consultor senior en automatización.",
      legal: "Contratos y pagos disponibles vía Upwork.",
      hireCta: "Contrata en Upwork",
    },
  },
};

export function getDictionary(locale: Locale = DEFAULT_LOCALE): SiteDictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function getLanguageName(locale: Locale, target: Locale) {
  const dict = getDictionary(target);
  return dict.header.languageNames[locale];
}

export { LOCALE_COOKIE };
