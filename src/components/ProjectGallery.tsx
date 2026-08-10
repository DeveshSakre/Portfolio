import { useState, useEffect, useCallback } from "react";
import {
  FiMaximize2,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
  FiGrid,
} from "react-icons/fi";
import "./styles/SpendWiseGallery.css";

export interface ScreenshotItem {
  src: string;
  title: string;
  caption: string;
}

interface ProjectGalleryProps {
  screenshots: ScreenshotItem[];
  projectTitle: string;
  primaryCount?: number;
}

const ProjectGallery = ({
  screenshots,
  projectTitle,
  primaryCount = 8,
}: ProjectGalleryProps) => {
  const [showMore, setShowMore] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleScreenshots = showMore
    ? screenshots
    : screenshots.slice(0, primaryCount);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + screenshots.length) % screenshots.length
    );
  }, [screenshots.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % screenshots.length
    );
  }, [screenshots.length]);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  const currentItem =
    lightboxIndex !== null ? screenshots[lightboxIndex] : null;
  const extraCount = screenshots.length - primaryCount;

  return (
    <div className="spendwise-gallery-container">
      <div className="spendwise-gallery-header">
        <div className="gallery-title-wrapper">
          <FiGrid className="gallery-title-icon" />
          <span className="gallery-title-text">App Screenshots</span>
        </div>
        <span className="gallery-count-badge">{screenshots.length} UI Screens</span>
      </div>

      {/* Grid of Screenshots */}
      <div className="spendwise-grid">
        {visibleScreenshots.map((item, idx) => (
          <div
            key={idx}
            className="screenshot-card"
            onClick={() => openLightbox(idx)}
            data-cursor="disable"
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title} screenshot`}
          >
            <div className="screenshot-img-wrapper">
              <img
                src={item.src}
                alt={`${projectTitle} App Screen - ${item.title}`}
                className="screenshot-img"
                loading="lazy"
              />
              <div className="screenshot-overlay">
                <FiMaximize2 className="overlay-expand-icon" />
                <span className="overlay-text">Enlarge</span>
              </div>
            </div>
            <div className="screenshot-info">
              <h5 className="screenshot-title">{item.title}</h5>
              <p className="screenshot-caption">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Toggle Button */}
      {extraCount > 0 && (
        <div className="gallery-toggle-wrapper">
          <button
            className="gallery-toggle-btn"
            onClick={() => setShowMore(!showMore)}
            data-cursor="disable"
          >
            <span>{showMore ? "Show Main Screens" : `More Screens (+${extraCount})`}</span>
            {showMore ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()} // Prevent backdrop click when clicking modal
          >
            {/* Header */}
            <div className="lightbox-header">
              <div className="lightbox-title-group">
                <h4 className="lightbox-title">{currentItem.title}</h4>
                <p className="lightbox-caption">{currentItem.caption}</p>
              </div>
              <div className="lightbox-header-right">
                <span className="lightbox-counter">
                  {lightboxIndex + 1} / {screenshots.length}
                </span>
                <button
                  className="lightbox-close-btn"
                  onClick={closeLightbox}
                  aria-label="Close Lightbox"
                  data-cursor="disable"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Main Lightbox Body with Prev/Next Controls */}
            <div className="lightbox-body">
              <button
                className="lightbox-nav-btn prev-btn"
                onClick={prevImage}
                aria-label="Previous Screen"
                data-cursor="disable"
              >
                <FiChevronLeft />
              </button>

              <div className="lightbox-image-wrapper">
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="lightbox-image"
                />
              </div>

              <button
                className="lightbox-nav-btn next-btn"
                onClick={nextImage}
                aria-label="Next Screen"
                data-cursor="disable"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
