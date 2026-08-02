type StatCardProps = {
  title: string;
  value: string | number;
  color?: string;
};

export default function StatCard({
  title,
  value,
  color = "text-blue-600",
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <h2
        className={`mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold break-words ${color}`}
      >
        {value}
      </h2>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
      </div>

    </div>
  );
}