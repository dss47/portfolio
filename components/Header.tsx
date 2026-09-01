
import Link from 'next/link';

export default function Header() {

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#me", label: "Me" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-3 rounded-full bg-zinc-900/75 px-4 py-3 text-white shadow-lg backdrop-blur-sm border border-zinc-700">
        <Link href="#" className="text-4xl font-bold font-staatliches px-3 text-left">
          dss.
        </Link>
        <ul className="flex gap-1.5 text-sm font-lexend-mega px-1.5">
          {navLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-white text-zinc-400 p-2.5 text-sm`}
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
