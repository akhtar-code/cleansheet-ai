"use client";

import { useRef, useState } from "react";
import * as XLSX from "xlsx";

import UploadBox from "../../components/UploadBox";
import ExcelPreview from "../../components/ExcelPreview";

import PageHeader from "../../components/ui/PageHeader";
import Statistics from "../../components/workspace/Statistics";
import WorkspaceLayout from "../../components/layout/WorkspaceLayout";
import ToolPanel from "../../components/workspace/ToolPanel";

export default function Workspace() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");

  const [excelData, setExcelData] = useState<any[]>([]);

  const [duplicatesRemoved, setDuplicatesRemoved] =
    useState(0);

  const [emptyRowsRemoved, setEmptyRowsRemoved] =
    useState(0);

  const [emptyColumnsRemoved, setEmptyColumnsRemoved] =
    useState(0);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    setDuplicatesRemoved(0);
    setEmptyRowsRemoved(0);
    setEmptyColumnsRemoved(0);

    const data = await file.arrayBuffer();

    const workbook = XLSX.read(data);

    const worksheet =
      workbook.Sheets[
        workbook.SheetNames[0]
      ];

    const jsonData =
      XLSX.utils.sheet_to_json(
        worksheet,
        {
          defval: "",
          blankrows: true,
        }
      );

    console.log(jsonData);

    setExcelData(jsonData);
  };  const removeEmptyRows = () => {
    const before = excelData.length;

    const cleaned = excelData.filter((row) =>
      Object.values(row).some(
        (cell) => String(cell).trim() !== ""
      )
    );

    setEmptyRowsRemoved(before - cleaned.length);

    setExcelData(cleaned);
  };

  const removeDuplicates = () => {
    const before = excelData.length;

    const unique = excelData.filter(
      (row, index, self) =>
        index ===
        self.findIndex(
          (r) =>
            JSON.stringify(r) ===
            JSON.stringify(row)
        )
    );

    setDuplicatesRemoved(before - unique.length);

    setExcelData(unique);
  };

  const removeEmptyColumns = () => {
    if (!excelData.length) return;

    const keys = Object.keys(excelData[0]);

    const keep = keys.filter((key) =>
      excelData.some(
        (row) =>
          String(row[key] ?? "").trim() !== ""
      )
    );

    setEmptyColumnsRemoved(
      keys.length - keep.length
    );

    const cleaned = excelData.map((row) => {
      const obj: any = {};

      keep.forEach((k) => {
        obj[k] = row[k];
      });

      return obj;
    });

    setExcelData(cleaned);
  };  const trimSpaces = () => {
    const cleaned = excelData.map((row) => {
      const newRow: any = {};

      Object.keys(row).forEach((key) => {
        const value = row[key];

        if (typeof value === "string") {
          newRow[key] = value
            .replace(/\s+/g, " ")
            .trim();
        } else {
          newRow[key] = value;
        }
      });

      return newRow;
    });

    setExcelData(cleaned);
  };

  const downloadExcel = () => {
    if (!excelData.length) return;

    const worksheet =
      XLSX.utils.json_to_sheet(excelData);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Cleaned Data"
    );

    XLSX.writeFile(
      workbook,
      "Cleaned_Excel.xlsx"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12">

        <PageHeader />

        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          className="hidden"
          onChange={handleFileSelect}
        />

        <UploadBox
          onUpload={() =>
            fileInputRef.current?.click()
          }
        />        {fileName && (
          <div className="mt-6 rounded-2xl border border-green-300 bg-green-50 p-5">
            <p className="font-semibold text-green-700">
              ✅ Uploaded File
            </p>

            <p className="mt-2">
              {fileName}
            </p>
          </div>
        )}

        {excelData.length > 0 && (
          <>
            <Statistics
              totalRows={excelData.length}
              totalColumns={
                Object.keys(excelData[0]).length
              }
              duplicatesRemoved={
                duplicatesRemoved
              }
              emptyRowsRemoved={
                emptyRowsRemoved
              }
              emptyColumnsRemoved={
                emptyColumnsRemoved
              }
            />            <WorkspaceLayout
              left={
                <ToolPanel
                  onRemoveEmptyRows={
                    removeEmptyRows
                  }
                  onRemoveDuplicates={
                    removeDuplicates
                  }
                  onRemoveEmptyColumns={
                    removeEmptyColumns
                  }
                  onTrimSpaces={
                    trimSpaces
                  }
                  onDownload={
                    downloadExcel
                  }
                />
              }
              right={
                <ExcelPreview
                  data={excelData}
                />
              }
            />
          </>
        )}      </div>
    </main>
  );
}