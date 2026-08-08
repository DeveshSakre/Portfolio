import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".about-para, .skills-subtitle, .work-subtitle, .career-subtitle, .contact-para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".about-heading, .skills-title, .work-title, .career-title, .contact-heading");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

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
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: para.parentElement?.parentElement || para,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 0.8,
          ease: "power3.out",
          y: 0,
          stagger: 0.02,
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
        type: "chars,words",
        linesClass: "split-line",
      });
      title.anim = gsap.fromTo(
        title.split.chars,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: title.parentElement?.parentElement || title,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 0.8,
          ease: "power2.out",
          y: 0,
          stagger: 0.02,
        }
      );
    } catch (e) {
      console.warn("SplitText error on title element", e);
    }
  });
}
