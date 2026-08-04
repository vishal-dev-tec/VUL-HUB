import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { TOPICS, SEVERITY_DOT } from "../../data/topics.js";
import { SectionHead } from "./LearningPaths.jsx";

const TABS = [
  { key: "beginner", label: "Beginner" },
  { key: "intermediate", label: "Intermediate" },
  { key: "advanced", label: "Advanced" }
];

export default function TopicsOverview() {
  const [active, setActive] = useState("beginner");
  const visible = TOPICS.filter((t) => t.level === active);

  return (
    <section id="topics" className="py-24">
      <SectionHead
        eyebrow="VULNERABILITY LIBRARY"
        title="20 vulnerability classes, from first principles to exploit chains"
      />

      <div className="flex justify-center gap-2 mb-9 flex-wrap">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`font-mono text-xs font-semibold tracking-wide px-4 py-2 rounded-full border transition-colors ${
              active === t.key ? "bg-ink text-white border-ink" : "bg-paper text-slate border-ink/[0.08] hover:border-ink/20"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {visible.map((t) => (
          <Link
            key={t.slug}
            to={`/lesson/${t.slug}`}
            className="glass flex items-center justify-between gap-3.5 px-5 py-4 rounded-2xl hover:translate-x-1 hover:bg-white/75 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${SEVERITY_DOT[t.severity]}`} />
              <div>
                <div className="text-sm font-semibold">{t.title}</div>
                <div className="text-xs text-slate-light">{t.cwe}</div>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-light" />
          </Link>
        ))}
      </div>
    </section>
  );
}
