import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="mx-auto max-w-4xl px-6 py-12">{children}</div>
      </main>
    </div>
  );
}
