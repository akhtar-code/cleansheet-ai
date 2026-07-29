import { removeDuplicates } from "./removeDuplicates";
import { removeEmptyRows } from "./removeEmptyRows";
import { removeEmptyColumns } from "./removeEmptyColumns";
import { trimSpaces } from "./trimSpaces";
import { sortData } from "./sortData";

export function autoClean(data: any[]) {
  let cleaned = [...data];

  // 1. Trim spaces first
  cleaned = trimSpaces(cleaned);

  // 2. Remove empty rows
  cleaned = removeEmptyRows(cleaned);

  // 3. Remove empty columns
  cleaned = removeEmptyColumns(cleaned);

  // 4. Remove duplicates AFTER trimming
  cleaned = removeDuplicates(cleaned);

  // 5. Sort by first column
  if (cleaned.length > 0) {
    const firstColumn = Object.keys(cleaned[0])[0];

    cleaned = sortData(
      cleaned,
      firstColumn,
      "asc"
    );
  }

  return cleaned;
}