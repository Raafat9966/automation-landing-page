# FlowToWork - Automation Landing Page

A modern, high-quality one-page landing website for FlowToWork, promoting automation workflows and AI agent services.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **JavaScript** (no TypeScript)
- **React 18**
- Component-based architecture

## 🎨 Brand Colors

- **Primary**: #3F9AAE
- **Secondary**: #79C9C5
- **Accent**: #FFE2AF
- **Highlight/CTA**: #F96E5B

## 📋 Features

- ✅ Sticky navigation with smooth scrolling
- ✅ Animated hero section with gradient background
- ✅ Workflow use-cases grid with hover effects
- ✅ About section with feature highlights
- ✅ Functional contact form
- ✅ Responsive footer with social links
- ✅ Mobile-first, fully responsive design
- ✅ SEO-optimized with meta tags
- ✅ Accessible (ARIA labels, focus states)
- ✅ Smooth animations and transitions

## 🏗️ Project Structure

```
automation-landing-page/
├── app/
│   ├── components/
│   │   ├── Navbar.js          # Sticky navigation bar
│   │   ├── Hero.js            # Hero section with CTA
│   │   ├── WorkflowCards.js   # Workflow use-cases grid
│   │   ├── About.js           # About FlowToWork section
│   │   ├── ContactForm.js     # Contact form
│   │   └── Footer.js          # Footer with social links
│   ├── layout.js              # Root layout with metadata
│   ├── page.js                # Main page component
│   └── globals.css            # Global styles
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Page Sections

1. **Navigation Bar** - Sticky header with smooth scroll links
2. **Hero Section** - Eye-catching headline with gradient background and CTA
3. **Workflow Use-Cases** - Grid showcasing 4 automation solutions
4. **About Section** - Company information and feature highlights
5. **Contact Form** - Simple form with validation
6. **Footer** - Brand info, quick links, and social media

## 🎨 Design Features

- Clean, modern, minimal aesthetic
- Soft shadows and rounded corners
- Smooth hover animations
- Gradient backgrounds
- Consistent spacing and typography
- Mobile-responsive layouts
- Accessible color contrast

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Brand Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3F9AAE',
      secondary: '#79C9C5',
      accent: '#FFE2AF',
      highlight: '#F96E5B',
    },
  },
}
```

### Modify Content

Each component is located in `app/components/` and can be easily edited to update content, add features, or change styling.

## 📄 License

Copyright © 2026 FlowToWork. All rights reserved.

## 🤝 Contributing

This is a custom landing page project. For questions or support, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS

