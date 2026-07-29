"use client";

import { useState } from "react";

type UploadBoxProps = {
  onUpload: () => void;
  onFileDrop: (file: File) => void;
};

export default function UploadBox({
  onUpload,
  onFileDrop,
}: UploadBoxProps) {
  const [dragging, setDragging] =
    useState(false);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => {
        setDragging(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);

        const file =
          e.dataTransfer.files[0];

        if (!file) return;

        onFileDrop(file);
      }}
      className={`rounded-3xl border-2 border-dashed p-12 shadow-sm transition-all duration-300

      ${
        dragging
          ? "border-blue-600 bg-blue-100 scale-[1.02]"
          : "border-blue-300 bg-gradient-to-br from-white to-blue-50 hover:shadow-xl"
      }`}
    >
      <div className="flex flex-col items-center text-center">

        <div
          className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full text-4xl transition

          ${
            dragging
              ? "bg-blue-600 text-white"
              : "bg-blue-100"
          }`}
        >
          📁
        </div>

        <h2 className="text-3xl font-bold text-gray-900">
          Upload Excel File
        </h2>

        <p className="mt-3 max-w-xl text-gray-500">
          Drag & Drop your Excel or CSV
          file here, or click the button
          below to browse your computer.
        </p>

        <button
          onClick={onUpload}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
        >
          Choose Excel File
        </button>

        <p className="mt-6 text-sm text-gray-400">
          Supported formats:
          .xlsx • .xls • .csv
        </p>

      </div>
    </div>
  );
}