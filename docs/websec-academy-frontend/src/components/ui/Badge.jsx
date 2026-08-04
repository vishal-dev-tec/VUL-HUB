export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`font-mono text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border inline-block ${className}`}
    >
      {children}
    </span>
  );
}
