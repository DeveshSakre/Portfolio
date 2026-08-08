import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [displayPercent, setDisplayPercent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Auto-advance loading percentage smoothly to guarantee page load
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setDisplayPercent(100);
        setLoaded(true);

        setTimeout(() => {
          setClicked(true);
          import("./utils/initialFX").then((module) => {
            if (module.initialFX) {
              module.initialFX();
            }
          }).catch((err) => {
            console.warn("initialFX import error:", err);
          }).finally(() => {
            setTimeout(() => {
              setIsLoading(false);
            }, 500);
          });
        }, 400);
      } else {
        setDisplayPercent(current);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [setIsLoading]);

  // Sync external percent if provided and higher
  useEffect(() => {
    if (percent > displayPercent) {
      setDisplayPercent(percent);
    }
  }, [percent, displayPercent]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="#" className="loader-title" data-cursor="disable">
          DS
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Android Developer</span> <span>Full Stack Engineer</span>
            <span> Machine Learning</span> <span>Software Developer</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{displayPercent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  function clear() {
    setLoading(100);
  }

  function loaded() {
    return Promise.resolve(100);
  }
  return { loaded, percent: 100, clear };
};
