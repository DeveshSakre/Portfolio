import "./styles/Impact.css";

const impactStats = [
  {
    number: "3+",
    line1: "Production-ready",
    line2: "Applications",
  },
  {
    number: "4",
    line1: "Featured",
    line2: "Projects",
  },
  {
    number: "3",
    line1: "Core Engineering",
    line2: "Domains",
  },
  {
    number: "2",
    line1: "National-level",
    line2: "Hackathons",
  },
];

const Impact = () => {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-container section-container">
        <div className="impact-header">
          <h2 className="impact-title">
            Building software <span className="text-highlight">that ships.</span>
          </h2>
          <p className="impact-subtitle">
            Turning ideas into production-ready applications across Android, full-stack systems, and AI/ML.
          </p>
        </div>

        <div className="impact-stats-grid">
          {impactStats.map((stat, idx) => (
            <div key={idx} className="impact-stat-item">
              <div className="impact-stat-number">{stat.number}</div>
              <div className="impact-stat-label">
                <span>{stat.line1}</span>
                <span>{stat.line2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
