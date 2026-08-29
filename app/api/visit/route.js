import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const record = await prisma.visitorCount.findUnique({ where: { id: 1 } });
    return NextResponse.json({ count: record?.count ?? 0 });
  } catch (err) {
    console.error("Visit GET error:", err);
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(req) {
  // Only accept requests that originate from the portfolio itself.
  // This blocks bots hitting the endpoint directly via curl/Postman.
  const origin = req.headers.get("origin") ?? "";
  const referer = req.headers.get("referer") ?? "";
  const host = req.headers.get("host") ?? "";

  const allowed =
    origin.includes(host) ||
    referer.includes(host) ||
    // Allow localhost in development
    host.includes("localhost");

  if (!allowed) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const record = await prisma.visitorCount.upsert({
      where: { id: 1 },
      update: { count: { increment: 1 } },
      create: { id: 1, count: 1 },
    });
    return NextResponse.json({ count: record.count });
  } catch (err) {
    console.error("Visit POST error:", err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
