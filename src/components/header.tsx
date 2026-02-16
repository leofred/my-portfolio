import Link from "next/link";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="border-b border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold text-foreground no-underline hover:underline"
        >
          Portfolio
        </Link>
        <NavLinks className="flex gap-6" />
      </div>
    </header>
  );
}
