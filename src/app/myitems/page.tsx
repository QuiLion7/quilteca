import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prismaClient from "@/lib/prisma";
import { CardItem } from "./components/card";
import { Prisma } from "@prisma/client";
import { Alternative } from "@/utils/items.type";

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
    <main className="flex w-full items-center justify-center px-2 2xl:container">
      <section className="mt-4 flex items-center justify-center gap-2">
        {formattedItemsList.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
