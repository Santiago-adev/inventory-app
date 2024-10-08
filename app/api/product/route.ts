import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { nombre } = await req.json();

    if (!nombre) {
      return new NextResponse("El nombre es requerido", { status: 400 });
    }

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
    });

    if(!user){
      return new NextResponse("User not found", { status: 404 });
    }
    
    const course = await db.producto.create({
      data: {
        userId,
        nombre,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
