import Link from "next/link";

export default function Error() {
  return (
    <main className="flex h-[100%] w-full flex-col items-center justify-center gap-4 bg-secondary px-2 2xl:container">
      <h1>Apenas usuários com o domínio @prof.ce.gov.br podem fazer login.</h1>
      <Link href="/" className="rounded-lg bg-primary p-2">
        Voltar
      </Link>
    </main>
  );
}
