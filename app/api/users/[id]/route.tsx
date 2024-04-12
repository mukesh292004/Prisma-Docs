import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest,{params}:{params:{id:Number}}){
    if(params.id == 1){
     return NextResponse.json({id:params.id,name:"thanos"});
    }
    else if(params.id == 2){
       return NextResponse.json({id:params.id,name:"thanos"});
    }
    else{
     return NextResponse.json({error:"User not found"});
    }
}
