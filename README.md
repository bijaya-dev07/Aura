# Aura AI - Automation for Everyone

A premium, modern, and high-performance landing page built with **Next.js 15**, **Tailwind CSS v4**, and **GSAP**. This project showcases a sophisticated AI SaaS aesthetic with smooth animations, unique UI/UX patterns, and a responsive design.

## ✨ Key Features

- **🚀 GSAP Animations**: Custom ScrollTriggered entrance animations and continuous floating sequences.
- **🖼️ Premium Asset Integration**: Custom-curated photography and SVG illustrations for a high-end look.
- **🔄 Infinite Carousels**: Bi-directional, seamless looping social proof and testimonial sections.
- **🎨 Unique Design System**:
  - **Ghost Numbering**: Stylized background numbers in feature cards.
  - **Glassmorphism**: Elegant blur effects and ambient background orbs.
  - **Premium Typography**: Instrument Sans & Instrument Serif pairing.
- **📱 Fully Responsive**: Optimized for all devices from mobile to large-scale desktops.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Instrument Sans & Serif)

## 📂 Project Structure

```text
├── app/
│   ├── globals.css      # Custom Tailwind v4 theme & utility classes
│   ├── layout.tsx       # Root layout with font configuration
│   └── page.tsx         # Main landing page assembly
├── components/
│   └── sections/
│       ├── Navbar.tsx      # Fixed glassmorphic navigation
│       ├── Hero.tsx        # High-impact animated splash section
│       ├── FeatureCards.tsx# Unique cards with ghost numbers & hover effects
│       ├── SocialProof.tsx # Dual-direction infinite carousels
│       ├── FeatureDetails.tsx# Deep-dive content blocks with parallax
│       ├── CTA.tsx         # Performance-focused call-to-action
│       └── Footer.tsx      # Comprehensive site map and links
└── public/               # Optimized images and SVGs
```

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Development

```bash
npm run dev
```

### 3. Build

```bash
npm run build
```

## 📐 Design Details

### Feature Cards UI/UX
The `FeatureCards` component uses a unique combination of semi-transparent ghost numbers (`01, 02, 03`) and dynamic "glow blobs" that react to user hover. This creates a tactile, premium feel that encourages interaction.

### Social Proof Carousel
Utilizes GSAP to create a non-clipping, infinite loop. The partner logos move in the opposite direction of the testimonials to create a subtle parallax depth effect as the user scrolls.

### Typography & Colors
- **Headline Font**: `Instrument Serif` (Italicized for emphasis)
- **Body Font**: `Instrument Sans`
- **Primary Accent**: `#D4FF80` (High-visibility Lime)
- **Background**: `#FCFCF9` (Soft Cream White)

---

Built with ❤️ for a modern AI future.
