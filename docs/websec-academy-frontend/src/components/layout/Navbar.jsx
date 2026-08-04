import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const LINKS = [
  { href: "#paths", label: "Learning Paths" },
  { href: "#topics", label: "Vulnerabilities" },
  { href: "#features", label: "Features" },
  { href: "#community", label: "Community" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-3.5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="glass-strong flex items-center justify-between h-16 rounded-xl2 px-5">
          <Link to="/" className="flex items-center gap-2.5 font-extrabold text-[17px] tracking-tight">
            <span className="w-8 h-8 rounded-[9px] bg-gradient-to-br from-violet to-violet-deep flex items-center justify-center shadow-[0_6px_16px_-4px_rgba(91,91,246,0.6)]">
              <ShieldCheck size={16} className="text-white" strokeWidth={2.2} />
            </span>
            WebSec Academy
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-7">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm font-medium text-slate hover:text-ink transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <Link to="/login" className="btn btn-ghost">Log in</Link>
            <Link to="/register" className="btn btn-primary">Start learning</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
