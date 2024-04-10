import { Button } from "@/components/ui/button";
import { ItemProps } from "@/utils/items.type";
import { Pencil, Trash, ZoomIn } from "lucide-react";

export function CardItem({ item }: { item: ItemProps }) {
  return (
    <article className="flex h-[280px] w-[280px] flex-col justify-between gap-2 rounded-lg border-2 bg-secondary p-2 duration-300 hover:scale-105">
      <h2>
        <strong>Assunto:</strong> {item.subject}
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
      <p>
        <strong>Comando:</strong> {item.itemCommand}
      </p>

      <div className="flex items-center justify-center gap-2">
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
