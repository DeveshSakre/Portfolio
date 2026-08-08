import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container section-container">
        <div className="section-tag">About Me</div>
        
        <h2 className="about-heading">
          Driven by passion for <span className="text-highlight">building real-world software</span>.
        </h2>

        <div className="about-grid">
          <div className="about-card glass-card">
            <p className="about-para">
              I am a <strong>Computer Science Engineer</strong> and <strong>Software Developer</strong> who focuses on turning complex concepts into robust, scalable, production-ready applications. My work spans native <strong>Android Development</strong>, modern <strong>Full-Stack Web Systems</strong>, and intelligent <strong>Machine Learning / AI integrations</strong>.
            </p>
            <p className="about-para">
              Whether building intuitive Android interfaces with Jetpack Compose, designing backend APIs, or developing machine learning forecasting models, I prioritize performance, maintainable code, and real user impact.
            </p>
            <p className="about-para">
              Active participant in national-level hackathons (including ET AI Hackathon & SEBI Hackathon), constantly pushing the boundaries of what software can achieve under pressure.
            </p>
          </div>

          <div className="about-highlights-grid">
            <div className="highlight-item glass-card">
              <span className="highlight-num">01</span>
              <h4>Android Engineering</h4>
              <p>Jetpack Compose, MVVM, Clean Architecture, Room & Hilt</p>
            </div>
            <div className="highlight-item glass-card">
              <span className="highlight-num">02</span>
              <h4>Full-Stack Development</h4>
              <p>FastAPI, Flask, React, TypeScript, Node.js & RESTful Systems</p>
            </div>
            <div className="highlight-item glass-card">
              <span className="highlight-num">03</span>
              <h4>Machine Learning & AI</h4>
              <p>TensorFlow, Scikit-learn, XGBoost, Predictive Forecasting</p>
            </div>
            <div className="highlight-item glass-card">
              <span className="highlight-num">04</span>
              <h4>Hackathons & Shipping</h4>
              <p>National Hackathon awards & rapid production delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
