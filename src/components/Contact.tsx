import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container glass-card">
        <div className="contact-cta-wrapper">
          <div className="section-tag">Get In Touch</div>

          <h2 className="contact-heading">
            Let's build <span className="text-accent">something impactful.</span>
          </h2>

          <p className="contact-para">
            Open to SDE, Android, Full-Stack, and AI/ML opportunities. If you're hiring, collaborating, or have an interesting problem to solve, I'd love to connect.
          </p>

          <div className="contact-actions-row">
            <a
              href="mailto:devsakre30@gmail.com"
              className="contact-btn primary-btn"
              data-cursor="disable"
              aria-label="Send an email to Devesh Sakre"
            >
              <FaEnvelope className="btn-icon" />
              <span>Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/devesh-sakre-8972542b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn secondary-btn"
              data-cursor="disable"
              aria-label="Visit Devesh Sakre's LinkedIn profile"
            >
              <FaLinkedin className="btn-icon" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/DeveshSakre"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn secondary-btn"
              data-cursor="disable"
              aria-label="Visit Devesh Sakre's GitHub profile"
            >
              <FaGithub className="btn-icon" />
              <span>GitHub</span>
            </a>

            <a
              href="tel:8010648282"
              className="contact-btn secondary-btn"
              data-cursor="disable"
              aria-label="Call Devesh Sakre at 8010648282"
            >
              <FaPhoneAlt className="btn-icon" />
              <span>Call Me</span>
            </a>
          </div>

          <a
            href="mailto:devsakre30@gmail.com"
            className="contact-subtle-email"
            aria-label="Email address: devsakre30@gmail.com"
          >
            devsakre30@gmail.com
          </a>
        </div>

        <div className="contact-footer">
          <p>
            Designed &amp; Developed by <strong>Devesh Sakre</strong>
          </p>
          <span className="copyright-tag">
            <MdCopyright /> 2026 All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
