export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#D4A017]/30 bg-[#D4A017]/10 text-[#E8BA3A]">
      <span className="w-1 h-1 rounded-full bg-[#D4A017] animate-pulse" />
      {children}
    </span>
  );
}
