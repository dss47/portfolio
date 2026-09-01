import Link from "next/link";
import Image from "next/image";
import { tickerItems, tickerItem } from "@/lib/data";
import saadImg from "../public/images/saaad.webp"

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col py-20 justify-between items-center px-4 gap-5 mt-32 mb-16">
      <div className="flex flex-row gap-40 items-center">
        <div className="flex flex-col gap-2.5">
          <p className="text-5xl font-lora font-extralight">Hi! I&apos;m Saad <span className="font-bold">El-Assali</span>.</p>
          <h1 className="text-5xl font-bold font-lora text-center">Software Engineering Student</h1>
          <p className="my-4 max-w-xl text-lg text-gray-400">Crafting optimized desktop systems and modern web architectures, from elegant UI/UX to custom shell modules.</p>
          <div className="flex flex-row justify-start gap-3">
            <Link href="#projects" className="rounded-full px-6 py-4 text-base font-medium bg-white text-gray-950 transition-colors hover:bg-gray-200">View Work</Link>
            <Link href="#contact" className="border border-gray-700 rounded-full px-6 py-4 text-base font-medium text-gray-400 transition-colors hover:text-white hover:border-gray-300">Get In Touch</Link>
          </div>
        </div>
        <div className="relative shrink-0 group">
          <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 border-t border-l border-zinc-500 transition-colors duration-300 group-hover:border-zinc-300" />
          <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 border-t border-r border-zinc-500 transition-colors duration-300 group-hover:border-zinc-300" />
          <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 border-b border-l border-zinc-500 transition-colors duration-300 group-hover:border-zinc-300" />
          <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 border-b border-r border-zinc-500 transition-colors duration-300 group-hover:border-zinc-300" />

          <div className="border border-zinc-800 bg-zinc-800 p-1 transition-transform duration-300 group-hover:scale-102">
            <Image
              src={saadImg}
              alt="Saad"
              width={270}
              height={270}
              loading="eager"
              className="aspect-square object-cover"
            />
          </div>
        </div>
      </div>
      <div className="border-y py-4 border-gray-900 w-full max-w-6xl mt-28 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)"
        }}
      >
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          {[...tickerItems, ...tickerItems].map((item: tickerItem, index) => (
            <div key={index} className="shrink-0 flex items-center justify-center mx-3">
              <Image
                src={item.logoUrl}
                alt={item.name}
                width={44}
                height={44}
                title={item.name}
                unoptimized
                className={item.darkModeFix ? 'brightness-0 invert' : ''}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
