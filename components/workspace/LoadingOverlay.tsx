type LoadingOverlayProps = {
  loading: boolean;
  message?: string;
};

export default function LoadingOverlay({
  loading,
  message = "Cleaning your Excel file...",
}: LoadingOverlayProps) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-md px-4">

      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl">

        <div className="flex justify-center">

          <div className="relative h-16 w-16">

            <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>

            <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

          </div>

        </div>

        <h2 className="mt-8 text-center text-2xl font-bold text-slate-900">
          Processing Spreadsheet
        </h2>

        <p className="mt-3 text-center text-slate-600">
          {message}
        </p>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">

          <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>

        </div>

        <p className="mt-4 text-center text-sm text-slate-400">
          Please don't close this window...
        </p>

      </div>

    </div>
  );
}