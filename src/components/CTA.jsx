export default function CTA() {
  return (
    <section id="get-started" className="relative bg-[#0b0b0f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(255,255,255,0.08),transparent)]" />
          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Ready to modernize your travel stack?</h2>
              <p className="mt-2 max-w-2xl text-white/70">We help airlines, OTAs, and fintechs ship delightful, compliant experiences. Get a tailored walkthrough in minutes.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white to-orange-400 px-6 py-3 text-sm font-semibold text-black shadow-sm transition-transform hover:scale-[1.02]">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
