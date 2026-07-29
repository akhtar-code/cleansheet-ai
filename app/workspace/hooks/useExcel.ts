"use client";

import { useRef, useState } from "react";

import { ExcelRow } from "../types/excel";

import { processFile } from "../utils/processFile";
import { removeDuplicates } from "../utils/removeDuplicates";
import { removeEmptyRows } from "../utils/removeEmptyRows";
import { removeEmptyColumns } from "../utils/removeEmptyColumns";
import { trimSpaces } from "../utils/trimSpaces";
import { findReplace } from "../utils/findReplace";
import { sortData } from "../utils/sortData";
import { splitColumn } from "../utils/splitColumns";
import { mergeColumns } from "../utils/mergeColumns";
import { autoClean } from "../utils/autoClean";
import { downloadExcel } from "../utils/downloadExcel";

export function useExcel() {
  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [fileName, setFileName] =
    useState("");

  const [excelData, setExcelData] =
    useState<ExcelRow[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [loadingMessage, setLoadingMessage] =
    useState("Processing...");

  const [error, setError] =
    useState("");

  const [
    duplicatesRemoved,
    setDuplicatesRemoved,
  ] = useState(0);

  const [
    emptyRowsRemoved,
    setEmptyRowsRemoved,
  ] = useState(0);

  const [
    emptyColumnsRemoved,
    setEmptyColumnsRemoved,
  ] = useState(0);

  const resetWorkspace = () => {
    setFileName("");
    setExcelData([]);

    setDuplicatesRemoved(0);
    setEmptyRowsRemoved(0);
    setEmptyColumnsRemoved(0);

    setError("");
  };

  const handleProcessFile = async (
    file: File
  ) => {
    try {
      setLoading(true);
      setLoadingMessage(
        "Reading spreadsheet..."
      );

      setError("");

      const data =
        await processFile(file);

      setFileName(file.name);

      setDuplicatesRemoved(0);
      setEmptyRowsRemoved(0);
      setEmptyColumnsRemoved(0);

      setExcelData(data);
    } catch {
      setError(
        "Unable to read spreadsheet."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    await handleProcessFile(file);
  };  const handleRemoveEmptyRows = () => {
    const before = excelData.length;

    const cleaned =
      removeEmptyRows(excelData);

    setEmptyRowsRemoved(
      before - cleaned.length
    );

    setExcelData(cleaned);
  };

  const handleRemoveDuplicates = () => {
    const before = excelData.length;

    const cleaned =
      removeDuplicates(excelData);

    setDuplicatesRemoved(
      before - cleaned.length
    );

    setExcelData(cleaned);
  };

  const handleRemoveEmptyColumns = () => {
    const beforeColumns =
      excelData.length
        ? Object.keys(excelData[0]).length
        : 0;

    const cleaned =
      removeEmptyColumns(excelData);

    const afterColumns =
      cleaned.length
        ? Object.keys(cleaned[0]).length
        : 0;

    setEmptyColumnsRemoved(
      beforeColumns - afterColumns
    );

    setExcelData(cleaned);
  };

  const handleTrimSpaces = () => {
    setExcelData(
      trimSpaces(excelData)
    );
  };

  const handleFindReplace = (
    findText: string,
    replaceText: string
  ) => {
    setExcelData(
      findReplace(
        excelData,
        findText,
        replaceText
      )
    );
  };

  const handleSortData = (
    column: string,
    direction: "asc" | "desc"
  ) => {
    setExcelData(
      sortData(
        excelData,
        column,
        direction
      )
    );
  };

  const handleSplitColumn = (
    column: string,
    delimiter: string
  ) => {
    setExcelData(
      splitColumn(
        excelData,
        column,
        delimiter
      )
    );
  };

  const handleMergeColumns = (
    firstColumn: string,
    secondColumn: string,
    separator: string
  ) => {
    setExcelData(
      mergeColumns(
        excelData,
        firstColumn,
        secondColumn,
        separator
      )
    );
  };

  const handleAutoClean = async () => {
    try {
      setLoading(true);
      setLoadingMessage(
        "Cleaning spreadsheet..."
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 300)
      );

      const cleaned =
        autoClean(excelData);

      setExcelData(cleaned);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      setLoading(true);
      setLoadingMessage(
        "Preparing download..."
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 250)
      );

      downloadExcel(excelData);
    } finally {
      setLoading(false);
    }
  };  return {
    fileInputRef,

    fileName,
    excelData,

    loading,
    loadingMessage,
    error,

    duplicatesRemoved,
    emptyRowsRemoved,
    emptyColumnsRemoved,

    handleProcessFile,
    handleFileSelect,

    handleRemoveEmptyRows,
    handleRemoveDuplicates,
    handleRemoveEmptyColumns,
    handleTrimSpaces,

    handleFindReplace,
    handleSortData,
    handleSplitColumn,
    handleMergeColumns,

    handleAutoClean,
    handleDownload,

    resetWorkspace,

    setExcelData,
  };
}