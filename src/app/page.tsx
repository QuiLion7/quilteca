export default function Home() {
  return (
    <main className="flex w-screen items-center justify-center bg-secondary">
      <section className="w-full text-primary-foreground">
        <div className="w-full px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="jus] flex w-full flex-col items-center gap-1 text-center">
            <h1 className="flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Compartilhe Conhecimento.
              <span className="sm:block"> Compartilhe Itens. </span>
            </h1>

            <p className="mt-4 max-w-xl sm:text-xl/relaxed">
              Página em Construção
            </p>

            {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
