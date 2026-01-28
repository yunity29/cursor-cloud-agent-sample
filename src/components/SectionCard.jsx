export function SectionCard({ title, subtitle, children }) {
  return (
    <section className="card">
      <div className="cardHeader">
        <div className="cardTitleRow">
          <h2 className="cardTitle">{title}</h2>
          {subtitle ? <span className="badge">{subtitle}</span> : null}
        </div>
      </div>
      <div className="cardBody">{children}</div>
    </section>
  );
}

