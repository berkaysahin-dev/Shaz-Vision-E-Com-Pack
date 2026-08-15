<div align="center">

# SHAZ VISION E-COM PACK
### *All-in-One E-Commerce Management Suite, Storefront Theme & Extension Pack*

<p align="center">
  <strong>Tek bir kurumsal komuta merkezinde toplanmış 8 e-ticaret aracı, veri işleme motorları, Shopify teması ve UI eklenti paketi.</strong>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Public%20Release-blue.svg?style=flat-square)](https://github.com/berkaysahin-dev/Shaz-Vision-E-Com-Pack)

---

[Genel Bakış](#genel-bakış) •
[Entegre 8 Proje & Araç](#entegre-8-proje--araç) •
[İndirilebilir Paketler (Tema & Eklenti)](#indirilebilir-paketler-tema--eklenti) •
[Sistem Mimarisi](#sistem-mimarisi) •
[Hızlı Başlangıç & Kurulum](#hızlı-başlangıç--kurulum) •
[Modül Detayları & Kullanım](#modül-detayları--kullanım) •
[Lisans](#lisans)

</div>

---

## Genel Bakış

**Shaz Vision E-Com Pack**, e-ticaret markaları, pazaryeri satıcıları ve ajanslar için geliştirilmiş uçtan uca bir yönetim ve büyüme merkezidir.

Ayrı ayrı geliştirilmiş 8 bağımsız e-ticaret çözümü; birim kârlılık analizinden reklam performans denetimine, pazaryeri stok/fiyat senkronizasyonundan Shopify teması ve dönüşüm widget paketlerine kadar **tek bir yüksek hızlı yazılım çatısında** toplanmıştır.

---

## Entegre 8 Proje & Araç

| # | Proje Adı | Açıklama & Rol | Panel Rotası | Kaynak Repo |
|:---|:---|:---|:---|:---|
| 1 | **Vision Profit Calc** | SKU bazlı net kâr, KDV, komisyon, kargo, başabaş ROAS, POAS ve iade risk maliyeti simülatörü | `/profit-calc` | [GitHub](https://github.com/berkaysahin-dev/Vision-Profit-Calc) |
| 2 | **Vision Ads Metrics Bot** | Meta, Google ve TikTok Ads CSV veri raporlarını ayrıştıran ve KPI hesaplayan motor | `/ads-metrics` | [GitHub](https://github.com/berkaysahin-dev/Vision-Ads-Metrics-Bot) |
| 3 | **Vision AI Customer Support** | Reklam kancası (hook) ve kreatif analizörü ile müşteri destek şablon üreticisi | `/ai-support` | [GitHub](https://github.com/berkaysahin-dev/Vision-AI-Customer-Support) |
| 4 | **Vision Sync** | Shopify, Trendyol, Hepsiburada ve Amazon çift yönlü stok/fiyat ve SKU eşleştirme yöneticisi | `/vision-sync` | [GitHub](https://github.com/berkaysahin-dev/Vision-Sync) |
| 5 | **Vision Pro Shopify** | Shopify Online Store 2.0 (Liquid 2.0) tam mağaza teması | **İndirilebilir `.zip`** (`/downloads`) | [GitHub](https://github.com/berkaysahin-dev/Vision-Pro-Shopify) |
| 6 | **Vision Content Extractor** | E-ticaret web sayfalarından ve ürün içeriklerinden yapılandırılmış JSON çıkaran veri motoru | `/content-extractor` | [GitHub](https://github.com/berkaysahin-dev/Vision-Content-Extractor) |
| 7 | **Vision Product Intelligence** | Pazar trendi ürün avcısı (AliExpress, Amazon, Trendyol) ve rakip fiyat takip radarı | `/product-intelligence` | [GitHub](https://github.com/berkaysahin-dev/Vision-Product-Intelligence) |
| 8 | **Vision Product UI** | 20+ dönüşüm artıran liquid bloğu içeren Shopify App Extension paketi | **İndirilebilir `.zip`** (`/downloads`) | [GitHub](https://github.com/berkaysahin-dev/vision-product-ui) |

---

## İndirilebilir Paketler (Tema & Eklenti)

Panel içerisindeki **Dağıtım & İndirme Merkezi (`/downloads`)** üzerinden tek tıkla indirilebilen hazır üretim paketleri:

### 1. Vision Pro Shopify Theme (`Vision-Pro-Shopify-Theme.zip` • 1.79 MB)
- **Tür**: Shopify Online Store 2.0 Liquid Teması
- **Özellikler**: Liquid 2.0 JSON şablonları, mega menü, varyant seçici, hızlı sepet çekmecesi (Cart Drawer), miktar indirimi (Quantity Breaks), kargo aşama çubuğu ve beden tablosu popupları.
- **Kurulum**:
  1. `Vision-Pro-Shopify-Theme.zip` dosyasını indirin.
  2. Shopify Satıcı Paneli'nde **Online Mağaza > Temalar** bölümüne gidin.
  3. **Tema Ekle > Zip Dosyası Yükle** butonuna tıklayarak arşivi yükleyin ve yayınlayın.

### 2. Vision Product UI Extension (`Vision-Product-UI-Extension.zip` • 656 KB)
- **Tür**: Shopify App Extension / Theme Embed Widget Paketi
- **Lisans Koruması**: Bu eklenti lisans anahtarı ile dağıtılmaktadır.
- **Yetkili Lisans Kodu**: `SHAZ-VISION-UI-EXTENSION`
- **İçerik**: 20'den fazla dönüşüm widget'ı (Geri sayım barı, ücretsiz kargo hedefi, önce/sonra kaydırıcı, teslimat zaman çizelgesi, güven rozetleri, interaktif görsel noktacıkları).
- **Kurulum**:
  1. `/downloads` sayfasında lisans kodunu (`SHAZ-VISION-UI-EXTENSION`) girip doğrulayın ve paketi indirin.
  2. Shopify CLI ile `shopify app deploy` komutunu çalıştırın veya blokları tema özelleştiricinizden App Embed olarak aktif edin.


---

## Sistem Mimarisi

```
Shaz-Vision-E-Com-Pack/
├── public/
│   └── downloads/
│       ├── Vision-Pro-Shopify-Theme.zip      # İndirilebilir Shopify Teması (1.79 MB)
│       └── Vision-Product-UI-Extension.zip   # İndirilebilir UI Eklentisi (656 KB)
├── packages/
│   ├── theme-vision-pro-shopify/             # Tema ham kaynak kodları
│   └── extension-vision-product-ui/          # Eklenti ham kaynak kodları
├── src/
│   ├── app/
│   │   ├── page.tsx                          # Kontrol Paneli (Executive Hub)
│   │   ├── profit-calc/page.tsx              # Kâr & Birim Maliyet Hesaplayıcı
│   │   ├── ads-metrics/page.tsx              # Reklam & CSV Analitiği
│   │   ├── ai-support/page.tsx               # Kreatif Analiz & Destek Yanıtı
│   │   ├── vision-sync/page.tsx              # Stok & Fiyat Senkronizasyonu
│   │   ├── content-extractor/page.tsx        # Web Veri Çıkarıcı Sandbox
│   │   ├── product-intelligence/page.tsx     # Pazar & Fiyat Radarı
│   │   └── downloads/page.tsx                # Dağıtım & İndirme Merkezi
│   ├── components/                           # Sidebar, TopBar, MetricCard, ShazVisionSignature
│   └── lib/                                  # Finansal formüller, tipler ve iş mantığı
├── package.json
└── tsconfig.json
```

---

## Hızlı Başlangıç & Kurulum

### Gereksinimler
- **Node.js**: v18.0.0 veya üzeri (v20+ önerilir)
- **npm**: v9.0.0 veya üzeri

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/berkaysahin-dev/Shaz-Vision-E-Com-Pack.git
cd Shaz-Vision-E-Com-Pack
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Tarayıcınızda `http://localhost:3000` adresini açarak komuta merkezine erişebilirsiniz.

### 4. Üretim Derlemesi (Production Build)
```bash
npm run build
npm run start
```

---

## Modül Detayları & Kullanım

### 1. Vision Profit Calc (`/profit-calc`)
- **Birim Maliyet Hesaplama**: Satış fiyatı, COGS, pazaryeri komisyonu, ödeme altyapı ücreti, kargo ve paketleme maliyetlerini girerek net kâr ve marj oranını hesaplar.
- **KDV Modeli**: KDV dahil ve KDV hariç hesaplama seçenekleri.
- **Pazaryeri Şablonları**: Trendyol (%21), Hepsiburada (%19.5), Amazon (%15) ve Shopify (%2.8) varsayılan komisyon ve kargo parametreleri tek tıkla yüklenir.
- **ROAS & POAS Eşiği**: Kampanyaların zarara uğramaması için gereken minimum Başabaş ROAS ve kârlılık POAS katsayısını hesaplar.
- **Dışa Aktarma**: Hesaplama sonuçlarını tek tıkla JSON olarak dışa aktarır.

### 2. Vision Ads Metrics Bot (`/ads-metrics`)
- **CSV Yükleme & Ayrıştırma**: Meta Ads Manager, Google Ads veya TikTok Ads üzerinden dışa aktarılan CSV raporlarını doğrudan sürükleyip bırakarak analiz eder.
- **Hesaplanan Metrikler**: ROAS (Gelir/Harcama), CPA (Harcama/Dönüşüm), CTR (Tıklama/Gösterim), CPC (Harcama/Tıklama).
- **Algoritmik Tanı**: Kampanyanın getiri oranına göre bütçe artırma (%20 scale) veya hedef kitle revizyonu önerileri üretir.

### 3. Vision AI Support & Creative Generator (`/ai-support`)
- **Kreatif & Kanca (Hook) Analizörü**: Platform (TikTok / Reels / Shorts), kanca türü (Merak Boşluğu, Problem Vurgusu, Desen Kırıcı vb.), açı türü ve CTA parametrelerine göre tahmini virallik ve tutundurma puanı hesaplar; 4 aşamalı reklam metni üretir.
- **Destek Yanıtı Üretici**: Kargo durumu, iade/değişim veya ürün soruları için müşteri adına ve sipariş numarasına özel yapılandırılmış kurumsal yanıt şablonları oluşturur.

### 4. Vision Sync (`/vision-sync`)
- **Pazaryeri Entegrasyonları**: Shopify, Trendyol, Hepsiburada ve Amazon kanallarının anlık durumunu izler.
- **SKU Eşleştirme Yöneticisi**: Kaynak SKU ile hedef pazaryeri barkodları arasında stok miktarı ve fiyat çarpanı tanımlayarak eşleştirme ekleme ve silme işlemlerini yönetir.
- **Olay Kayıtları**: Senkronizasyon olaylarını ve webhook tetikleyicilerini gerçek zamanlı listeler.

### 5. Vision Content Extractor (`/content-extractor`)
- **Web & Görsel Veri Ayrıştırıcı**: Hedef ürün bağlantısını ayrıştırarak başlık, marka, SKU, fiyatlandırma, stok durumu, varyant matrisi ve teknik özellikleri doğrulanmış JSON şemasına dönüştürür.

### 6. Vision Product Intelligence (`/product-intelligence`)
- **Ürün Avcısı (Hunter)**: Trendyol, Amazon TR ve AliExpress üzerinde anahtar kelime araması yaparak tahmini aylık talep, ortalama pazar fiyatı, tedarik maliyeti ve kâr marjı potansiyelini analiz eder.
- **Rakip Fiyat Takipçisi**: Rakiplerin fiyatlarını ve indirim hareketlerini izleyerek fiyat farkı yüzdesini ve fiyat kırma (dumping) durumlarını listeler.

---

## Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasını inceleyebilirsiniz.

---

<div align="center">
  <p><strong>shazvision.com • SHAZ VISION</strong></p>
  <p>© 2026 SHAZ VISION. Tüm hakları saklıdır.</p>
</div>