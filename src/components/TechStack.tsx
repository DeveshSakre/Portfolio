import { useEffect, useRef, useState } from "react";
import {
  SiKotlin, SiPython, SiCplusplus, SiTypescript,
  SiAndroid, SiJetpackcompose, SiFirebase,
  SiFastapi, SiReact, SiNodedotjs,
  SiTensorflow, SiPostgresql, SiDocker,
  SiScikitlearn, SiNumpy, SiPandas,
  SiPytorch, SiOpencv, SiLangchain
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import {
  TbBrain, TbDeviceMobile, TbTimeline, TbGraph,
  TbTextRecognition, TbDatabaseSearch, TbSparkles,
  TbChartLine, TbChartDots3
} from "react-icons/tb";
import "./styles/TechStack.css";

interface TechNode {
  name: string;
  category: string | string[];
  icon: JSX.Element;
  color: string;
}

const TECH_NODES: TechNode[] = [
  // Mobile & Android
  { name: "Kotlin", category: "Mobile", icon: <SiKotlin />, color: "#7F52FF" },
  { name: "Java", category: "Mobile", icon: <FaJava />, color: "#ED8B00" },
  { name: "Jetpack Compose", category: "Mobile", icon: <SiJetpackcompose />, color: "#4285F4" },
  { name: "Android SDK", category: "Mobile", icon: <SiAndroid />, color: "#3DDC84" },
  { name: "MVVM Architecture", category: "Mobile", icon: <SiAndroid />, color: "#10B981" },
  { name: "Firebase", category: "Mobile", icon: <SiFirebase />, color: "#FFCA28" },

  // Backend & Web
  { name: "FastAPI", category: "Backend", icon: <SiFastapi />, color: "#009688" },
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs />, color: "#339933" },
  { name: "React", category: "Web", icon: <SiReact />, color: "#61DAFB" },
  { name: "TypeScript", category: "Web", icon: <SiTypescript />, color: "#3178C6" },

  // Machine Learning & AI
  { name: "Python", category: ["AI & ML", "Backend"], icon: <SiPython />, color: "#3776AB" },
  { name: "TensorFlow", category: "AI & ML", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "Scikit-learn", category: "AI & ML", icon: <SiScikitlearn />, color: "#F7931E" },
  { name: "XGBoost", category: "AI & ML", icon: <TbBrain />, color: "#22D3EE" },
  { name: "LSTM", category: "AI & ML", icon: <TbTimeline />, color: "#A855F7" },
  { name: "NumPy", category: "AI & ML", icon: <SiNumpy />, color: "#4DABCF" },
  { name: "Pandas", category: "AI & ML", icon: <SiPandas />, color: "#E040FB" },
  { name: "Matplotlib", category: "AI & ML", icon: <TbChartLine />, color: "#26A69A" },
  { name: "Seaborn", category: "AI & ML", icon: <TbChartDots3 />, color: "#38BDF8" },

  // Deep Learning & Computer Vision
  { name: "PyTorch", category: "AI & ML", icon: <SiPytorch />, color: "#EE4C2C" },
  { name: "MobileNetV3", category: "AI & ML", icon: <TbDeviceMobile />, color: "#00E676" },
  { name: "TCN", category: "AI & ML", icon: <TbTimeline />, color: "#818CF8" },
  { name: "GAT", category: "AI & ML", icon: <TbGraph />, color: "#C084FC" },
  { name: "OpenCV", category: "AI & ML", icon: <SiOpencv />, color: "#5C3EE8" },
  { name: "Tesseract OCR", category: "AI & ML", icon: <TbTextRecognition />, color: "#F43F5E" },

  // Generative AI & LLMs
  { name: "RAG", category: "AI & ML", icon: <TbDatabaseSearch />, color: "#06B6D4" },
  { name: "LangChain", category: "AI & ML", icon: <SiLangchain />, color: "#10B981" },
  { name: "Gen AI", category: "AI & ML", icon: <TbSparkles />, color: "#FB7185" },

  // Database, Systems & DevOps
  { name: "C++", category: "All", icon: <SiCplusplus />, color: "#00599C" },
  { name: "SQL", category: "Database", icon: <FaDatabase />, color: "#F29111" },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "Docker", category: "DevOps", icon: <SiDocker />, color: "#2496ED" },
];

const nodeMatchesCategory = (tech: TechNode, category: string) => {
  if (category === "All") return true;
  if (Array.isArray(tech.category)) {
    return tech.category.includes(category);
  }
  return tech.category === category;
};

const TechStack = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const activeCategoryRef = useRef<string>("All");

  const categories = ["All", "Mobile", "Backend", "AI & ML", "Web", "Database", "DevOps"];

  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 900;
      height = canvas.height = canvas.parentElement.clientHeight || 500;
    };
    window.addEventListener("resize", handleResize);

    // Grid-based initial placement with jitter to ensure even natural distribution across canvas
    const cols = 8;
    const rows = 4;
    const cellW = (width - 120) / cols;
    const cellH = (height - 100) / rows;

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label: string;
      category: string | string[];
    }> = TECH_NODES.map((tech, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const baseX = 60 + col * cellW + cellW * 0.5;
      const baseY = 40 + row * cellH + cellH * 0.5;
      return {
        x: Math.max(30, Math.min(width - 95, baseX + (Math.random() - 0.5) * cellW * 0.6)),
        y: Math.max(25, Math.min(height - 35, baseY + (Math.random() - 0.5) * cellH * 0.6)),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 4,
        color: tech.color,
        label: tech.name,
        category: tech.category,
      };
    });

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const isNodeActive = (category: string | string[]) => {
      const current = activeCategoryRef.current;
      if (current === "All") return true;
      if (Array.isArray(category)) {
        return category.includes(current);
      }
      return category === current;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Gentle soft repulsion to keep nodes from overlapping
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0 && dist < 45) {
            const force = ((45 - dist) / 45) * 0.04;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            nodes[i].vx -= fx;
            nodes[i].vy -= fy;
            nodes[j].vx += fx;
            nodes[j].vy += fy;
          }
        }
      }

      // Update Node positions & bounce edges
      nodes.forEach((node) => {
        // Clamp velocity to keep floating smooth
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 0.55) {
          node.vx = (node.vx / speed) * 0.55;
          node.vy = (node.vy / speed) * 0.55;
        }

        node.x += node.vx;
        node.y += node.vy;

        const maxRight = Math.max(30, width - 95);
        if (node.x < 25) {
          node.x = 25;
          node.vx = Math.abs(node.vx);
        } else if (node.x > maxRight) {
          node.x = maxRight;
          node.vx = -Math.abs(node.vx);
        }

        if (node.y < 25) {
          node.y = 25;
          node.vy = Math.abs(node.vy);
        } else if (node.y > height - 30) {
          node.y = height - 30;
          node.vy = -Math.abs(node.vy);
        }
      });

      // Draw connections between nearby nodes (max distance 105px to avoid excessive lines)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const bothActive = isNodeActive(node.category) && isNodeActive(other.category);
            const baseAlpha = (1 - dist / 105) * 0.22;
            const alpha = bothActive ? baseAlpha : baseAlpha * 0.2;

            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = bothActive ? 1 : 0.6;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Mouse interaction connections
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - mdist / 140) * 0.45})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        const active = isNodeActive(node.category);

        // Draw Node Point
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = active ? 8 : 2;
        ctx.globalAlpha = active ? 1 : 0.28;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node Label
        ctx.fillStyle = active ? "#cbd5e1" : "rgba(148, 163, 184, 0.25)";
        ctx.font = "500 11.5px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(node.label, node.x + 9, node.y + 4);
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const filteredNodes = activeCategory === "All"
    ? TECH_NODES
    : TECH_NODES.filter((n) => nodeMatchesCategory(n, activeCategory));

  return (
    <div className="tech-section section-container">
      <div className="section-tag">Network Architecture</div>
      <h2 className="tech-heading">
        Technical <span className="text-accent">Constellation</span>
      </h2>
      <p className="tech-subtitle">
        Connected engineering ecosystem across Native Android, Distributed Backend, and Applied Machine Learning.
      </p>

      {/* Category Filter Pills */}
      <div className="tech-filters">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`tech-filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
            data-cursor="disable"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Architecture Network Canvas & Badge Showcase */}
      <div className="tech-visualization-box glass-card">
        <canvas ref={canvasRef} className="tech-network-canvas" />

        <div className="tech-nodes-overlay">
          {filteredNodes.map((tech, idx) => (
            <div key={idx} className="tech-node-chip">
              <span className="tech-node-icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="tech-node-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
