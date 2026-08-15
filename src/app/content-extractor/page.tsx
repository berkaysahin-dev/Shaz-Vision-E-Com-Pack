'use client';

import React, { useState } from 'react';
import {
  Scan,
  Globe,
  Code2,
  Copy,
  Check,
  FileCode,
  Layers,
  Sparkles,
} from 'lucide-react';
import ShazVisionSignature from '@/components/ShazVisionSignature';

export default function ContentExtractorPage() {
  const [targetUrl, setTargetUrl] = useState('https://store.example.com/products/ultra-smartwatch');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const handleExtract = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUrl.trim()) return;

    setIsExtracting(true);
    setTimeout(() => {
      setIsExtracting(false);
      setExtractedData({
        status: 'success',
        source_url: targetUrl,
        extracted_at: new Date().toISOString(),
        confidence_score: 0.985,
        product: {
          title: 'Vision Pro Smartwatch Series 5',
          brand: 'Shaz Vision',
          sku: 'SV-WATCH-005',
          price: {
            currency: 'TRY',
            regular_price: 2999.0,
            sale_price: 2499.0,
            discount_percentage: 16.67,
          },
          inventory: {
            in_stock: true,
            quantity: 42,
          },
          variants: [
            { color: 'Midnight Black', size: '44mm', sku: 'SV-WATCH-005-BLK-44' },
            { color: 'Silver Frost', size: '40mm', sku: 'SV-WATCH-005-SLV-40' },
          ],
          specifications: {
            display: '1.9-inch AMOLED',
            battery_life: '7 Days',
            water_resistance: '50m (5 ATM)',
          },
        },
      });
    }, 900);
  };

  const handleCopyJson = () => {
    if (!extractedData) return;
    navigator.clipboard.writeText(JSON.stringify(extractedData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#181C26] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white font-mono tracking-tight">
              VISION CONTENT EXTRACTOR
            </h1>
            <span className="text-[10px] font-mono bg-[#161B26] text-zinc-400 border border-[#232A3B] px-2 py-0.5 rounded">
              Web & Görsel Ayrıştırıcı
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            E-ticaret ürün URL'lerinden başlık, varyant, teknik özellik ve fiyat matrisini yapılandırılmış JSON olarak çıkarın.
          </p>
        </div>
      </div>

      {/* URL Input Form */}
      <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-zinc-500" />
          <span>Ayrıştırılacak Hedef URL</span>
        </h2>

        <form onSubmit={handleExtract} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Globe className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="url"
              required
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="https://store.example.com/product/..."
              className="w-full bg-[#141824] border border-[#202738] rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
            />
          </div>

          <button
            type="submit"
            disabled={isExtracting}
            className="px-4 py-2 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors shrink-0"
          >
            <Scan className={`w-3.5 h-3.5 ${isExtracting ? 'animate-spin' : ''}`} />
            <span>{isExtracting ? 'Ayrıştırılıyor...' : 'Veriyi Çıkar'}</span>
          </button>
        </form>
      </div>

      {/* JSON Schema Output */}
      <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#181C26] pb-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-zinc-500" />
            <span>Yapılandırılmış JSON Çıktısı</span>
          </h3>

          {extractedData && (
            <button
              onClick={handleCopyJson}
              className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white bg-[#141824] border border-[#1E2538] px-2.5 py-1 rounded transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Kopyalandı' : 'JSON Kopyala'}</span>
            </button>
          )}
        </div>

        {extractedData ? (
          <pre className="p-4 rounded-lg bg-[#0A0C12] border border-[#181C26] text-xs font-mono text-zinc-200 overflow-x-auto max-h-96 leading-relaxed">
            {JSON.stringify(extractedData, null, 2)}
          </pre>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-2 text-zinc-500 font-mono text-xs">
            <FileCode className="w-8 h-8 text-zinc-600" />
            <p>Hedef ürün linkini girip veriyi çıkar butonuna tıklayın.</p>
          </div>
        )}
      </div>

      {/* Footer Signature */}
      <div className="pt-6 border-t border-[#181C26] flex justify-end">
        <ShazVisionSignature />
      </div>
    </div>
  );
}
