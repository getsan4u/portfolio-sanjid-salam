# 🚀 Sanjid Salam - Cloud & DevSecOps Engineer Portfolio

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/getsan4u)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Modern, security-themed portfolio showcasing 5+ years of Cloud & DevSecOps expertise with AWS, Kubernetes, Terraform, and CI/CD automation.

**Portfolio URL:** [Your Live Site]

---

## 🎨 Design System

**DevOps Showpiece** - A technical, minimal design with strong AWS + Terraform + Kubernetes visual identity.

### Color Palette
```css
--dark-navy: #0A192F      /* Primary background */
--aqua-accent: #64FFDA    /* Highlights & CTAs */
--soft-grey: #8892B0      /* Body text */
--white: #FFFFFF          /* Headings */
```

### Typography
- **Inter** - Primary sans-serif
- **Poppins** - Headings
- **Fira Code** - Code elements

---

## ✨ Features

- 🎯 **Modern DevOps Design** - Security-themed with technical aesthetics
- 🌓 **Dark/Light Theme** - Toggle between themes
- � **Ful ly Responsive** - Mobile-first design
- ⚡ **Vite Powered** - Lightning-fast HMR and builds
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt
- ♿ **Accessible** - WCAG compliant with ARIA labels
- 🎨 **Smooth Animations** - Glow effects and transitions
- 🏗️ **Architecture Showcase** - Visual infrastructure diagram

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks
- **Vite 5.0.8** - Next-generation build tool
- **React Router 6.20.1** - Client-side routing
- **React Bootstrap 5.3.2** - UI components
- **React Icons 4.12.0** - Icon library
- **TypeScript Particles 2.12.2** - Interactive background
- **React Helmet Async 2.0.4** - SEO management
- **Typewriter Effect 2.21.0** - Dynamic text animations

### Styling
- **Bootstrap 5.3.2** - CSS framework
- **Custom CSS** - DevOps-themed design system

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/getsan4u/portfolio.git
cd portfolio

# Install dependencies
npm install --legacy-peer-deps

# Copy environment template
cp .env.example .env

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.png        # Site icon
│   ├── sanju.png          # Profile image
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots
│   └── sitemap.xml        # SEO sitemap
│
├── src/
│   ├── Assets/
│   │   └── Sanjid-Salam.pdf    # Resume PDF
│   │
│   ├── components/
│   │   ├── About/
│   │   │   └── About.jsx       # About page with certifications
│   │   ├── Blog/
│   │   │   └── Blog.jsx        # Blog section (coming soon)
│   │   ├── Contact/
│   │   │   └── Contact.jsx     # Contact form
│   │   ├── Home/
│   │   │   ├── Home.jsx        # Hero + tech stack
│   │   │   ├── Home2.jsx       # Introduction section
│   │   │   └── Type.jsx        # Typewriter effect
│   │   ├── Projects/
│   │   │   └── Projects.jsx    # Featured projects
│   │   ├── Resume/
│   │   │   ├── Resume.jsx      # Resume page
│   │   │   └── ResumeContent.jsx
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Particle.jsx        # Background particles
│   │   ├── Pre.jsx             # Preloader
│   │   └── ScrollToTop.jsx     # Scroll utility
│   │
│   ├── App.jsx            # Main app component
│   ├── index.jsx          # Entry point
│   ├── App.css            # App styles
│   ├── index.css          # Base styles
│   └── style.css          # Global styles
│
├── .env.example           # Environment template
├── .eslintrc.cjs          # ESLint config
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry
├── package.json           # Dependencies
├── vite.config.js         # Vite config
└── README.md              # This file
```

---

## 🎨 Portfolio Sections

### 1. Hero Section
- Professional introduction with dynamic typewriter
- Tech stack showcase (AWS, Terraform, Kubernetes, Docker, etc.)
- CTA buttons (View Projects, Download CV)
- GitHub profile link
- Build timestamp display

### 2. Introduction
- Professional background and achievements
- Quantifiable metrics (25% cost reduction, 90% compliance, 75% faster deployments)
- Social media links

### 3. Featured Projects
- **FSx to S3 Backup Automation** - Enterprise backup with SNS alerts
- **Docker Compose → EKS Migration** - Kubernetes migration with ArgoCD & Helm
- **DevSecOps GitHub Actions Pipeline** - Security scanning with Trivy, tfsec, gitleaks

### 4. Architecture Showcase
- Visual infrastructure diagram
- S3 + CloudFront + Route 53 + ACM
- Terraform IaC + GitHub Actions CI/CD

### 5. About
- Professional journey and expertise
- AWS & Azure certifications
- Contact information

### 6. Blog
- Technical articles (coming soon)
- DevOps insights and tutorials

### 7. Resume
- 5+ years work experience
- Skills and certifications
- Education background

### 8. Contact
- Contact form with validation
- Social media links
- Email integration

---

## 🎯 Customization

### Update Personal Information

**Contact Details:**
```javascript
// src/components/Contact/Contact.jsx
const email = "your.email@example.com";
```

**Social Links:**
```javascript
// src/components/Footer.jsx & Home2.jsx
const github = "https://github.com/yourusername";
const linkedin = "https://linkedin.com/in/yourprofile";
```

**Resume:**
```javascript
// src/components/Resume/Resume.jsx
// Update work experience, skills, education
```

### Change Theme Colors

```css
/* src/style.css */
html {
  --dark-navy: #0A192F;
  --aqua-accent: #64FFDA;
  --soft-grey: #8892B0;
}
```

### Add Projects

```javascript
// src/components/Projects/Projects.jsx
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tags: ["AWS", "Terraform", "Kubernetes"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com"
  }
];
```

---

## 🌐 Deployment

### Option 1: AWS S3 + CloudFront (Recommended)

**Why:** Demonstrates AWS expertise, cost-effective, scalable

```bash
# Build
npm run build

# Deploy to S3
aws s3 sync dist/ s3://your-bucket-name

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"
```

### Option 2: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 3: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 4: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📊 Performance

### Build Metrics
- **Build Time:** ~1.3s
- **Bundle Size:** 481 KB (150 KB gzipped)
- **Modules:** 724

### Lighthouse Scores (Target)
- **Performance:** 95+ ⚡
- **Accessibility:** 90+ ♿
- **Best Practices:** 95+ ✅
- **SEO:** 100 🔍

---

## � Security

- ✅ No hardcoded secrets
- ✅ Environment variables for sensitive data
- ✅ All external links use `rel="noopener noreferrer"`
- ✅ Form validation implemented
- ✅ XSS protection (React default)
- ✅ HTTPS ready

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Sanjid Salam** - Cloud & DevSecOps Engineer

- 📧 Email: sanjid.salam.p@gmail.com
- 💼 LinkedIn: [linkedin.com/in/sanjid-salam](https://www.linkedin.com/in/sanjid-salam/)
- 🔗 GitHub: [github.com/getsan4u](https://github.com/getsan4u)
- 🐦 Twitter: [@getsan4u](https://twitter.com/getsan4u)
- 📍 Location: Manchester, UK

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- React and Vite communities
- Bootstrap team
- React Icons contributors
- DevOps community
- All open source contributors

---

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_backend_url
VITE_GITHUB_USERNAME=getsan4u
```

**Note:** All environment variables must be prefixed with `VITE_` to be accessible in the application.

---

## 🐛 Known Issues

None currently. If you find any issues, please report them in the [Issues](https://github.com/getsan4u/portfolio/issues) section.

---

## 🔄 Version History

- **v2.0.0** (Current)
  - Complete redesign with DevOps theme
  - Migrated from Create React App to Vite
  - Updated to React 18 and React Router v6
  - Added dark/light theme toggle
  - Improved performance and SEO
  - Added blog section
  - Enhanced accessibility

---

<div align="center">

### ⭐ Star this repo if you find it useful!

**Built with ❤️ using React, Vite, and modern web technologies**

[![GitHub](https://img.shields.io/badge/GitHub-getsan4u-181717?logo=github)](https://github.com/getsan4u)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sanjid--salam-0077B5?logo=linkedin)](https://www.linkedin.com/in/sanjid-salam/)
[![Twitter](https://img.shields.io/badge/Twitter-@getsan4u-1DA1F2?logo=twitter)](https://twitter.com/getsan4u)

**Showcasing Cloud & DevSecOps Expertise**

</div>
