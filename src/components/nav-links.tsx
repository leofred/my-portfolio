"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projetos" },
  { href: "/lab", label: "Lab" },
] as const;

export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Navegação principal">
      {ROUTES.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={
              isActive
                ? "font-semibold text-foreground no-underline underline decoration-2 underline-offset-4"
                : "text-foreground/80 no-underline hover:text-foreground hover:underline"
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
