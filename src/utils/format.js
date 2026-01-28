export function formatNumber(value, { maximumFractionDigits = 0 } = {}) {
  if (typeof value !== "number" || Number.isNaN(value)) return "-";
  return new Intl.NumberFormat("ja-JP", { maximumFractionDigits }).format(value);
}

export function formatSigned(value, { maximumFractionDigits = 0 } = {}) {
  if (typeof value !== "number" || Number.isNaN(value)) return "-";
  const sign = value > 0 ? "+" : value < 0 ? "−" : "";
  const abs = Math.abs(value);
  return `${sign}${formatNumber(abs, { maximumFractionDigits })}`;
}

export function formatPercentSigned(value, { maximumFractionDigits = 2 } = {}) {
  if (typeof value !== "number" || Number.isNaN(value)) return "-";
  const sign = value > 0 ? "+" : value < 0 ? "−" : "";
  const abs = Math.abs(value);
  return `${sign}${formatNumber(abs, { maximumFractionDigits })}%`;
}

export function formatIsoToJst(isoString) {
  if (!isoString) return "-";
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return "-";
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Tokyo",
  }).format(d);
}

export function trendClass(changeAbs) {
  if (typeof changeAbs !== "number" || Number.isNaN(changeAbs)) return "neutral";
  if (changeAbs > 0) return "up";
  if (changeAbs < 0) return "down";
  return "neutral";
}

