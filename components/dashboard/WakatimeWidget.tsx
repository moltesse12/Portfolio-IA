"use client";

import { useEffect, useState } from "react";

export default function WakatimeWidget() {
  const [data, setData] = useState<{
    totalSeconds: number;
    languages: { name: string; percent: number }[];
  } | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/wakatime")
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
        Configurer <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">WAKATIME_API_KEY</code> dans .env
      </p>
    );
  }

  const hours = Math.floor(data.totalSeconds / 3600);
  const mins = Math.floor((data.totalSeconds % 3600) / 60);

  return (
    <div className="space-y-3">
      <p className="text-2xl font-bold text-neutral-900 dark:text-white">
        {hours}h {mins}m
      </p>
      <p className="text-xs text-neutral-500">Cette semaine</p>
      <div className="space-y-1">
        {data.languages.map((lang) => (
          <div key={lang.name} className="flex items-center gap-2">
            <div
              className="h-2 rounded-full bg-primary-400"
              style={{ width: `${lang.percent}%`, maxWidth: "100%" }}
            />
            <span className="text-xs text-neutral-500">
              {lang.name} ({lang.percent.toFixed(1)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
