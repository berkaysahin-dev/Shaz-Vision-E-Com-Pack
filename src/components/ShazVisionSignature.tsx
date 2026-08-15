import React from 'react';

export default function ShazVisionSignature({ className = '' }: { className?: string }) {
  return (
    <div className={`text-[11px] text-zinc-500 font-mono tracking-wider select-none ${className}`}>
      <span className="hover:text-zinc-400 transition-colors">shazvision.com</span>
      <span className="mx-2 text-zinc-600">•</span>
      <span className="font-semibold text-zinc-400 hover:text-zinc-300 transition-colors">SHAZ VISION</span>
    </div>
  );
}
