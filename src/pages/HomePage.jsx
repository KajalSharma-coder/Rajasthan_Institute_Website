import { motion as Motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import SectionHeading from "../components/SectionHeading";
import { courseHighlights, stats } from "../data/site";

function HomePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-slate-950 px-6 py-14 text-white shadow-[0_30px_80px_rgba(15,23,42,0.24)] sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.32),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.34),_transparent_35%)]" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <Sparkles size={16} />
              Premium Educational Experience
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Welcome to Rajdhani Education
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Empowering students with expert guidance, future-ready skills, and
              a learning environment built for confidence, clarity, and success.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/courses"
                className="primary-button"
              >
                Explore Courses
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <BadgeCheck size={16} className="text-cyan-300" />
                Trusted Guidance
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <BadgeCheck size={16} className="text-cyan-300" />
                Responsive Learning Support
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            <div className="section-card relative overflow-hidden rounded-[2rem] bg-white/12 p-6 text-white backdrop-blur-md">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-300/30 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-500/30 blur-2xl" />
              <div className="relative space-y-5">
                <div className="rounded-[1.75rem] bg-white/12 p-5">
                  <p className="text-sm text-cyan-100">
                    Why Students Choose Us
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    Clear concepts, caring mentors, and polished digital-first
                    learning.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.5rem] border border-white/10 bg-slate-900/30 p-5"
                    >
                      <p className="text-3xl font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-slate-200">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="What We Offer"
          title="Engineering-focused programs designed for ambitious future professionals"
          description="Rajdhani Education now highlights four focused engineering pathways with a polished learning experience across mobile, tablet, and desktop."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {courseHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                whileHover={{ y: -8 }}
                className="section-card p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-400 text-white shadow-[0_14px_28px_rgba(37,99,235,0.22)]">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Motion.div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}

export default HomePage;
