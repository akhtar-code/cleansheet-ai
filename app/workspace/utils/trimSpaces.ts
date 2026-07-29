import { ExcelRow } from "../types/excel";

export function trimSpaces(
  data: ExcelRow[]
): ExcelRow[] {
  return data.map((row) => {
    const newRow: ExcelRow = {};

    Object.keys(row).forEach((key) => {
      const value = row[key];

      if (typeof value === "string") {
        newRow[key] = value
          .replace(/\s+/g, " ")
          .trim();
      } else {
        newRow[key] = value;
      }
    });

    return newRow;
  });
}