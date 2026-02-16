import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Olá, eu sou Leandro Frederico
      </h1>
      <p className="mt-4 max-w-xl text-lg text-foreground/80">
        Desenvolvedor e entusiasta de tecnologia. Aqui você encontra meus
        projetos e experimentos.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background no-underline transition-colors hover:opacity-90"
        >
          Ver Projetos
        </Link>
        <Link
          href="/lab"
          className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-6 text-foreground no-underline transition-colors hover:bg-foreground/5"
        >
          Lab
        </Link>
      </div>
    </div>
  );
}
