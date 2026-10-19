import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import "./styles/white-theme.css";
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
function Layout() {
  const { pathname } = useLocation();
  const portfolio = /^\/portfolio(?:\/|$)/.test(pathname);
  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle("landing-mode", !portfolio);
    document.documentElement.classList.toggle("portfolio-mode", portfolio);
    if (portfolio) document.documentElement.classList.remove("personal-dark");
    return () =>
      document.documentElement.classList.remove(
        "landing-mode",
        "portfolio-mode",
      );
  }, [portfolio]);
  return (
    <Routes>
      {["/", "/work", "/projects", "/identity", "/thoughts", "/blogs", "/timeline", "/contact", "/dreams", "/login", "/privacy"].map((path) => <Route key={path} path={path} element={<Landing />} />)}
      <Route path="/photography" element={<Navigate to="/timeline" replace />} />
      <Route
        path="/portfolio/*"
        element={
          <React.Suspense fallback={null}>
            <Portfolio />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
