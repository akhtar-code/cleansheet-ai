"use client";

import FindReplace from "./workspace/tools/FindReplace";
import SortData from "./workspace/tools/SortData";
import SplitColumn from "./workspace/tools/SplitColumn";
import MergeColumns from "./workspace/tools/MergeColumns";

type ToolbarProps = {
  columns: string[];

  onRemoveEmptyRows: () => void;
  onRemoveDuplicates: () => void;
  onRemoveEmptyColumns: () => void;
  onTrimSpaces: () => void;

  onFindReplace: (
    findText: string,
    replaceText: string
  ) => void;

  onSortData: (
    column: string,
    direction: "asc" | "desc"
  ) => void;

  onSplitColumn: (
    column: string,
    delimiter: string
  ) => void;

  onMergeColumns: (
    firstColumn: string,
    secondColumn: string,
    separator: string
  ) => void;

  onAutoClean: () => void;

  onDownload: () => void;
};

export default function Toolbar({
  columns,

  onRemoveEmptyRows,
  onRemoveDuplicates,
  onRemoveEmptyColumns,
  onTrimSpaces,

  onFindReplace,
  onSortData,
  onSplitColumn,
  onMergeColumns,

  onAutoClean,

  onDownload,
}: ToolbarProps) {
  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-5 sm:p-8 shadow-lg">

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">
          Cleaning Actions
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Clean and transform your spreadsheet with one click.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">        <button
          onClick={onRemoveEmptyRows}
          className="w-full rounded-2xl bg-red-500 p-4 sm:p-5 text-white hover:bg-red-600 transition active:scale-95"
        >
          <div className="text-2xl sm:text-3xl mb-2">🧹</div>
          <div className="text-sm sm:text-base font-bold">Empty Rows</div>
        </button>

        <button
          onClick={onRemoveDuplicates}
          className="w-full rounded-2xl bg-blue-600 p-5 text-white hover:bg-blue-700 transition"
        >
          <div className="text-3xl mb-2">📄</div>
          <div className="font-bold">Duplicates</div>
        </button>

        <button
          onClick={onRemoveEmptyColumns}
          className="w-full rounded-2xl bg-orange-500 p-5 text-white hover:bg-orange-600 transition"
        >
          <div className="text-3xl mb-2">📊</div>
          <div className="font-bold">Empty Columns</div>
        </button>

        <button
          onClick={onTrimSpaces}
          className="w-full rounded-2xl bg-purple-600 p-5 text-white hover:bg-purple-700 transition"
        >
          <div className="text-3xl mb-2">✂️</div>
          <div className="font-bold">Trim Spaces</div>
        </button>

        <button
          onClick={onDownload}
          className="w-full rounded-2xl bg-green-600 p-5 text-white hover:bg-green-700 transition"
        >
          <div className="text-3xl mb-2">⬇️</div>
          <div className="font-bold">Download</div>
        </button>

        <button
          onClick={onAutoClean}
          className="w-full rounded-2xl bg-emerald-600 p-5 text-white hover:bg-emerald-700 transition"
        >
          <div className="text-3xl mb-2">✨</div>
          <div className="font-bold">Auto Clean</div>
        </button>

      </div>

      <FindReplace
        onFindReplace={onFindReplace}
      />

      <SortData
        columns={columns}
        onSortData={onSortData}
      />

      <SplitColumn
        columns={columns}
        onSplitColumn={onSplitColumn}
      />

      <MergeColumns
        columns={columns}
        onMergeColumns={onMergeColumns}
      />

    </div>
  );
}