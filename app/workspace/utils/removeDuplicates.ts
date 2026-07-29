import { ExcelRow } from "../types/excel";

export function removeDuplicates(
  data: ExcelRow[]
): ExcelRow[] {
  return data.filter(
    (row, index, self) =>
      index ===
      self.findIndex(
        (r) =>
          JSON.stringify(r) ===
          JSON.stringify(row)
      )
  );
}