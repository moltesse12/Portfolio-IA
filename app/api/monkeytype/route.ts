import { NextResponse } from "next/server";

export const GET = async () => {
  const apiKey = process.env.MONKEYTYPE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "MONKEYTYPE_API_KEY not configured" },
      { status: 200, statusText: "Not Configured" },
    );
  }

  try {
    const res = await fetch("https://api.monkeytype.com/users/ personalBests", {
      headers: { Authorization: `ApeKey ${apiKey}` },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Monkeytype API error");

    const data = await res.json();

    const pb = data.data?.["time"]?.["15"]?.[0];
    const pb60 = data.data?.["time"]?.["60"]?.[0];

    return NextResponse.json({
      wpm15: pb?.wpm ?? 0,
      acc15: pb?.acc ?? 0,
      wpm60: pb60?.wpm ?? 0,
      acc60: pb60?.acc ?? 0,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Monkeytype data" },
      { status: 500 },
    );
  }
};
