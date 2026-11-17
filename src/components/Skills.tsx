import {
  SiKotlin, SiPython, SiCplusplus, SiTypescript,
  SiAndroid, SiJetpackcompose, SiFirebase,
  SiFastapi, SiFlask, SiReact, SiVite, SiNodedotjs,
  SiScikitlearn, SiTensorflow, SiNumpy, SiPandas,
  SiPostgresql, SiMysql, SiGit, SiGithub, SiDocker,
  SiPytorch, SiOpencv, SiLangchain
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import {
  TbBrain, TbDeviceMobile, TbServer, TbCode, TbEye, TbSparkles,
  TbChartLine, TbChartDots3, TbLayersIntersect, TbTransform,
  TbTimeline, TbGraph, TbTextRecognition, TbMessageChatbot,
  TbDatabaseSearch, TbVector, TbDatabase
} from "react-icons/tb";
import "./styles/Skills.css";

const skillCategories = [
  {
    title: "Languages",
    icon: <TbCode className="category-icon text-cyan" />,
    skills: [
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Android Development",
    icon: <TbDeviceMobile className="category-icon text-green" />,
    skills: [
      { name: "Jetpack Compose", icon: <SiJetpackcompose /> },
      { name: "Android SDK", icon: <SiAndroid /> },
      { name: "MVVM Architecture", icon: <SiAndroid /> },
      { name: "Room DB", icon: <FaDatabase /> },
      { name: "Hilt DI", icon: <SiAndroid /> },
      { name: "Navigation Compose", icon: <SiJetpackcompose /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: <TbBrain className="category-icon text-violet" />,
    skills: [
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "XGBoost", icon: <TbBrain /> },
      { name: "LSTM Networks", icon: <TbBrain /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <TbChartLine /> },
      { name: "Seaborn", icon: <TbChartDots3 /> },
    ],
  },
  {
    title: "Deep Learning & Computer Vision",
    icon: <TbEye className="category-icon text-indigo" />,
    skills: [
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "CNNs", icon: <TbLayersIntersect /> },
      { name: "Transfer Learning", icon: <TbTransform /> },
      { name: "MobileNetV3", icon: <TbDeviceMobile /> },
      { name: "Temporal Convolutional Networks (TCN)", icon: <TbTimeline /> },
      { name: "Graph Attention Networks (GAT)", icon: <TbGraph /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Tesseract OCR", icon: <TbTextRecognition /> },
    ],
  },
  {
    title: "Generative AI & LLMs",
    icon: <TbSparkles className="category-icon text-rose" />,
    skills: [
      { name: "LLMs", icon: <TbMessageChatbot /> },
      { name: "Retrieval-Augmented Generation (RAG)", icon: <TbDatabaseSearch /> },
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "Embeddings", icon: <TbVector /> },
      { name: "Vector Databases", icon: <TbDatabase /> },
    ],
  },
  {
    title: "Database & Tools",
    icon: <FaDatabase className="category-icon text-amber" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
  {
    title: "Backend & Web",
    icon: <TbServer className="category-icon text-blue" />,
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "React", icon: <SiReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "REST APIs", icon: <TbServer /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-container section-container">
        <div className="section-tag">Technical Expertise</div>
        
        <h2 className="skills-title">
          Skills & <span className="text-accent">Technologies</span>
        </h2>
        <p className="skills-subtitle">
          Organized stack across Mobile, Systems, Backend Services, and Applied AI.
        </p>

        <div className="skills-categories-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card glass-card">
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skills-chip-wrapper">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-chip">
                    <span className="skill-chip-icon">{skill.icon}</span>
                    <span className="skill-chip-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
