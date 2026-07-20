export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
        Clean Your Excel Files
        <span className="text-blue-600"> in Seconds</span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Remove duplicates, blank rows, formatting issues and clean your Excel
        spreadsheets online without installing any software.
      </p>

      <a
        href="/workspace"
        className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
      >
        Start Cleaning →
      </a>
    </section>
  );
}