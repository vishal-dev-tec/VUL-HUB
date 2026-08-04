import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-16 pb-9 border-t border-ink/[0.08] mt-10">
      <div className="max-w-6xl mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 font-extrabold text-[17px]">
              <span className="w-8 h-8 rounded-[9px] bg-gradient-to-br from-violet to-violet-deep flex items-center justify-center">
                <ShieldCheck size={16} className="text-white" strokeWidth={2.2} />
              </span>
              WebSec Academy
            </div>
            <p className="text-sm text-slate mt-3.5 leading-relaxed max-w-[260px]">
              A practical, hands-on platform for learning web application security — one vulnerability at a time.
            </p>
          </div>
          <FooterCol title="Learn" links={["Learning paths", "Vulnerability library", "Daily challenge"]} />
          <FooterCol title="Platform" links={["Features", "Community", "Changelog"]} />
          <FooterCol title="Company" links={["About", "Responsible use", "Contact"]} />
        </div>
        <div className="flex flex-wrap justify-between gap-3 text-xs text-slate-light pt-6 border-t border-ink/[0.08]">
          <span>© {new Date().getFullYear()} WebSec Academy. Built for education.</span>
          <span>All labs are isolated learning environments — not for use against real systems.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 className="text-xs font-bold tracking-wider text-slate-light uppercase mb-3.5">{title}</h5>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-slate hover:text-ink transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
