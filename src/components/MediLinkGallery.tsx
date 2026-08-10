import ProjectGallery, { ScreenshotItem } from "./ProjectGallery";

const MEDILINK_SCREENSHOTS: ScreenshotItem[] = [
  // Primary 8 screens
  {
    src: "/projects/medilink/PatientHomeScreen.jpg",
    title: "Patient Home",
    caption: "Main healthcare dashboard with quick services, upcoming appointments, and health metrics.",
  },
  {
    src: "/projects/medilink/DoctorSearch.jpg",
    title: "Doctor Search",
    caption: "Search & filter specialists by department, location, availability, and rating.",
  },
  {
    src: "/projects/medilink/DoctorProfile.jpg",
    title: "Doctor Profile",
    caption: "Detailed physician profile, credentials, experience, patient reviews, and clinic hours.",
  },
  {
    src: "/projects/medilink/AppointmentBooking.jpg",
    title: "Appointment Booking",
    caption: "Interactive slot selection, consultation mode choice, and instant booking flow.",
  },
  {
    src: "/projects/medilink/Appointments.jpg",
    title: "My Appointments",
    caption: "Comprehensive tracking of upcoming, completed, and canceled medical consultations.",
  },
  {
    src: "/projects/medilink/DoctorHomeScreen.jpg",
    title: "Doctor Dashboard",
    caption: "Physician home portal with daily schedule overview and quick patient management.",
  },
  {
    src: "/projects/medilink/DoctorRequest.jpg",
    title: "Doctor Requests",
    caption: "Doctor-side consultation request management, approvals, and patient queue.",
  },
  {
    src: "/projects/medilink/PatientProfile1.jpg",
    title: "Patient Profile",
    caption: "Personal health profile, medical history summary, and emergency contacts.",
  },
  // Remaining 3 screens ("More Screens")
  {
    src: "/projects/medilink/CreateAccount.jpg",
    title: "Create Account",
    caption: "Secure patient/physician account registration and profile initialization.",
  },
  {
    src: "/projects/medilink/Login.jpg",
    title: "Login",
    caption: "Encrypted authentication portal supporting patient and doctor login access.",
  },
  {
    src: "/projects/medilink/PatientProfie2.jpg",
    title: "Patient Profile / Alternate View",
    caption: "Detailed medical record view, history logs, and document management.",
  },
];

const MediLinkGallery = () => {
  return <ProjectGallery screenshots={MEDILINK_SCREENSHOTS} projectTitle="MediLink" />;
};

export default MediLinkGallery;
