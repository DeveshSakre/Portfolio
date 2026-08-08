import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.documentElement.style.overflowY = "auto";
  
  const main = document.getElementsByTagName("main")[0];
  if (main) {
    main.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#070a12",
    duration: 0.5,
    delay: 0.5,
  });

  const heroElements = document.querySelectorAll(
    ".hero-badge, .hero-greeting, .hero-title, .hero-role, .hero-description, .hero-cta-group, .hero-scroll-indicator"
  );
  if (heroElements.length > 0) {
    gsap.fromTo(
      heroElements,
      { opacity: 0, y: 30, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }

  const navHeader = document.querySelectorAll(".header, .icons-section, .nav-fade");
  if (navHeader.length > 0) {
    gsap.fromTo(
      navHeader,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 0.1,
      }
    );
  }
}
