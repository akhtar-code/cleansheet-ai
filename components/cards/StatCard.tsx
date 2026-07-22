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
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500"></div>

      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        {title}
      </p>

      <h2 className={`mt-3 text-4xl font-extrabold ${color}`}>
        {value}
      </h2>

      <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
      </div>

    </div>
  );
}