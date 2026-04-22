import { motion as Motion } from 'framer-motion'

function CourseCard({ title, description, index = 0 }) {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="section-card h-full p-6 sm:p-7"
    >
      <div className="mb-5 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-brand-700 uppercase">
        Course
      </div>
      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </Motion.article>
  )
}

export default CourseCard
