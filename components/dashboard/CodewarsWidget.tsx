"use client";

import { useEffect, useState } from "react";

export default function CodewarsWidget() {
  const [data, setData] = useState<{
    rank: string;
    rankScore: number;
    totalCompleted: number;
    languages: string[];
  } | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/codewars")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(true);
        else setData(d);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-24 animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />;
  }

  if (error || !data) {
    return (
      <p className="text-sm text-neutral-500">
        Configurer <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">CODEWARS_USERNAME</code> dans .env
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-200">
          {data.rank}
        </span>
        <p className="text-2xl font-bold text-neutral-900 dark:text-white">{data.totalCompleted}</p>
        <p className="text-xs text-neutral-500">katas</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {data.languages.map((lang) => (
          <span
            key={lang}
            className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}
