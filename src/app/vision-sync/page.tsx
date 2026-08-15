'use client';

import React, { useState } from 'react';
import {
  RefreshCw,
  Server,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  Layers,
  Settings,
  ArrowRightLeft,
} from 'lucide-react';
import ShazVisionSignature from '@/components/ShazVisionSignature';

interface SkuMapping {
  id: string;
  sourceSku: string;
  targetSku: string;
  channel: string;
  stock: number;
  priceMultiplier: number;
  autoSync: boolean;
}

const INITIAL_MAPPINGS: SkuMapping[] = [
  {
    id: 'm-1',
    sourceSku: 'SV-WATCH-005-BLK',
    targetSku: 'TY-WATCH-BLK-44',
    channel: 'Trendyol',
    stock: 42,
    priceMultiplier: 1.0,
    autoSync: true,
  },
  {
    id: 'm-2',
    sourceSku: 'SV-WATCH-005-SLV',
    targetSku: 'AMZ-WATCH-SLV-40',
    channel: 'Amazon TR',
    stock: 28,
    priceMultiplier: 1.05,
    autoSync: true,
  },
  {
    id: 'm-3',
    sourceSku: 'SV-DOCK-FAST-01',
    targetSku: 'HB-DOCK-FAST',
    channel: 'Hepsiburada',
    stock: 95,
    priceMultiplier: 1.0,
    autoSync: true,
  },
];

export default function VisionSyncPage() {
  const [mappings, setMappings] = useState<SkuMapping[]>(INITIAL_MAPPINGS);
  const [newSourceSku, setNewSourceSku] = useState('');
  const [newTargetSku, setNewTargetSku] = useState('');
  const [newChannel, setNewChannel] = useState('Trendyol');
  const [newStock, setNewStock] = useState(50);
  const [newMultiplier, setNewMultiplier] = useState(1.0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [logs, setLogs] = useState<Array<{ id: string; time: string; msg: string }>>([
    { id: 'l1', time: '18:30:12', msg: 'Trendyol stok kontrolü yapıldı (3 SKU senkron).' },
    { id: 'l2', time: '18:25:00', msg: 'Shopify sipariş webhook tetiklendi.' },
  ]);

  const handleAddMapping = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSourceSku.trim() || !newTargetSku.trim()) return;

    const newMap: SkuMapping = {
      id: `m-${Date.now()}`,
      sourceSku: newSourceSku.trim(),
      targetSku: newTargetSku.trim(),
      channel: newChannel,
      stock: newStock,
      priceMultiplier: newMultiplier,
      autoSync: true,
    };

    setMappings((prev) => [...prev, newMap]);
    setNewSourceSku('');
    setNewTargetSku('');
  };

  const handleDeleteMapping = (id: string) => {
    setMappings((prev) => prev.filter((m) => m.id !== id));
  };

  const handleTriggerSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setLogs((prev) => [
        {
          id: `l-${Date.now()}`,
          time: new Date().toLocaleTimeString(),
          msg: `Manuel senkronizasyon tamamlandı (${mappings.length} eşleşme doğrulandı).`,
        },
        ...prev,
      ]);
    }, 800);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#181C26] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white font-mono tracking-tight">VISION SYNC</h1>
            <span className="text-[10px] font-mono bg-[#161B26] text-zinc-400 border border-[#232A3B] px-2 py-0.5 rounded">
              Çok Kanallı Entegrasyon
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Shopify, Trendyol, Hepsiburada ve Amazon arasında stok ve fiyat senkronizasyon yöneticisi.
          </p>
        </div>

        <button
          onClick={handleTriggerSync}
          disabled={isSyncing}
          className="px-4 py-2 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono flex items-center gap-2 transition-colors self-start md:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
          <span>{isSyncing ? 'Senkronize Ediliyor...' : 'Şimdi Senkronize Et'}</span>
        </button>
      </div>

      {/* Connected Marketplace Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Shopify Store', 'Trendyol API', 'Amazon TR API', 'Hepsiburada API'].map((channel, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white font-mono">{channel}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono">Çift Yönlü Senkronizasyon</p>
            <span className="text-[10px] text-zinc-500 font-mono block pt-1">Gecikme: 240ms</span>
          </div>
        ))}
      </div>

      {/* Add New SKU Mapping Form */}
      <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5">
          Yeni SKU Eşleştirmesi Ekle
        </h2>

        <form onSubmit={handleAddMapping} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <div>
            <label className="text-[11px] font-mono text-zinc-400 block mb-1">Kaynak SKU</label>
            <input
              type="text"
              required
              value={newSourceSku}
              onChange={(e) => setNewSourceSku(e.target.value)}
              placeholder="SV-PROD-001"
              className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-mono text-zinc-400 block mb-1">Hedef Kanal</label>
            <select
              value={newChannel}
              onChange={(e) => setNewChannel(e.target.value)}
              className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
            >
              <option value="Trendyol">Trendyol</option>
              <option value="Amazon TR">Amazon TR</option>
              <option value="Hepsiburada">Hepsiburada</option>
              <option value="Shopify">Shopify</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-mono text-zinc-400 block mb-1">Pazaryeri SKU / Barkod</label>
            <input
              type="text"
              required
              value={newTargetSku}
              onChange={(e) => setNewTargetSku(e.target.value)}
              placeholder="TY-BARCODE-99"
              className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-mono text-zinc-400 block mb-1">Mevcut Stok</label>
            <input
              type="number"
              value={newStock}
              onChange={(e) => setNewStock(parseInt(e.target.value) || 0)}
              className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
            />
          </div>

          <div>
            <label className="text-[11px] font-mono text-zinc-400 block mb-1">Fiyat Çarpanı</label>
            <input
              type="number"
              step="0.01"
              value={newMultiplier}
              onChange={(e) => setNewMultiplier(parseFloat(e.target.value) || 1.0)}
              className="w-full bg-[#141824] border border-[#202738] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-1.5 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono flex items-center justify-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Eşle</span>
            </button>
          </div>
        </form>
      </div>

      {/* Mappings Table & Log */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5">
            Aktif SKU Eşleştirme Tablosu ({mappings.length})
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#181C26] text-zinc-500 uppercase text-[10px]">
                  <th className="pb-2 pl-2">Kaynak SKU</th>
                  <th className="pb-2">Pazaryeri</th>
                  <th className="pb-2">Hedef Barkod</th>
                  <th className="pb-2">Stok</th>
                  <th className="pb-2">Çarpan</th>
                  <th className="pb-2 pr-2 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#161B26]">
                {mappings.map((m) => (
                  <tr key={m.id} className="hover:bg-[#121622] transition-colors">
                    <td className="py-2.5 pl-2 font-medium text-white">{m.sourceSku}</td>
                    <td className="py-2.5 text-zinc-400">{m.channel}</td>
                    <td className="py-2.5 text-zinc-300">{m.targetSku}</td>
                    <td className="py-2.5 text-emerald-400 font-bold">{m.stock} Adet</td>
                    <td className="py-2.5 text-zinc-400">{m.priceMultiplier}x</td>
                    <td className="py-2.5 pr-2 text-right">
                      <button
                        onClick={() => handleDeleteMapping(m.id)}
                        className="text-zinc-500 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sync Event Logs */}
        <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>Olay Kayıtları (Event Logs)</span>
          </h3>

          <div className="space-y-2 text-xs font-mono">
            {logs.map((l) => (
              <div key={l.id} className="p-2 rounded bg-[#141824] border border-[#1E2538] text-zinc-400 text-[11px]">
                <span className="text-zinc-500 block text-[10px]">[{l.time}]</span>
                <span className="text-zinc-300">{l.msg}</span>
              </div>
            ))}
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
