function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              WebScraper
            </p>
            <h1 className="text-3xl font-bold sm:text-4xl">
              React + Vite + Tailwind ready to build.
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              You now have a modern React TypeScript setup with TailwindCSS
              pre-wired. Start creating components, drop in utility classes, and
              ship your scraper UI fast.
            </p>
          </div>
          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-sm font-semibold text-slate-200 shadow-lg shadow-slate-900/40 sm:flex">
            ⚡
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40">
            <h2 className="text-lg font-semibold">Next steps</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Run `npm run dev` and open the local preview.</li>
              <li>• Start building components in `src/`.</li>
              <li>• Customize theme tokens in `tailwind.config.js`.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-purple-600/10 p-6 shadow-xl shadow-indigo-950/40">
            <h2 className="text-lg font-semibold">Need a quick example?</h2>
            <p className="mt-3 text-sm text-slate-200">
              Add Tailwind utilities to any element:
            </p>
            <code className="mt-3 block rounded-xl bg-slate-900/80 px-4 py-3 text-xs text-indigo-100 ring-1 ring-indigo-500/30">
              &lt;button className=&quot;rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition&quot;&gt;Run scraper&lt;/button&gt;
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
