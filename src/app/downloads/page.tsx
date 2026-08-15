'use client';

import React, { useState, useEffect } from 'react';
import {
  Download,
  FileCode,
  Package,
  Layers,
  Check,
  ExternalLink,
  SlidersHorizontal,
  FileArchive,
  Lock,
  Unlock,
  Key,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import ShazVisionSignature from '@/components/ShazVisionSignature';

const VALID_LICENSE_KEY = 'SHAZ-VISION-UI-EXTENSION';

export default function DownloadsPage() {
  const [downloadedTheme, setDownloadedTheme] = useState(false);
  const [downloadedExt, setDownloadedExt] = useState(false);

  // License Key Management
  const [licenseInput, setLicenseInput] = useState('');
  const [isLicenseUnlocked, setIsLicenseUnlocked] = useState(false);
  const [licenseError, setLicenseError] = useState('');

  useEffect(() => {
    // Check if previously unlocked in localStorage
    const saved = localStorage.getItem('shaz_vision_ui_license');
    if (saved && saved.trim().toUpperCase() === VALID_LICENSE_KEY) {
      setIsLicenseUnlocked(true);
    }
  }, []);

  const handleDownloadTheme = () => {
    setDownloadedTheme(true);
    setTimeout(() => setDownloadedTheme(false), 2500);
  };

  const handleVerifyLicenseAndDownload = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = licenseInput.trim().toUpperCase();

    if (cleanKey === VALID_LICENSE_KEY) {
      setLicenseError('');
      setIsLicenseUnlocked(true);
      localStorage.setItem('shaz_vision_ui_license', VALID_LICENSE_KEY);
      
      // Trigger download
      setDownloadedExt(true);
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', '/downloads/Vision-Product-UI-Extension.zip');
      downloadAnchor.setAttribute('download', 'Vision-Product-UI-Extension.zip');
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      setTimeout(() => setDownloadedExt(false), 2500);
    } else {
      setLicenseError('Geçersiz Lisans Kodu. Lütfen geçerli lisans anahtarınızı girin.');
    }
  };

  const handleDirectDownloadExt = () => {
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
            Shopify mağazanıza doğrudan yüklemeye hazır, sıkıştırılmış üretim (.zip) paketleri ve lisanslı eklenti dağıtımı.
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

        {/* 2. Vision Product UI Extension - Licensed Download */}
        <div className="p-6 rounded-xl bg-[#0F121A] border border-[#1C2233] hover:border-[#2A354E] flex flex-col justify-between space-y-6 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono text-zinc-400">PAKET #2</span>
              <div className="flex items-center gap-2">
                {isLicenseUnlocked ? (
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Lisans Doğrulandı
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Lisans Korumalı
                  </span>
                )}
                <span className="text-[10px] font-mono text-zinc-400 bg-[#141824] border border-[#1E2538] px-2 py-0.5 rounded">
                  656 KB (.zip)
                </span>
              </div>
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

            {/* License Key Form or Unlocked Notice */}
            {!isLicenseUnlocked ? (
              <form onSubmit={handleVerifyLicenseAndDownload} className="p-3.5 rounded-lg bg-[#141824] border border-[#222A3C] space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 font-bold">
                    <Key className="w-3.5 h-3.5 text-amber-400" />
                    <span>Eklenti Lisans Kodunu Girin</span>
                  </label>
                  <span className="text-[10px] text-zinc-500 font-mono">Gerekli</span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={licenseInput}
                    onChange={(e) => {
                      setLicenseInput(e.target.value);
                      if (licenseError) setLicenseError('');
                    }}
                    placeholder="SHAZ-VISION-UI-..."
                    className="flex-1 bg-[#0F121A] border border-[#263148] rounded-lg px-3 py-1.5 text-xs text-white uppercase font-mono tracking-wider focus:outline-none focus:border-zinc-400"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-[#1C2436] hover:bg-[#26314A] border border-[#303E5C] text-white text-xs font-mono font-medium transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    <Unlock className="w-3 h-3 text-amber-400" />
                    <span>Doğrula & İndir</span>
                  </button>
                </div>

                {licenseError && (
                  <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1 pt-0.5">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{licenseError}</span>
                  </p>
                )}
              </form>
            ) : (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-bold block text-[11px]">Lisans Aktif Edildi</span>
                    <span className="text-[10px] text-emerald-400/80">{VALID_LICENSE_KEY}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('shaz_vision_ui_license');
                    setIsLicenseUnlocked(false);
                    setLicenseInput('');
                  }}
                  className="text-[10px] text-zinc-400 hover:text-zinc-200 underline"
                >
                  Lisansı Değiştir
                </button>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#181C26] flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-500">Vision-Product-UI-Extension.zip</span>
            {isLicenseUnlocked ? (
              <a
                href="/downloads/Vision-Product-UI-Extension.zip"
                download
                onClick={handleDirectDownloadExt}
                className="px-4 py-2 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono flex items-center gap-2 transition-colors"
              >
                {downloadedExt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
                <span>{downloadedExt ? 'İndiriliyor...' : 'Eklentiyi İndir (.zip)'}</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  const inputEl = document.querySelector('input[placeholder*="SHAZ-VISION"]') as HTMLInputElement;
                  inputEl?.focus();
                }}
                className="px-4 py-2 rounded-lg bg-[#141824] border border-[#1E2538] text-zinc-500 text-xs font-mono flex items-center gap-2 cursor-not-allowed"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Lisans Kodu Gerekli</span>
              </button>
            )}
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
