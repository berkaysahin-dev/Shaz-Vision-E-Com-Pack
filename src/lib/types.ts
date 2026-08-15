export interface NavigationItem {
  name: string;
  href: string;
  icon: string;
  badge?: string;
  description: string;
  category: 'core' | 'intelligence' | 'downloads';
}

export interface UnitEconomicsInput {
  sellingPrice: number;
  cogs: number;
  platformFeeRate: number; // percentage
  paymentGatewayRate: number; // percentage
  shippingCost: number;
  packagingCost: number;
  vatRate: number; // percentage (e.g. 20)
  vatInclusive: boolean;
  adSpendPerUnit: number;
  returnRate: number; // percentage
  reverseLogisticsCost: number;
}

export interface UnitEconomicsResult {
  grossRevenue: number;
  netRevenue: number;
  vatAmount: number;
  platformFee: number;
  gatewayFee: number;
  shippingAndPackaging: number;
  totalVariableCosts: number;
  adSpend: number;
  returnLossPerUnit: number;
  netProfit: number;
  netMarginPct: number;
  contributionMarginPct: number;
  breakEvenRoas: number;
  targetRoas3x: number;
  poas: number;
}

export interface AdCampaign {
  id: string;
  name: string;
  platform: 'Meta Ads' | 'Google Ads' | 'TikTok Ads';
  status: 'active' | 'paused' | 'learning';
  spend: number;
  revenue: number;
  impressions: number;
  clicks: number;
  purchases: number;
  roas: number;
  cpa: number;
  ctr: number;
  cpc: number;
  aiVerdict: 'scale' | 'optimize' | 'stop' | 'healthy';
  recommendation: string;
}

export interface SupportTicket {
  id: string;
  customerName: string;
  email: string;
  orderNumber: string;
  topic: 'Order Status' | 'Return Request' | 'Product Inquiry' | 'Payment Issue';
  status: 'Open' | 'Resolved' | 'Escalated';
  sentiment: 'positive' | 'neutral' | 'negative';
  lastMessage: string;
  aiSuggestedReply: string;
  createdAt: string;
}

export interface SyncChannel {
  id: string;
  name: string;
  type: 'Shopify' | 'Trendyol' | 'Hepsiburada' | 'Amazon' | 'WooCommerce';
  logo: string;
  status: 'connected' | 'syncing' | 'error';
  totalProducts: number;
  syncedCount: number;
  failedCount: number;
  lastSyncAt: string;
  autoSyncInterval: string;
}

export interface ExtractedProduct {
  title: string;
  brand: string;
  sku: string;
  regularPrice: number;
  salePrice?: number;
  currency: string;
  inStock: boolean;
  stockCount: number;
  category: string;
  rating: number;
  reviewsCount: number;
  variants: Array<{ name: string; sku: string; price: number; inStock: boolean }>;
  specs: Record<string, string>;
  images: string[];
  description: string;
}

export interface TrackedCompetitor {
  id: string;
  productName: string;
  competitorName: string;
  platform: 'Trendyol' | 'Amazon' | 'Hepsiburada' | 'Shopify Store';
  ourPrice: number;
  competitorPrice: number;
  priceDifference: number; // percentage
  status: 'lower' | 'match' | 'higher';
  trendVelocity: 'rapid-increase' | 'stable' | 'dumping';
  lastChecked: string;
  url: string;
}
