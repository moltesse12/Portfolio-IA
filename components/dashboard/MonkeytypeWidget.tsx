"use client";

import { useEffect, useState } from "react";

export default function MonkeytypeWidget() {
  const [data, setData] = useState<{
    wpm15: number;
    acc15: number;
    wpm60: number;
    acc60: number;
  } | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/monkeytype")
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
        Configurer <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">MONKEYTYPE_API_KEY</code> dans .env
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{data.wpm15}</p>
        <p className="text-xs text-neutral-500">15s WPM</p>
        <p className="text-sm text-neutral-400">{data.acc15}%</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{data.wpm60}</p>
        <p className="text-xs text-neutral-500">60s WPM</p>
        <p className="text-sm text-neutral-400">{data.acc60}%</p>
      </div>
    </div>
  );
}
