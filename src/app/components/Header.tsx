"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-gray-200 dark:border-gray-700 px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-lg">
      <h1 className="text-xl font-bold">Satya</h1>
      <div className="flex gap-6 items-center">
        <a href="/projects" className="hover:text-blue-500 transition">
          Projects
        </a>
      </div>
    </header>
  );
}
