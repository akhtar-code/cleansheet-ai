"use client";

type UploadBoxProps = {
  onUpload: () => void;
};

export default function UploadBox({
  onUpload,
}: UploadBoxProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-blue-400 p-10 text-center">

      <h2 className="text-2xl font-bold">
        📁 Upload Excel File
      </h2>

      <p className="mt-3 text-gray-500">
        Choose an Excel file to start cleaning.
      </p>

      <button
        onClick={onUpload}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition"
      >
        Choose Excel File
      </button>

      <p className="mt-6 text-sm text-gray-400">
        Supported formats: .xlsx .xls .csv
      </p>

    </div>
  );
}