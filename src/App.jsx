import { useMemo, useState } from "react";
import "./App.css";
import { SectionCard } from "./components/SectionCard.jsx";
import { MarketTable } from "./components/MarketTable.jsx";
import { createMockMarketSnapshot } from "./data/mockMarket.js";
import { formatIsoToJst } from "./utils/format.js";

function App() {
  const [seed, setSeed] = useState(() => Date.now());

  const snapshot = useMemo(() => createMockMarketSnapshot(seed), [seed]);

  return (
    <div className="app">
      <header className="header">
        <div className="titleBlock">
          <h1 className="title">マーケット指標一覧</h1>
          <p className="subtitle">{snapshot.note}</p>
        </div>
        <div className="headerRight">
          <div className="updated">
            最終更新: <span className="mono">{formatIsoToJst(snapshot.updatedAt)}</span>
          </div>
          <button className="btn" onClick={() => setSeed(Date.now())}>
            更新
          </button>
        </div>
      </header>

      <main className="grid">
        <SectionCard title="株価指数" subtitle="主要">
          <MarketTable rows={snapshot.indices} />
        </SectionCard>
        <SectionCard title="商品" subtitle="Gold">
          <MarketTable rows={snapshot.commodities} />
        </SectionCard>
        <SectionCard title="為替" subtitle="FX">
          <MarketTable rows={snapshot.fx} />
        </SectionCard>
      </main>

      <footer className="footer">
        <span className="muted">
          ※ 表示はモック（例）です。実データ連携は後からAPI差し替えできます。
        </span>
      </footer>
    </div>
  );
}

export default App;
