import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Sidebar />
      <main
        id="main-content"
        className="flex-1 md:ml-64"
        role="main"
      >
        <div className="mx-auto max-w-4xl px-6 py-12">{children}</div>
      </main>
    </div>
  );
}
