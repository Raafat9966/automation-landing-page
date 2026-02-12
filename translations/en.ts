import type { Translations } from './types'

export const en: Translations = {
  nav: {
    home: "Home",
    howItWorks: "How it Works",
    education: "Education",
    aiAgent: "AI Agent",
    workflows: "Workflows",
    about: "About",
    contact: "Contact",
    digitalMarketing: "Digital Marketing",
    webDevelopment: "Web Development",
    getStarted: "Get Started"
  },
  hero: {
    title1: "Automate Smarter.",
    title2: "Work Faster.",
    subtitle: "Harness the power of AI agents and intelligent automation workflows to transform your business operations, boost productivity, and scale effortlessly.",
    cta: "Get Started",
    features: {
      ai: "AI-Powered",
      fast: "Lightning Fast",
      secure: "Secure & Reliable"
    }
  },
  workflows: {
    title: "Powerful Workflow Solutions",
    subtitle: "Discover how our AI-driven automation workflows can revolutionize your business operations",
    items: [
      {
        title: "AI Email Automation",
        description: "Intelligent email sorting, auto-responses, and follow-up sequences powered by AI to save hours every day."
      },
      {
        title: "CRM Workflow Automation",
        description: "Streamline lead management, automate data entry, and trigger actions based on customer behavior patterns."
      },
      {
        title: "AI Chat Agents",
        description: "Deploy intelligent chatbots that handle customer inquiries, qualify leads, and provide 24/7 support."
      },
      {
        title: "Marketing Automation",
        description: "Automate campaigns, segment audiences, and optimize content distribution across multiple channels."
      }
    ],
    learnMore: "Learn more"
  },
  aiDemo: {
    title: "AI Agents in Action",
    subtitle: "Experience how our AI agents can transform your natural language prompts into automated actions. Try it out below!",
    inputPlaceholder: "Ask the agent to do something (e.g., 'Organize my daily schedule')",
    buttonLabel: "Run Agent",
    responseTitle: "Agent Response",
    processingLabel: "Processing...",
    mockResponse: "I've analyzed your request. Based on your prompt, I can automate this workflow by connecting your calendar, prioritizing tasks using AI, and setting up automated reminders. Your workflow is now optimized for maximum efficiency."
  },
  about: {
    title: "About",
    description1: "At FlowToWork, we believe that businesses should focus on what they do best—while intelligent automation handles the rest.",
    description2: "We specialize in creating cutting-edge automation workflows and deploying AI agents that streamline operations, reduce manual tasks, and unlock unprecedented efficiency gains.",
    description3: "Our mission is to empower organizations of all sizes to leverage the latest AI technology, optimize their business processes, and achieve sustainable growth in an increasingly competitive landscape.",
    stats: {
      faster: "Faster Workflows",
      ai: "AI Automation"
    },
    cards: [
      {
        title: "Efficiency First",
        description: "Optimize every aspect of your workflow"
      },
      {
        title: "AI-Powered Agents",
        description: "Deploy intelligent agents that learn and adapt"
      },
      {
        title: "Scalable Solutions",
        description: "Grow your business without growing complexity"
      }
    ]
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Ready to automate your workflow? Let's talk about your needs.",
    form: {
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Tell us about your automation needs...",
      send: "Send Message",
      successTitle: "Thank You!",
      successMessage: "We'll get back to you as soon as possible."
    },
    direct: "Or reach us directly:",
    tabs: {
      form: "Message Us",
      info: "Contact Info",
      social: "Social Media"
    }
  },
  footer: {
    description: "Empowering businesses with intelligent automation and AI-driven workflows.",
    quickLinks: "Quick Links",
    connect: "Connect With Us",
    rights: "All rights reserved. | Built with Next.js & Tailwind CSS"
  },
  waitlist: {
    title: "Join the FlowToWork Waiting List",
    subtitle: "Be the first to access powerful automation workflows and AI agent solutions.",
    form: {
      name: "Full Name",
      namePlaceholder: "Your full name",
      email: "Email Address",
      emailPlaceholder: "your@email.com",
      company: "Company (optional)",
      companyPlaceholder: "Your company name",
      interest: "Primary Interest",
      interestOptions: {
        placeholder: "Select your primary interest",
        automation: "Automation workflows",
        agents: "AI agents",
        both: "Both"
      },
      submit: "Join the Waiting List",
      loading: "Joining...",
      successTitle: "You're on the list!",
      successMessage: "Thank you for your interest. We'll be in touch with early access and updates.",
      error: "Something went wrong. Please try again.",
      joinAnother: "Join with another email",
      spamNote: "No spam. Only product updates and early access."
    }
  },
  education: {
    title: "Automation vs AI Agents — What’s the Difference?",
    introduction: "Understanding the distinction between traditional automation and AI agents is key to choosing the right solution for your business. While both aim to increase efficiency, they operate in fundamentally different ways.",
    automation: {
      title: "Automation",
      subtitle: "Rule-based efficiency",
      features: [
        "Rule-based workflows",
        "Trigger → Action logic",
        "Best for repetitive, predictable tasks"
      ],
      examples: {
        title: "Examples:",
        items: [
          "Email automation",
          "CRM updates",
          "Data synchronization"
        ]
      }
    },
    aiAgents: {
      title: "AI Agents",
      subtitle: "Context-aware intelligence",
      features: [
        "Context-aware decision making",
        "Use AI models to reason and respond",
        "Adapt to inputs and goals"
      ],
      examples: {
        title: "Examples:",
        items: [
          "AI chat assistants",
          "Autonomous workflow orchestration",
          "Intelligent decision support"
        ]
      }
    },
    summary: "At FlowToWork, we combine the reliability of rule-based automation with the intelligence of AI agents to create the most efficient and scalable solutions for your business."
  },
  automationFlow: {
    title: "How Automation Works",
    subtitle: "From trigger to action — automation made simple.",
    steps: [
      {
        title: "Trigger",
        text: "A trigger is the event that starts the automation. For example, when a form is submitted or an email arrives."
      },
      {
        title: "Logic",
        text: "Rules decide what happens next. Conditions help the system understand what action to take."
      },
      {
        title: "Action",
        text: "The automation performs tasks automatically, like sending emails, updating systems, or creating records."
      },
      {
        title: "Result",
        text: "The task is completed instantly, saving time and reducing manual work."
      }
    ]
  },
  emailAutomationDemo: {
    title: "AI Email Automation",
    subtitle: "Your inbox, managed by AI — automatically.",
    intro: "Stop spending hours sorting through emails. This automation uses AI to understand, categorize, and respond to your messages, so you only focus on what truly matters.",
    steps: [
      {
        title: "Step 1 – Inbox Monitoring",
        description: "The AI monitors your incoming emails in real-time as they arrive."
      },
      {
        title: "Step 2 – Intelligent Sorting",
        description: "AI reads and categorizes emails based on urgency and topic."
      },
      {
        title: "Step 3 – Draft Generation",
        description: "Smart drafts are created for common inquiries, ready for your approval."
      },
      {
        title: "Step 4 – Action Taken",
        description: "Emails are archived, forwarded, or replied to automatically based on your rules."
      }
    ]
  },
  crmAutomationDemo: {
    title: "CRM Workflow Automation",
    subtitle: "Keep your sales pipeline moving — automatically.",
    intro: "Never lose a lead again. This workflow automates the tedious data entry and follow-up tasks in your CRM, ensuring your sales team stays focused on closing deals.",
    steps: [
      {
        title: "Step 1 – Lead Capture",
        description: "New leads are automatically pulled from forms or ads into your CRM."
      },
      {
        title: "Step 2 – Data Enrichment",
        description: "AI adds missing company info and social profiles to the lead record."
      },
      {
        title: "Step 3 – Smart Assignment",
        description: "Leads are assigned to the right team member based on location or expertise."
      },
      {
        title: "Step 4 – Auto Follow-up",
        description: "Personalized follow-up sequences are triggered to keep the lead engaged."
      }
    ]
  },
  chatAgentDemo: {
    title: "AI Chat Agents",
    subtitle: "24/7 customer support — automatically.",
    intro: "Provide instant answers to your customers at any time. Our AI Chat Agents handle inquiries, qualify leads, and even book meetings while you sleep.",
    steps: [
      {
        title: "Step 1 – Instant Greeting",
        description: "The AI agent greets visitors immediately when they start a chat."
      },
      {
        title: "Step 2 – Needs Discovery",
        description: "AI asks smart questions to understand exactly what the customer needs."
      },
      {
        title: "Step 3 – Real-time Support",
        description: "Instant answers are provided using your company's knowledge base."
      },
      {
        title: "Step 4 – Seamless Handoff",
        description: "Complex issues or hot leads are instantly passed to your human team."
      }
    ]
  },
  workflowDemo: {
    title: "Automated Ad Performance Monitoring",
    subtitle: "How FlowToWork keeps an eye on your ads — automatically.",
    intro: "This automation works quietly in the background to make sure your advertising budget is used wisely. Instead of manually checking results every day, the system does it for you.",
    steps: [
      {
        title: "Step 1 – Daily Check",
        description: "Every day, the system looks at how your ads performed across your platforms."
      },
      {
        title: "Step 2 – Spotting Problems",
        description: "If results suddenly drop, the system notices it immediately — before it becomes expensive."
      },
      {
        title: "Step 3 – Instant Alerts",
        description: "You get notified right away through your preferred channels, so you can take action fast."
      },
      {
        title: "Step 4 – Keeping a Record",
        description: "All results are saved automatically, giving you a clear history of what happened and when."
      }
    ]
  },
  digitalMarketing: {
    hero: {
      title: "Digital Marketing Automation",
      subtitle: "Elevate your brand with AI-driven marketing strategies that scale your reach and maximize ROI."
    },
    sections: [
      {
        title: "SEO & Content Strategy",
        description: "Leverage AI to identify high-impact keywords and generate SEO-optimized content that resonates with your audience.",
        features: ["Keyword Research", "AI Content Generation", "Performance Tracking"]
      },
      {
        title: "Social Media Management",
        description: "Automate your social presence across all platforms with intelligent scheduling and engagement tools.",
        features: ["Auto-Posting", "Engagement Analysis", "Trend Detection"]
      },
      {
        title: "Paid Advertising Optimization",
        description: "Maximize your ad spend with AI-powered bidding strategies and creative optimization.",
        features: ["A/B Testing", "Smart Bidding", "Audience Targeting"]
      },
      {
        title: "Email Marketing Campaigns",
        description: "Deliver personalized experiences at scale with automated email sequences and behavioral triggers.",
        features: ["Segmentation", "Drip Campaigns", "Analytics"]
      },
      {
        title: "Conversion Rate Optimization",
        description: "Turn more visitors into customers using AI-driven insights and automated user journey improvements.",
        features: ["Heatmaps", "Funnel Analysis", "Personalization"]
      }
    ]
  },
  webDevelopment: {
    hero: {
      title: "Web Development Services",
      subtitle: "Custom, high-performance websites and web applications built with the latest technologies to drive your business forward."
    },
    sections: [
      {
        title: "Custom Web Applications",
        description: "Scalable and secure web applications tailored to your specific business needs, from internal tools to customer-facing portals.",
        features: ["Modern Frameworks", "Responsive Design", "API Integration"]
      },
      {
        title: "E-commerce Solutions",
        description: "Robust online stores that provide seamless shopping experiences and integrate with your existing inventory and payment systems.",
        features: ["Secure Checkout", "Inventory Management", "User Accounts"]
      },
      {
        title: "Frontend Development",
        description: "Engaging and fast-loading user interfaces that provide an exceptional experience across all devices.",
        features: ["React & Next.js", "Tailwind CSS", "Interactive UI"]
      },
      {
        title: "Backend & Infrastructure",
        description: "Reliable and efficient server-side logic and database management to ensure your application runs smoothly.",
        features: ["Database Design", "Serverless Architecture", "Cloud Hosting"]
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing updates, security patches, and performance optimizations to keep your web presence peak performance.",
        features: ["24/7 Monitoring", "Security Audits", "Regular Updates"]
      }
    ]
  }
};
