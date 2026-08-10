import { useState } from "react";
import { FaGithub, FaWrench, FaStethoscope } from "react-icons/fa";
import { TbDeviceMobile, TbActivity } from "react-icons/tb";
import { FiImage, FiCheck, FiDownload, FiVideo } from "react-icons/fi";
import SpendWiseGallery from "./SpendWiseGallery";
import MediLinkGallery from "./MediLinkGallery";
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
    github: "https://github.com/DeveshSakre/LocalFix",
    apk: "/projects/localfix/localfix.apk",
    apkAvailable: false,
    hasGallery: false,
    technicalHighlights: [
      "MVVM architecture with clear separation of UI, data, and business logic",
      "Jetpack Compose UI with Material 3",
      "Hilt dependency injection",
      "Firebase authentication and backend integration",
      "Service-provider discovery and booking workflow",
      "Location-based service discovery using Google Maps",
    ],
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
    github: "https://github.com/DeveshSakre/SpendWise",
    apk: "/projects/spendwise/spendwise.apk",
    apkAvailable: true,
    hasGallery: true,
    technicalHighlights: [
      "MVVM-based Android architecture",
      "Local persistence with Room",
      "Jetpack Compose UI",
      "AI-powered financial assistant",
      "Budget and spending analytics",
      "Responsive desktop widget",
    ],
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
    github: "https://github.com/DeveshSakre/AirPulse-AI",
    video: "https://drive.google.com/file/d/1FzxlGLQ1VAREwwxBjI3f1PBwnsdXu5qD/view?usp=sharing",
    hasGallery: false,
    technicalHighlights: [
      "FastAPI backend architecture",
      "React + TypeScript frontend",
      "Machine-learning-powered AQI forecasting",
      "Ward-level air-quality intelligence",
      "MapLibre geospatial visualization",
      "AI-powered citizen and officer insights",
    ],
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
    github: "https://github.com/DeveshSakre/MediLink",
    apk: "/projects/medilink/medilink.apk",
    apkAvailable: true,
    hasGallery: true,
    technicalHighlights: [
      "MVVM architecture with repository-based data layer",
      "Jetpack Compose and Material 3 UI",
      "Hilt dependency injection",
      "Room local persistence",
      "Firebase authentication and backend services",
      "Patient and doctor appointment workflows",
    ],
  },
];

const Work = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedProject((prev) => (prev === title ? null : title));
  };

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
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.title;
            const isSpendWise = project.title === "SpendWise";
            const isMediLink = project.title === "MediLink";

            return (
              <div
                key={index}
                className={`project-card glass-card ${isExpanded ? "spendwise-card-featured" : ""}`}
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

                  {/* Technical Highlights (shown when expanded) */}
                  {isExpanded && project.technicalHighlights && (
                    <div className="project-highlights-container">
                      <div className="highlights-header">
                        <FiCheck className="highlights-icon" />
                        <span>Technical Highlights</span>
                      </div>
                      <div className="highlights-grid">
                        {project.technicalHighlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="highlight-bullet">
                            <FiCheck className="bullet-icon" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expandable App Screenshots Gallery */}
                  {isExpanded && isSpendWise && <SpendWiseGallery />}
                  {isExpanded && isMediLink && <MediLinkGallery />}
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
                        rel="noopener noreferrer"
                        className="project-btn github-btn"
                        data-cursor="disable"
                      >
                        <FaGithub className="btn-btn-icon" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.apk && (
                      project.apkAvailable ? (
                        <a
                          href={project.apk}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn apk-btn"
                          data-cursor="disable"
                        >
                          <FiDownload className="btn-btn-icon" />
                          <span>Download APK</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="project-btn apk-btn disabled"
                          title="APK download coming soon"
                          data-cursor="disable"
                        >
                          <FiDownload className="btn-btn-icon" />
                          <span>Download APK</span>
                        </button>
                      )
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn video-btn"
                        data-cursor="disable"
                      >
                        <FiVideo className="btn-btn-icon" />
                        <span>Video</span>
                      </a>
                    )}
                    {!project.video && (
                      <button
                        type="button"
                        className={`project-btn screenshots-btn ${isExpanded ? "active" : ""}`}
                        onClick={() => toggleExpand(project.title)}
                        data-cursor="disable"
                      >
                        <FiImage className="btn-btn-icon" />
                        <span>{isExpanded ? "Hide Screenshots" : "Screenshots"}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;

