import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  subtitle?: string;
}

export default function MetricCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  subtitle,
}: MetricCardProps) {
  return (
    <div className="p-4 rounded-xl bg-[#0F121A] border border-[#1C2233] hover:border-[#2A344D] transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-zinc-400">{title}</span>
        <div className="p-1.5 rounded-lg bg-[#161B26] text-zinc-400 border border-[#222A3B]">
          <Icon className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="mt-2.5 flex items-baseline justify-between">
        <span className="text-xl font-bold font-mono text-white tracking-tight">{value}</span>
        {change && (
          <span
            className={`text-[11px] font-mono font-medium px-1.5 py-0.5 rounded ${
              isPositive
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
            }`}
          >
            {change}
          </span>
        )}
      </div>

      {subtitle && <p className="mt-1 text-[10px] text-zinc-500">{subtitle}</p>}
    </div>
  );
}
