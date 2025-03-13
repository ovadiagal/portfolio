import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function GET(request: Request) {
  const id = request.headers.get("id");
  if (!id) {
    return NextResponse.json({ message: "Missing id in headers" });
  }
  const sql = neon(`${process.env.DATABASE_URL}`);
  const rows = await sql(
    `SELECT processed, score FROM requests WHERE id = $1`,
    [id],
  );
  console.log(rows);
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { id, controller, repeater_edge, repeater_internal } = body;
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql(
    `INSERT INTO requests (id, processed, controller, repeater_internal, repeater_edge, score)
         VALUES ($1, false, $2, $3, $4, NULL)`,
    [id, controller, repeater_internal, repeater_edge],
  );
  return NextResponse.json({ message: "Grading request added." });
}
