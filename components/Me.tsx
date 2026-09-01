export default function Me() {
  return (
    <section id="me" className="w-full px-5 md:px-12 py-26">
      <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
        $ whoami
      </h2>

      <div className="bg-black border border-zinc-800 rounded-[1.6rem] overflow-hidden font-mono text-base shadow-2xl shadow-zinc-950">
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-zinc-500">saad@portfolio — fish</span>
        </div>

        <div className="p-5 md:p-8 space-y-1.5">
          <p>
            <span className="text-green-400">saad@portfolio</span>
            <span className="text-zinc-600">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-zinc-600">$</span>
            <span className="text-zinc-300 ml-1.5">cat ~/about.me</span>
          </p>

          <div className="pl-4 border-l-2 border-zinc-800 mt-2.5 mb-4 space-y-2.5">
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">name</p>
              <p className="text-white text-sm">Saad El-Assali</p>
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">status</p>
              <p className="text-white">Software Engineering Student @ FST Mohammedia</p>
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">location</p>
              <p className="text-white">Casablanca, Morocco</p>
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-wider">philosophy</p>
              <p className="text-zinc-300">Minimalist architecture · low-latency execution · native performance</p>
            </div>
          </div>

          <p>
            <span className="text-green-400">saad@portfolio</span>
            <span className="text-zinc-600">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-zinc-600">$</span>
            <span className="text-zinc-300 ml-1.5">cat ~/tech-stack</span>
          </p>

          <div className="pl-4 border-l-2 border-zinc-800 mt-2.5 space-y-1.5">
            <p>
              <span className="text-purple-400">languages  </span>
              <span className="text-zinc-400">C, C++, Java, JavaScript/TypeScript, PHP, HTML, CSS, Shell</span>
            </p>
            <p>
              <span className="text-purple-400">frameworks </span>
              <span className="text-zinc-400">GTK4, React, Angular, Next.js, Tailwind CSS</span>
            </p>
            <p>
              <span className="text-purple-400">databases  </span>
              <span className="text-zinc-400">MariaDB, MySQL, PostgreSQL</span>
            </p>
            <p>
              <span className="text-purple-400">environments         </span>
              <span className="text-zinc-400">Arch (Hyprland), Ubuntu, Debian, Windows</span>
            </p>
          </div>

          <p className="mt-4">
            <span className="text-green-400">saad@portfolio</span>
            <span className="text-zinc-600">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-zinc-600">$</span>
            <span className="animate-pulse text-zinc-500 ml-1.5">▊</span>
          </p>
        </div>
      </div>
    </section>
  );
}
