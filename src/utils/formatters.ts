export function formatCurrency(value: number): string {
  const safeValue = Number.isFinite(value) ? value : 0;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(safeValue);
}

export function formatPercent(value: number): string {
  const safeValue = Number.isFinite(value) ? value : 0;
  return `${safeValue.toFixed(1).replace(".", ",")}%`;
}

export function parseCurrencyInput(value: string): number {
  if (!value.trim()) return 0;

  const cleaned = value.replace(/[^\d,.-]/g, "");
  const lastComma = cleaned.lastIndexOf(",");
  const lastDot = cleaned.lastIndexOf(".");
  const hasComma = lastComma !== -1;
  const hasDot = lastDot !== -1;

  if (hasDot && !hasComma && /^\d{1,3}(\.\d{3})+$/.test(cleaned)) {
    const parsed = Number.parseFloat(cleaned.replace(/\./g, ""));
    return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
  }

  if (hasComma && !hasDot && /^\d{1,3}(,\d{3})+$/.test(cleaned)) {
    const parsed = Number.parseFloat(cleaned.replace(/,/g, ""));
    return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
  }

  const decimalSeparator = lastComma > lastDot ? "," : ".";
  const normalized =
    decimalSeparator === ","
      ? cleaned.replace(/\./g, "").replace(",", ".")
      : cleaned.replace(/,/g, "");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

export function safeNumber(value: number, fallback = 0): number {
  return Number.isFinite(value) ? value : fallback;
}
