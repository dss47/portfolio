export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-10 py-16 max-w-6xl mx-auto w-full">
      <h1 className="text-2xl sm:text-3xl font-bold font-lora mb-8">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6 rounded-2xl">
          <h2 className="text-lg sm:text-xl font-bold font-lora text-white mb-3">The Philosophy</h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Behind every line of code I write is a commitment to performance, predictability, and structural minimalism. I believe software should be as fast and lightweight as possible, a philosophy that stems from my passion for the Linux desktop ecosystem and native software development. I don&apos;t just build systems to complete a checklist; I build them to explore complex emergent behaviors—like real-time algorithm simulations—and to solve real-world synchronization challenges among engineering squads.
          </p>
        </div>
        <div className="border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6 rounded-2xl">
          <h2 className="text-lg sm:text-xl font-bold font-lora text-white mb-3">My Journey</h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            My path in software engineering is driven by continuous iteration and deep curiosity. From developing responsive, custom-tailored user interfaces with Tailwind CSS and Next.js to configuring intricate database schemas that streamline agile enterprise workflows, I thrive on bridging the gap between low-level structural control and high-level user accessibility. When I am not optimizing full-stack application data flows, you can usually find me customizing desktop environments or analyzing code execution pipelines to shave off every possible millisecond of input latency.
          </p>
        </div>
      </div>
    </section>
  );
}
