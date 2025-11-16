import { CreditCard, Globe2, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Embedded Payments',
    desc: 'A single ledger for cards, ACH, and wallets—reconciled in real-time across routes and partners.'
  },
  {
    icon: Globe2,
    title: 'Global Scale',
    desc: 'Multi-currency, tax-aware pricing with smart routing that lowers fees and boosts acceptance.'
  },
  {
    icon: ShieldCheck,
    title: 'Risk & Compliance',
    desc: 'KYC/KYB flows, sanctions screening, and chargeback management—built for regulated travel.'
  },
  {
    icon: Sparkles,
    title: 'Delightful UX',
    desc: 'Boarding-pass style interactions and a modern dark UI that your customers will love.'
  }
]

export default function Features() {
  return (
    <section id="solutions" className="relative bg-[#0b0b0f] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-white to-orange-400 text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
