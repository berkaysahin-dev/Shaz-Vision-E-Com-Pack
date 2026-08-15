'use client';

import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Percent,
  Download,
  RotateCcw,
  Sliders,
  Check,
  FileSpreadsheet,
  FileCode,
  Layers,
} from 'lucide-react';
import { calculateProfitability, MARKETPLACE_PRESETS } from '@/lib/profit-engine';
import { UnitEconomicsInput } from '@/lib/types';
import ShazVisionSignature from '@/components/ShazVisionSignature';

export default function ProfitCalcPage() {
  const [inputs, setInputs] = useState<UnitEconomicsInput>({
    sellingPrice: 1000,
    cogs: 350,
    platformFeeRate: 20.0,
    paymentGatewayRate: 2.0,
    shippingCost: 45,
    packagingCost: 8,
    vatRate: 20.0,
    vatInclusive: true,
    adSpendPerUnit: 100,
    returnRate: 6.0,
    reverseLogisticsCost: 45,
  });

  const [selectedPreset, setSelectedPreset] = useState<string>('trendyol');

  const handlePresetSelect = (presetKey: string) => {
    setSelectedPreset(presetKey);
    const preset = MARKETPLACE_PRESETS[presetKey];
    if (preset) {
      setInputs((prev) => ({
        ...prev,
        ...preset,
      }));
    }
  };

  const results = useMemo(() => {
    return calculateProfitability(inputs);
  }, [inputs]);

  const handleInputChange = (field: keyof UnitEconomicsInput, val: any) => {
    setInputs((prev) => ({
      ...prev,
      [field]: val,
    }));
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ inputs, results }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'vision-profit-calc-result.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#181C26] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white font-mono tracking-tight">VISION PROFIT CALC</h1>
            <span className="text-[10px] font-mono bg-[#161B26] text-zinc-400 border border-[#232A3B] px-2 py-0.5 rounded">
              Birim Kârlılık Analizi
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            SKU bazlı net kâr, KDV, komisyon, kargo, başabaş ROAS, POAS ve iade risk maliyeti hesaplayıcı.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Preset buttons */}
          <div className="flex items-center gap-1 bg-[#11141E] p-1 rounded-lg border border-[#1C2233]">
            <span className="text-[10px] text-zinc-500 px-2 font-mono uppercase">Şablon:</span>
            {Object.keys(MARKETPLACE_PRESETS).map((key) => (
              <button
                key={key}
                onClick={() => handlePresetSelect(key)}
                className={`px-2.5 py-1 rounded text-xs font-mono uppercase transition-colors ${
                  selectedPreset === key
                    ? 'bg-[#1C2333] text-white border border-[#2D3852]'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          <button
            onClick={handleExportJson}
            className="px-3 py-1.5 rounded-lg bg-[#141824] hover:bg-[#1C2233] border border-[#232B3E] text-zinc-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>JSON Dışa Aktar</span>
          </button>
        </div>
      </div>

      {/* Main Calculation Inputs & Output Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Inputs (2 Cols) */}
        <div className="lg:col-span-2 rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-5">
          <div className="flex items-center justify-between border-b border-[#181C26] pb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-zinc-500" />
              <span>Girdi Parametreleri & Değişken Maliyetler</span>
            </h2>
            <span className="text-[10px] font-mono text-zinc-500">Canlı Hesaplama</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Selling Price */}
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Satış Fiyatı (TRY)
              </label>
              <input
                type="number"
                value={inputs.sellingPrice}
                onChange={(e) => handleInputChange('sellingPrice', parseFloat(e.target.value) || 0)}
                className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* COGS */}
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Ürün Maliyeti - COGS (TRY)
              </label>
              <input
                type="number"
                value={inputs.cogs}
                onChange={(e) => handleInputChange('cogs', parseFloat(e.target.value) || 0)}
                className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Platform Commission Rate */}
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Pazaryeri Komisyon Oranı (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.platformFeeRate}
                onChange={(e) =>
                  handleInputChange('platformFeeRate', parseFloat(e.target.value) || 0)
                }
                className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Ad Spend Per Unit */}
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Birim Başına Reklam Gideri (TRY)
              </label>
              <input
                type="number"
                value={inputs.adSpendPerUnit}
                onChange={(e) =>
                  handleInputChange('adSpendPerUnit', parseFloat(e.target.value) || 0)
                }
                className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Shipping Cost */}
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Kargo Gönderim Maliyeti (TRY)
              </label>
              <input
                type="number"
                value={inputs.shippingCost}
                onChange={(e) => handleInputChange('shippingCost', parseFloat(e.target.value) || 0)}
                className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Packaging Cost */}
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Paketleme & Koli (TRY)
              </label>
              <input
                type="number"
                value={inputs.packagingCost}
                onChange={(e) =>
                  handleInputChange('packagingCost', parseFloat(e.target.value) || 0)
                }
                className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* VAT Rate & Inclusive Toggle */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium text-zinc-300">KDV Oranı (%)</label>
                <button
                  type="button"
                  onClick={() => handleInputChange('vatInclusive', !inputs.vatInclusive)}
                  className="text-[10px] text-zinc-400 hover:text-white font-mono underline"
                >
                  {inputs.vatInclusive ? 'KDV Dahil' : 'KDV Hariç'}
                </button>
              </div>
              <input
                type="number"
                value={inputs.vatRate}
                onChange={(e) => handleInputChange('vatRate', parseFloat(e.target.value) || 0)}
                className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Return Rate % */}
            <div>
              <label className="text-xs font-medium text-zinc-300 block mb-1">
                Tahmini İade Oranı (%)
              </label>
              <input
                type="number"
                step="0.5"
                value={inputs.returnRate}
                onChange={(e) => handleInputChange('returnRate', parseFloat(e.target.value) || 0)}
                className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-zinc-500"
              />
            </div>
          </div>
        </div>

        {/* Results Card (1 Col) */}
        <div className="rounded-xl bg-[#0F121A] border border-[#1C2233] p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5">
              Finansal Çıktı Tablosu
            </h3>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>Brüt Satış Fiyatı:</span>
                <span className="text-white font-semibold">₺{results.grossRevenue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Hesaplanan KDV:</span>
                <span className="text-zinc-300">₺{results.vatAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Net Ciro:</span>
                <span className="text-white font-semibold">₺{results.netRevenue.toFixed(2)}</span>
              </div>

              <div className="h-px bg-[#181C26] my-2"></div>

              <div className="flex justify-between text-zinc-400">
                <span>Ürün Maliyeti (COGS):</span>
                <span className="text-rose-400">-₺{inputs.cogs.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Komisyon Bedeli:</span>
                <span className="text-rose-400">-₺{results.platformFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Kargo & Paketleme:</span>
                <span className="text-rose-400">-₺{results.shippingAndPackaging.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>İade Risk Yükü:</span>
                <span className="text-amber-400">-₺{results.returnLossPerUnit.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Birim Reklam Payı:</span>
                <span className="text-rose-400">-₺{results.adSpend.toFixed(2)}</span>
              </div>

              <div className="h-px bg-[#181C26] my-2"></div>

              <div className="p-3 rounded-lg bg-[#141926] border border-[#222B40] flex items-center justify-between">
                <span className="font-bold text-zinc-200">Net Kâr:</span>
                <span className={`text-sm font-bold ${results.netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  ₺{results.netProfit.toFixed(2)} (%{results.netMarginPct} Marj)
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#181C26] space-y-1.5 text-xs font-mono">
            <div className="flex items-center justify-between text-zinc-400">
              <span>Katkı Marjı:</span>
              <span className="text-white font-semibold">%{results.contributionMarginPct}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>Başabaş ROAS:</span>
              <span className="text-blue-400 font-bold">{results.breakEvenRoas}x</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>POAS (Kâr / Reklam):</span>
              <span className="text-emerald-400 font-bold">{results.poas}x</span>
            </div>
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
