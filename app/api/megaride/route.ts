import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';


export async function GET(request: Request) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const rows = await sql(
        `SELECT id, processed, controller, repeater_internal, repeater_edge FROM requests WHERE processed=false ORDER BY created_at ASC LIMIT 1`);
    if (rows.length === 0) {
        return new NextResponse(null, { status: 204 });
    }
    return NextResponse.json(rows[0]);
}

export async function POST(request: Request) {
    const body = await request.json();
    const { id, score } = body;
    const sql = neon(`${process.env.DATABASE_URL}`);
    await sql(
        `UPDATE requests
         SET score = $2, processed = true
         WHERE id = $1`,
        [id, score]
    );
    return NextResponse.json({ message: 'Assignment graded.' });
}