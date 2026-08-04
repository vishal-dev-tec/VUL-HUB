import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LessonPage from "./pages/LessonPage.jsx";

// Phase 1 scope: routing + UI only, no auth guard yet.
// Phase 2 will wrap /dashboard and /lesson/:id in a <RequireAuth> route guard
// once the auth system (JWT session + refresh) lands.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/lesson/:slug" element={<LessonPage />} />
    </Routes>
  );
}
