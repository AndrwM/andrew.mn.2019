import PageAbout from "./pages/PageAbout";
import PageResume from "./pages/PageResume";
import PageExperience from "./pages/PageExperience";
import PageCaseStudyIndex from "./pages/PageCaseStudyIndex";
import PageOffsite from "./pages/work/PageOffsite";
import PageNewline from "./pages/work/PageNewline";
import PageHelix from "./pages/work/PageHelix";
import PageConnectHero from "./pages/work/PageConnectHero";
import PageCoindex from "./pages/work/PageCoindex";

const Routes = [
  { path: "/", PageComponent: PageAbout, isPublic: true, breadcrumb: "Andrew McIntee" },
  { path: "/resume", PageComponent: PageResume, isPublic: true, breadcrumb: "Resumé" },
  { path: "/experience", PageComponent: PageExperience, isPublic: true, breadcrumb: "Tooling Experience" },
  { path: "/case-studies", PageComponent: PageCaseStudyIndex, isPublic: true, breadcrumb: "Case Studies" },
  { path: "/case-studies/newline", PageComponent: PageNewline, isPublic: true },
  // Hidden Pages
  { path: "/case-studies/offsite", PageComponent: PageOffsite, isPublic: false },
  { path: "/case-studies/college-admissions-portal", PageComponent: PageHelix, isPublic: true, breadcrumb: "College Admissions Portal" },
  { path: "/case-studies/connect-hero", PageComponent: PageConnectHero, isPublic: false, breadcrumb: "Connect Hero" },
  { path: "/case-studies/coindex", PageComponent: PageCoindex, isPublic: false },
];

export default Routes;
