import { FaGithub, FaExternalLinkAlt, FaWrench, FaStethoscope } from "react-icons/fa";
import { TbDeviceMobile, TbActivity } from "react-icons/tb";
import "./styles/Work.css";

const projects = [
  {
    title: "LocalFix",
    subtitle: "Android Service Marketplace",
    description:
      "An Android service marketplace connecting customers with local professionals such as electricians, plumbers, and carpenters for seamless on-demand booking and service management.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Firebase"],
    category: "Android Application",
    icon: <FaWrench className="project-icon text-cyan" />,
    gradient: "linear-gradient(135deg, rgba(34, 211, 238, 0.12) 0%, rgba(15, 23, 42, 0.85) 100%)",
    borderColor: "rgba(34, 211, 238, 0.35)",
    github: "https://github.com/devsakre",
    demo: "https://github.com/devsakre",
  },
  {
    title: "SpendWise",
    subtitle: "Expense Tracking Application",
    description:
      "A modern Android expense tracking application for managing personal finances with offline-first local storage, interactive graphical budgets, and spending analytics.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
    category: "Android Application",
    icon: <TbDeviceMobile className="project-icon text-green" />,
    gradient: "linear-gradient(135deg, rgba(74, 222, 128, 0.12) 0%, rgba(15, 23, 42, 0.85) 100%)",
    borderColor: "rgba(74, 222, 128, 0.35)",
    github: "https://github.com/devsakre",
    demo: "https://github.com/devsakre",
  },
  {
    title: "AirPulse AI",
    subtitle: "Urban Air-Quality Intelligence",
    description:
      "AI-powered urban air-quality intelligence platform providing real-time AQI forecasting, emission source analysis, ward-level insights, and actionable health recommendations.",
    tech: ["FastAPI", "React", "TypeScript", "Machine Learning", "MapLibre"],
    category: "AI & Full Stack",
    icon: <TbActivity className="project-icon text-violet" />,
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(15, 23, 42, 0.85) 100%)",
    borderColor: "rgba(168, 85, 247, 0.35)",
    github: "https://github.com/devsakre",
    demo: "https://github.com/devsakre",
  },
  {
    title: "MediLink",
    subtitle: "Healthcare & Medical Application",
    description:
      "A modern healthcare and medical management Android application connecting patients with healthcare services, appointment scheduling, and encrypted medical record tracking.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Firebase"],
    category: "Android Application",
    icon: <FaStethoscope className="project-icon text-blue" />,
    gradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(15, 23, 42, 0.85) 100%)",
    borderColor: "rgba(56, 189, 248, 0.35)",
    github: "https://github.com/devsakre",
    demo: "https://github.com/devsakre",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="section-tag">Featured Work</div>
        
        <h2 className="work-title">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="work-subtitle">
          Selected production projects across Native Android, Healthcare systems, and Full-Stack AI platforms.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card"
              style={{
                background: project.gradient,
                borderColor: project.borderColor,
              }}
            >
              <div className="project-card-header">
                <div className="project-category-tag">
                  {project.icon}
                  <span>{project.category}</span>
                </div>
                <span className="project-index">0{index + 1}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-name">{project.title}</h3>
                <h4 className="project-sub">{project.subtitle}</h4>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-tags">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="project-tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn github-btn"
                      data-cursor="disable"
                    >
                      <FaGithub className="btn-btn-icon" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn demo-btn"
                      data-cursor="disable"
                    >
                      <FaExternalLinkAlt className="btn-btn-icon" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
