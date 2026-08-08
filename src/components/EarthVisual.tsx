import { useEffect, useRef } from "react";
import { SiAndroid } from "react-icons/si";
import { TbCode, TbBrain, TbServer } from "react-icons/tb";
import "./styles/EarthVisual.css";

// Realistic world continent landmass polygon coordinates [lat, lon]
const CONTINENTS: number[][][] = [
  // North America
  [
    [70, -165], [72, -130], [60, -110], [55, -80], [60, -60], [45, -64], 
    [30, -80], [25, -80], [15, -88], [8, -78], [15, -92], [20, -105], 
    [32, -117], [48, -125], [60, -145], [65, -168], [70, -165]
  ],
  // South America
  [
    [12, -73], [8, -60], [-5, -35], [-20, -40], [-35, -52], [-54, -68], 
    [-45, -74], [-18, -70], [-5, -80], [12, -73]
  ],
  // Europe
  [
    [70, 20], [60, 30], [55, 40], [45, 38], [40, 26], [37, 15], 
    [36, -9], [43, -9], [50, 2], [58, 6], [70, 20]
  ],
  // United Kingdom
  [
    [58, -5], [54, 1], [50, -5], [55, -7], [58, -5]
  ],
  // Africa
  [
    [35, -6], [32, 32], [12, 43], [10, 51], [-12, 40], [-34, 26], 
    [-34, 18], [-15, 12], [4, 9], [10, -14], [28, -13], [35, -6]
  ],
  // Eurasia / Asia
  [
    [75, 60], [75, 100], [70, 140], [60, 170], [45, 140], [38, 120], 
    [22, 114], [10, 104], [1, 104], [10, 98], [22, 88], [25, 62], 
    [30, 48], [40, 50], [60, 50], [75, 60]
  ],
  // Indian Subcontinent
  [
    [32, 70], [28, 88], [22, 90], [15, 80], [8, 77], [12, 74], [24, 68], [32, 70]
  ],
  // Australia
  [
    [-11, 142], [-24, 153], [-37, 150], [-35, 137], [-32, 115], [-22, 114], [-14, 129], [-11, 142]
  ],
  // Japan
  [
    [45, 142], [40, 140], [34, 135], [31, 130], [35, 133], [42, 140], [45, 142]
  ]
];

// Major global tech hub city nodes [lat, lon]
const CITY_NODES = [
  { lat: 37.38, lon: -122.08 }, // Silicon Valley
  { lat: 40.71, lon: -74.0 },   // New York
  { lat: 51.5, lon: -0.12 },    // London
  { lat: 48.85, lon: 2.35 },    // Paris
  { lat: 35.67, lon: 139.65 },  // Tokyo
  { lat: 12.97, lon: 77.59 },   // Bengaluru
  { lat: 1.35, lon: 103.81 },   // Singapore
  { lat: -33.86, lon: 151.2 },  // Sydney
  { lat: -23.55, lon: -46.63 }, // Sao Paulo
  { lat: 52.52, lon: 13.4 },    // Berlin
];

const EarthVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 500;
      height = canvas.height = canvas.parentElement.clientHeight || 500;
    };
    window.addEventListener("resize", handleResize);

    // Stars background
    const stars: Array<{ x: number; y: number; size: number; alpha: number; speed: number }> = [];
    for (let i = 0; i < 65; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.004 + 0.002,
      });
    }

    let rotationAngle = 0;

    // Convert lat/lon to 3D sphere point and project to 2D canvas
    const project3D = (lat: number, lon: number, radius: number, rotY: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + rotY) * (Math.PI / 180);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      return { x, y, z };
    };

    const render = () => {
      rotationAngle += 0.22; // Smooth Earth rotation
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background stars
      stars.forEach((star) => {
        const alpha = Math.max(0.1, Math.min(0.8, star.alpha + Math.sin(rotationAngle * star.speed * 2) * 0.2));
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const centerX = width * 0.62;
      const centerY = height * 0.55;
      const radius = Math.min(width, height) * 0.42;

      // 2. Outer Atmospheric Blue/Cyan Rim Glow
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.85,
        centerX,
        centerY,
        radius * 1.35
      );
      glowGrad.addColorStop(0, "rgba(56, 189, 248, 0.4)");
      glowGrad.addColorStop(0.35, "rgba(34, 211, 238, 0.18)");
      glowGrad.addColorStop(0.7, "rgba(129, 140, 248, 0.08)");
      glowGrad.addColorStop(1, "rgba(7, 10, 18, 0)");

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 3. Main Dark Globe Ocean Base
      const oceanGrad = ctx.createRadialGradient(
        centerX - radius * 0.35,
        centerY - radius * 0.35,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      oceanGrad.addColorStop(0, "#0f172a");
      oceanGrad.addColorStop(0.5, "#0b1329");
      oceanGrad.addColorStop(0.85, "#070c1a");
      oceanGrad.addColorStop(1, "#030611");

      ctx.fillStyle = oceanGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Mask to clip continents and grid strictly within Earth circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius - 1, 0, Math.PI * 2);
      ctx.clip();

      // 4. Draw Latitude / Longitude Tech Grid Lines
      ctx.strokeStyle = "rgba(56, 189, 248, 0.1)";
      ctx.lineWidth = 1;

      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let first = true;
        for (let lon = -180; lon <= 180; lon += 10) {
          const pt = project3D(lat, lon, radius, rotationAngle);
          if (pt.z > 0) {
            const px = centerX + pt.x;
            const py = centerY - pt.y;
            if (first) {
              ctx.moveTo(px, py);
              first = false;
            } else {
              ctx.lineTo(px, py);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 5. Draw Digital Continent Landmass Polygons
      CONTINENTS.forEach((continent) => {
        ctx.beginPath();
        let pathStarted = false;

        continent.forEach(([lat, lon]) => {
          const pt = project3D(lat, lon, radius, rotationAngle);
          if (pt.z > -5) { // Visible front hemisphere
            const px = centerX + pt.x;
            const py = centerY - pt.y;

            if (!pathStarted) {
              ctx.moveTo(px, py);
              pathStarted = true;
            } else {
              ctx.lineTo(px, py);
            }
          } else {
            pathStarted = false;
          }
        });

        if (pathStarted) {
          ctx.closePath();
          ctx.fillStyle = "rgba(34, 211, 238, 0.18)";
          ctx.fill();
          ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      });

      // 6. Draw Glowing City / Data Nodes
      CITY_NODES.forEach((city) => {
        const pt = project3D(city.lat, city.lon, radius, rotationAngle);
        if (pt.z > 5) {
          const px = centerX + pt.x;
          const py = centerY - pt.y;
          const fade = Math.min(1, pt.z / (radius * 0.5));

          ctx.fillStyle = `rgba(251, 191, 36, ${0.4 * fade})`;
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * fade})`;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.restore();

      // 7. Atmospheric Cyan Edge Highlight Ring
      ctx.strokeStyle = "rgba(56, 189, 248, 0.75)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="earth-visual-wrapper">
      <canvas ref={canvasRef} className="earth-canvas" />

      {/* Intentionally Positioned Tech Badges */}
      <div className="floating-tech-container">
        <div className="floating-tech-badge badge-top-left float-1">
          <SiAndroid className="tech-icon android-color" />
          <span>Android SDK</span>
        </div>

        <div className="floating-tech-badge badge-top-right float-2">
          <TbBrain className="tech-icon ai-color" />
          <span>Applied AI</span>
        </div>

        <div className="floating-tech-badge badge-mid-left float-3">
          <TbCode className="tech-icon code-color" />
          <span>Clean Code</span>
        </div>

        <div className="floating-tech-badge badge-bottom-right float-4">
          <TbServer className="tech-icon cloud-color" />
          <span>Full Stack</span>
        </div>
      </div>
    </div>
  );
};

export default EarthVisual;
