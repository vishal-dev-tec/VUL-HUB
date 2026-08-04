import GlassCard from "../ui/GlassCard.jsx";
import { SectionHead } from "./LearningPaths.jsx";

const FEATURES = [
  { icon: "🧪", title: "Runnable labs", desc: "Isolated, self-contained apps for every vulnerability, safe to break." },
  { icon: "📊", title: "Progress tracking", desc: "See exactly what you've completed and what's next." },
  { icon: "🔥", title: "Learning streaks", desc: "A daily challenge keeps the habit going." },
  { icon: "✅", title: "Prevention checklists", desc: "Turn every lesson into a code-review habit." },
  { icon: "🧩", title: "Practice challenges", desc: "Apply the concept immediately in a guided task." },
  { icon: "📚", title: "Real references", desc: "Every lesson links to CWE, OWASP, and further reading." },
  { icon: "👥", title: "Community", desc: "Compare progress and discuss lessons with other learners." },
  { icon: "🛤️", title: "Guided paths", desc: "Beginner to advanced, sequenced so nothing feels out of order." }
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <SectionHead eyebrow="PLATFORM" title="Everything you need to learn security by doing" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
        {FEATURES.map((f) => (
          <GlassCard key={f.title} className="p-6">
            <h4 className="text-[15px] font-bold mb-1.5">{f.icon} {f.title}</h4>
            <p className="text-[13px] text-slate leading-relaxed">{f.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
