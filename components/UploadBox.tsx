type UploadBoxProps = {
  onUpload: () => void;
};

export default function UploadBox({
  onUpload,
}: UploadBoxProps) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-blue-300 bg-gradient-to-br from-white to-blue-50 p-12 shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="flex flex-col items-center text-center">

        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
          📁
        </div>

        <h2 className="text-3xl font-bold text-gray-900">
          Upload Excel File
        </h2>

        <p className="mt-3 max-w-xl text-gray-500">
          Drag & drop your Excel spreadsheet here or click the button below.
          Your file is processed locally in your browser.
        </p>

        <button
          onClick={onUpload}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
        >
          Choose Excel File
        </button>

        <p className="mt-5 text-sm text-gray-400">
          Supports .xlsx, .xls and .csv
        </p>

      </div>

    </div>
  );
}