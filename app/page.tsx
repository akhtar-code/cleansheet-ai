"use client";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">

      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Free Excel Cleaning Tool
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Clean Your Excel Files
              <span className="block text-blue-600">
                In Seconds
              </span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Remove empty rows, duplicate records,
              blank columns and messy data with one click.
              No installation. No signup.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/workspace"
                className="rounded-2xl bg-blue-600 px-8 py-4 text-white font-bold shadow-xl hover:bg-blue-700 transition"
              >
                Start Cleaning →
              </a>

              <a
                href="#features"
                className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 transition"
              >
                Learn More
              </a>

            </div>

          </div>          {/* Right Side */}
          <div>

            <div className="rounded-3xl bg-white border border-slate-200 shadow-2xl p-8">

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-bold">
                  Excel Cleaner
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  Online
                </span>

              </div>

              <div className="mt-8 rounded-2xl border-2 border-dashed border-blue-300 bg-slate-50 p-12 text-center">

                <div className="text-6xl">
                  📄
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Upload Excel File
                </h3>

                <p className="mt-3 text-slate-500">
                  Supports .xlsx .xls .csv
                </p>

                <a
                  href="/workspace"
                  className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 text-white font-bold hover:bg-blue-700 transition"
                >
                  Choose File
                </a>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-3xl font-bold text-blue-600">
                    4
                  </p>

                  <p className="text-sm text-slate-600">
                    Cleaning Tools
                  </p>
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  <p className="text-3xl font-bold text-green-600">
                    100%
                  </p>

                  <p className="text-sm text-slate-600">
                    Free
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>      {/* Features */}

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-20"
      >

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-4 text-xl text-slate-600">
            Clean messy Excel spreadsheets with a single click.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200 hover:-translate-y-2 transition">

            <div className="text-5xl">🧹</div>

            <h3 className="mt-6 text-xl font-bold">
              Remove Empty Rows
            </h3>

            <p className="mt-3 text-slate-600">
              Delete blank rows instantly and keep your spreadsheet clean.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200 hover:-translate-y-2 transition">

            <div className="text-5xl">📄</div>

            <h3 className="mt-6 text-xl font-bold">
              Remove Duplicates
            </h3>

            <p className="mt-3 text-slate-600">
              Find and remove duplicate records in one click.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200 hover:-translate-y-2 transition">

            <div className="text-5xl">📊</div>

            <h3 className="mt-6 text-xl font-bold">
              Remove Empty Columns
            </h3>

            <p className="mt-3 text-slate-600">
              Delete unused columns and organize your worksheet.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200 hover:-translate-y-2 transition">

            <div className="text-5xl">✂️</div>

            <h3 className="mt-6 text-xl font-bold">
              Trim Spaces
            </h3>

            <p className="mt-3 text-slate-600">
              Remove unnecessary spaces from every text cell.
            </p>

          </div>

        </div>

      </section>      {/* How It Works */}

      <section
        id="how"
        className="bg-white py-24"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              How It Works
            </h2>

            <p className="mt-4 text-xl text-slate-600">
              Clean your spreadsheet in three simple steps.
            </p>

          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-3">

            <div className="text-center">

              <div className="mx-auto h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-xl">
                1
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Upload File
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Upload your Excel spreadsheet in
                XLSX, XLS or CSV format.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto h-20 w-20 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-bold shadow-xl">
                2
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Clean Data
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Remove duplicates, empty rows,
                empty columns and clean your data.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto h-20 w-20 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl font-bold shadow-xl">
                3
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Download
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Download your cleaned Excel file
                instantly with one click.
              </p>

            </div>

          </div>

        </div>

      </section>      {/* FAQ */}

      <section
        id="faq"
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-xl text-slate-600">
            Everything you need to know.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Is CleanSheet AI free?
            </h3>

            <p className="mt-3 text-slate-600">
              Yes. The current version is completely free to use.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Which file formats are supported?
            </h3>

            <p className="mt-3 text-slate-600">
              We support Excel (.xlsx, .xls) and CSV files.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">
              Is my data secure?
            </h3>

            <p className="mt-3 text-slate-600">
              Yes. Your spreadsheet is processed inside the application and is not permanently stored.
            </p>
          </div>

        </div>

      </section>      {/* Final Call To Action */}

      <section className="bg-blue-600 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <h2 className="text-5xl font-extrabold">
            Ready to Clean Your Excel Files?
          </h2>

          <p className="mt-6 text-xl text-blue-100 leading-9">
            Upload your spreadsheet and clean messy data in seconds.
            No signup. No installation.
          </p>

          <a
            href="/workspace"
            className="inline-block mt-10 rounded-2xl bg-white px-10 py-5 text-blue-700 text-lg font-bold shadow-xl hover:scale-105 transition"
          >
            Start Cleaning →
          </a>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-2xl font-bold text-slate-900">
              CleanSheet AI
            </h3>

            <p className="mt-2 text-slate-500">
              Clean Excel files quickly and effortlessly.
            </p>

          </div>

          <div className="flex gap-8 text-slate-500">

            <a href="#features" className="hover:text-blue-600">
              Features
            </a>

            <a href="#how" className="hover:text-blue-600">
              How It Works
            </a>

            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>

          </div>

          <div className="text-slate-400 text-sm">
            © 2026 CleanSheet AI. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}