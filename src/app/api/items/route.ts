import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

export async function GET(req: Request) {
  return NextResponse.json(req);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const {
    knowledge,
    componentCurricular,
    subject,
    specificSubject,
    author,
    year,
    bNCCCompetence,
    bNCCHability,
    difficultyLevel,
    baseText,
    resource,
    itemCommand,
    alternatives,
    userId,
  } = await req.json();

  const yearInt = parseInt(year, 10);

  try {
    await prismaClient.item.create({
      data: {
        knowledge,
        componentCurricular,
        subject,
        specificSubject,
        author,
        year: yearInt,
        bNCCCompetence,
        bNCCHability,
        difficultyLevel,
        baseText: baseText ? baseText : "",
        resource: resource ? resource : "",
        itemCommand,
        alternatives,
        userId: userId,
      },
    });

    return NextResponse.json(
      { message: "Usuário Cadastrado com Sucesso!" },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: `Não foi possível cadastrar o Item` },
      { status: 400 },
    );
  }
}

// export async function PUT(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const index = searchParams.get("index");
//   const data = await req.json();

//   // Atualiza o usuário no array
//   users[Number(index)] = data;

//   return NextResponse.json(users);
// }

// export async function DELETE(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const index = searchParams.get("index");

//   users.splice(Number(index), 1);

//   return NextResponse.json({ message: "usuário deletado com sucesso!" });
// }
