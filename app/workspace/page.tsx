"use client";

import { useRef, useState } from "react";
import * as XLSX from "xlsx";

import UploadBox from "../../components/UploadBox";
import Toolbar from "../../components/Toolbar";
import ExcelPreview from "../../components/ExcelPreview";

export default function Workspace() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");
  const [excelData, setExcelData] = useState<any[]>([]);

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

    setExcelData(jsonData);
  };

  const removeEmptyRows = () => {
    const cleanedData = excelData.filter((row) =>
      Object.values(row).some(
        (cell) => String(cell).trim() !== ""
      )
    );

    setExcelData(cleanedData);
  };

  const removeDuplicates = () => {
    const uniqueRows = excelData.filter((row, index, self) => {
      return (
        index ===
        self.findIndex(
          (item) => JSON.stringify(item) === JSON.stringify(row)
        )
      );
    });

    setExcelData(uniqueRows);
  };

  const removeEmptyColumns = () => {
    if (excelData.length === 0) return;

    const keys = Object.keys(excelData[0]);

    const columnsToKeep = keys.filter((key) =>
      excelData.some(
        (row) => String(row[key] ?? "").trim() !== ""
      )
    );

    const cleanedData = excelData.map((row) => {
      const newRow: any = {};

      columnsToKeep.forEach((key) => {
        newRow[key] = row[key];
      });

      return newRow;
    });

    setExcelData(cleanedData);
  };

  const downloadExcel = () => {
    if (excelData.length === 0) return;

    const worksheet = XLSX.utils.json_to_sheet(excelData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Cleaned Data"
    );

    XLSX.writeFile(workbook, "Cleaned_Excel.xlsx");
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          CleanSheet AI Workspace
        </h1>

        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          className="hidden"
          onChange={handleFileSelect}
        />

        <UploadBox
          onUpload={() => fileInputRef.current?.click()}
        />

        {fileName && (
          <div className="mt-6 bg-green-100 border border-green-300 rounded-lg p-4">
            <p className="font-semibold text-green-700">
              ✅ {fileName}
            </p>
          </div>
        )}

        {excelData.length > 0 && (
          <Toolbar
            onRemoveEmptyRows={removeEmptyRows}
            onRemoveDuplicates={removeDuplicates}
            onRemoveEmptyColumns={removeEmptyColumns}
            onDownload={downloadExcel}
          />
        )}

        <ExcelPreview data={excelData} />

      </div>
    </main>
  );
}