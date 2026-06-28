import { NextResponse } from "next/server";

export const GET = async () => {
  const username = process.env.GITHUB_USERNAME;

  if (!username) {
    return NextResponse.json(
      { error: "GITHUB_USERNAME not configured" },
      { status: 200, statusText: "Not Configured" },
    );
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) throw new Error("GitHub API error");

    const events = await res.json();
    const commitCount = events.filter(
      (e: { type: string }) => e.type === "PushEvent",
    ).length;

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { next: { revalidate: 3600 } },
    );
    const repos = await repoRes.json();
    const totalStars = repos.reduce(
      (acc: number, r: { stargazers_count: number }) => acc + r.stargazers_count,
      0,
    );
    const totalForks = repos.reduce(
      (acc: number, r: { forks_count: number }) => acc + r.forks_count,
      0,
    );

    return NextResponse.json({
      username,
      publicRepos: repos.length,
      totalStars,
      totalForks,
      recentCommits: commitCount,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 },
    );
  }
};
