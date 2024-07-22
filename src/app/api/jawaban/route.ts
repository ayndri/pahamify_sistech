import {NextResponse} from "next/server";

export async function GET() {
    return NextResponse.json(mockJawaban);
}

export async function POST(req: Request) {
    mockJawaban = await req.json();
    return NextResponse.json(mockJawaban);
}

let mockJawaban = {
    "nama": "Raphael",
    "jawaban": [
        0,
        1,
        2,
        1,
        -1,
        4,
        1,
        4,
        3
    ],
    "flagged": [1, 3, 6]
}