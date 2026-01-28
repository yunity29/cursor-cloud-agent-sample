import {
  formatIsoToJst,
  formatNumber,
  formatPercentSigned,
  formatSigned,
  trendClass,
} from "../utils/format.js";

export function MarketTable({ rows }) {
  return (
    <div className="tableWrap">
      <table className="table">
        <thead>
          <tr>
            <th className="thName">指標</th>
            <th className="thValue">現在値</th>
            <th className="thChange">前日比</th>
            <th className="thUpdated">更新</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const trend = trendClass(r.changeAbs);
            const valueDigits =
              typeof r.value === "number" && Math.abs(r.value) < 10 ? 3 : 0;
            const changeDigits =
              typeof r.changeAbs === "number" && Math.abs(r.changeAbs) < 10 ? 3 : 0;

            return (
              <tr key={r.id} className={`row ${trend}`}>
                <td className="tdName">
                  <div className="name">{r.name}</div>
                  <div className="meta">
                    {r.unit ? <span className="muted">{r.unit}</span> : null}
                    {r.isMock ? <span className="pill">MOCK</span> : null}
                  </div>
                </td>
                <td className="tdValue">
                  {formatNumber(r.value, { maximumFractionDigits: valueDigits })}
                </td>
                <td className="tdChange">
                  <span className={`chg ${trend}`}>
                    {formatSigned(r.changeAbs, {
                      maximumFractionDigits: changeDigits,
                    })}
                  </span>
                  <span className={`pct ${trend}`}>
                    {formatPercentSigned(r.changePct, { maximumFractionDigits: 2 })}
                  </span>
                </td>
                <td className="tdUpdated">{formatIsoToJst(r.updatedAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

