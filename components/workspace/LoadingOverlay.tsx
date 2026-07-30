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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="rounded-2xl bg-white px-8 py-6 shadow-xl">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

        <p className="mt-4 text-center font-medium text-gray-700">
          {message}
        </p>
      </div>
    </div>
  );
}