'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calculator,
  BarChart3,
  MessageSquareCode,
  RefreshCw,
  Scan,
  Radar,
  Download,
  ArrowUpRight,
  Terminal,
  Shield,
  Layers,
  FileCode2,
  SlidersHorizontal,
} from 'lucide-react';
import ShazVisionSignature from '@/components/ShazVisionSignature';

const MODULES = [
  {
    id: 'profit-calc',
    name: 'Vision Profit Calc',
    category: 'Birim Maliyet & Finans',
    desc: 'SKU bazlı net kâr, KDV, komisyon, kargo, başabaş ROAS, POAS ve iade maliyeti hesaplama motoru.',
    href: '/profit-calc',
    icon: Calculator,
    tag: 'Finans',
  },
  {
    id: 'ads-metrics',
    name: 'Vision Ads Metrics Bot',
    category: 'Reklam & ROAS Analitiği',
    desc: 'Meta, Google ve TikTok CSV veri raporlarını ayrıştıran, KPI hesaplayan ve bütçe kararı üreten araç.',
    href: '/ads-metrics',
    icon: BarChart3,
    tag: 'Analitik',
  },
  {
    id: 'ai-support',
    name: 'Vision AI Customer Support',
    category: 'Destek & Reklam Metni Üretici',
    desc: 'Kanca (Hook) ve reklam metni analizörü ile müşteri sorularına yapılandırılmış yanıt üreten modül.',
    href: '/ai-support',
    icon: MessageSquareCode,
    tag: 'İçerik/Destek',
  },
  {
    id: 'vision-sync',
    name: 'Vision Sync',
    category: 'Çok Kanallı Entegrasyon',
    desc: 'Shopify, Trendyol, Hepsiburada ve Amazon arasında stok, fiyat ve SKU eşleştirme yöneticisi.',
    href: '/vision-sync',
    icon: RefreshCw,
    tag: 'Stok/Fiyat',
  },
  {
    id: 'content-extractor',
    name: 'Vision Content Extractor',
    category: 'Görsel & Web Veri Çıkarıcı',
    desc: 'E-ticaret web sayfalarından ve ürün içeriklerinden yapılandırılmış JSON veri çıkaran motor.',
    href: '/content-extractor',
    icon: Scan,
    tag: 'Ayrıştırıcı',
  },
  {
    id: 'product-intelligence',
    name: 'Vision Product Intelligence',
    category: 'Pazar & Rakip İstihbaratı',
    desc: 'AliExpress, Amazon ve Trendyol üzerinde kazandıran ürün radarı ve rakip fiyat takip sistemi.',
    href: '/product-intelligence',
    icon: Radar,
    tag: 'İstihbarat',
  },
];

const DOWNLOADABLE_PACKAGES = [
  {
    id: 'theme',
    name: 'Vision Pro Shopify Theme',
    type: 'Shopify Online Store 2.0 Teması',
    file: 'Vision-Pro-Shopify-Theme.zip',
    size: '1.79 MB',
    desc: 'Liquid 2.0 JSON şablonları, mega menü, miktar indirimi ve yüksek hız optimizasyonlu tam tema paketi.',
    path: '/downloads/Vision-Pro-Shopify-Theme.zip',
  },
  {
    id: 'extension',
    name: 'Vision Product UI Extension',
    type: 'Shopify App Extension / Theme Embed',
    file: 'Vision-Product-UI-Extension.zip',
    size: '656 KB',
    desc: 'Geri sayım barı, ücretsiz kargo hedefi, önce/sonra kaydırıcı ve 20+ dönüşüm artıran liquid bloğu.',
    path: '/downloads/Vision-Product-UI-Extension.zip',
  },
];

export default function DashboardHome() {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="border-b border-[#181C26] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white font-mono tracking-tight">
              SHAZ VISION E-COM PACK
            </h1>
            <span className="text-[10px] font-mono bg-[#161B26] text-zinc-400 border border-[#232A3B] px-2 py-0.5 rounded">
              v1.0.0
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Entegre 8 e-ticaret aracı, veri işleme motorları ve indirilebilir dağıtım paketleri.
          </p>
        </div>

        <Link
          href="/downloads"
          className="px-4 py-2 rounded-lg bg-[#141824] hover:bg-[#1C2233] border border-[#232B3E] text-zinc-200 text-xs font-medium flex items-center gap-2 transition-colors self-start md:self-auto"
        >
          <Download className="w-3.5 h-3.5 text-zinc-400" />
          <span>Tema & Eklenti Paketleri</span>
        </Link>
      </div>

      {/* Downloadable Packages Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
            <FileCode2 className="w-3.5 h-3.5 text-zinc-500" />
            <span>İndirilebilir Dağıtım Paketleri</span>
          </h2>
          <span className="text-[11px] text-zinc-500 font-mono">2 Paket Hazır</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOWNLOADABLE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233] hover:border-[#28324A] flex flex-col justify-between space-y-4 transition-colors"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-mono">{pkg.name}</span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-[#161B26] border border-[#222A3B] px-1.5 py-0.5 rounded">
                    {pkg.size}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">{pkg.type}</p>
                <p className="text-xs text-zinc-400 leading-relaxed">{pkg.desc}</p>
              </div>

              <div className="pt-3 border-t border-[#181C26] flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500">{pkg.file}</span>
                <a
                  href={pkg.path}
                  download
                  className="px-3 py-1.5 rounded-md bg-[#161B28] hover:bg-[#1E2538] border border-[#263147] text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3 h-3 text-zinc-400" />
                  <span>İndir (.zip)</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integrated Modules Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-zinc-500" />
            <span>Entegre E-Ticaret Modülleri</span>
          </h2>
          <span className="text-[11px] text-zinc-500 font-mono">6 İnteraktif Araç</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233] hover:border-[#28324A] flex flex-col justify-between space-y-4 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-[#161B26] border border-[#222A3B] text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-[#161B26] border border-[#222A3B] px-1.5 py-0.5 rounded">
                      {mod.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-sm">{mod.name}</h3>
                    <p className="text-[11px] text-zinc-400 font-mono">{mod.category}</p>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{mod.desc}</p>
                </div>

                <div className="pt-3 border-t border-[#181C26] flex items-center justify-end">
                  <Link
                    href={mod.href}
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white bg-[#161B28] hover:bg-[#1E2538] border border-[#263147] px-3 py-1.5 rounded-md transition-colors"
                  >
                    <span>Modülü Aç</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer Signature */}
      <div className="pt-8 border-t border-[#181C26] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div>
          <span>Shaz Vision E-Com Pack • Bütünleşik Yönetim Paneli</span>
        </div>
        <ShazVisionSignature />
      </div>
    </div>
  );
}
