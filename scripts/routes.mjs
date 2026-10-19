export const portfolioRoutes = [
  "portfolio",
  "portfolio/projects",
  "portfolio/project",
  "portfolio/work",
  "portfolio/contact",
  "portfolio/identity",
  "portfolio/thoughts",
  "portfolio/blogs",
  "portfolio/photography",
];
// Personal entry points share the landing shell, account features, and timeline.
export const personalRoutes = ["work", "projects", "identity", "thoughts", "blogs", "timeline", "contact", "dreams", "login", "privacy"];
export const siteRoutes = [...portfolioRoutes, ...personalRoutes];
export const retiredRoutes = [
  "photography",
  "about",
  "opinions",
  "beliefs",
  "story",
  "connect",
  "messages",
  "spaces",
  "admin",
  "project",
];
