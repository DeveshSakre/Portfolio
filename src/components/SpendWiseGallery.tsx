import ProjectGallery, { ScreenshotItem } from "./ProjectGallery";

const SPENDWISE_SCREENSHOTS: ScreenshotItem[] = [
  // First 8 screens
  {
    src: "/projects/spendwise/HomeScreen.jpg",
    title: "Home Dashboard",
    caption: "Overview of balances, recent transactions, and quick action buttons.",
  },
  {
    src: "/projects/spendwise/AddExpense.jpg",
    title: "Add Expense",
    caption: "Seamless transaction entry with category selection & receipt attachments.",
  },
  {
    src: "/projects/spendwise/AIAssistant.jpg",
    title: "AI Financial Assistant",
    caption: "Smart AI insights, financial advice, and automated spending recommendations.",
  },
  {
    src: "/projects/spendwise/Analytics.jpg",
    title: "Analytics Dashboard",
    caption: "Visual breakdown of monthly income vs expenses with interactive charts.",
  },
  {
    src: "/projects/spendwise/Budget.jpg",
    title: "Budget Overview",
    caption: "Category budget allocation and real-time threshold tracking.",
  },
  {
    src: "/projects/spendwise/Search.jpg",
    title: "Search & Filter",
    caption: "Instant multi-parameter transaction search & custom date range filters.",
  },
  {
    src: "/projects/spendwise/Budget_1.jpg",
    title: "Category Budgets",
    caption: "Detailed category-wise monthly limit breakdown and progress bars.",
  },
  {
    src: "/projects/spendwise/Widget.jpg",
    title: "Desktop Widget",
    caption: "Quick access home screen expense tracking widget for instant logging.",
  },
  // Remaining 3 screens
  {
    src: "/projects/spendwise/Analytics_1.jpg",
    title: "Spending Trends",
    caption: "Longitudinal spending trends & comparative historical analytics.",
  },
  {
    src: "/projects/spendwise/Set%20Budget.jpg",
    title: "Set Budget",
    caption: "Custom budget creation, category targets, and savings goal configuration.",
  },
  {
    src: "/projects/spendwise/HomeScreen_1.jpg",
    title: "Budget Overview / Alternate View",
    caption: "Dark-themed alternate dashboard layout with compact summary cards.",
  },
];

const SpendWiseGallery = () => {
  return <ProjectGallery screenshots={SPENDWISE_SCREENSHOTS} projectTitle="SpendWise" />;
};

export default SpendWiseGallery;
