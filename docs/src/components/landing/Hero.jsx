import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-14 overflow-hidden">
      <div className="absolute w-[420px] h-[420px] bg-violet rounded-full blur-[70px] opacity-40 -top-28 -left-40 -z-10" />
      <div className="absolute w-[380px] h-[380px] bg-cyan rounded-full blur-[70px] opacity-40 top-14 -right-36 -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wide text-violet-deep bg-violet/[0.08] border border-violet/20 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-severity-safe shadow-[0_0_0_3px_rgba(5,150,105,0.18)]" />
            LIVE LABS · 20 VULNERABILITY CLASSES
          </div>

          <h1 className="text-5xl lg:text-[58px] font-extrabold leading-[1.04] tracking-tight">
            Master Web Security Through{" "}
            <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">Practice</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate max-w-[520px]">
            Learn how real vulnerabilities happen, how attackers find them, and how to fix them — with side-by-side
            vulnerable and secure code, guided labs, and a daily challenge that builds your skill one bug at a time.
          </p>

          <div className="flex flex-wrap gap-3.5 mt-8">
            <Link to="/register" className="btn btn-primary px-6 py-3.5 text-[15px]">Start free — no card needed</Link>
            <a href="#topics" className="btn btn-glass px-6 py-3.5 text-[15px]">Browse vulnerabilities</a>
          </div>

          <div className="flex flex-wrap gap-4.5 mt-6 text-xs text-slate-light">
            <span>🔒 Isolated learning labs</span>
            <span>📈 Progress tracking</span>
            <span>🧠 Beginner → Advanced</span>
          </div>
        </div>

        <ScanPanel />
      </div>
    </section>
  );
}

function ScanPanel() {
  return (
    <div className="glass-strong rounded-[22px] overflow-hidden relative">
      <div className="flex items-center justify-between px-[18px] py-3.5 border-b border-ink/[0.08]">
        <div className="flex gap-1.5">
          <i className="w-2.5 h-2.5 rounded-full bg-[#EF4444] block" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] block" />
          <i className="w-2.5 h-2.5 rounded-full bg-[#10B981] block" />
        </div>
        <div className="font-mono text-xs text-slate">login.js — SQL Injection</div>
        <div className="font-mono text-[11px] text-slate-light">CWE-89</div>
      </div>

      <div className="font-mono text-[13px] leading-[1.75] text-ink-soft px-[22px] py-5 min-h-[230px]">
        <p className="text-slate-light">
          // vulnerable query{" "}
          <span className="text-[10px] font-bold bg-severity-critical/10 text-severity-critical border border-severity-critical/25 rounded px-1.5 ml-2">
            VULNERABLE
          </span>
        </p>
        <p>
          <span className="text-violet-deep">const</span> query = <span className="text-cyan">{`\`SELECT * FROM users WHERE email = '${"${email}"}'\``}</span>;
        </p>
        <p>db.execute(query);</p>
        <p>&nbsp;</p>
        <p className="text-slate-light">
          // fixed with parameterized query{" "}
          <span className="text-[10px] font-bold bg-severity-safe/10 text-severity-safe border border-severity-safe/25 rounded px-1.5 ml-2">
            SECURE
          </span>
        </p>
        <p>
          <span className="text-violet-deep">const</span> query = <span className="text-cyan">'SELECT * FROM users WHERE email = ?'</span>;
        </p>
        <p>db.execute(query, [email]);</p>
      </div>

      <div className="flex items-center justify-between px-5 py-3.5 border-t border-ink/[0.08] bg-paper-dim/60">
        <div className="flex items-center gap-2.5 text-xs text-slate">
          Risk score
          <div className="w-[120px] h-1.5 rounded-full bg-ink/[0.08] overflow-hidden">
            <div className="h-full w-[18%] rounded-full bg-gradient-to-r from-severity-safe to-cyan" />
          </div>
        </div>
        <div className="font-mono text-[11px] text-severity-safe">✓ 1 issue fixed</div>
      </div>
    </div>
  );
}
