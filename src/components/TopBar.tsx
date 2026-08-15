'use client';

import React from 'react';
import { Search, ExternalLink, Activity, Github } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
  return (
    <header className="h-14 border-b border-[#181C26] bg-[#090B10]/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30 select-none">
      {/* Search Input */}
      <div className="flex items-center gap-3 w-80">
        <div className="relative w-full">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Modül veya özellik ara... (Ctrl + K)"
            className="w-full bg-[#11141E] border border-[#1C2233] rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* System Health */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#11141E] border border-[#1C2233] text-[11px] text-zinc-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>8 Modül Aktif</span>
        </div>

        {/* GitHub Link */}
        <Link
          href="https://github.com/berkaysahin-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white bg-[#11141E] hover:bg-[#161B28] border border-[#1C2233] px-2.5 py-1 rounded-md transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>berkaysahin-dev</span>
          <ExternalLink className="w-2.5 h-2.5 text-zinc-500" />
        </Link>
      </div>
    </header>
  );
}
