import { Button } from "@/components/ui/button";
import { ItemProps } from "@/utils/items.type";
import { Pencil, Trash, ZoomIn } from "lucide-react";

export function CardItem({ item }: { item: ItemProps }) {
  return (
    <article className="flex h-auto w-screen flex-col justify-between gap-2 rounded-lg border-2 bg-secondary p-2 duration-300">
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
        <p>
          <strong>Texto Base:</strong> {item.baseText}
        </p>
        <p>
          <strong>Recurso:</strong> {item.resource}
        </p>
        <p>
          <strong>Comando:</strong> {item.itemCommand}
        </p>
      </section>
      <ul>
        {item.alternatives?.map((alternative, index) => (
          <li
            key={index}
            className={alternative.correct ? "font-bold text-green-500" : ""}
          >
            {`${String.fromCharCode(65 + index)}) ${alternative.alternative}`}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-end gap-2">
        <Button
          variant="info"
          className="h-auto w-auto p-1 transition-all duration-300 hover:scale-110"
        >
          <ZoomIn className="h-auto w-6" />
        </Button>
        <Button
          variant="editable"
          className="h-auto w-auto p-1 transition-all duration-300 hover:scale-110"
        >
          <Pencil className="h-auto w-6" />
        </Button>
        <Button
          variant="destructive"
          className="h-auto w-auto p-1 transition-all duration-300 hover:scale-110"
        >
          <Trash className="h-auto w-6" />
        </Button>
      </div>
    </article>
  );
}
