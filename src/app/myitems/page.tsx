import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prismaClient from "@/lib/prisma";
import { CardItem } from "./components/card";
import { Prisma } from "@prisma/client";
import { Alternative } from "@/utils/items.type";
import Link from "next/link";

export default async function MyItems() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  function transformAlternatives(
    alternatives: Prisma.JsonValue,
  ): Alternative[] | null {
    if (Array.isArray(alternatives)) {
      return alternatives
        .map((alt) => {
          if (
            typeof alt === "object" &&
            alt !== null &&
            "alternative" in alt &&
            "correct" in alt
          ) {
            return {
              alternative: alt.alternative,
              correct: alt.correct,
            };
          }
          return null;
        })
        .filter((alt) => alt !== null) as Alternative[];
    }
    return null;
  }

  const itemsList = await prismaClient.item.findMany({
    where: {
      userId: session.user.id,
    },
  });

  const formattedItemsList = itemsList.map((item) => ({
    ...item,
    alternatives: transformAlternatives(item.alternatives),
  }));

  return (
    <main className="flex w-full items-center justify-center 2xl:container">
      <section className=" flex flex-col items-center justify-center gap-2 p-2">
        {formattedItemsList.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </section>

      {formattedItemsList.length === 0 && (
        <div className="flex h-[calc(100dvh-56px)] w-full flex-col items-center justify-center gap-2">
          <h1 className="text-2xl font-bold uppercase">
            Você ainda não possui nenhum item cadastrado!
          </h1>
          <Link
            href="/register"
            className=" rounded-lg bg-primary p-2 text-center font-bold uppercase"
          >
            Cadastrar Item
          </Link>
        </div>
      )}
    </main>
  );
}
