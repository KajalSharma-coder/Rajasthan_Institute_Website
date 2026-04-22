import { motion as Motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import SectionHeading from '../components/SectionHeading'
import { aboutFeatures, values } from '../data/site'

function AboutPage() {
  return (
    <PageShell>
      <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="section-card px-6 py-12 sm:px-10">
          <SectionHeading
            eyebrow="About Us"
            title="Rajdhani Education is built to make quality learning feel inspiring and accessible"
            description="We focus on strong fundamentals, caring mentorship, and practical growth so students can perform with clarity and confidence."
          />
          <div className="mt-8 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Rajdhani Education supports students with a premium, modern, and
              disciplined approach to learning. Our teaching style combines
              clarity, encouragement, and consistent academic follow-through.
            </p>
            <p>
              From foundational studies to future-facing skill development, we
              aim to create a polished educational journey that feels supportive
              on both desktop and mobile experiences.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {aboutFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                whileHover={{ x: 4 }}
                className="section-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-400 text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Motion.div>
            )
          })}
        </div>
      </section>

      <section className="mt-8 section-card px-6 py-12 sm:px-10">
        <SectionHeading
          eyebrow="Core Values"
          title="A refined educational environment rooted in trust, quality, and momentum"
          description="These principles shape our student experience across teaching, communication, and long-term guidance."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <Motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-brand-100 bg-brand-50/70 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </Motion.div>
            )
          })}
        </div>
      </section>
    </PageShell>
  )
}

export default AboutPage
