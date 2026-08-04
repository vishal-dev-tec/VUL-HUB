import GlassCard from "../ui/GlassCard.jsx";
import { Flame, Target, Trophy, TrendingUp } from "lucide-react";

// Placeholder stats — Phase 3/4 will replace these props with data
// fetched from GET /api/users/me/progress once the backend + DB exist.
export default function DashboardStats({
  completed = 0,
  total = 20,
  streak = 0,
  rank = "Unranked"
}) {
  const pct = Math.round((completed / total) * 100);
  const items = [
    { icon: Target, label: "Lessons completed", value: `${completed} / ${total}` },
    { icon: TrendingUp, label: "Overall progress", value: `${pct}%` },
    { icon: Flame, label: "Learning streak", value: `${streak} days` },
    { icon: Trophy, label: "Community rank", value: rank }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(({ icon: Icon, label, value }) => (
        <GlassCard key={label} hover={false} className="p-5">
          <Icon size={18} className="text-violet mb-3" />
          <div className="text-2xl font-extrabold tracking-tight">{value}</div>
          <div className="text-xs text-slate mt-1">{label}</div>
        </GlassCard>
      ))}
    </div>
  );
}
