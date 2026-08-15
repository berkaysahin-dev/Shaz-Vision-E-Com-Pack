'use client';

import React, { useState } from 'react';
import {
  Radar,
  Search,
  Plus,
  Trash2,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  Layers,
  ShoppingBag,
} from 'lucide-react';
import ShazVisionSignature from '@/components/ShazVisionSignature';

interface CompetitorItem {
  id: string;
  productName: string;
  platform: string;
  ourPrice: number;
  competitorPrice: number;
  competitorName: string;
}

const INITIAL_COMPETITORS: CompetitorItem[] = [
  {
    id: 'c1',
    productName: 'Shaz Vision Ultra Smartwatch Series 5',
    platform: 'Trendyol',
    ourPrice: 2499,
    competitorPrice: 2799,
    competitorName: 'TechStore Mega',
  },
  {
    id: 'c2',
    productName: 'Fast Wireless Charging Dock 15W',
    platform: 'Amazon TR',
    ourPrice: 899,
    competitorPrice: 849,
    competitorName: 'AnkerDirect',
  },
];

export default function ProductIntelligencePage() {
  const [activeTab, setActiveTab] = useState<'hunter' | 'competitors'>('hunter');

  // Product Hunter State
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedSource, setSelectedSource] = useState('trendyol');
  const [hunterResults, setHunterResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Competitor Tracker State
  const [competitors, setCompetitors] = useState<CompetitorItem[]>(INITIAL_COMPETITORS);
  const [newProdName, setNewProdName] = useState('');
  const [newCompName, setNewCompName] = useState('');
  const [newPlatform, setNewPlatform] = useState('Trendyol');
  const [newOurPrice, setNewOurPrice] = useState(1000);
  const [newCompPrice, setNewCompPrice] = useState(1100);

  const handleSearchHunter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKeyword.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHunterResults([
        {
          title: `${searchKeyword} - Yüksek Talep Modeli`,
          platform: selectedSource.toUpperCase(),
          estOrders: '1.240 Sipariş/Ay',
          avgMarketPrice: '₺749.00',
          suggestedCost: '₺220.00',
          marginPotential: '%70.6',
          competition: 'Orta Seviye',
        },
        {
          title: `${searchKeyword} - Kompakt & Hızlı Teslimat`,
          platform: selectedSource.toUpperCase(),
          estOrders: '850 Sipariş/Ay',
          avgMarketPrice: '₺499.00',
          suggestedCost: '₺140.00',
          marginPotential: '%71.9',
          competition: 'Düşük Seviye',
        },
      ]);
    }, 700);
  };

  const handleAddCompetitor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim() || !newCompName.trim()) return;

    const newItem: CompetitorItem = {
      id: `c-${Date.now()}`,
      productName: newProdName.trim(),
      competitorName: newCompName.trim(),
      platform: newPlatform,
      ourPrice: newOurPrice,
      competitorPrice: newCompPrice,
    };

    setCompetitors((prev) => [...prev, newItem]);
    setNewProdName('');
    setNewCompName('');
  };

  const handleDeleteCompetitor = (id: string) => {
    setCompetitors((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#181C26] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white font-mono tracking-tight">
              VISION PRODUCT INTELLIGENCE
            </h1>
            <span className="text-[10px] font-mono bg-[#161B26] text-zinc-400 border border-[#232A3B] px-2 py-0.5 rounded">
              Pazar & Fiyat Radarı
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            AliExpress, Amazon ve Trendyol pazar trendlerini araştırın, rakiplerin fiyat hareketlerini anlık izleyin.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#11141E] p-1 rounded-lg border border-[#1C2233]">
          <button
            onClick={() => setActiveTab('hunter')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
              activeTab === 'hunter'
                ? 'bg-[#1C2333] text-white border border-[#2D3852]'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Ürün Avcısı (Hunter)
          </button>
          <button
            onClick={() => setActiveTab('competitors')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
              activeTab === 'competitors'
                ? 'bg-[#1C2333] text-white border border-[#2D3852]'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Rakip Fiyat Takipçisi
          </button>
        </div>
      </div>

      {activeTab === 'hunter' ? (
        /* Tab 1: Product Hunter */
        <div className="space-y-6">
          <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5 flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-zinc-500" />
              <span>Pazar Trendi & Kazandıran Ürün Araması</span>
            </h2>

            <form onSubmit={handleSearchHunter} className="flex flex-col sm:flex-row gap-3">
              <div className="w-48">
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
                >
                  <option value="trendyol">Trendyol</option>
                  <option value="amazon">Amazon TR</option>
                  <option value="aliexpress">AliExpress</option>
                </select>
              </div>

              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Kelime veya ürün kategorisi arayın (Örn: Akıllı Saat, Masaj Tabancası)..."
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg pl-8 pr-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="px-4 py-2 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors shrink-0"
              >
                <Radar className={`w-3.5 h-3.5 ${isSearching ? 'animate-spin' : ''}`} />
                <span>{isSearching ? 'Taranıyor...' : 'Trendleri Ara'}</span>
              </button>
            </form>
          </div>

          {/* Results */}
          {hunterResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hunterResults.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono">{item.title}</span>
                    <span className="text-[10px] font-mono text-zinc-400 bg-[#141824] border border-[#1E2538] px-1.5 py-0.5 rounded">
                      {item.platform}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#181C26] text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-zinc-500 block">Ortalama Satış Fiyatı</span>
                      <span className="text-white font-semibold">{item.avgMarketPrice}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 block">Tahmini Tedarik Maliyeti</span>
                      <span className="text-zinc-300">{item.suggestedCost}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 block">Potansiyel Marj</span>
                      <span className="text-emerald-400 font-bold">{item.marginPotential}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 block">Rekabet Düzeyi</span>
                      <span className="text-blue-400">{item.competition}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Tab 2: Competitor Tracker */
        <div className="space-y-6">
          {/* Add Competitor Form */}
          <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5">
              Yeni Rakip Ürün Ekle
            </h2>

            <form onSubmit={handleAddCompetitor} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1">Ürün Adı</label>
                <input
                  type="text"
                  required
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  placeholder="Ürün adı..."
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1">Platform</label>
                <select
                  value={newPlatform}
                  onChange={(e) => setNewPlatform(e.target.value)}
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
                >
                  <option value="Trendyol">Trendyol</option>
                  <option value="Amazon TR">Amazon TR</option>
                  <option value="Hepsiburada">Hepsiburada</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1">Rakip Mağaza Adı</label>
                <input
                  type="text"
                  required
                  value={newCompName}
                  onChange={(e) => setNewCompName(e.target.value)}
                  placeholder="Rakip Satıcı..."
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1">Bizim Fiyat (TRY)</label>
                <input
                  type="number"
                  value={newOurPrice}
                  onChange={(e) => setNewOurPrice(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1">Rakip Fiyat (TRY)</label>
                <input
                  type="number"
                  value={newCompPrice}
                  onChange={(e) => setNewCompPrice(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-1.5 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono flex items-center justify-center gap-1 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Ekle</span>
                </button>
              </div>
            </form>
          </div>

          {/* Competitors Table */}
          <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5">
              İzlenen Rakipler ({competitors.length})
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#181C26] text-zinc-500 uppercase text-[10px]">
                    <th className="pb-2 pl-2">Ürün Adı</th>
                    <th className="pb-2">Platform & Rakip</th>
                    <th className="pb-2">Bizim Fiyat</th>
                    <th className="pb-2">Rakip Fiyat</th>
                    <th className="pb-2">Fark</th>
                    <th className="pb-2">Durum</th>
                    <th className="pb-2 pr-2 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#161B26]">
                  {competitors.map((c) => {
                    const diffPct =
                      c.competitorPrice > 0
                        ? (((c.ourPrice - c.competitorPrice) / c.competitorPrice) * 100).toFixed(1)
                        : '0';
                    const isLower = c.ourPrice <= c.competitorPrice;

                    return (
                      <tr key={c.id} className="hover:bg-[#121622] transition-colors">
                        <td className="py-2.5 pl-2 font-medium text-white max-w-xs truncate">{c.productName}</td>
                        <td className="py-2.5 text-zinc-400">
                          {c.competitorName} ({c.platform})
                        </td>
                        <td className="py-2.5 text-white font-bold">₺{c.ourPrice}</td>
                        <td className="py-2.5 text-zinc-300">₺{c.competitorPrice}</td>
                        <td className="py-2.5">
                          <span className={isLower ? 'text-emerald-400' : 'text-rose-400'}>
                            {diffPct}%
                          </span>
                        </td>
                        <td className="py-2.5">
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded ${
                              isLower
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            }`}
                          >
                            {isLower ? 'Daha Uygunuz' : 'Pahalıyız'}
                          </span>
                        </td>
                        <td className="py-2.5 pr-2 text-right">
                          <button
                            onClick={() => handleDeleteCompetitor(c.id)}
                            className="text-zinc-500 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Footer Signature */}
      <div className="pt-6 border-t border-[#181C26] flex justify-end">
        <ShazVisionSignature />
      </div>
    </div>
  );
}
