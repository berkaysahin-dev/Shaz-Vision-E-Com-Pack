<div align="center">

# SHAZ VISION E-COM PACK
### *All-in-One E-Commerce Management Suite, Storefront Theme & UI Extension Pack*

<p align="center">
  <strong>A unified enterprise command center consolidating 8 specialized e-commerce engines, data processors, a full Shopify Liquid 2.0 theme, and conversion UI extension.</strong>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Public%20Release-blue.svg?style=flat-square)](https://github.com/berkaysahin-dev/Shaz-Vision-E-Com-Pack)

---

[Overview](#overview) •
[Integrated 8 Projects & Engines](#integrated-8-projects--engines) •
[Distribution Packages (Theme & Extension)](#distribution-packages-theme--extension) •
[System Architecture](#system-architecture) •
[Quick Start & Installation](#quick-start--installation) •
[Module Details & Functionality](#module-details--functionality) •
[License](#license)

</div>

---

## Overview

**Shaz Vision E-Com Pack** is an end-to-end management and scaling ecosystem built for e-commerce brands, marketplace sellers, and digital marketing agencies.

Eight independently developed e-commerce software products—spanning unit economics calculations, ads performance diagnostics, multi-channel marketplace inventory synchronization, and Shopify theme/extension distributions—have been unified into a **single, high-speed, modern web software suite**.

---

## Integrated 8 Projects & Engines

| # | Project Name | Description & Primary Function | Suite Route | Source Repository |
|:---|:---|:---|:---|:---|
| 1 | **Vision Profit Calc** | SKU-level net profit, VAT, marketplace commissions, logistics, break-even ROAS & POAS simulator | `/profit-calc` | [GitHub](https://github.com/berkaysahin-dev/Vision-Profit-Calc) |
| 2 | **Vision Ads Metrics Bot** | Meta, Google, and TikTok Ads CSV report parser, derived KPI calculator, and algorithmic diagnostics | `/ads-metrics` | [GitHub](https://github.com/berkaysahin-dev/Vision-Ads-Metrics-Bot) |
| 3 | **Vision AI Customer Support** | Advertising hook/angle analyzer with retention scoring and structured support reply generator | `/ai-support` | [GitHub](https://github.com/berkaysahin-dev/Vision-AI-Customer-Support) |
| 4 | **Vision Sync** | Multi-channel marketplace synchronization bridge (Shopify, Trendyol, Hepsiburada, Amazon) & SKU manager | `/vision-sync` | [GitHub](https://github.com/berkaysahin-dev/Vision-Sync) |
| 5 | **Vision Pro Shopify** | Complete Shopify Online Store 2.0 (Liquid 2.0) storefront theme package | **Downloadable `.zip`** (`/downloads`) | [GitHub](https://github.com/berkaysahin-dev/Vision-Pro-Shopify) |
| 6 | **Vision Content Extractor** | Multi-modal web scraping sandbox and structured JSON product schema extractor | `/content-extractor` | [GitHub](https://github.com/berkaysahin-dev/Vision-Content-Extractor) |
| 7 | **Vision Product Intelligence** | Market trend product hunter (AliExpress, Amazon, Trendyol) & competitor price radar | `/product-intelligence` | [GitHub](https://github.com/berkaysahin-dev/Vision-Product-Intelligence) |
| 8 | **Vision Product UI** | 20+ conversion-boosting liquid blocks & widgets Shopify App Extension package | **Downloadable `.zip`** (`/downloads`) | [GitHub](https://github.com/berkaysahin-dev/vision-product-ui) |

---

## Distribution Packages (Theme & Extension)

Accessible directly from the **Distribution & Download Hub (`/downloads`)** within the suite:

### 1. Vision Pro Shopify Theme (`Vision-Pro-Shopify-Theme.zip` • 1.79 MB)
- **Type**: Shopify Online Store 2.0 Liquid Theme
- **Features**: Full Liquid 2.0 JSON templates, mega menu, variant selector, sticky add-to-cart drawer, quantity breaks, free shipping progress bar, and size chart modal.
- **Installation**:
  1. Download `Vision-Pro-Shopify-Theme.zip`.
  2. In your Shopify Admin, navigate to **Online Store > Themes**.
  3. Click **Add Theme > Upload zip file**, select the downloaded archive, and publish.

### 2. Vision Product UI Extension (`Vision-Product-UI-Extension.zip` • 656 KB)
- **Type**: Shopify App Extension / Theme Embed Widget Pack
- **License Protection**: This package is secured via license verification.
- **Authorized License Key**: `SHAZ-VISION-UI-EXTENSION`
- **Contents**: 20+ conversion widgets (Countdown timer bar, free shipping progress, before/after image slider, delivery timeline, trust badges, interactive hotspots).
- **Installation**:
  1. On the `/downloads` page, enter the license key `SHAZ-VISION-UI-EXTENSION` to verify and download the archive.
  2. Deploy via Shopify CLI (`shopify app deploy`) or activate the widgets as App Embeds directly within your Shopify Theme Editor.

---

## System Architecture

```
Shaz-Vision-E-Com-Pack/
├── public/
│   └── downloads/
│       ├── Vision-Pro-Shopify-Theme.zip      # Complete Shopify Theme (1.79 MB)
│       └── Vision-Product-UI-Extension.zip   # Licensed UI Extension (656 KB)
├── packages/
│   ├── theme-vision-pro-shopify/             # Unbundled theme source code
│   └── extension-vision-product-ui/          # Unbundled extension source code
├── src/
│   ├── app/
│   │   ├── page.tsx                          # Executive Suite Overview & Directory
│   │   ├── profit-calc/page.tsx              # Unit Economics & Profit Engine
│   │   ├── ads-metrics/page.tsx              # Ads KPI & CSV Parser Engine
│   │   ├── ai-support/page.tsx               # Hook Analyzer & Support Copywriter
│   │   ├── vision-sync/page.tsx              # Multi-Channel Sync & SKU Mapping
│   │   ├── content-extractor/page.tsx        # Web & Visual Content Extractor
│   │   ├── product-intelligence/page.tsx     # Product Hunter & Competitor Radar
│   │   └── downloads/page.tsx                # Distribution Hub (License Protected)
│   ├── components/                           # Sidebar, TopBar, MetricCard, ShazVisionSignature
│   └── lib/                                  # Pure financial math models, parsers, and types
├── package.json
└── tsconfig.json
```

---

## Quick Start & Installation

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later

### 1. Clone the Repository
```bash
git clone https://github.com/berkaysahin-dev/Shaz-Vision-E-Com-Pack.git
cd Shaz-Vision-E-Com-Pack
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser to access the suite.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## Module Details & Functionality

### 1. Vision Profit Calc (`/profit-calc`)
- **Unit Economics Math Engine**: Input sale price, COGS, marketplace commission, payment gateway fees, fixed shipping, packaging, and return risk percentage to compute precise net profit and net margin.
- **VAT Inclusivity Toggle**: Switch between VAT-inclusive and VAT-exclusive pricing models.
- **Marketplace Presets**: 1-click presets for Trendyol (21%), Hepsiburada (19.5%), Amazon TR (15%), and Shopify (2.8%).
- **Break-Even Diagnostics**: Instant calculation of Break-even ROAS threshold and Profit on Ad Spend (POAS) factor.
- **JSON Export**: Export full calculation breakdowns in formatted JSON with one click.

### 2. Vision Ads Metrics Bot (`/ads-metrics`)
- **Drag-and-Drop CSV Upload**: Ingest raw campaign exports from Meta Ads Manager, Google Ads, or TikTok Ads.
- **Dynamic Header Normalization**: Automatically matches standard and custom column names across ad networks.
- **Derived KPI Engine**: Computes ROAS (Revenue/Spend), CPA (Spend/Conversions), CTR (Clicks/Impressions), and CPC (Spend/Clicks).
- **Algorithmic Diagnostics**: Flags scaling opportunities (e.g. ROAS > 3.5x for budget scale) and underperforming ad sets.

### 3. Vision AI Support & Creative Generator (`/ai-support`)
- **Creative & Hook Analyzer**: Evaluates short-form video hooks based on platform (TikTok, Reels, Shorts), hook archetype (Curiosity Gap, Problem First, Pattern Interrupt, Bold Claim), angle, and CTA to score virality, watch time retention, and generate structured 4-part scripts.
- **Customer Support Template Generator**: Produces professional, empathetic ticket replies for order tracking, refund/exchange requests, and product inquiries with customer name and order ID tags.

### 4. Vision Sync (`/vision-sync`)
- **Marketplace Status Monitors**: Live latency and connection monitors for Shopify, Trendyol, Hepsiburada, and Amazon TR.
- **SKU Mapping Table**: Add, delete, and manage source-to-channel SKU barcode mappings with stock levels and price multipliers.
- **Event Logging**: Real-time webhook and synchronization activity stream.

### 5. Vision Content Extractor (`/content-extractor`)
- **Web & Visual Parser Sandbox**: Extract clean product titles, brand metadata, variant matrices, technical specifications, and inventory statuses from any product URL into validated JSON.

### 6. Vision Product Intelligence (`/product-intelligence`)
- **Product Hunter**: Search keywords across Trendyol, Amazon TR, and AliExpress to estimate monthly order volume, average market price, sourcing cost, and profit margin potential.
- **Competitor Price Tracker**: Monitor competitor stores, track price differences, and receive price undercut/dumping alerts.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

---

<div align="center">
  <p><strong>shazvision.com • SHAZ VISION</strong></p>
  <p>© 2026 SHAZ VISION. All rights reserved.</p>
</div>