import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0f]">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/60 via-[#0b0b0f]/30 to-[#0b0b0f]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-white to-orange-400" />
              Fintech-grade travel experiences
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Seamless journeys. Smart payments.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/70">
              Torres & Co blends travel operations with modern fintech. Issue boarding passes that come alive on hover, automate reconciliation, and delight travelers with an interactive, modern experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a href="#get-started" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-orange-400 px-6 py-3 text-sm font-semibold text-black shadow-sm transition-transform hover:scale-[1.02]">
                Get started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                View live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
