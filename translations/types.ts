export interface Translations {
  nav: {
    home: string
    workflows: string
    about: string
    aiAgent: string
    contact: string
    getStarted: string
  }
  hero: {
    title1: string
    title2: string
    subtitle: string
    cta: string
    features: {
      ai: string
      fast: string
      secure: string
    }
  }
  workflows: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
    }>
    learnMore: string
  }
  aiDemo: {
    title: string
    subtitle: string
    inputPlaceholder: string
    buttonLabel: string
    responseTitle: string
    processingLabel: string
    mockResponse: string
  }
  about: {
    title: string
    description1: string
    description2: string
    description3: string
    stats: {
      faster: string
      ai: string
    }
    cards: Array<{
      title: string
      description: string
    }>
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      message: string
      messagePlaceholder: string
      send: string
      successTitle: string
      successMessage: string
    }
    direct: string
    tabs: {
      form: string
      info: string
      social: string
    }
  }
  footer: {
    description: string
    quickLinks: string
    connect: string
    rights: string
  }
  waitlist: {
    title: string
    subtitle: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      company: string
      companyPlaceholder: string
      interest: string
      interestOptions: {
        placeholder: string
        automation: string
        agents: string
        both: string
      }
      submit: string
      loading: string
      successTitle: string
      successMessage: string
      error: string
      joinAnother: string
      spamNote: string
    }
  }
  education: {
    title: string
    introduction: string
    automation: {
      title: string
      subtitle: string
      features: string[]
      examples: {
        title: string
        items: string[]
      }
    }
    aiAgents: {
      title: string
      subtitle: string
      features: string[]
      examples: {
        title: string
        items: string[]
      }
    }
    summary: string
  }
  automationFlow: {
    title: string
    subtitle: string
    steps: Array<{
      title: string
      text: string
    }>
  }
  emailAutomationDemo: {
    title: string
    subtitle: string
    intro: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  crmAutomationDemo: {
    title: string
    subtitle: string
    intro: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  chatAgentDemo: {
    title: string
    subtitle: string
    intro: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  workflowDemo: {
    title: string
    subtitle: string
    intro: string
    steps: Array<{
      title: string
      description: string
    }>
  }
}
