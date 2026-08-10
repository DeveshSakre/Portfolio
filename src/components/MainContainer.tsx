import { lazy, Suspense, useEffect, useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Impact from "./Impact";
import WhatIBuild from "./WhatIBuild";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = () => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Navbar />
      <SocialIcons />
      <Landing />
      <Impact />
      <WhatIBuild />
      <About />
      <Skills />
      <Work />
      <Career />
      {isDesktopView && (
        <Suspense fallback={<div className="loading-fallback">Loading 3D Canvas...</div>}>
          <TechStack />
        </Suspense>
      )}
      <Contact />
    </div>
  );
};

export default MainContainer;
