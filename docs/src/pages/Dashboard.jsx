import Navbar from "../components/layout/Navbar.jsx";
import DashboardStats from "../components/dashboard/DashboardStats.jsx";
import CourseCard from "../components/dashboard/CourseCard.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import Badge from "../components/ui/Badge.jsx";
import { TOPICS, LEVELS } from "../data/topics.js";
import { Link } from "react-router-dom";

// Static placeholder data for the Phase 1 UI pass.
// Wiring this up to real user progress happens in Phase 2 (auth) + Phase 3 (API).
const MOCK_COMPLETED = new Set(["information-disclosure", "sql-injection"]);
const NEXT_LESSON = TOPICS.find((t) => !MOCK_COMPLETED.has(t.slug));

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-7 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Welcome back 👋</h1>
          <p className="text-slate mt-1.5">Here's where you left off.</p>
        </div>

        <DashboardStats completed={MOCK_COMPLETED.size} total={TOPICS.length} streak={4} rank="Top 18%" />

        {NEXT_LESSON && (
          <GlassCard strong className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6">
            <div>
              <Badge className={LEVELS[NEXT_LESSON.level].badge}>{LEVELS[NEXT_LESSON.level].label}</Badge>
              <h3 className="text-lg font-bold mt-2.5">Continue with: {NEXT_LESSON.title}</h3>
              <p className="text-sm text-slate mt-1">Recommended based on your current path.</p>
            </div>
            <Link to={`/lesson/${NEXT_LESSON.slug}`} className="btn btn-primary px-6 py-3 whitespace-nowrap">
              Resume lesson
            </Link>
          </GlassCard>
        )}

        <section className="mt-12">
          <h2 className="text-xl font-bold tracking-tight mb-5">All vulnerabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOPICS.map((t) => (
              <CourseCard key={t.slug} topic={t} completed={MOCK_COMPLETED.has(t.slug)} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
