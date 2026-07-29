import * as XLSX from "xlsx";

export function downloadExcel(data: any[]) {
  if (!data.length) return;

  const worksheet =
    XLSX.utils.json_to_sheet(data);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Cleaned Data"
  );

  XLSX.writeFile(
    workbook,
    "CleanSheetAI_Output.xlsx"
  );
}