"use client";

import { useRef, useState } from "react";
import * as XLSX from "xlsx";
import ExcelPreview from "./components/ExcelPreview";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [excelData, setExcelData] = useState<any[]>([]);
  const removeEmptyRows = () => {
  const cleanedData = excelData.filter((row) => {
    return Object.values(row).some((cell) => {
      return String(cell).trim() !== "";
    });
  });

  setExcelData(cleanedData);
};

  const handleFileSelect = async (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files?.[0];

  if (!file) return;

  setFileName(file.name);

  const data = await file.arrayBuffer();

  const workbook = XLSX.read(data);

  const sheetName = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[sheetName];

  
  const jsonData = XLSX.utils.sheet_to_json(worksheet, {
  defval: "",
  blankrows: true,
});

  console.log(jsonData);

  setExcelData(jsonData);
};

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          CleanSheet AI
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Upload
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6">
        <h2 className="text-5xl font-bold text-slate-900">
          Clean Your Excel Files in Seconds
        </h2>

        <p className="mt-5 text-lg text-gray-600">
          Remove duplicates, blank rows, formatting issues and download a clean spreadsheet instantly.
        </p>

        <div className="mt-12 bg-white border-2 border-dashed border-blue-400 rounded-2xl p-12 shadow-lg">

          <h3 className="text-2xl font-semibold">
            📁 Drag & Drop Excel File
          </h3>

          <p className="mt-3 text-gray-500">
            or click below to choose a file
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx,.xls,.csv"
            className="hidden"
            onChange={handleFileSelect}
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
          >
            Choose Excel File
          </button>

          <p className="mt-6 text-sm text-gray-400">
            Supported formats: .xlsx .xls .csv
          </p>

          {fileName && (
            <div className="mt-8 p-4 bg-green-100 rounded-lg">
              <p className="font-semibold text-green-700">
                ✅ Selected File
              </p>

              <p className="mt-2">{fileName}</p>
            </div>
          )} 
          <button
  onClick={() => {
    alert("Button clicked!");
    removeEmptyRows();
  }}
  className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
>
  Remove Empty Rows
</button>
          <ExcelPreview data={excelData} />
          

        </div>
      </section>
    </main>
  );
}