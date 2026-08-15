<div align="center">
  <h1>Vision Product UI Library v2.0</h1>
  <p><strong>A high-converting, ultra-premium Shopify Theme App Extension & Embedded Admin Dashboard suite.</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Shopify-OS%202.0-95BF47?style=for-the-badge&logo=shopify&logoColor=white" alt="Shopify OS 2.0" />
    <img src="https://img.shields.io/badge/Design-Ultra%20Premium-000000?style=for-the-badge" alt="Ultra Premium Design" />
    <img src="https://img.shields.io/badge/Icons-100%25%20Vector%20SVG-6366f1?style=for-the-badge" alt="100% Vector SVG" />
    <img src="https://img.shields.io/badge/Admin-Polaris%20Dashboard-008060?style=for-the-badge" alt="Polaris Admin Dashboard" />
  </p>
</div>

<br/>

## 🌟 What is Vision UI?

Vision UI is a beautifully engineered **Shopify Theme App Extension** designed to skyrocket conversion rates on Shopify Online Store 2.0 themes. It adds 19 high-converting, interactive storefront UI components, exit-intent discount popups, sticky buy bars, bundle cross-sells, and social proof notifications without requiring merchants to write code or install heavy third-party page builders.

---

## 🔥 Key Features

- **🎨 Shopify Theme Customizer Integration (Right Inspector Panel):** Full support for Shopify's right-hand settings inspector sidebar. Configure primary accent colors, border radii, sticky bars, and exit intent popups directly inside Shopify's Theme Editor.
- **⚡ Exit-Intent Discount Popup Engine:** Detects when desktop buyers move their cursor toward the viewport top edge or when mobile buyers scroll fast, presenting a high-converting coupon modal with countdown timers, single-click copy, and celebratory confetti.
- **🛒 Frequently Bought Together (Bundle Upsells):** Multi-product bundle card with automatic Shopify AJAX Cart (`/cart/add.js`) integration.
- **📱 Sticky Quick Buy Bar:** Floating bar (top/bottom) with product thumbnail, price, title, and instant checkout button.
- **💬 Floating Support & WhatsApp Widget:** Direct customer service trigger in the bottom corner.
- **🔔 Social Proof & Sales Toast Notifications:** Verified order activity popups for building store trust.
- **🎯 100% Vector SVG Icons:** No cheap emojis. Crisp, vector SVG icons handcrafted for every component.
- **🖥️ Embedded Polaris Admin Dashboard:** Built-in Express web server with Shopify Polaris UI embedded directly inside Shopify Admin (`/admin/apps/vision-ui`).
- **🌐 Full Localization:** Native multi-language translation support (Turkish & English default schemas).

---

## 🛠️ Included Components & Modules

### 1. Global App Embed Suite (`vision_app_embed.liquid`)
- **Right Panel Settings:** Global brand color overrides, border radius presets, custom CSS injection.
- **Sticky Buy Bar:** Floating bar with live scroll detection.
- **Sales Toast:** Auto-dismissing verified order popups.
- **WhatsApp Support:** Floating contact icon.

### 2. High-Converting Storefront Blocks (`blocks/*.liquid`)
1. **Exit-Intent Discount Popup:** Exit trigger, discount coupon copy, countdown timer, confetti particles.
2. **Frequently Bought Together:** Product bundle deal with instant multi-item AJAX add-to-cart.
3. **Size Chart Modal:** Popup modal with customizable size guide table & image.
4. **Live Viewers Counter:** Real-time visitor counter with animated live pulse indicator.
5. **Trust Badges:** Secure payment, shipping, and return guarantees with SVG icons.
6. **Product Benefits:** Feature list with icon highlight boxes.
7. **Delivery Timeline:** Visual shipping progress tracker (Ordered -> Shipped -> Delivered).
8. **Stock Indicator:** Animated stock bar with low stock urgency alerts.
9. **Before / After Slider:** Drag-to-compare image comparison widget.
10. **Interactive Hotspot:** Image hotspot tooltips.
11. **Review Summary:** Rating summary with star distributions.
12. **Product Comparison:** Brand comparison table.
13. **Infinite Marquee:** Continuous scrolling announcement text ticker.
14. **Hero Video Banner:** Responsive video background section.
15. **Sticky Countdown Bar:** Urgency timer bar for flash sales.
16. **Free Shipping Progress Bar:** Dynamic free shipping threshold progress tracker.
17. **Scroll Animator:** Scroll-triggered element entrance animator.
18. **Premium Footer:** Sleek footer design block.

---

## 💻 Tech Stack & Architecture

- **Extension Framework:** Shopify Theme App Extensions (Liquid, JSON Schema 2.0).
- **Styling System:** Modular CSS3 Design Tokens, Glassmorphism, CSS Grid, Flexbox (`vision-ui.css`).
- **Engine Logic:** Vanilla JS v2.0 (`vision-ui.js`) with LocalStorage caching & Shopify AJAX Cart integration.
- **Admin Dashboard:** Node.js, Express, Shopify Polaris UI CSS (`web/index.js`, `web/shopify.web.toml`).

---

## 🚀 Installation & Deployment

1. **Clone the repository:**
   ```bash
   git clone https://github.com/berkaysahin-dev/vision-product-ui.git
   cd vision-product-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

4. **Deploy Extension to Shopify:**
   ```bash
   npm run deploy
   ```

---

## 📄 License & Attribution

Designed and developed with precision by [Shaz Vision](https://shazvision.com).
