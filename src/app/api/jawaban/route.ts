import {NextResponse} from "next/server";

export async function GET() {
    return NextResponse.json(mockJawaban);
}

const mockJawaban = {
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