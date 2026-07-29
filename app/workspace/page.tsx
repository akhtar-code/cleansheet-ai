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

        {excel.fileName && (
          <div className="mt-6 rounded-2xl border border-green-300 bg-green-50 p-5">

            <p className="font-semibold text-green-700">
              ✅ Uploaded File
            </p>

            <p className="mt-2">
              {excel.fileName}
            </p>

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