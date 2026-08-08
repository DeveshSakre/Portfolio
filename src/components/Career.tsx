import "./styles/Career.css";
import { FaTrophy, FaGraduationCap, FaMobileAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Android & Full-Stack Developer",
    organization: "Production Software Development",
    period: "PRESENT",
    icon: <FaMobileAlt />,
    description:
      "Engineering robust Android applications (Kotlin, Jetpack Compose, MVVM, Room, Hilt) and responsive full-stack AI web platforms. Focused on high performance, clean architecture, and real-world deployment.",
  },
  {
    title: "ET AI Hackathon Winner / Finalist",
    organization: "AirPulse AI Platform",
    period: "NATIONAL HACKATHON",
    icon: <FaTrophy />,
    description:
      "Designed and built AirPulse AI—an intelligent urban air quality forecasting & analytics engine delivering real-time AQI prediction models, ward-level heatmaps, and AI recommendations.",
  },
  {
    title: "SEBI Hackathon Participant",
    organization: "BrokerMint Fintech Innovation",
    period: "NATIONAL HACKATHON",
    icon: <FaTrophy />,
    description:
      "Developed BrokerMint during the SEBI Hackathon, creating high-throughput financial telemetry workflows and algorithmic data validation systems under strict hackathon constraints.",
  },
  {
    title: "Computer Science & Engineering",
    organization: "Bachelor of Technology (B.Tech)",
    period: "EDUCATION & CERTS",
    icon: <FaGraduationCap />,
    description:
      "Solid engineering foundation in Data Structures, Algorithms, Software Architecture, Database Management, and Machine Learning concepts.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="section-tag">Track Record</div>
      
      <div className="career-container">
        <h2 className="career-title">
          Experience & <span className="text-accent">Achievements</span>
        </h2>
        <p className="career-subtitle">
          Key milestones across software engineering, hackathons, and academic background.
        </p>

        <div className="career-timeline-wrapper">
          <div className="timeline-line"></div>
          
          <div className="career-cards-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="career-card glass-card">
                <div className="career-card-badge">
                  <span className="career-badge-icon">{exp.icon}</span>
                  <span className="career-badge-period">{exp.period}</span>
                </div>
                
                <h3 className="career-card-title">{exp.title}</h3>
                <h4 className="career-card-org">{exp.organization}</h4>
                <p className="career-card-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
