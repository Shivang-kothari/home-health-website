import { NextResponse } from "next/server";
import { modules } from "../../lib/modules";

export async function GET() {
  return NextResponse.json({ items: modules });
}
