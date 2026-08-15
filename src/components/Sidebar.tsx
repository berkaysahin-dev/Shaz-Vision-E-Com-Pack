'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calculator,
  BarChart3,
  MessageSquareCode,
  RefreshCw,
  Scan,
  Radar,
  Download,
  Terminal,
  Layers,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';
import ShazVisionSignature from './ShazVisionSignature';

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Genel Bakış',
    items: [
      { name: 'Kontrol Paneli', href: '/', icon: LayoutDashboard },
    ],
  },
  {
    title: 'E-Ticaret Modülleri',
    items: [
      { name: 'Vision Profit Calc', href: '/profit-calc', icon: Calculator, badge: 'Finans' },
      { name: 'Ads Metrics Bot', href: '/ads-metrics', icon: BarChart3, badge: 'Reklam' },
      { name: 'AI Support & Copy', href: '/ai-support', icon: MessageSquareCode, badge: 'Destek/İçerik' },
      { name: 'Vision Sync', href: '/vision-sync', icon: RefreshCw, badge: 'Entegrasyon' },
      { name: 'Content Extractor', href: '/content-extractor', icon: Scan, badge: 'Ayrıştırıcı' },
      { name: 'Product Intelligence', href: '/product-intelligence', icon: Radar, badge: 'İstihbarat' },
    ],
  },
  {
    title: 'Paketler & Dağıtım',
    items: [
      { name: 'Tema & Eklenti İndir', href: '/downloads', icon: Download, badge: '2 Paket' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#090B10] border-r border-[#181C26] flex flex-col h-screen sticky top-0 z-40 select-none">
      {/* Brand Header - Clean Typographic, No Flashy Logos */}
      <div className="px-5 py-4 border-b border-[#181C26] flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider text-sm font-mono">SHAZ VISION</span>
            <span className="text-[9px] font-mono text-zinc-400 bg-[#161B26] border border-[#232A3B] px-1.5 py-0.5 rounded">
              E-COM
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono mt-0.5">Management Suite</span>
        </Link>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto p-3 space-y-5">
        {NAV_GROUPS.map((group) => (
          <div key={group.title} className="space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 px-2 py-1">
              {group.title}
            </p>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#151924] text-white border border-[#232B3E]'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#10141E]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isActive ? 'text-blue-400' : 'text-zinc-500'
                      }`}
                    />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                        isActive
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-[#141824] text-zinc-500'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer Signature */}
      <div className="p-3.5 border-t border-[#181C26] bg-[#07090D] flex flex-col gap-2">
        <Link
          href="/downloads"
          className="p-2 rounded-lg bg-[#101420] border border-[#1C2233] hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-between transition-colors"
        >
          <span className="text-[11px] font-medium flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-zinc-400" />
            Tema & Eklenti (.zip)
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
        </Link>

        <div className="pt-1 flex items-center justify-center">
          <ShazVisionSignature />
        </div>
      </div>
    </aside>
  );
}
