"use client";

import { useEffect, useState } from "react";

export default function GithubWidget() {
  const [data, setData] = useState<{
    publicRepos: number;
    totalStars: number;
    totalForks: number;
  } | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
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
        Configurer <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">GITHUB_USERNAME</code> dans .env
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <p className="text-2xl font-bold text-neutral-900 dark:text-white">{data.publicRepos}</p>
        <p className="text-xs text-neutral-500">Repos</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{data.totalStars}</p>
        <p className="text-xs text-neutral-500">Stars</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-neutral-900 dark:text-white">{data.totalForks}</p>
        <p className="text-xs text-neutral-500">Forks</p>
      </div>
    </div>
  );
}
