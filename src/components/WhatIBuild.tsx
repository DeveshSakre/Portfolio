import "./styles/WhatIBuild.css";

const buildItems = [
  {
    number: "01",
    title: "Android Applications",
    description:
      "Production-ready mobile applications with Kotlin, Jetpack Compose, MVVM, Room, Hilt and Firebase.",
  },
  {
    number: "02",
    title: "Full-Stack Systems",
    description:
      "End-to-end applications with React, TypeScript, FastAPI, databases and APIs.",
  },
  {
    number: "03",
    title: "AI-Powered Products",
    description:
      "Applied ML systems combining predictive models, data processing and intelligent user experiences.",
  },
];

const WhatIBuild = () => {
  return (
    <section className="what-i-build-section" id="what-i-build">
      <div className="what-i-build-container section-container">
        <div className="section-tag">ENGINEERING FOCUS</div>

        <h2 className="what-i-build-title">
          What I <span className="text-highlight">Build</span>
        </h2>

        <p className="what-i-build-subtitle">
          I build production-ready software across mobile, full-stack systems, and applied AI.
        </p>

        <div className="what-i-build-grid">
          {buildItems.map((item) => (
            <div key={item.number} className="build-card glass-card">
              <span className="build-card-number">{item.number}</span>
              <h3 className="build-card-title">{item.title}</h3>
              <p className="build-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
