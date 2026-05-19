import { ActivityType, meiConfig, MeiType } from "@/data/meiConfig";

export type LimitResult = {
  activeMonths: number;
  proportionalLimit: number;
  currentRevenue: number;
  remainingRevenue: number;
  usagePercentage: number;
  monthlyRemainingLimit: number;
};

export type ProjectionResult = {
  activeMonths: number;
  proportionalLimit: number;
  projectedRevenue: number;
  difference: number;
  status: "dentro" | "perto" | "acima";
  allowedMonthlyRevenue: number;
};

export type DisqualificationRiskResult = {
  activeMonths: number;
  proportionalLimit: number;
  accumulatedRevenue: number;
  expectedRevenueUntilDecember: number;
  projectedRevenue: number;
  difference: number;
  usagePercentage: number;
  status: "dentro" | "perto" | "acima";
};

function getMonthlyLimit(type: MeiType): number {
  return type === "caminhoneiro" ? meiConfig.trucker.monthlyLimit : meiConfig.common.monthlyLimit;
}

function clampMonth(month: number): number {
  if (!Number.isFinite(month)) return 1;
  return Math.min(Math.max(Math.trunc(month), 1), 12);
}

function clampRevenue(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function getActiveMonths(openingMonth: number): number {
  return 13 - clampMonth(openingMonth);
}

export function calculateMeiLimit(type: MeiType, openingMonth: number): number {
  return getActiveMonths(openingMonth) * getMonthlyLimit(type);
}

export function calculateUsagePercentage(currentRevenue: number, limit: number): number {
  if (!Number.isFinite(limit) || limit <= 0) return 0;
  return (clampRevenue(currentRevenue) / limit) * 100;
}

export function calculateMonthlyRemainingLimit(remainingLimit: number, currentMonth: number): number {
  const remainingMonths = Math.max(1, 13 - clampMonth(currentMonth));
  return clampRevenue(remainingLimit) / remainingMonths;
}

export function calculateRemainingRevenue(
  type: MeiType,
  openingMonth: number,
  currentRevenue: number,
  currentMonth = new Date().getMonth() + 1
): LimitResult {
  const proportionalLimit = calculateMeiLimit(type, openingMonth);
  const safeCurrentRevenue = clampRevenue(currentRevenue);
  const remainingRevenue = proportionalLimit - safeCurrentRevenue;
  return {
    activeMonths: getActiveMonths(openingMonth),
    proportionalLimit,
    currentRevenue: safeCurrentRevenue,
    remainingRevenue,
    usagePercentage: calculateUsagePercentage(safeCurrentRevenue, proportionalLimit),
    monthlyRemainingLimit: calculateMonthlyRemainingLimit(remainingRevenue, currentMonth)
  };
}

export function calculateRevenueProjection(
  type: MeiType,
  openingMonth: number,
  currentMonth: number,
  accumulatedRevenue: number,
  expectedMonthlyAverage: number
): ProjectionResult {
  const proportionalLimit = calculateMeiLimit(type, openingMonth);
  const safeCurrentMonth = clampMonth(currentMonth);
  const safeAccumulatedRevenue = clampRevenue(accumulatedRevenue);
  const safeExpectedMonthlyAverage = clampRevenue(expectedMonthlyAverage);
  const monthsToProject = Math.max(1, 13 - safeCurrentMonth);
  const projectedRevenue = safeAccumulatedRevenue + monthsToProject * safeExpectedMonthlyAverage;
  const difference = proportionalLimit - projectedRevenue;
  const usage = calculateUsagePercentage(projectedRevenue, proportionalLimit);
  const remainingMonthsIncludingCurrent = Math.max(1, 13 - safeCurrentMonth);

  return {
    activeMonths: getActiveMonths(openingMonth),
    proportionalLimit,
    projectedRevenue,
    difference,
    status: projectedRevenue > proportionalLimit ? "acima" : usage >= 90 ? "perto" : "dentro",
    allowedMonthlyRevenue: Math.max(0, proportionalLimit - safeAccumulatedRevenue) / remainingMonthsIncludingCurrent
  };
}

export function calculateDisqualificationRisk(
  type: MeiType,
  openingMonth: number,
  accumulatedRevenue: number,
  expectedRevenueUntilDecember: number
): DisqualificationRiskResult {
  const proportionalLimit = calculateMeiLimit(type, openingMonth);
  const safeAccumulatedRevenue = clampRevenue(accumulatedRevenue);
  const safeExpectedRevenueUntilDecember = clampRevenue(expectedRevenueUntilDecember);
  const projectedRevenue = safeAccumulatedRevenue + safeExpectedRevenueUntilDecember;
  const difference = proportionalLimit - projectedRevenue;
  const usagePercentage = calculateUsagePercentage(projectedRevenue, proportionalLimit);

  return {
    activeMonths: getActiveMonths(openingMonth),
    proportionalLimit,
    accumulatedRevenue: safeAccumulatedRevenue,
    expectedRevenueUntilDecember: safeExpectedRevenueUntilDecember,
    projectedRevenue,
    difference,
    usagePercentage,
    status: projectedRevenue > proportionalLimit ? "acima" : usagePercentage >= 90 ? "perto" : "dentro"
  };
}

export function calculateDasValue(type: MeiType, activity: ActivityType): number {
  return meiConfig.das2026[type]?.[activity] ?? 0;
}

export function getUsageStatus(percentage: number, exceeded: boolean): "success" | "warning" | "danger" {
  if (exceeded || percentage > 90) return "danger";
  if (percentage >= 70) return "warning";
  return "success";
}
