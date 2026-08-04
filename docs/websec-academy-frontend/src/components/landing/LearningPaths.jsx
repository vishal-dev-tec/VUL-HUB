import GlassCard from "../ui/GlassCard.jsx";
import Badge from "../ui/Badge.jsx";
import { TOPICS, LEVELS } from "../../data/topics.js";

const PATHS = [
  {
    level: "beginner",
    title: "Foundations",
    desc: "The nine vulnerability classes behind most real-world breaches.",
    barColor: "from-violet to-cyan",
    lockedNote: null
  },
  {
    level: "intermediate",
    title: "Applied Exploitation",
    desc: "Where modern APIs and auth systems actually fail.",
    barColor: "from-severity-medium to-severity-high",
    lockedNote: "Locked — finish Beginner"
  },
  {
    level: "advanced",
    title: "Real-World Exploit Chains",
    desc: "Business logic flaws, auth bypass, and cloud misconfigurations.",
    barColor: "from-severity-critical to-severity-high",
    lockedNote: "Locked — finish Intermediate"
  }
];

export default function LearningPaths() {
  return (
    <section id="paths" className="py-24">
      <SectionHead
        eyebrow="LEARNING PATHS"
        title="A structured path from your first bug to exploit chains"
        desc="Pick a level, work lesson by lesson, and track exactly what's left before you move up."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PATHS.map((p) => {
          const topics = TOPICS.filter((t) => t.level === p.level);
          const meta = LEVELS[p.level];
          return (
            <GlassCard key={p.level} className="p-7">
              <Badge className={meta.badge}>{meta.label}</Badge>
              <h3 className="text-xl font-bold mt-4 mb-2 tracking-tight">{p.title}</h3>
              <p className="text-sm text-slate leading-relaxed mb-4.5">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {topics.slice(0, 3).map((t) => (
                  <span key={t.slug} className="text-xs px-2.5 py-1 rounded-lg bg-ink/[0.04] border border-ink/[0.08] text-ink-soft">
                    {t.title}
                  </span>
                ))}
                {topics.length > 3 && (
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-ink/[0.04] border border-ink/[0.08] text-ink-soft">
                    +{topics.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-xs text-slate mb-2">
                <span>{p.lockedNote ?? `0 of ${topics.length} lessons`}</span>
                <span>0%</span>
              </div>
              <div className="h-1.5 rounded-full bg-ink/[0.07] overflow-hidden">
                <div className={`h-full w-0 rounded-full bg-gradient-to-r ${p.barColor}`} />
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, desc }) {
  return (
    <div className="max-w-xl mx-auto mb-14 text-center">
      <span className="inline-flex font-mono text-xs font-semibold tracking-wide text-violet-deep bg-violet/[0.08] border border-violet/20 px-3 py-1.5 rounded-full mb-4">
        {eyebrow}
      </span>
      <h2 className="text-[38px] font-extrabold tracking-tight leading-tight">{title}</h2>
      {desc && <p className="mt-3.5 text-base text-slate leading-relaxed">{desc}</p>}
    </div>
  );
}
