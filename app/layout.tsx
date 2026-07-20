import "./globals.css";

export const metadata = {
  title: "CleanSheet AI",
  description: "Clean messy Excel files in seconds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}