'use client';

import React, { useState } from 'react';
import {
  Download,
  FileCode,
  Package,
  Layers,
  Check,
  ExternalLink,
  SlidersHorizontal,
  FileArchive,
  Info,
} from 'lucide-react';
import ShazVisionSignature from '@/components/ShazVisionSignature';

export default function DownloadsPage() {
  const [downloadedTheme, setDownloadedTheme] = useState(false);
  const [downloadedExt, setDownloadedExt] = useState(false);

  const handleDownloadTheme = () => {
    setDownloadedTheme(true);
    setTimeout(() => setDownloadedTheme(false), 2500);
  };

  const handleDownloadExt = () => {
    setDownloadedExt(true);
    setTimeout(() => setDownloadedExt(false), 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#181C26] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white font-mono tracking-tight">
              DAĞITIM & İNDİRME MERKEZİ
            </h1>
            <span className="text-[10px] font-mono bg-[#161B26] text-zinc-400 border border-[#232A3B] px-2 py-0.5 rounded">
              Paket Dağıtım
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Shopify mağazanıza doğrudan yüklemeye hazır, sıkıştırılmış üretim (.zip) paketleri ve kaynak kodları.
          </p>
        </div>
      </div>

      {/* 2 Main Download Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Vision Pro Shopify Theme */}
        <div className="p-6 rounded-xl bg-[#0F121A] border border-[#1C2233] hover:border-[#2A354E] flex flex-col justify-between space-y-6 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-zinc-400">PAKET #1</span>
              <span className="text-[10px] font-mono text-zinc-400 bg-[#141824] border border-[#1E2538] px-2 py-0.5 rounded">
                1.79 MB (.zip)
              </span>
            </div>

            <div>
              <h2 className="text-base font-bold text-white font-mono">Vision Pro Shopify Theme</h2>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Shopify Online Store 2.0 Liquid Teması
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Liquid 2.0 mimarisinde geliştirilmiş, mega menü, varyant seçici, hızlı sepet çekmecesi, miktar indirimleri (quantity breaks) ve beden tablosu içeren tam mağaza teması.
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="p-3.5 rounded-lg bg-[#141824] border border-[#1E2538] space-y-2 text-xs font-mono text-zinc-300">
              <span className="text-[10px] uppercase text-zinc-500 block">Dizin & Şablon Yapısı:</span>
              <ul className="space-y-1 text-[11px] text-zinc-400">
                <li>• layout/theme.liquid (Core Head & Body Wrapper)</li>
                <li>• templates/*.json (Index, Product, Cart, Collection, 404)</li>
                <li>• sections/ (Header, Footer, Main-Product, Mega-Menu)</li>
                <li>• snippets/ (Quantity-Breaks, Price, Reviews, Sizing-Chart)</li>
                <li>• locales/ (en.default.json, tr.schema.json)</li>
              </ul>
            </div>

            {/* Install instructions */}
            <div className="text-[11px] text-zinc-400 font-mono space-y-1">
              <span className="text-zinc-300 font-bold block">Kurulum:</span>
              <p>Shopify Admin &gt; Online Mağaza &gt; Temalar &gt; Tema Ekle (Zip Yükle) sekmesinden yükleyin.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#181C26] flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-500">Vision-Pro-Shopify-Theme.zip</span>
            <a
              href="/downloads/Vision-Pro-Shopify-Theme.zip"
              download
              onClick={handleDownloadTheme}
              className="px-4 py-2 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono flex items-center gap-2 transition-colors"
            >
              {downloadedTheme ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloadedTheme ? 'İndiriliyor...' : 'Temayı İndir (.zip)'}</span>
            </a>
          </div>
        </div>

        {/* 2. Vision Product UI Extension */}
        <div className="p-6 rounded-xl bg-[#0F121A] border border-[#1C2233] hover:border-[#2A354E] flex flex-col justify-between space-y-6 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-zinc-400">PAKET #2</span>
              <span className="text-[10px] font-mono text-zinc-400 bg-[#141824] border border-[#1E2538] px-2 py-0.5 rounded">
                656 KB (.zip)
              </span>
            </div>

            <div>
              <h2 className="text-base font-bold text-white font-mono">Vision Product UI Extension</h2>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Shopify Theme App Extension / Eklenti Paketi
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Temaya dokunmadan doğrudan tema özelleştirici üzerinden aktif edilen 20+ dönüşüm artırıcı widget (Sticky countdown bar, free shipping progress, before/after slider vb.).
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="p-3.5 rounded-lg bg-[#141824] border border-[#1E2538] space-y-2 text-xs font-mono text-zinc-300">
              <span className="text-[10px] uppercase text-zinc-500 block">Paket İçeriği:</span>
              <ul className="space-y-1 text-[11px] text-zinc-400">
                <li>• extensions/vision-ui/blocks/ (20+ Liquid Blocks)</li>
                <li>• extensions/vision-ui/assets/ (vision-ui.css, vision-ui.js)</li>
                <li>• extensions/vision-ui/locales/ (tr.schema.json, en.default.schema.json)</li>
                <li>• shopify.app.toml & shopify.extension.toml</li>
              </ul>
            </div>

            {/* Install instructions */}
            <div className="text-[11px] text-zinc-400 font-mono space-y-1">
              <span className="text-zinc-300 font-bold block">Kurulum:</span>
              <p>Shopify CLI ile <code className="text-zinc-300">shopify app deploy</code> komutunu çalıştırın veya App Embed bloklarını tema özelleştiriciden aktif edin.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#181C26] flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-500">Vision-Product-UI-Extension.zip</span>
            <a
              href="/downloads/Vision-Product-UI-Extension.zip"
              download
              onClick={handleDownloadExt}
              className="px-4 py-2 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono flex items-center gap-2 transition-colors"
            >
              {downloadedExt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloadedExt ? 'İndiriliyor...' : 'Eklentiyi İndir (.zip)'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Signature */}
      <div className="pt-6 border-t border-[#181C26] flex justify-end">
        <ShazVisionSignature />
      </div>
    </div>
  );
}
