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
// New personal pages intentionally contain only the shared header and navigation.
export const personalRoutes = ["work", "projects", "identity", "thoughts", "blogs", "photography", "contact", "dreams", "login", "privacy"];
export const siteRoutes = [...portfolioRoutes, ...personalRoutes];
export const retiredRoutes = [
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
