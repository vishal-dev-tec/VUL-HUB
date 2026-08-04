import { Link } from "react-router-dom";

const STATS = [
  { value: "20", label: "Vulnerability classes covered" },
  { value: "3", label: "Structured learning paths" },
  { value: "Daily", label: "New practice labs" },
  { value: "100%", label: "Isolated, safe-to-break labs" }
];

export default function Community() {
  return (
    <section id="community" className="py-24">
      <div className="glass rounded-[28px] p-8 sm:p-14 bg-gradient-to-br from-violet/[0.06] to-cyan/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex font-mono text-xs font-semibold tracking-wide text-violet-deep bg-violet/[0.08] border border-violet/20 px-3 py-1.5 rounded-full mb-4">
              COMMUNITY
            </span>
            <h2 className="text-[32px] font-extrabold tracking-tight mb-3.5">
              Learn alongside people who ship secure code
            </h2>
            <p className="text-[15.5px] text-slate leading-relaxed mb-6.5">
              Compare streaks, discuss tricky lessons, and see how your progress stacks up — all inside the platform,
              no separate tool needed.
            </p>
            <Link to="/register" className="btn btn-primary px-6 py-3">Join the community</Link>
          </div>
          <div className="grid grid-cols-2 gap-4.5">
            {STATS.map((s) => (
              <div key={s.label} className="glass-strong rounded-2xl p-5">
                <div className="text-[30px] font-extrabold tracking-tight bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-[12.5px] text-slate mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
