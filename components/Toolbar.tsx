type ToolbarProps = {
  onRemoveEmptyRows: () => void;
  onRemoveDuplicates: () => void;
  onRemoveEmptyColumns: () => void;
  onDownload: () => void;
};

export default function Toolbar({
  onRemoveEmptyRows,
  onRemoveDuplicates,
  onRemoveEmptyColumns,
  onDownload,
}: ToolbarProps) {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">
        Cleaning Tools
      </h2>

      <div className="flex flex-wrap gap-4">

        <button
          onClick={onRemoveEmptyRows}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg transition"
        >
          🧹 Remove Empty Rows
        </button>

        <button
          onClick={onRemoveDuplicates}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
        >
          📄 Remove Duplicates
        </button>

        <button
          onClick={onRemoveEmptyColumns}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg transition"
        >
          📊 Remove Empty Columns
        </button>

        <button
          onClick={onDownload}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg transition"
        >
          ⬇ Download Clean Excel
        </button>

      </div>
    </div>
  );
}