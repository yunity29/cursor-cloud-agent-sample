const nowIso = () => new Date().toISOString();

/**
 * モックのマーケットスナップショットを返す（価格は概算・例示）。
 * 「更新」ボタンで少しだけランダムに上下するようにして、動きが見えるようにする。
 */
export function createMockMarketSnapshot(seed = Date.now()) {
  // 疑似乱数（軽量・再現性あり）
  let x = seed % 2147483647;
  const rnd = () => {
    x = (x * 48271) % 2147483647;
    return x / 2147483647;
  };

  const jitter = (base, maxAbs) => {
    const delta = (rnd() * 2 - 1) * maxAbs;
    return base + delta;
  };

  const make = ({ id, name, value, unit, currency, changeAbs, changePct }) => {
    const updatedAt = nowIso();
    return {
      id,
      name,
      value,
      unit, // "pt", "JPY", "USD", etc.
      currency, // "JPY" | "USD" | null
      changeAbs,
      changePct,
      updatedAt,
      isMock: true,
    };
  };

  // 株価指数（例）
  const nikkei = 39000;
  const topix = 2750;
  const dow = 38000;
  const nasdaq = 15500;
  const sp500 = 4850;

  // 商品・為替（例）
  const goldUsd = 2050; // USD/oz
  const usdJpy = 148.2;
  const eurJpy = 161.4;
  const eurUsd = 1.089;

  const indices = [
    make({
      id: "nikkei225",
      name: "日経平均 (Nikkei 225)",
      value: jitter(nikkei, 180),
      unit: "pt",
      currency: null,
      changeAbs: jitter(120, 80),
      changePct: jitter(0.32, 0.18),
    }),
    make({
      id: "topix",
      name: "TOPIX",
      value: jitter(topix, 25),
      unit: "pt",
      currency: null,
      changeAbs: jitter(9, 7),
      changePct: jitter(0.28, 0.22),
    }),
    make({
      id: "dow",
      name: "NYダウ",
      value: jitter(dow, 220),
      unit: "pt",
      currency: null,
      changeAbs: jitter(-85, 140),
      changePct: jitter(-0.22, 0.35),
    }),
    make({
      id: "sp500",
      name: "S&P 500",
      value: jitter(sp500, 22),
      unit: "pt",
      currency: null,
      changeAbs: jitter(6.2, 10),
      changePct: jitter(0.12, 0.22),
    }),
    make({
      id: "nasdaq",
      name: "NASDAQ",
      value: jitter(nasdaq, 140),
      unit: "pt",
      currency: null,
      changeAbs: jitter(35, 80),
      changePct: jitter(0.24, 0.35),
    }),
  ];

  const commodities = [
    make({
      id: "gold",
      name: "金 (Gold)",
      value: jitter(goldUsd, 18),
      unit: "USD/oz",
      currency: "USD",
      changeAbs: jitter(4.2, 8),
      changePct: jitter(0.20, 0.35),
    }),
  ];

  const fx = [
    make({
      id: "usdjpy",
      name: "USD/JPY",
      value: jitter(usdJpy, 0.6),
      unit: null,
      currency: null,
      changeAbs: jitter(0.12, 0.2),
      changePct: jitter(0.08, 0.15),
    }),
    make({
      id: "eurjpy",
      name: "EUR/JPY",
      value: jitter(eurJpy, 0.7),
      unit: null,
      currency: null,
      changeAbs: jitter(-0.08, 0.2),
      changePct: jitter(-0.05, 0.15),
    }),
    make({
      id: "eurusd",
      name: "EUR/USD",
      value: jitter(eurUsd, 0.01),
      unit: null,
      currency: null,
      changeAbs: jitter(0.002, 0.004),
      changePct: jitter(0.10, 0.20),
    }),
  ];

  return {
    updatedAt: nowIso(),
    indices,
    commodities,
    fx,
    note: "このデータはモックです（サンプル用途）。",
  };
}

