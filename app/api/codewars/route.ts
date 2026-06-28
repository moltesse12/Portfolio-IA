import { NextResponse } from "next/server";

export const GET = async () => {
  const username = process.env.CODEWARS_USERNAME;

  if (!username) {
    return NextResponse.json(
      { error: "CODEWARS_USERNAME not configured" },
      { status: 200, statusText: "Not Configured" },
    );
  }

  try {
    const res = await fetch(
      `https://www.codewars.com/api/v1/users/${username}`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) throw new Error("Codewars API error");

    const data = await res.json();

    return NextResponse.json({
      username: data.username,
      rank: data.ranks?.overall?.name ?? "Unranked",
      rankScore: data.ranks?.overall?.score ?? 0,
      totalCompleted: data.codeChallenges?.totalCompleted ?? 0,
      languages: Object.keys(data.ranks?.languages ?? {}),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Codewars data" },
      { status: 500 },
    );
  }
};
