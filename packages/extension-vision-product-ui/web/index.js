const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vision Product UI - Admin Control Center</title>
      <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@12.0.0/build/esm/styles.css" />
      <style>
        :root {
          --vision-primary: #6366f1;
          --vision-primary-dark: #4f46e5;
          --vision-bg: #0f172a;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
          background: #f1f5f9;
          margin: 0;
          padding: 32px 24px;
          color: #0f172a;
        }
        .vision-container {
          max-width: 1080px;
          margin: 0 auto;
        }
        .vision-hero-card {
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%);
          border-radius: 20px;
          padding: 36px 40px;
          color: #ffffff;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.25);
          position: relative;
          overflow: hidden;
          margin-bottom: 28px;
        }
        .vision-hero-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }
        .vision-hero-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          position: relative;
          z-index: 2;
        }
        .vision-hero-title {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .vision-pill {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          color: #34d399;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .vision-hero-desc {
          font-size: 15px;
          color: #94a3b8;
          margin: 0;
          max-width: 600px;
          line-height: 1.5;
        }
        .vision-cta-btn {
          background: #6366f1;
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .vision-cta-btn:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(99, 102, 241, 0.5);
        }
        .vision-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 28px;
        }
        .vision-stat-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .vision-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.06);
        }
        .vision-stat-number {
          font-size: 32px;
          font-weight: 800;
          color: #6366f1;
          line-height: 1;
          margin-bottom: 6px;
        }
        .vision-stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .vision-features-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          margin-bottom: 28px;
        }
        .vision-section-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 20px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .vision-module-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .vision-module-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .vision-module-item:hover {
          border-color: #6366f1;
          transform: translateY(-2px);
        }
        .vision-module-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .vision-module-name {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .vision-active-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #10b981;
        }
        .vision-module-desc {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.4;
        }
        .vision-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-top: 1px solid #cbd5e1;
          color: #64748b;
          font-size: 13px;
        }
        .vision-shaz-link {
          color: #6366f1;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .vision-shaz-link:hover {
          color: #4f46e5;
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="vision-container">
        
        <!-- Hero Header -->
        <div class="vision-hero-card">
          <div class="vision-hero-header">
            <div>
              <h1 class="vision-hero-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#818cf8" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span>Vision Product UI Library</span>
                <span class="vision-pill">v2.0 Active</span>
              </h1>
              <p class="vision-hero-desc">
                Mağazanızın dönüşüm oranlarını artırmak için tasarlanmış 19 ultra-premium vitrin bloğu, sepete kaçış engelleme modalı ve canlı widget suite'i.
              </p>
            </div>
            
            <a href="https://admin.shopify.com/store/vision-sh/themes/190613455141/editor" target="_top" class="vision-cta-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <span>Tema Özelleştiriciye Git</span>
            </a>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="vision-stats-grid">
          <div class="vision-stat-card">
            <div class="vision-stat-number">19</div>
            <div class="vision-stat-label">Aktif Vitrin Bloğu</div>
          </div>
          <div class="vision-stat-card">
            <div class="vision-stat-number">100%</div>
            <div class="vision-stat-label">Vektörel SVG İkon</div>
          </div>
          <div class="vision-stat-card">
            <div class="vision-stat-number">3D</div>
            <div class="vision-stat-label">Tilt Animasyon Motoru</div>
          </div>
          <div class="vision-stat-card">
            <div class="vision-stat-number">0.0s</div>
            <div class="vision-stat-label">Hızlı Vanilla JS Engine</div>
          </div>
        </div>

        <!-- Active Modules Showcase -->
        <div class="vision-features-card">
          <h2 class="vision-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#6366f1" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 01-1.077-.637l-1.3-1.3a2 2 0 010-2.828l1.3-1.3A2 2 0 015.6 8.42l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517L18.4 7.22a2 2 0 011.077.637l1.3 1.3a2 2 0 010 2.828l-1.3 1.3z"/></svg>
            <span>Öne Çıkan Dönüşüm Modülleri</span>
          </h2>
          
          <div class="vision-module-grid">
            <div class="vision-module-item">
              <div class="vision-module-head">
                <div class="vision-module-name">
                  <span class="vision-active-dot"></span>
                  <span>Yapışkan Satın Al Barı</span>
                </div>
              </div>
              <p class="vision-module-desc">Müşteri sayfada aşağı kaydırdığında beliren yapışkan satın al barı.</p>
            </div>

            <div class="vision-module-item">
              <div class="vision-module-head">
                <div class="vision-module-name">
                  <span class="vision-active-dot"></span>
                  <span>Sepetten Kaçış Modalı</span>
                </div>
              </div>
              <p class="vision-module-desc">İmleç çıkış hareketi yaptığında açılan indirim kuponlu sayaç modalı.</p>
            </div>

            <div class="vision-module-item">
              <div class="vision-module-head">
                <div class="vision-module-name">
                  <span class="vision-active-dot"></span>
                  <span>Birlikte Sık Alınanlar</span>
                </div>
              </div>
              <p class="vision-module-desc">Tamamlayıcı ürün paketi kartı ve otomatik AJAX sepet entegrasyonu.</p>
            </div>

            <div class="vision-module-item">
              <div class="vision-module-head">
                <div class="vision-module-name">
                  <span class="vision-active-dot"></span>
                  <span>Canlı Ziyaretçi Sayacı</span>
                </div>
              </div>
              <p class="vision-module-desc">Gerçek zamanlı canlı pulse göstergesi ve aciliyet rozeti.</p>
            </div>

            <div class="vision-module-item">
              <div class="vision-module-head">
                <div class="vision-module-name">
                  <span class="vision-active-dot"></span>
                  <span>Beden Tablosu Modalı</span>
                </div>
              </div>
              <p class="vision-module-desc">Ürün detay sayfaları için özelleştirilebilir beden rehberi.</p>
            </div>

            <div class="vision-module-item">
              <div class="vision-module-head">
                <div class="vision-module-name">
                  <span class="vision-active-dot"></span>
                  <span>Canlı Satış Bildirimleri</span>
                </div>
              </div>
              <p class="vision-module-desc">Sosyal kanıt oluşturan doğrulanmış sipariş bildirim kartları.</p>
            </div>
          </div>
        </div>

        <!-- Footer bar -->
        <div class="vision-footer-bar">
          <div>&copy; 2026 Vision Product UI. Tüm hakları saklıdır.</div>
          <div>
            Crafted with passion by <a href="https://shazvision.com" target="_blank" rel="noopener" class="vision-shaz-link">Shaz Vision</a>
          </div>
        </div>

      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Vision UI Admin Server listening on port ${PORT}`);
});
