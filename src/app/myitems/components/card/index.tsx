"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { ItemProps } from "@/utils/items.type";
import { Pencil, Trash, ZoomIn, ZoomOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CardItem({ item }: { item: ItemProps }) {
  const router = useRouter();

  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    router.refresh();
  }, [router]);

  async function handleDeleteItem() {
    try {
      const response = await api.delete("/api/items", {
        params: {
          id: item.id,
        },
      });
      console.log(response.data);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <article className="flex h-auto w-full flex-col justify-between gap-2 rounded-lg border-2 bg-secondary/30 p-2 duration-300 hover:bg-secondary">
      <article className="flex w-full flex-wrap items-center justify-center gap-2 text-justify">
        <h2>
          <strong>Assunto:</strong> {item.subject} / {item.specificSubject}
        </h2>
        <h2>
          <strong>Autor:</strong> {item.author}
        </h2>
        <p>
          <strong>Competência:</strong> {item.bNCCCompetence}
        </p>
        <p>
          <strong>Habilidade:</strong> {item.bNCCHability}
        </p>
        <p>
          <strong>Dificuldade:</strong> {item.difficultyLevel}
        </p>
        <p>
          <strong>Ano:</strong> {item.year}
        </p>
      </article>
      <section className="flex flex-col items-start justify-center gap-2 text-justify">
        {showItem && (
          <div>
            <p>
              <strong>Texto Base:</strong> {item.baseText}
            </p>
            <p>
              <strong>Recurso:</strong> {item.resource}
            </p>
          </div>
        )}
        <p>
          <strong>Comando:</strong> {item.itemCommand}
        </p>
      </section>
      {showItem && (
        <ul className="flex w-full flex-col items-start justify-center gap-2 border-y-2 border-secondary py-2 text-justify">
          {item.alternatives?.map((alternative, index) => (
            <li
              key={index}
              className={alternative.correct ? "font-bold text-green-500" : ""}
            >
              {`${String.fromCharCode(65 + index)}) ${alternative.alternative}`}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-end gap-2">
        <Button
          variant="info"
          onClick={() => setShowItem(!showItem)}
          className="h-auto w-auto p-1 transition-all duration-300 hover:scale-110"
        >
          {showItem === false ? (
            <ZoomIn className="h-auto w-6" />
          ) : (
            <ZoomOut className="h-auto w-6" />
          )}
        </Button>
        <Button
          variant="editable"
          className="h-auto w-auto p-1 transition-all duration-300 hover:scale-110"
        >
          <Pencil className="h-auto w-6" />
        </Button>
        <Button
          variant="destructive"
          onClick={() => handleDeleteItem()}
          className="h-auto w-auto p-1 transition-all duration-300 hover:scale-110"
        >
          <Trash className="h-auto w-6" />
        </Button>
      </div>
    </article>
  );
}
