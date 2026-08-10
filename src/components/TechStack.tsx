import { useEffect, useRef, useState } from "react";
import {
  SiKotlin, SiPython, SiCplusplus, SiTypescript,
  SiAndroid, SiJetpackcompose, SiFirebase,
  SiFastapi, SiReact, SiNodedotjs,
  SiTensorflow, SiPostgresql, SiDocker
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./styles/TechStack.css";

const TECH_NODES = [
  { name: "Kotlin", category: "Mobile", icon: <SiKotlin />, color: "#7F52FF" },
  { name: "Jetpack Compose", category: "Mobile", icon: <SiJetpackcompose />, color: "#4285F4" },
  { name: "Android SDK", category: "Mobile", icon: <SiAndroid />, color: "#3DDC84" },
  { name: "Java", category: "Mobile", icon: <FaJava />, color: "#ED8B00" },
  { name: "FastAPI", category: "Backend", icon: <SiFastapi />, color: "#009688" },
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs />, color: "#339933" },
  { name: "React", category: "Web", icon: <SiReact />, color: "#61DAFB" },
  { name: "TypeScript", category: "Web", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Python", category: "AI & ML", icon: <SiPython />, color: "#3776AB" },
  { name: "TensorFlow", category: "AI & ML", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "C++", category: "Systems", icon: <SiCplusplus />, color: "#00599C" },
  { name: "PostgreSQL", category: "Database", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "Firebase", category: "Cloud", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Docker", category: "DevOps", icon: <SiDocker />, color: "#2496ED" },
];

const TechStack = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Mobile", "Backend", "AI & ML", "Web", "Database", "DevOps"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 900;
      height = canvas.height = canvas.parentElement.clientHeight || 450;
    };
    window.addEventListener("resize", handleResize);

    // Create Constellation Nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label: string;
    }> = TECH_NODES.map((tech) => ({
      x: Math.random() * (width - 100) + 50,
      y: Math.random() * (height - 100) + 50,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: 4,
      color: tech.color,
      label: tech.name,
    }));

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update Node positions & bounce edges
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        const maxRight = Math.max(30, width - 85);
        if (node.x < 25 || node.x > maxRight) node.vx *= -1;
        if (node.y < 25 || node.y > height - 25) node.vy *= -1;

        // Draw connections between nearby nodes
        nodes.forEach((other) => {
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.25;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        // Mouse interaction connections
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 160) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - mdist / 160) * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw Node Point
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node Label
        ctx.fillStyle = "#94a3b8";
        ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText(node.label, node.x + 10, node.y + 4);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const filteredNodes = activeCategory === "All"
    ? TECH_NODES
    : TECH_NODES.filter((n) => n.category === activeCategory);

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
