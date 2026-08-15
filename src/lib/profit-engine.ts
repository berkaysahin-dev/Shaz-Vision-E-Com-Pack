import { UnitEconomicsInput, UnitEconomicsResult } from './types';

export function calculateProfitability(input: UnitEconomicsInput): UnitEconomicsResult {
  const {
    sellingPrice,
    cogs,
    platformFeeRate,
    paymentGatewayRate,
    shippingCost,
    packagingCost,
    vatRate,
    vatInclusive,
    adSpendPerUnit,
    returnRate,
    reverseLogisticsCost,
  } = input;

  let netRevenue = sellingPrice;
  let vatAmount = 0;

  if (vatInclusive) {
    // Selling price includes VAT: Net Revenue = SellingPrice / (1 + vatRate / 100)
    netRevenue = sellingPrice / (1 + vatRate / 100);
    vatAmount = sellingPrice - netRevenue;
  } else {
    // Selling price excludes VAT
    vatAmount = sellingPrice * (vatRate / 100);
    netRevenue = sellingPrice;
  }

  const platformFee = sellingPrice * (platformFeeRate / 100);
  const gatewayFee = sellingPrice * (paymentGatewayRate / 100);
  const shippingAndPackaging = shippingCost + packagingCost;

  // Return loss per sold unit: (returnRate%) * (shippingCost + reverseLogisticsCost + partial repackage)
  const returnRateFrac = returnRate / 100;
  const returnLossPerUnit = returnRateFrac * (shippingCost + reverseLogisticsCost + packagingCost * 0.5);

  const totalVariableCosts = cogs + platformFee + gatewayFee + shippingAndPackaging + returnLossPerUnit;
  const netProfit = netRevenue - totalVariableCosts - adSpendPerUnit;

  const netMarginPct = sellingPrice > 0 ? (netProfit / sellingPrice) * 100 : 0;
  const contributionMargin = netRevenue - totalVariableCosts;
  const contributionMarginPct = netRevenue > 0 ? (contributionMargin / netRevenue) * 100 : 0;

  // Break-even ROAS = SellingPrice / (SellingPrice - VariableCostsExcludingAds)
  const marginPerUnitBeforeAds = netRevenue - totalVariableCosts;
  const breakEvenRoas = marginPerUnitBeforeAds > 0 ? sellingPrice / marginPerUnitBeforeAds : 999;
  const targetRoas3x = breakEvenRoas * 1.5;

  // POAS = Net Profit / Ad Spend
  const poas = adSpendPerUnit > 0 ? (netProfit + adSpendPerUnit) / adSpendPerUnit : 0;

  return {
    grossRevenue: sellingPrice,
    netRevenue: Number(netRevenue.toFixed(2)),
    vatAmount: Number(vatAmount.toFixed(2)),
    platformFee: Number(platformFee.toFixed(2)),
    gatewayFee: Number(gatewayFee.toFixed(2)),
    shippingAndPackaging: Number(shippingAndPackaging.toFixed(2)),
    totalVariableCosts: Number(totalVariableCosts.toFixed(2)),
    adSpend: Number(adSpendPerUnit.toFixed(2)),
    returnLossPerUnit: Number(returnLossPerUnit.toFixed(2)),
    netProfit: Number(netProfit.toFixed(2)),
    netMarginPct: Number(netMarginPct.toFixed(2)),
    contributionMarginPct: Number(contributionMarginPct.toFixed(2)),
    breakEvenRoas: Number(breakEvenRoas.toFixed(2)),
    targetRoas3x: Number(targetRoas3x.toFixed(2)),
    poas: Number(poas.toFixed(2)),
  };
}

export const MARKETPLACE_PRESETS: Record<string, Partial<UnitEconomicsInput>> = {
  trendyol: {
    platformFeeRate: 21.0,
    paymentGatewayRate: 0.0, // Included in commission
    vatRate: 20.0,
    vatInclusive: true,
    shippingCost: 42.5,
    packagingCost: 6.0,
    returnRate: 8.5,
    reverseLogisticsCost: 42.5,
  },
  hepsiburada: {
    platformFeeRate: 19.5,
    paymentGatewayRate: 0.0,
    vatRate: 20.0,
    vatInclusive: true,
    shippingCost: 45.0,
    packagingCost: 6.0,
    returnRate: 7.0,
    reverseLogisticsCost: 45.0,
  },
  amazon: {
    platformFeeRate: 15.0,
    paymentGatewayRate: 0.0,
    vatRate: 20.0,
    vatInclusive: true,
    shippingCost: 38.0,
    packagingCost: 8.0,
    returnRate: 5.0,
    reverseLogisticsCost: 38.0,
  },
  shopify: {
    platformFeeRate: 0.0, // Direct store
    paymentGatewayRate: 2.8,
    vatRate: 20.0,
    vatInclusive: true,
    shippingCost: 40.0,
    packagingCost: 8.0,
    returnRate: 4.0,
    reverseLogisticsCost: 40.0,
  },
};
