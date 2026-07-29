import { ExcelRow } from "../types/excel";

export function removeEmptyRows(
  data: ExcelRow[]
): ExcelRow[] {
  return data.filter((row) =>
    Object.values(row).some(
      (cell) => String(cell ?? "").trim() !== ""
    )
  );
}