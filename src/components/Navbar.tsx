import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import { HiMenu, HiX } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import "./styles/Navbar.css";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "work", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    const links = document.querySelectorAll(".header ul a, .mobile-nav a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const href = element.getAttribute("data-href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          setMobileMenuOpen(false);
          const targetEl = document.querySelector(href);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="navbar-container">
          <a href="#" className="navbar-title" data-cursor="disable">
            <span className="logo-text">DEVESH</span>
            <span className="logo-dot">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className={isActive ? "nav-active" : ""}>
                    <a data-href={`#${item.id}`} href={`#${item.id}`}>
                      <HoverLinks text={item.label} />
                    </a>
                    {isActive && <span className="active-dot-indicator" />}
                  </li>
                );
              })}
            </ul>

            <a
              href="/Devesh_Sakre_SDE_Resume_MAIN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-btn"
              data-cursor="disable"
            >
              <span>Resume</span>
              <FiFileText className="btn-icon" />
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            data-cursor="disable"
          >
            {mobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? "mobile-nav-active" : ""}>
                <a data-href={`#${item.id}`} href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Devesh_Sakre_SDE_Resume_MAIN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume-btn"
          >
            Download Resume
          </a>
        </div>
      </header>

      <div className="landing-circle1"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
