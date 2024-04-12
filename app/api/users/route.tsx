import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
    return NextResponse.json([
        {
            id:1,
            name:"thanos"
        },
        {
            id:2,
            name:"thanos"
        }
    ]);
}