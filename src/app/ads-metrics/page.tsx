'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  UploadCloud,
  FileSpreadsheet,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Filter,
  CheckCircle2,
  AlertTriangle,
  FileUp,
} from 'lucide-react';
import ShazVisionSignature from '@/components/ShazVisionSignature';

interface ParsedCampaign {
  id: string;
  name: string;
  platform: string;
  spend: number;
  revenue: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpc: number;
  cpa: number;
  roas: number;
  recommendation: string;
}

const SAMPLE_CSV = `Campaign Name,Platform,Spend,Revenue,Impressions,Clicks,Conversions
Advantage Plus Conversions,Meta Ads,14200,58900,485000,12400,236
Google PMax Core Catalog,Google Ads,18500,61050,310000,9800,198
TikTok Spark Video Test,TikTok Ads,7800,14040,620000,15500,45
Retargeting 7D Cart Abandoners,Meta Ads,4300,27520,89000,3400,112`;

export default function AdsMetricsPage() {
  const [campaigns, setCampaigns] = useState<ParsedCampaign[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<keyof ParsedCampaign>('roas');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const parseCsvText = (text: string) => {
    const lines = text.trim().split(/\r?\n/);
    if (lines.length < 2) return;

    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
    const parsed: ParsedCampaign[] = [];

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(',').map((c) => c.trim());
      if (cols.length < 3) continue;

      const row: Record<string, string> = {};
      headers.forEach((h, idx) => {
        row[h] = cols[idx] || '';
      });

      const name = row['campaign name'] || row['campaign'] || row['kampanya'] || `Kampanya #${i}`;
      const platform = row['platform'] || 'Meta Ads';
      const spend = parseFloat(row['spend'] || row['harcanan'] || '0') || 0;
      const revenue = parseFloat(row['revenue'] || row['gelir'] || '0') || 0;
      const impressions = parseFloat(row['impressions'] || row['gosterim'] || '0') || 0;
      const clicks = parseFloat(row['clicks'] || row['tiklama'] || '0') || 0;
      const conversions = parseFloat(row['conversions'] || row['donusum'] || '0') || 0;

      const ctr = impressions > 0 ? Number(((clicks / impressions) * 100).toFixed(2)) : 0;
      const cpc = clicks > 0 ? Number((spend / clicks).toFixed(2)) : 0;
      const cpa = conversions > 0 ? Number((spend / conversions).toFixed(2)) : 0;
      const roas = spend > 0 ? Number((revenue / spend).toFixed(2)) : 0;

      let recommendation = 'Dengeli performans izleniyor.';
      if (roas >= 3.5) {
        recommendation = `Yüksek ROAS (${roas}x). Günlük bütçe %20 artırılabilir.`;
      } else if (roas < 1.5 && spend > 1000) {
        recommendation = `Düşük ROAS (${roas}x). Hedef kitle veya kreatif revize edilmeli.`;
      }

      parsed.push({
        id: `camp-${i}`,
        name,
        platform,
        spend,
        revenue,
        impressions,
        clicks,
        conversions,
        ctr,
        cpc,
        cpa,
        roas,
        recommendation,
      });
    }

    setCampaigns(parsed);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        parseCsvText(content);
      }
    };
    reader.readAsText(file);
  };

  const handleLoadSample = () => {
    parseCsvText(SAMPLE_CSV);
  };

  const totalSpend = campaigns.reduce((acc, c) => acc + c.spend, 0);
  const totalRevenue = campaigns.reduce((acc, c) => acc + c.revenue, 0);
  const totalPurchases = campaigns.reduce((acc, c) => acc + c.conversions, 0);
  const avgRoas = totalSpend > 0 ? (totalRevenue / totalSpend).toFixed(2) : '0.00';

  const filtered = campaigns
    .filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortOrder === 'desc' ? valB - valA : valA - valB;
      }
      return 0;
    });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#181C26] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white font-mono tracking-tight">
              VISION ADS METRICS BOT
            </h1>
            <span className="text-[10px] font-mono bg-[#161B26] text-zinc-400 border border-[#232A3B] px-2 py-0.5 rounded">
              CSV & Reklam Analitiği
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Meta, Google veya TikTok reklam raporlarınızı (CSV) yükleyin, ROAS, CPA, CTR metriklerini anında hesaplayın.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="px-3 py-1.5 rounded-lg bg-[#141824] hover:bg-[#1C2233] border border-[#232B3E] text-zinc-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-colors">
            <FileUp className="w-3.5 h-3.5 text-zinc-400" />
            <span>CSV Yükle</span>
            <input type="file" accept=".csv,.txt" onChange={handleFileUpload} className="hidden" />
          </label>

          {campaigns.length === 0 && (
            <button
              onClick={handleLoadSample}
              className="px-3 py-1.5 rounded-lg bg-[#161B28] hover:bg-[#1E2538] border border-[#263147] text-zinc-300 text-xs font-mono transition-colors"
            >
              Örnek Veri Yükle
            </button>
          )}
        </div>
      </div>

      {campaigns.length === 0 ? (
        /* Clean Empty State with File Dropzone */
        <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-3 rounded-xl bg-[#141824] border border-[#222A3B] text-zinc-400">
            <UploadCloud className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white font-mono">Reklam Verisi Yüklenmedi</h3>
            <p className="text-xs text-zinc-400 max-w-sm">
              Meta Ads Manager veya Google Ads panelinden dışa aktardığınız CSV dosyasını seçin veya örnek veriyle test edin.
            </p>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <label className="px-4 py-2 rounded-lg bg-[#161B28] hover:bg-[#1E2538] border border-[#263147] text-zinc-200 text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors">
              <FileSpreadsheet className="w-3.5 h-3.5 text-zinc-400" />
              <span>CSV Dosyası Seç</span>
              <input type="file" accept=".csv,.txt" onChange={handleFileUpload} className="hidden" />
            </label>
            <button
              onClick={handleLoadSample}
              className="px-4 py-2 rounded-lg bg-[#141824] hover:bg-[#1C2233] border border-[#232B3E] text-zinc-400 hover:text-zinc-200 text-xs font-mono transition-colors"
            >
              Örnek Veri Yükle
            </button>
          </div>
        </div>
      ) : (
        /* Populated State with Real Derived Calculations */
        <div className="space-y-6">
          {/* Summary KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233]">
              <span className="text-[11px] font-mono text-zinc-400 block">TOPLAM HARCAMA</span>
              <span className="text-xl font-bold font-mono text-white mt-1 block">
                ₺{totalSpend.toLocaleString('tr-TR')}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233]">
              <span className="text-[11px] font-mono text-zinc-400 block">TOPLAM GELİR</span>
              <span className="text-xl font-bold font-mono text-white mt-1 block">
                ₺{totalRevenue.toLocaleString('tr-TR')}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233]">
              <span className="text-[11px] font-mono text-zinc-400 block">ORTALAMA ROAS</span>
              <span className="text-xl font-bold font-mono text-blue-400 mt-1 block">
                {avgRoas}x
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233]">
              <span className="text-[11px] font-mono text-zinc-400 block">TOPLAM DÖNÜŞÜM</span>
              <span className="text-xl font-bold font-mono text-emerald-400 mt-1 block">
                {totalPurchases} Sipariş
              </span>
            </div>
          </div>

          {/* Table Container */}
          <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#181C26] pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono">
                  Ayrıştırılan Kampanyalar ({filtered.length})
                </span>
              </div>

              <div className="relative w-64">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Kampanya ara..."
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>
            </div>

            {/* Campaign Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#181C26] text-zinc-500 uppercase text-[10px]">
                    <th className="pb-2 pl-2">Kampanya Adı</th>
                    <th className="pb-2">Platform</th>
                    <th className="pb-2">Harcama</th>
                    <th className="pb-2">Gelir</th>
                    <th className="pb-2">CTR</th>
                    <th className="pb-2">CPC</th>
                    <th className="pb-2">CPA</th>
                    <th className="pb-2">ROAS</th>
                    <th className="pb-2 pr-2">Değerlendirme</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#161B26]">
                  {filtered.map((c) => (
                    <tr key={c.id} className="hover:bg-[#121622] transition-colors">
                      <td className="py-3 pl-2 font-medium text-white max-w-xs truncate">{c.name}</td>
                      <td className="py-3 text-zinc-400">{c.platform}</td>
                      <td className="py-3 text-zinc-300">₺{c.spend.toLocaleString('tr-TR')}</td>
                      <td className="py-3 text-zinc-300">₺{c.revenue.toLocaleString('tr-TR')}</td>
                      <td className="py-3 text-zinc-400">%{c.ctr}</td>
                      <td className="py-3 text-zinc-400">₺{c.cpc}</td>
                      <td className="py-3 text-zinc-400">₺{c.cpa}</td>
                      <td className="py-3 font-bold text-blue-400">{c.roas}x</td>
                      <td className="py-3 pr-2 text-zinc-400 text-[11px] max-w-xs truncate">
                        {c.recommendation}
                      </td>
                    </tr>
                  ))}
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
