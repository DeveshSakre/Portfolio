import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 768) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(
    ".skills-subtitle, .work-subtitle, .career-subtitle, .what-i-build-subtitle, .tech-subtitle, .impact-subtitle"
  );
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(
    ".skills-title, .work-title, .career-title, .what-i-build-title, .tech-heading, .impact-title"
  );

  const TriggerStart = "top 85%";
  const ToggleAction = "play none none none";

  paras.forEach((para: ParaElement) => {
    try {
      para.classList.add("visible");
      if (para.anim) {
        para.anim.progress(1).kill();
        para.split?.revert();
      }

      para.split = new SplitText(para, {
        type: "lines,words",
        linesClass: "split-line",
      });

      para.anim = gsap.fromTo(
        para.split.words,
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: para.parentElement || para,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 0.7,
          ease: "power3.out",
          y: 0,
          stagger: 0.015,
        }
      );
    } catch (e) {
      console.warn("SplitText error on para element", e);
    }
  });

  titles.forEach((title: ParaElement) => {
    try {
      if (title.anim) {
        title.anim.progress(1).kill();
        title.split?.revert();
      }
      title.split = new SplitText(title, {
        type: "words",
        linesClass: "split-line",
      });
      title.anim = gsap.fromTo(
        title.split.words,
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: title.parentElement || title,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 0.7,
          ease: "power2.out",
          y: 0,
          stagger: 0.015,
        }
      );
    } catch (e) {
      console.warn("SplitText error on title element", e);
    }
  });
}
