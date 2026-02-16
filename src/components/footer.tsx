export function Footer() {
  return (
    <footer className="mt-auto border-t border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Portfolio</p>
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 no-underline hover:text-foreground hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 no-underline hover:text-foreground hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
