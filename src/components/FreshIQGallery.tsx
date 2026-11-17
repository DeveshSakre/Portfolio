import ProjectGallery, { ScreenshotItem } from "./ProjectGallery";

// Screenshots for FreshIQ from /projects/freshiq/
// To activate the gallery later:
// 1. Add screenshot image files to public/projects/freshiq/
// 2. Add the screenshot items to this FRESHIQ_SCREENSHOTS array
// 3. Set galleryAvailable: true on the FreshIQ project in Work.tsx
const FRESHIQ_SCREENSHOTS: ScreenshotItem[] = [
  // Example items for future activation:
  // {
  //   src: "/projects/freshiq/HomeScreen.jpg",
  //   title: "Freshness Scanner",
  //   caption: "Produce ripeness assessment and AI classification.",
  // },
  // {
  //   src: "/projects/freshiq/Analysis.jpg",
  //   title: "Shelf-Life Prediction",
  //   caption: "Remaining shelf life and storage What-If analysis.",
  // },
];

const FreshIQGallery = () => {
  if (FRESHIQ_SCREENSHOTS.length === 0) {
    return null;
  }

  return <ProjectGallery screenshots={FRESHIQ_SCREENSHOTS} projectTitle="FreshIQ" />;
};

export default FreshIQGallery;
