import { NextRequest, NextResponse } from "next/server";
import validationSchema from "./schema";
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

export async function POST(request:NextRequest){ 
    const  data=await request.json();
    const validation=validationSchema.safeParse(data);
    if(!validation.success){
        return NextResponse.json({error:validation.error.errors});
    }
    return NextResponse.json({message:"User created successfully",data});
}

export async function PUT(request:NextRequest){
    const  data=await request.json();
    return NextResponse.json({message:"User updated successfully",data});
}

export async function DELETE(request:NextRequest){
    const  data=await request.json();
    return NextResponse.json({message:"User deleted successfully",data});
}