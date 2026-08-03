"use client";

import UploadBox from "../../components/UploadBox";
import ExcelPreview from "../../components/ExcelPreview";

import PageHeader from "../../components/ui/PageHeader";
import Statistics from "../../components/workspace/Statistics";
import WorkspaceLayout from "../../components/layout/WorkspaceLayout";
import ToolPanel from "../../components/workspace/ToolPanel";
import LoadingOverlay from "../../components/workspace/LoadingOverlay";

import { useExcel } from "./hooks/useExcel";

export default function Workspace() {
  const excel = useExcel();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      {excel.loading && (
        <LoadingOverlay
  loading={excel.loading}
  message={excel.loadingMessage}
/>
      )}

      <div className="mx-auto max-w-screen-xl px-6 py-12 lg:px-10">

        <PageHeader />

        <input
          ref={excel.fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          className="hidden"
          onChange={excel.handleFileSelect}
        />

        <UploadBox
  loading={excel.loading}
  onUpload={() =>
    excel.fileInputRef.current?.click()
  }
  onFileDrop={excel.handleProcessFile}
/>

        {excel.error && (
          <div className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
            {excel.error}
          </div>
        )}

        {excel.fileName && excel.excelData.length > 0 && (
  <div className="mt-6 rounded-3xl border border-green-300 bg-green-50 p-6 shadow-sm">

    <div className="flex items-center gap-3">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-2xl text-white">
        ✓
      </div>

      <div>

        <h2 className="text-xl font-bold text-green-700">
          Upload Successful
        </h2>

        <p className="text-sm text-green-600">
          Your spreadsheet is ready to clean.
        </p>

      </div>

    </div>

    <div className="mt-6 grid gap-4 sm:grid-cols-3">

      <div className="rounded-xl bg-white p-4">

        <p className="text-xs uppercase text-gray-500">
          File
        </p>

        <p className="mt-1 font-semibold break-all">
          {excel.fileName}
        </p>

      </div>

      <div className="rounded-xl bg-white p-4">

        <p className="text-xs uppercase text-gray-500">
          Rows Loaded
        </p>

        <p className="mt-1 text-2xl font-bold text-blue-600">
          {excel.excelData.length}
        </p>

      </div>

      <div className="rounded-xl bg-white p-4">

        <p className="text-xs uppercase text-gray-500">
          Columns
        </p>

        <p className="mt-1 text-2xl font-bold text-indigo-600">
          {
            Object.keys(
              excel.excelData[0]
            ).length
          }
        </p>

      </div>

    </div>

  </div>
)}

        {excel.excelData.length > 0 && (
          <>
            <Statistics
              totalRows={excel.excelData.length}
              totalColumns={
                Object.keys(
                  excel.excelData[0]
                ).length
              }
              duplicatesRemoved={
                excel.duplicatesRemoved
              }
              emptyRowsRemoved={
                excel.emptyRowsRemoved
              }
              emptyColumnsRemoved={
                excel.emptyColumnsRemoved
              }
            />

            <WorkspaceLayout              left={
                <ToolPanel
                  columns={
                    Object.keys(
                      excel.excelData[0]
                    )
                  }

                  onRemoveEmptyRows={
                    excel.handleRemoveEmptyRows
                  }

                  onRemoveDuplicates={
                    excel.handleRemoveDuplicates
                  }

                  onRemoveEmptyColumns={
                    excel.handleRemoveEmptyColumns
                  }

                  onTrimSpaces={
                    excel.handleTrimSpaces
                  }

                  onFindReplace={
                    excel.handleFindReplace
                  }

                  onSortData={
                    excel.handleSortData
                  }

                  onSplitColumn={
                    excel.handleSplitColumn
                  }

                  onMergeColumns={
                    excel.handleMergeColumns
                  }

                  onAutoClean={
                    excel.handleAutoClean
                  }

                  onDownload={
                    excel.handleDownload
                  }
                />
              }

              right={
                <ExcelPreview
                  data={
                    excel.excelData
                  }
                />
              }
            />
          </>
        )}
      </div>
    </main>
  );
}