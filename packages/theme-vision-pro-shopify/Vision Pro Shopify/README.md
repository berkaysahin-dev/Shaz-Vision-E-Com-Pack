# Vision Pro Shopify 🛍️🚀

> Premium, conversion-focused Shopify 2.0 theme designed for high-performance e-commerce, immersive product showcases, and maximized average order value (AOV).

---

## 🌟 Overview

**Vision Pro Shopify** is an advanced Shopify 2.0 theme crafted to deliver modern, lightning-fast shopping experiences with built-in sales growth tools. Engineered with customized Liquid components, interactive product blocks, and dynamic UI elements, it eliminates the need for expensive third-party apps by providing native conversion utilities out of the box.

---

## ✨ Key Features & Capabilities

- **🛒 High-Conversion Cart & Drawer**: Integrated slide-out Cart Drawer (`cart-drawer.liquid`) featuring dynamic thresholds, cart up-sells, free shipping progression bars, and sticky checkout buttons.
- **⚡ Advanced Merchandising & Upsells**:
  - **Bundle Deals** (`bundle-deals.liquid`): Incentivize multi-item purchases with customizable bundle discounts.
  - **Quantity Breaks & Gifts** (`quantity-breaks.liquid`, `quantity-gifts.liquid`): Volume-based tiered pricing and tiered free gift incentives.
  - **Upsell & Cross-Sell Blocks** (`upsell-block.liquid`): Seamless in-stream product recommendation modules on product pages and in the cart.
- **📊 Interactive Product Showcases**:
  - **Comparison Slider & Table** (`comparison-slider.liquid`, `comparison-table.liquid`): Interactive before/after image visualizers and detailed feature specification matrices.
  - **Content & Custom Tabs** (`content-tabs.liquid`): Tabbed information display for specs, shipping, and FAQs.
  - **Sizing Chart & Accordions** (`sizing-chart.liquid`): Custom sizing guide popups and collapsible content panels.
- **🎨 Interactive Customization**:
  - **Color Changer & Custom Columns** (`colors-changer.liquid`, `custom-columns.liquid`): On-the-fly theme/color mode customization and responsive column layouts.
  - **Global Ambient Music Player** (`global-music-player.liquid`): Optional background audio player for lifestyle & branding experience.
- **📱 Mobile-First Responsive Design**: Optimized for touch controls, fast load times, and fluid screen transitions across mobile, tablet, and desktop devices.
- **⚡ Shopify 2.0 Architecture**: Built with JSON templates, customizable sections/snippets, nested blocks, and context variants.

---

## 📁 Repository Architecture

```text
Vision-Pro-Shopify/
├── Vision Pro Shopify/        # Core Shopify Theme Root
│   ├── assets/                # Stylesheets (CSS), Scripts (JS), and Theme Media
│   ├── config/                # Theme settings schema (settings_schema.json, settings_data.json)
│   ├── layout/                # Main theme layouts (theme.liquid, password.liquid)
│   ├── locales/               # Internationalization & translation dictionary files
│   ├── sections/              # Modular Shopify 2.0 sections (Header, Footer, Bundles, etc.)
│   ├── snippets/              # Reusable Liquid components & icons (Price, Rating, Upsells)
│   └── templates/             # JSON and Liquid page templates (Index, Product, Cart, Collection)
└── README.md                  # Technical & setup documentation
```

---

## 🛠️ Tech Stack

- **Shopify Liquid**: Dynamic templating engine optimized for Shopify Online Store 2.0
- **JavaScript (Vanilla ES6+)**: Lightweight, zero-dependency client-side interactivity
- **CSS3 / Scoped Styles**: Modern CSS custom properties, flexbox/grid responsive layouts
- **Shopify CLI**: Command-line tooling for theme development, testing, and deployment

---

## 🚀 Getting Started & Local Development

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v16.0 or higher)
- **Shopify CLI**: Install via npm if not already available:
  ```bash
  npm install -g @shopify/cli @shopify/theme
  ```

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/berkaysahin-dev/Vision-Pro-Shopify.git
   cd Vision-Pro-Shopify
   ```

2. **Navigate to the theme directory**:
   ```bash
   cd "Vision Pro Shopify"
   ```

3. **Authenticate with Shopify CLI**:
   ```bash
   shopify auth login
   ```

4. **Start the local development server**:
   ```bash
   shopify theme dev --store <your-store-name>.myshopify.com
   ```
   This will spin up a local preview server with hot-reloading enabled.

---

## 📦 Deployment

To publish or push changes to your Shopify store:

```bash
# Push changes to a development theme
shopify theme push

# Publish theme to live production store
shopify theme publish
```

---

## 📄 License & Copyright

© Shaz Vision. All rights reserved.  
Developed & maintained by [Berkay Şahin](https://github.com/berkaysahin-dev).