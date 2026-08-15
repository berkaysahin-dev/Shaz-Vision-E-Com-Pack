import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';

export const metadata: Metadata = {
  title: 'Shaz Vision E-Com Pack | Unified AI & E-Commerce Command Center',
  description:
    'Comprehensive E-Commerce Suite combining Vision Profit Calc, Ads Metrics Bot, AI Customer Support, Vision Sync, Content Extractor, Product Intelligence, and Downloadable Shopify Theme & UI Extension.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="bg-[#090A0F] text-gray-100 min-h-screen flex antialiased">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          <TopBar />
          <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto space-y-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
