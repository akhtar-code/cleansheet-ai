type WorkspaceLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function WorkspaceLayout({
  left,
  right,
}: WorkspaceLayoutProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Tool Panel */}
      <aside className="order-2 lg:order-1 lg:col-span-4">
        <div className="sticky top-24">
          {left}
        </div>
      </aside>

      {/* Preview */}
      <section className="order-1 lg:order-2 lg:col-span-8">
        {right}
      </section>
    </div>
  );
}