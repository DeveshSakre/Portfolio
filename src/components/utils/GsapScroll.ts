import gsap from "gsap";

export function setCharTimeline() {
  // 3D Avatar timeline disabled
}

export function setAllTimeline() {
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 70%",
      end: "bottom center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  careerTimeline.fromTo(
    ".career-card",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
    0
  );
}
