import Toolbar from "../Toolbar";
import ToolCategories from "./ToolCategories";

type ToolPanelProps = {
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

export default function ToolPanel({
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
}: ToolPanelProps) {
  return (
    <div className="space-y-6">

      <Toolbar
        columns={columns}

        onRemoveEmptyRows={onRemoveEmptyRows}
        onRemoveDuplicates={onRemoveDuplicates}
        onRemoveEmptyColumns={onRemoveEmptyColumns}
        onTrimSpaces={onTrimSpaces}

        onFindReplace={onFindReplace}
        onSortData={onSortData}
        onSplitColumn={onSplitColumn}
        onMergeColumns={onMergeColumns}

        onAutoClean={onAutoClean}

        onDownload={onDownload}
      />

      <ToolCategories />

    </div>
  );
}