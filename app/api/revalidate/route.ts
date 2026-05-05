import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

const KNOWN_TABLES = ["Members", "Startups", "Mentors", "Partners"] as const;

export async function POST(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const table = url.searchParams.get("table");
  if (table && (KNOWN_TABLES as readonly string[]).includes(table)) {
    revalidateTag(`airtable:${table}`);
    return NextResponse.json({ ok: true, revalidated: table });
  }

  KNOWN_TABLES.forEach((t) => revalidateTag(`airtable:${t}`));
  return NextResponse.json({ ok: true, revalidated: "all" });
}
