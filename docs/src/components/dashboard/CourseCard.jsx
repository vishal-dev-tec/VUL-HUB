import { Link } from "react-router-dom";
import { CheckCircle2, Circle } from "lucide-react";
import Badge from "../ui/Badge.jsx";
import { LEVELS, SEVERITY_DOT } from "../../data/topics.js";

export default function CourseCard({ topic, completed = false }) {
  const meta = LEVELS[topic.level];
  return (
    <Link
      to={`/lesson/${topic.slug}`}
      className="glass rounded-2xl p-5 flex flex-col gap-3.5 hover:-translate-y-1 hover:shadow-glass transition-all"
    >
      <div className="flex items-center justify-between">
        <Badge className={meta.badge}>{meta.label}</Badge>
        {completed ? (
          <CheckCircle2 size={18} className="text-severity-safe" />
        ) : (
          <Circle size={18} className="text-slate-light" />
        )}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-2 h-2 rounded-full ${SEVERITY_DOT[topic.severity]}`} />
          <span className="text-[11px] font-mono text-slate-light">{topic.cwe}</span>
        </div>
        <h4 className="text-[15px] font-bold tracking-tight">{topic.title}</h4>
      </div>
    </Link>
  );
}
