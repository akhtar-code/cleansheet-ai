"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
            C
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              CleanSheet AI
            </h1>

            <p className="text-xs text-slate-500">
              Excel Cleaning Tool
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <a
            href="#features"
            className="text-slate-600 hover:text-blue-600 transition"
          >
            Features
          </a>

          <a
            href="#how"
            className="text-slate-600 hover:text-blue-600 transition"
          >
            How It Works
          </a>

          <a
            href="#faq"
            className="text-slate-600 hover:text-blue-600 transition"
          >
            FAQ
          </a>

        </nav>

        {/* Button */}
        <a
          href="/workspace"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          Start Cleaning
        </a>

      </div>
    </header>
  );
}