# Mesh Website - Development Task List

**Project Goal**: Build a modern, engaging website for "mesh" - a hackerlab community that seeks and develops talent through hands-on building.

## 🎯 Project Overview

Based on the provided presentation slides, this website will showcase mesh's community-driven approach to learning and building, featuring their philosophy "dream it. build it."

---

## 📋 Development Tasks

### 🏗️ Project Setup & Architecture


- [ ] **Component architecture**
  - [ ] Create reusable UI components (Button, Card, Container, etc.)
  - [ ] Set up component library structure
  - [ ] Implement responsive design system
  - [ ] Create typography and color scheme based on slides

### 🎨 Homepage Sections

#### 1. Hero Section

- [ ] **Header/Navigation**
  - [ ] Create responsive navigation bar
  - [ ] Add mesh logo and branding
  - [ ] Implement smooth scroll navigation
  
- [ ] **Hero Banner**
  - [ ] "dream it. build it." tagline with impactful typography
  - [ ] Background design/animation
  - [ ] Call-to-action button leading to join process

#### 2. Value Proposition Section

- [ ] **"What we propose" vs "What we require"**
  - [ ] Two-column layout (responsive)
  - [ ] Animated cards for each value proposition:
    - **We propose**: Vibrant community, Opportunities, Mentorship, Office space & tools, Testing platform, Engineer-led community
    - **We require**: Dedication, Building something bold, Frequent communication, Community activity
  - [ ] Interactive hover effects
  - [ ] Bottom tagline: "this is the equation to become a great builder at mesh."

#### 3. How to Join Section

- [ ] **4-Step Process Cards**
  - [ ] Step 1: Fill out application form and apply with a project
  - [ ] Step 2: Take part in the onboarding talk  
  - [ ] Step 3: Build for 8 weeks to show dedication
  - [ ] Step 4: Get selected to gain full access to our community
  - [ ] Prominent "start building" CTA button
  - [ ] Add multilingual support (Hungarian text visible in slides)

#### 4. Projects Showcase

- [ ] **Project Cards Grid**
  - [ ] Implement flip cards or modal system for front/back content
  - [ ] Start with Agroloon project:
    - Project description about high-altitude balloon agriculture technology
    - Project lead: Domokos Kertész
    - Front/back card design
  - [ ] Scalable system for adding more projects
  - [ ] Filter/category system for different project types

#### 5. Philosophy Section

- [ ] **"BUILD. SHARE. HELP." Header**
- [ ] **Core Values List**
  - [ ] "Learn it by doing. Never met the tech? You'll learn it here."
  - [ ] "Experimentation over perfection. We're product-first. 70% ready is ready."
  - [ ] "Community over ego. Feedback, pair-programming, shared wins."
  - [ ] "Shared knowledge. Openness to all skill levels, no limits."
  - [ ] "Collective ownership."
- [ ] Animated text reveals or typing effects
- [ ] Visual icons for each philosophy point

#### 6. Community Showcase

- [ ] **"Take the next step" Section**
  - [ ] Photo gallery showing people working
  - [ ] "either in software" and "or in hardware" sections
  - [ ] Responsive image grid
  - [ ] Overlay text animations

#### 7. Our Story

- [ ] **Narrative Section**
  - [ ] Budapest dorm cafeteria origin story
  - [ ] Community evolution timeline
  - [ ] "If that sounds like your kind of fun, let's build something together."
  - [ ] "join us" CTA button
- [ ] Storytelling animations (scroll-triggered)
- [ ] Background imagery or illustrations

#### 8. Events Section

- [ ] **Event Types Display**
  - [ ] LECTURES, HACKATHONS, DEMO DAYS cards
  - [ ] Event photos/imagery
  - [ ] "Once you're a member, you'll get access to all community events..." description
- [ ] **Upcoming Events**
  - [ ] Dynamic events calendar/list
  - [ ] Event registration integration
  - [ ] Past events archive

#### 9. Footer/Final CTA

- [ ] **Final mesh branding**
  - [ ] "We're a hackerlab where we seek and develop talent."
  - [ ] Contact information
  - [ ] Social media links
  - [ ] Newsletter signup

### 🎭 Interactive Features

- [ ] **Animations & Micro-interactions**
  - [ ] Smooth scroll effects
  - [ ] Card hover animations
  - [ ] Text reveal animations
  - [ ] Button hover states
  - [ ] Loading animations

### 📱 Responsive Design

- [ ] **Mobile-first approach**
  - [ ] Mobile navigation (hamburger menu)
  - [ ] Touch-friendly interactions
  - [ ] Optimized images and loading
- [ ] **Tablet & desktop optimization**
- [ ] **Cross-browser testing**

### 🚀 Performance & SEO

- [ ] **Performance optimization**
  - [ ] Image optimization (Next.js Image component)
  - [ ] Lazy loading implementation
  - [ ] Code splitting
  - [ ] Bundle size optimization

- [ ] **SEO & Accessibility**
  - [ ] Meta tags and Open Graph
  - [ ] Structured data
  - [ ] Accessibility compliance (WCAG)
  - [ ] Semantic HTML structure

---

## 🎨 Design Guidelines

- **Color Scheme**: Dark theme with bright accent colors (cyan/blue gradients visible in slides)
- **Typography**: Bold, modern fonts for headings; clean sans-serif for body text
- **Style**: Minimalist, tech-focused aesthetic with emphasis on community and building
- **Brand Voice**: Inspiring, direct, community-focused ("dream it. build it.")

## 🔄 Development Workflow

1. Start with mobile-first responsive design
2. Build components in isolation
3. Implement sections progressively
4. Add animations and interactions
5. Optimize performance
6. Test across devices and browsers
7. Deploy and monitor

---

**Target Launch**: [Set your timeline]
**Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
**Deployment**: Vercel
