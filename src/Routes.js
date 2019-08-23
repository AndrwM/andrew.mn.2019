import PageAbout from "./pages/PageAbout";
import PageResume from "./pages/PageResume";
import PageCaseStudyIndex from "./pages/PageCaseStudyIndex";
import PageNewline from "./pages/work/PageNewline";
import PageHelix from "./pages/work/PageHelix";
import PageConnectHero from "./pages/work/PageConnectHero";
import PageCoindex from "./pages/work/PageCoindex";

const Routes = [
  { path: "/", PageComponent: PageAbout, isPublic: true, breadcrumb: "Andrew McIntee" },
  { path: "/resume", PageComponent: PageResume, isPublic: true },
  { path: "/case-studies", PageComponent: PageCaseStudyIndex, isPublic: false, breadcrumb: "Case Studies" },
  { path: "/case-studies/newline", PageComponent: PageNewline, isPublic: false },
  { path: "/case-studies/college-admissions-portal", PageComponent: PageHelix, isPublic: false, breadcrumb: "College Admissions Portal" },
  { path: "/case-studies/connect-hero", PageComponent: PageConnectHero, isPublic: false, breadcrumb: "Connect Hero" },
  { path: "/case-studies/coindex", PageComponent: PageCoindex, isPublic: false },
];

export default Routes;
