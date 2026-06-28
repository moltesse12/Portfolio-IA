import { NextResponse } from "next/server";

export const GET = async () => {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "WAKATIME_API_KEY not configured" },
      { status: 200, statusText: "Not Configured" },
    );
  }

  try {
    const res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
      headers: { Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}` },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("WakaTime API error");

    const data = await res.json();

    return NextResponse.json({
      totalSeconds: data.data?.total_seconds ?? 0,
      languages: (data.data?.languages ?? []).slice(0, 5),
      editors: (data.data?.editors ?? []).slice(0, 3),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch WakaTime data" },
      { status: 500 },
    );
  }
};
