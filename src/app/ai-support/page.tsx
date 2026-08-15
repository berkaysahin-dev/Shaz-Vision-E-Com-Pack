'use client';

import React, { useState } from 'react';
import {
  MessageSquareCode,
  Sparkles,
  Sliders,
  Send,
  Copy,
  Check,
  FileText,
  Video,
  Layers,
  ArrowRight,
} from 'lucide-react';
import ShazVisionSignature from '@/components/ShazVisionSignature';

const HOOK_TYPES = [
  'Merak Boşluğu',
  'Problem Vurgusu',
  'Cesur İddia',
  'Soru Hook\'u',
  'Desen Kırıcı',
  'Sosyal Kanıt',
  'Önce/Sonra Teaser',
  'UGC Deneyimi',
];

const ANGLE_TYPES = [
  'Problem / Çözüm',
  'Önce / Sonra',
  'Duygusal Tetikleyici',
  'Otorite Bazlı',
  'Viral Merak',
  'Sosyal Kanıt',
  'FOMO & Aciliyet',
];

const CTA_TYPES = [
  'Hemen Al (Link Profilde)',
  'Sınırlı Stok & İndirim',
  'Daha Fazla Bilgi',
  'Sepete Ekle & %20 Kazan',
  'Bugün Sipariş Ver',
];

export default function AiSupportPage() {
  const [activeTab, setActiveTab] = useState<'creative' | 'support'>('creative');

  // Creative Analyzer State
  const [productName, setProductName] = useState('');
  const [platform, setPlatform] = useState('TikTok');
  const [hookType, setHookType] = useState('Merak Boşluğu');
  const [angleType, setAngleType] = useState('Problem / Çözüm');
  const [ctaType, setCtaType] = useState('Hemen Al (Link Profilde)');
  const [hookDesc, setHookDesc] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  // Support Generator State
  const [customerName, setCustomerName] = useState('');
  const [orderNo, setOrderNo] = useState('');
  const [supportTopic, setSupportTopic] = useState('Kargo Durumu');
  const [customerMessage, setCustomerMessage] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [copied, setCopied] = useState(false);

  const handleAnalyzeCreative = () => {
    if (!productName.trim()) return;

    let viralScore = 78;
    let retentionScore = 82;

    if (hookType === 'Desen Kırıcı' || hookType === 'Merak Boşluğu') viralScore += 12;
    if (angleType === 'Problem / Çözüm' || angleType === 'Önce / Sonra') retentionScore += 10;

    viralScore = Math.min(viralScore, 98);
    retentionScore = Math.min(retentionScore, 96);

    setAnalysisResult({
      viralScore,
      retentionScore,
      strengths: [
        `İlk 3 saniyede ${hookType} kancası dikkat çekme oranını artırır.`,
        `${angleType} açısı izleyicinin satın alma motivasyonunu tetikler.`,
        `${ctaType} net ve tek bir aksiyona yönlendirir.`,
      ],
      recommendations: [
        'Videonun 0-2 saniyesine hızlı kesme (jump-cut) ve dikkat çekici metin bindirmesi (caption) ekleyin.',
        'Arka plan ses efektini (woosh / pop) kanca cümlesiyle senkronize edin.',
      ],
      suggestedScript: `[0-3s KANCA]: "Bu ürünü görmeden sakın ${productName || 'ürün'} siparişi vermeyin!"\n[3-10s PROBLEM]: "Eski yöntemlerle saatlerinizi harcamaktan sıkılmadınız mı?"\n[10-20s ÇÖZÜM]: "${productName} ile saniyeler içinde sonuca ulaşın."\n[20-25s CTA]: "${ctaType} - Profildeki linke tıkla!"`,
    });
  };

  const handleGenerateSupportReply = () => {
    if (!customerMessage.trim()) return;

    const name = customerName.trim() || 'Değerli Müşterimiz';
    const order = orderNo.trim() ? `#${orderNo.trim()}` : 'siparişiniz';

    let reply = '';
    if (supportTopic === 'Kargo Durumu') {
      reply = `Merhaba ${name},\n\n${order} numaralı siparişiniz sistemimizde başarıyla işlenmiş olup depomuz tarafından paketlenmiştir. Kargo takip numaranız kurye çıkışı yapıldığında SMS ve e-posta ile otomatik olarak tarafınıza iletilecektir.\n\nHerhangi bir sorunuz olursa bize dilediğiniz zaman ulaşabilirsiniz.\n\nSaygılarımızla,\nShaz Vision Destek Ekibi`;
    } else if (supportTopic === 'İade & Değişim') {
      reply = `Merhaba ${name},\n\n${order} numaralı siparişiniz için iade/değişim talebiniz alınmıştır. Ürünü orijinal kutusu ve faturası ile birlikte anlaşmalı kargo kodumuz ile ücretsiz olarak gönderebilirsiniz:\n\nAnlaşmalı Kargo Kodu: SV-994821\n\nÜrün tarafımıza ulaştığında aynı gün içinde inceleme tamamlanarak işlem gerçekleştirilecektir.\n\nSaygılarımızla,\nShaz Vision Destek Ekibi`;
    } else {
      reply = `Merhaba ${name},\n\n${order} ile ilgili ilettiğiniz mesajınız incelenmiştir:\n\n"${customerMessage}"\n\nTalebini ilgili birimimize iletilmiş olup en kısa sürede çözüme kavuşturulacaktır.\n\nSaygılarımızla,\nShaz Vision Destek Ekibi`;
    }

    setGeneratedReply(reply);
  };

  const handleCopyReply = () => {
    navigator.clipboard.writeText(generatedReply);
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
              VISION AI SUPPORT & CREATIVE GENERATOR
            </h1>
            <span className="text-[10px] font-mono bg-[#161B26] text-zinc-400 border border-[#232A3B] px-2 py-0.5 rounded">
              Kreatif & Destek
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Reklam kancası (hook) analizörü, video senaryo üreticisi ve e-ticaret müşteri destek yanıt modülü.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-1 bg-[#11141E] p-1 rounded-lg border border-[#1C2233]">
          <button
            onClick={() => setActiveTab('creative')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
              activeTab === 'creative'
                ? 'bg-[#1C2333] text-white border border-[#2D3852]'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Kreatif & Kanca Analizörü
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
              activeTab === 'support'
                ? 'bg-[#1C2333] text-white border border-[#2D3852]'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Müşteri Destek Yanıtı
          </button>
        </div>
      </div>

      {activeTab === 'creative' ? (
        /* Tab 1: Creative & Hook Analyzer */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-[#0F121A] border border-[#1C2233] space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5">
              Reklam Kancası & Video Parametreleri
            </h2>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-zinc-300 block mb-1">Ürün Adı</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Örn: Shaz Ultra Akıllı Saat"
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">Platform</label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram Reels">Instagram Reels</option>
                    <option value="YouTube Shorts">YouTube Shorts</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">Kanca (Hook) Türü</label>
                  <select
                    value={hookType}
                    onChange={(e) => setHookType(e.target.value)}
                    className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
                  >
                    {HOOK_TYPES.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">Açı (Angle) Türü</label>
                  <select
                    value={angleType}
                    onChange={(e) => setAngleType(e.target.value)}
                    className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
                  >
                    {ANGLE_TYPES.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">CTA Türü</label>
                  <select
                    value={ctaType}
                    onChange={(e) => setCtaType(e.target.value)}
                    className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
                  >
                    {CTA_TYPES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-300 block mb-1">
                  Kanca Açıklaması / İlk Cümle (İsteğe Bağlı)
                </label>
                <textarea
                  rows={3}
                  value={hookDesc}
                  onChange={(e) => setHookDesc(e.target.value)}
                  placeholder="Videonun ilk 3 saniyesindeki görsel hareket veya seslendirilen kanca cümlesi..."
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>

              <button
                onClick={handleAnalyzeCreative}
                className="w-full py-2.5 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono font-medium transition-colors"
              >
                Kreatif & Kancayı Analiz Et
              </button>
            </div>
          </div>

          {/* Analysis Results Display */}
          <div className="p-5 rounded-xl bg-[#0F121A] border border-[#1C2233] flex flex-col justify-between space-y-4">
            {analysisResult ? (
              <div className="space-y-4 font-mono text-xs">
                <h3 className="font-bold uppercase tracking-wider text-zinc-300 border-b border-[#181C26] pb-2.5">
                  Analiz Raporu & Puanlama
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#141824] border border-[#1E2538]">
                    <span className="text-[10px] text-zinc-500 uppercase block">Virallik Skoru</span>
                    <span className="text-lg font-bold text-emerald-400">
                      %{analysisResult.viralScore}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141824] border border-[#1E2538]">
                    <span className="text-[10px] text-zinc-500 uppercase block">Tahmini Tutundurma</span>
                    <span className="text-lg font-bold text-blue-400">
                      %{analysisResult.retentionScore}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-500 uppercase block">Güçlü Yönler:</span>
                  <ul className="space-y-1 text-zinc-300 text-[11px]">
                    {analysisResult.strengths.map((s: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] text-zinc-500 uppercase block">Önerilen Reklam Senaryosu:</span>
                  <pre className="p-3 rounded-lg bg-[#0A0C12] border border-[#181C26] text-[11px] text-zinc-300 whitespace-pre-wrap leading-relaxed">
                    {analysisResult.suggestedScript}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-2 text-zinc-500 font-mono text-xs">
                <Video className="w-8 h-8 text-zinc-600" />
                <p>Ürün bilgisi girip analiz butonuna tıklayın.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Tab 2: Support Ticket Responder */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-[#0F121A] border border-[#1C2233] space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono border-b border-[#181C26] pb-2.5">
              Müşteri Mesajı & Talep Bilgisi
            </h2>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">Müşteri Adı</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-zinc-300 block mb-1">Sipariş No</label>
                  <input
                    type="text"
                    value={orderNo}
                    onChange={(e) => setOrderNo(e.target.value)}
                    placeholder="Örn: SV-94821"
                    className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-300 block mb-1">Talep Konusu</label>
                <select
                  value={supportTopic}
                  onChange={(e) => setSupportTopic(e.target.value)}
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 font-mono"
                >
                  <option value="Kargo Durumu">Kargo Durumu</option>
                  <option value="İade & Değişim">İade & Değişim</option>
                  <option value="Ürün Sorusu">Ürün Sorusu</option>
                  <option value="Hasarlı Teslimat">Hasarlı Teslimat</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-zinc-300 block mb-1">
                  Müşterinin Mesajı
                </label>
                <textarea
                  rows={4}
                  value={customerMessage}
                  onChange={(e) => setCustomerMessage(e.target.value)}
                  placeholder="Müşterinin ilettiği mesaj metnini buraya yapıştırın..."
                  className="w-full bg-[#141824] border border-[#202738] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
              </div>

              <button
                onClick={handleGenerateSupportReply}
                className="w-full py-2.5 rounded-lg bg-[#182030] hover:bg-[#202B42] border border-[#2A3958] text-white text-xs font-mono font-medium transition-colors"
              >
                Yanıt Şablonu Oluştur
              </button>
            </div>
          </div>

          {/* Generated Reply Display */}
          <div className="p-5 rounded-xl bg-[#0F121A] border border-[#1C2233] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#181C26] pb-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-mono">
                  Oluşturulan Destek Yanıtı
                </h3>
                {generatedReply && (
                  <button
                    onClick={handleCopyReply}
                    className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white bg-[#141824] border border-[#1E2538] px-2.5 py-1 rounded transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
                  </button>
                )}
              </div>

              {generatedReply ? (
                <textarea
                  rows={10}
                  readOnly
                  value={generatedReply}
                  className="w-full p-3.5 rounded-lg bg-[#0A0C12] border border-[#181C26] text-xs font-mono text-zinc-200 leading-relaxed focus:outline-none"
                />
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center p-8 space-y-2 text-zinc-500 font-mono text-xs">
                  <FileText className="w-8 h-8 text-zinc-600" />
                  <p>Müşteri mesajını girip yanıt oluşturun.</p>
                </div>
              )}
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
