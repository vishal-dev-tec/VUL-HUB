export default function GlassCard({ children, className = "", hover = true, strong = false }) {
  return (
    <div
      className={`${strong ? "glass-strong" : "glass"} rounded-xl2 p-6 ${
        hover ? "transition-transform duration-200 hover:-translate-y-1 hover:shadow-glass" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
