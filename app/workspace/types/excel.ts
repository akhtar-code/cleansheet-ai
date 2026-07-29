export type ExcelCell =
  | string
  | number
  | boolean
  | null
  | undefined;

export type ExcelRow = Record<
  string,
  ExcelCell
>;