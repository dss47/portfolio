
import Link from 'next/link';

export default function Header() {

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#me", label: "Me" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-3 md:top-4 left-1/2 z-50 -translate-x-1/2 w-max max-w-[95vw]">
      <nav className="flex items-center gap-1 sm:gap-3 rounded-full bg-zinc-900/85 px-2.5 sm:px-4 py-1.5 sm:py-2.5 text-white shadow-lg backdrop-blur-md border border-zinc-700">
        <Link href="#" className="text-xl sm:text-3xl md:text-4xl font-bold font-staatliches pl-1.5 pr-1 sm:px-3 text-left">
          dss.
        </Link>
        <ul className="flex items-center gap-0 sm:gap-1 text-[11px] sm:text-xs md:text-sm font-lexend-mega">
          {navLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white text-zinc-400 px-1.5 py-1 sm:px-2.5 sm:py-2 text-[11px] sm:text-xs md:text-sm whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
