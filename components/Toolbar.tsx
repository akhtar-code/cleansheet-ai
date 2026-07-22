type ToolbarProps = {
  onRemoveEmptyRows: () => void;
  onRemoveDuplicates: () => void;
  onRemoveEmptyColumns: () => void;
  onTrimSpaces: () => void;
  onDownload: () => void;
};

export default function Toolbar({
  onRemoveEmptyRows,
  onRemoveDuplicates,
  onRemoveEmptyColumns,
  onTrimSpaces,
  onDownload,
}: ToolbarProps) {
  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg border border-gray-200">

      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Cleaning Actions
        </h2>

        <p className="text-gray-500 mt-1">
          Clean and transform your spreadsheet with one click.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">

        <button
          onClick={onRemoveEmptyRows}
          className="rounded-2xl bg-red-500 p-5 text-white hover:bg-red-600 transition"
        >
          🧹
          <div className="mt-2 font-bold">
            Empty Rows
          </div>
        </button>

        <button
          onClick={onRemoveDuplicates}
          className="rounded-2xl bg-blue-600 p-5 text-white hover:bg-blue-700 transition"
        >
          📄
          <div className="mt-2 font-bold">
            Duplicates
          </div>
        </button>

        <button
          onClick={onRemoveEmptyColumns}
          className="rounded-2xl bg-orange-500 p-5 text-white hover:bg-orange-600 transition"
        >
          📊
          <div className="mt-2 font-bold">
            Empty Columns
          </div>
        </button>

        <button
          onClick={onTrimSpaces}
          className="rounded-2xl bg-purple-600 p-5 text-white hover:bg-purple-700 transition"
        >
          ✂️
          <div className="mt-2 font-bold">
            Trim Spaces
          </div>
        </button>

        <button
          onClick={onDownload}
          className="rounded-2xl bg-green-600 p-5 text-white hover:bg-green-700 transition"
        >
          ⬇
          <div className="mt-2 font-bold">
            Download
          </div>
        </button>

      </div>

    </div>
  );
}