import * as XLSX from "xlsx";
import { ExcelRow } from "../types/excel";

export async function processFile(
  file: File
): Promise<ExcelRow[]> {
  const data = await file.arrayBuffer();

  const workbook = XLSX.read(data);

  const worksheet =
    workbook.Sheets[
      workbook.SheetNames[0]
    ];

  const jsonData =
    XLSX.utils.sheet_to_json<ExcelRow>(
      worksheet,
      {
        defval: "",
        blankrows: true,
      }
    );

  return jsonData;
}