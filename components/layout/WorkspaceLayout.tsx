import { ReactNode } from "react";

type WorkspaceLayoutProps = {
  left: ReactNode;
  right: ReactNode;
};

export default function WorkspaceLayout({
  left,
  right,
}: WorkspaceLayoutProps) {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-12">

      <aside className="lg:col-span-4 space-y-6">
        {left}
      </aside>

      <section className="lg:col-span-8">
        {right}
      </section>

    </div>
  );
}