import type { Translations } from './types'

export const de: Translations = {
  nav: {
    home: "Startseite",
    howItWorks: "Funktionsweise",
    education: "Bildung",
    workflows: "Workflows",
    about: "Über uns",
    contact: "Kontakt",
    automation: "Automatisierung",
    digitalMarketing: "Digital Marketing",
    webDevelopment: "Webentwicklung",
    getStarted: "Jetzt starten"
  },
  hero: {
    title1: "Intelligenter automatisieren.",
    title2: "Schneller arbeiten.",
    subtitle: "Nutzen Sie die Kraft von KI-Agenten und intelligenten Automatisierungs-Workflows, um Ihre Geschäftsabläufe zu transformieren, die Produktivität zu steigern und mühelos zu skalieren.",
    cta: "Jetzt starten",
    features: {
      ai: "KI-gestützt",
      fast: "Blitzschnell",
      secure: "Sicher & Zuverlässig"
    }
  },
  workflows: {
    title: "Leistungsstarke Workflow-Lösungen",
    subtitle: "Entdecken Sie, wie unsere KI-gesteuerten Automatisierungs-Workflows Ihre Geschäftsabläufe revolutionieren können",
    items: [
      {
        title: "KI-E-Mail-Automatisierung",
        description: "Intelligente E-Mail-Sortierung, automatische Antworten und Follow-up-Sequenzen, die von KI unterstützt werden, um täglich Stunden zu sparen."
      },
      {
        title: "CRM-Workflow-Automatisierung",
        description: "Optimieren Sie das Lead-Management, automatisieren Sie die Dateneingabe und lösen Sie Aktionen basierend auf Kundenverhaltensmustern aus."
      },
      {
        title: "KI-Chat-Agenten",
        description: "Setzen Sie intelligente Chatbots ein, die Kundenanfragen bearbeiten, Leads qualifizieren und rund um die Uhr Support bieten."
      },
      {
        title: "Marketing-Automatisierung",
        description: "Automatisieren Sie Kampagnen, segmentieren Sie Zielgruppen und optimieren Sie die Inhaltsverteilung über mehrere Kanäle hinweg."
      }
    ],
    learnMore: "Mehr erfahren"
  },
  about: {
    title: "Über",
    description1: "Wir bei FlowToWork glauben, dass sich Unternehmen auf das konzentrieren sollten, was sie am besten können – während intelligente Automatisierung den Rest erledigt.",
    description2: "Wir sind spezialisiert auf die Erstellung modernster Automatisierungs-Workflows und den Einsatz von KI-Agenten, die Abläufe rationalisieren, manuelle Aufgaben reduzieren und beispiellose Effizienzgewinne freisetzen.",
    description3: "Unsere Mission ist es, Unternehmen jeder Größe zu befähigen, die neueste KI-Technologie zu nutzen, ihre Geschäftsprozesse zu optimieren und nachhaltiges Wachstum in einer zunehmend wettbewerbsorientierten Landschaft zu erzielen.",
    stats: {
      faster: "Schnellere Workflows",
      ai: "KI-Automatisierung"
    },
    cards: [
      {
        title: "Effizienz zuerst",
        description: "Optimieren Sie jeden Aspekt Ihres Workflows"
      },
      {
        title: "KI-gestützte Agenten",
        description: "Setzen Sie intelligente Agenten ein, die lernen und sich anpassen"
      },
      {
        title: "Skalierbare Lösungen",
        description: "Lassen Sie Ihr Unternehmen wachsen, ohne die Komplexität zu erhöhen"
      }
    ]
  },
  contact: {
    title: "Kontakt aufnehmen",
    subtitle: "Bereit, Ihren Workflow zu automatisieren? Lassen Sie uns über Ihre Bedürfnisse sprechen.",
    form: {
      name: "Name",
      namePlaceholder: "Ihr vollständiger Name",
      email: "E-Mail",
      emailPlaceholder: "ihre@email.de",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns von Ihren Automatisierungswünschen...",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      successTitle: "Vielen Dank!",
      successMessage: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
      errorMessage: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut."
    },
    direct: "Oder erreichen Sie uns direkt:",
    info: {
      emailLabel: "E-Mail",
      phoneLabel: "Telefon"
    },
    tabs: {
      form: "Nachricht",
      info: "Kontaktinfo",
      social: "Social Media"
    }
  },
  footer: {
    description: "Unternehmen mit intelligenter Automatisierung und KI-gesteuerten Workflows stärken.",
    quickLinks: "Schnellzugriff",
    connect: "Verbinden Sie sich mit uns",
    rights: "Alle Rechte vorbehalten. | Erstellt mit Next.js & Tailwind CSS",
    socialAriaLabels: {
      twitter: "Folgen Sie uns auf Twitter",
      linkedin: "Folgen Sie uns auf LinkedIn",
      github: "Folgen Sie uns auf GitHub"
    }
  },
  waitlist: {
    title: "Treten Sie der FlowToWork-Warteliste bei",
    subtitle: "Gehören Sie zu den Ersten, die Zugang zu leistungsstarken Automatisierungs-Workflows und KI-Agenten-Lösungen erhalten.",
    form: {
      name: "Vollständiger Name",
      namePlaceholder: "Ihr vollständiger Name",
      email: "E-Mail-Adresse",
      emailPlaceholder: "ihre@email.de",
      company: "Unternehmen (optional)",
      companyPlaceholder: "Ihr Unternehmensname",
      interest: "Hauptinteresse",
      interestOptions: {
        placeholder: "Wählen Sie Ihr Hauptinteresse",
        automation: "Automatisierungs-Workflows",
        agents: "KI-Agenten",
        both: "Beides"
      },
      submit: "Warteliste beitreten",
      loading: "Beitritt...",
      successTitle: "Sie stehen auf der Liste!",
      successMessage: "Vielen Dank für Ihr Interesse. Wir werden uns mit exklusivem Zugang und Updates bei Ihnen melden.",
      error: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
      joinAnother: "Mit einer anderen E-Mail beitreten",
      spamNote: "Kein Spam. Nur Produkt-Updates und früher Zugang."
    }
  },
  education: {
    title: "Automatisierung vs. KI-Agenten – Was ist der Unterschied?",
    introduction: "Das Verständnis des Unterschieds zwischen herkömmlicher Automatisierung und KI-Agenten ist entscheidend für die Wahl der richtigen Lösung für Ihr Unternehmen. Obwohl beide darauf abzielen, die Effizienz zu steigern, arbeiten sie auf grundlegend unterschiedliche Weise.",
    automation: {
      title: "Automatisierung",
      subtitle: "Regelbasierte Effizienz",
      features: [
        "Regelbasierte Workflows",
        "Trigger-Aktions-Logik",
        "Bestens geeignet für repetitive, vorhersehbare Aufgaben"
      ],
      examples: {
        title: "Beispiele:",
        items: [
          "E-Mail-Automatisierung",
          "CRM-Aktualisierungen",
          "Datensynchronisation"
        ]
      }
    },
    aiAgents: {
      title: "KI-Agenten",
      subtitle: "Kontextbewusste Intelligenz",
      features: [
        "Kontextbewusste Entscheidungsfindung",
        "Nutzung von KI-Modellen für logisches Denken und Antworten",
        "Anpassung an Eingaben und Ziele"
      ],
      examples: {
        title: "Beispiele:",
        items: [
          "KI-Chat-Assistenten",
          "Autonome Workflow-Orchestrierung",
          "Intelligente Entscheidungsunterstützung"
        ]
      }
    },
    summary: "Bei FlowToWork kombinieren wir die Zuverlässigkeit regelbasierter Automatisierung mit der Intelligenz von KI-Agenten, um die effizientesten und skalierbarsten Lösungen für Ihr Unternehmen zu schaffen."
  },
  automationFlow: {
    title: "Wie Automatisierung funktioniert",
    subtitle: "Vom Trigger zur Aktion – Automatisierung einfach erklärt.",
    steps: [
      {
        title: "Trigger",
        text: "Ein Trigger ist das Ereignis, das die Automatisierung startet. Zum Beispiel, wenn ein Formular abgeschickt wird oder eine E-Mail eingeht."
      },
      {
        title: "Logik",
        text: "Regeln entscheiden, was als Nächstes passiert. Bedingungen helfen dem System zu verstehen, welche Aktion ausgeführt werden soll."
      },
      {
        title: "Aktion",
        text: "Die Automatisierung führt Aufgaben automatisch aus, wie das Versenden von E-Mails, das Aktualisieren von Systemen oder das Erstellen von Datensätzen."
      },
      {
        title: "Ergebnis",
        text: "Die Aufgabe wird sofort erledigt, was Zeit spart und manuelle Arbeit reduziert."
      }
    ]
  },
  emailAutomationDemo: {
    title: "KI-E-Mail-Automatisierung",
    subtitle: "Ihr Posteingang, von KI verwaltet – ganz automatisch.",
    intro: "Verschwenden Sie keine Stunden mehr mit dem Sortieren von E-Mails. Diese Automatisierung nutzt KI, um Ihre Nachrichten zu verstehen, zu kategorisieren und zu beantworten, damit Sie sich auf das Wesentliche konzentrieren können.",
    steps: [
      {
        title: "Schritt 1 – Posteingangs-Überwachung",
        description: "Die KI überwacht Ihren Posteingang in Echtzeit, sobald E-Mails eingehen."
      },
      {
        title: "Schritt 2 – Intelligente Sortierung",
        description: "Die KI liest und kategorisiert E-Mails nach Dringlichkeit und Thema."
      },
      {
        title: "Schritt 3 – Entwurfserstellung",
        description: "Für häufige Anfragen werden intelligente Entwürfe erstellt, die für Ihre Freigabe bereitstehen."
      },
      {
        title: "Schritt 4 – Automatische Erledigung",
        description: "E-Mails werden basierend auf Ihren Regeln automatisch archiviert, weitergeleitet oder beantworten."
      }
    ]
  },
  crmAutomationDemo: {
    title: "CRM-Workflow-Automatisierung",
    subtitle: "Halten Sie Ihre Vertriebspipeline in Bewegung – ganz automatisch.",
    intro: "Verlieren Sie nie wieder einen Lead. Dieser Workflow automatisiert die mühsame Dateneingabe und Follow-up-Aufgaben in Ihrem CRM, damit Ihr Vertriebsteam sich auf den Abschluss konzentrieren kann.",
    steps: [
      {
        title: "Schritt 1 – Lead-Erfassung",
        description: "Neue Leads werden automatisch aus Formularen oder Anzeigen in Ihr CRM übertragen."
      },
      {
        title: "Schritt 2 – Datenanreicherung",
        description: "KI fügt fehlende Unternehmensinfos und Social-Media-Profile zum Lead-Datensatz hinzu."
      },
      {
        title: "Schritt 3 – Intelligente Zuweisung",
        description: "Leads werden basierend auf Standort oder Fachwissen dem richtigen Teammitglied zugewiesen."
      },
      {
        title: "Schritt 4 – Automatisches Follow-up",
        description: "Personalisierte Follow-up-Sequenzen werden ausgelöst, um den Lead bei der Stange zu halten."
      }
    ]
  },
  chatAgentDemo: {
    title: "KI-Chat-Agenten",
    subtitle: "24/7 Kundensupport – ganz automatisch.",
    intro: "Bieten Sie Ihren Kunden zu jeder Zeit sofortige Antworten. Unsere KI-Chat-Agenten bearbeiten Anfragen, qualifizieren Leads und buchen sogar Termine, während Sie schlafen.",
    steps: [
      {
        title: "Schritt 1 – Sofortige Begrüßung",
        description: "Der KI-Agent begrüßt Besucher sofort, wenn sie einen Chat starten."
      },
      {
        title: "Schritt 2 – Bedarfsanalyse",
        description: "Die KI stellt intelligente Fragen, um genau zu verstehen, was der Kunde benötigt."
      },
      {
        title: "Schritt 3 – Echtzeit-Support",
        description: "Sofortige Antworten werden basierend auf der Wissensdatenbank Ihres Unternehmens geliefert."
      },
      {
        title: "Schritt 4 – Nahtlose Übergabe",
        description: "Komplexe Probleme oder heiße Leads werden sofort an Ihr menschliches Team übergeben."
      }
    ]
  },
  workflowDemo: {
    title: "Automatisierte Anzeigenüberwachung",
    subtitle: "Wie FlowToWork Ihre Anzeigen im Auge behält – ganz automatisch.",
    intro: "Diese Automatisierung arbeitet leise im Hintergrund, um sicherzustellen, dass Ihr Werbebudget sinnvoll eingesetzt wird. Statt täglich manuell die Ergebnisse zu prüfen, übernimmt das System das für Sie.",
    steps: [
      {
        title: "Schritt 1 – Täglicher Check",
        description: "Jeden Tag analysiert das System die Leistung Ihrer Anzeigen auf allen Plattformen."
      },
      {
        title: "Schritt 2 – Probleme erkennen",
        description: "Sollten die Ergebnisse plötzlich einbrechen, bemerkt das System dies sofort – bevor es teuer wird."
      },
      {
        title: "Schritt 3 – Sofortige Benachrichtigung",
        description: "Sie werden umgehend über Ihre bevorzugten Kanäle informiert, damit Sie schnell reagieren können."
      },
      {
        title: "Schritt 4 – Automatische Protokollierung",
        description: "Alle Ergebnisse werden automatisch gespeichert, sodass Sie eine klare Historie der Ereignisse haben."
      }
    ]
  },
  digitalMarketing: {
    hero: {
      title: "Digitales Marketing-Automatisierung",
      subtitle: "Steigern Sie Ihre Marke mit KI-gesteuerten Marketingstrategien, die Ihre Reichweite skalieren und den ROI maximieren."
    },
    sections: [
      {
        title: "SEO & Content-Strategie",
        description: "Nutzen Sie KI, um wirkungsvolle Keywords zu identifizieren und SEO-optimierte Inhalte zu erstellen, die Ihre Zielgruppe ansprechen.",
        features: ["Keyword-Recherche", "KI-Inhaltserstellung", "Leistungsverfolgung"]
      },
      {
        title: "Social Media Management",
        description: "Automatisieren Sie Ihre soziale Präsenz auf allen Plattformen mit intelligenten Planungs- und Engagement-Tools.",
        features: ["Auto-Posting", "Engagement-Analyse", "Trend-Erkennung"]
      },
      {
        title: "Optimierung bezahlter Werbung",
        description: "Maximieren Sie Ihre Werbeausgaben mit KI-gestützten Gebotsstrategien und kreativer Optimierung.",
        features: ["A/B-Tests", "Smart Bidding", "Zielgruppen-Targeting"]
      },
      {
        title: "E-Mail-Marketing-Kampagnen",
        description: "Bieten Sie personalisierte Erlebnisse in großem Maßstab mit automatisierten E-Mail-Sequenzen und Verhaltens-Triggern.",
        features: ["Segmentierung", "Drip-Kampagnen", "Analysen"]
      },
      {
        title: "Conversion-Rate-Optimierung",
        description: "Verwandeln Sie mehr Besucher in Kunden mit KI-gestützten Erkenntnissen und automatisierten Verbesserungen der User Journey.",
        features: ["Heatmaps", "Funnel-Analyse", "Personalisierung"]
      }
    ]
  },
  webDevelopment: {
    hero: {
      title: "Webentwicklungs-Services",
      subtitle: "Maßgeschneiderte, leistungsstarke Websites und Webanwendungen, die mit den neuesten Technologien entwickelt wurden, um Ihr Geschäft voranzutreiben."
    },
    sections: [
      {
        title: "Individuelle Webanwendungen",
        description: "Skalierbare und sichere Webanwendungen, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind, von internen Tools bis hin zu Portalen für Kunden.",
        features: ["Moderne Frameworks", "Responsive Design", "API-Integration"]
      },
      {
        title: "E-Commerce-Lösungen",
        description: "Robuste Online-Shops, die nahtlose Einkaufserlebnisse bieten und sich in Ihre bestehenden Inventar- und Zahlungssysteme integrieren lassen.",
        features: ["Sicherer Checkout", "Lagerverwaltung", "Benutzerkonten"]
      },
      {
        title: "Frontend-Entwicklung",
        description: "Ansprechende und schnell ladende Benutzeroberflächen, die auf allen Geräten ein außergewöhnliches Erlebnis bieten.",
        features: ["React & Next.js", "Tailwind CSS", "Interaktive UI"]
      },
      {
        title: "Backend & Infrastruktur",
        description: "Zuverlässige und effiziente serverseitige Logik und Datenbankverwaltung, um sicherzustellen, dass Ihre Anwendung reibungslos läuft.",
        features: ["Datenbankdesign", "Serverless Architecture", "Cloud Hosting"]
      },
      {
        title: "Wartung & Support",
        description: "Laufende Updates, Sicherheitspatches und Leistungsoptimierungen, um Ihre Webpräsenz auf Höchstleistung zu halten.",
        features: ["24/7 Überwachung", "Sicherheits-Audits", "Regelmäßige Updates"]
      }
    ]
  }
};
