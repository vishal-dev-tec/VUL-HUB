import GlassCard from "../ui/GlassCard.jsx";
import Badge from "../ui/Badge.jsx";
import { LEVELS } from "../../data/topics.js";
import { CheckCircle2, ExternalLink } from "lucide-react";

/**
 * Standard lesson template. Every vulnerability lesson (Phase 5 content)
 * should conform to this shape: { title, level, cwe, description, impact,
 * whyItHappens, howItsFound, vulnerableCode, secureCode, checklist, references }
 */
export default function LessonLayout({ lesson }) {
  const meta = LEVELS[lesson.level];
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Badge className={meta.badge}>{meta.label}</Badge>
      <h1 className="text-4xl font-extrabold tracking-tight mt-4">{lesson.title}</h1>
      <p className="text-slate mt-1 font-mono text-sm">{lesson.cwe}</p>

      <p className="text-lg text-slate leading-relaxed mt-6">{lesson.description}</p>

      <Section title="Real-world impact">{lesson.impact}</Section>
      <Section title="Why it happens">{lesson.whyItHappens}</Section>
      <Section title="How attackers identify it">{lesson.howItsFound}</Section>

      <h2 className="text-xl font-bold tracking-tight mt-10 mb-3">Vulnerable implementation</h2>
      <CodeBlock code={lesson.vulnerableCode} tone="vulnerable" />

      <h2 className="text-xl font-bold tracking-tight mt-8 mb-3">Secure implementation</h2>
      <CodeBlock code={lesson.secureCode} tone="secure" />

      <h2 className="text-xl font-bold tracking-tight mt-10 mb-3">Prevention checklist</h2>
      <GlassCard hover={false} className="p-5">
        <ul className="space-y-2.5">
          {lesson.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <CheckCircle2 size={16} className="text-severity-safe mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </GlassCard>

      <h2 className="text-xl font-bold tracking-tight mt-10 mb-3">References</h2>
      <ul className="space-y-2">
        {lesson.references.map((ref) => (
          <li key={ref.url}>
            <a href={ref.url} target="_blank" rel="noreferrer" className="text-sm text-violet-deep hover:underline flex items-center gap-1.5 w-fit">
              {ref.label} <ExternalLink size={13} />
            </a>
          </li>
        ))}
      </ul>

      <GlassCard strong className="mt-10 p-6">
        <h3 className="text-lg font-bold mb-2">Practice challenge</h3>
        <p className="text-sm text-slate leading-relaxed mb-4">{lesson.challenge}</p>
        <button className="btn btn-primary px-5 py-2.5">Open lab</button>
      </GlassCard>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-7">
      <h2 className="text-lg font-bold tracking-tight mb-2">{title}</h2>
      <p className="text-[15px] text-slate leading-relaxed">{children}</p>
    </div>
  );
}

function CodeBlock({ code, tone }) {
  const label = tone === "vulnerable" ? "VULNERABLE" : "SECURE";
  const labelClass =
    tone === "vulnerable"
      ? "bg-severity-critical/10 text-severity-critical border-severity-critical/25"
      : "bg-severity-safe/10 text-severity-safe border-severity-safe/25";
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink/[0.08]">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${labelClass}`}>{label}</span>
      </div>
      <pre className="font-mono text-[13px] leading-relaxed p-4 overflow-x-auto text-ink-soft whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
}
