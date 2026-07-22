import Toolbar from "../Toolbar";
import ToolCategories from "./ToolCategories";

type ToolPanelProps = {
  onRemoveEmptyRows: () => void;
  onRemoveDuplicates: () => void;
  onRemoveEmptyColumns: () => void;
  onTrimSpaces: () => void;
  onDownload: () => void;
};

export default function ToolPanel({
  onRemoveEmptyRows,
  onRemoveDuplicates,
  onRemoveEmptyColumns,
  onTrimSpaces,
  onDownload,
}: ToolPanelProps) {
  return (
    <div className="space-y-6">

      <Toolbar
        onRemoveEmptyRows={onRemoveEmptyRows}
        onRemoveDuplicates={onRemoveDuplicates}
        onRemoveEmptyColumns={onRemoveEmptyColumns}
        onTrimSpaces={onTrimSpaces}
        onDownload={onDownload}
      />

      <ToolCategories />

    </div>
  );
}