import { motion as Motion } from 'framer-motion'

const transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

function PageShell({ children }) {
  return (
    <Motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={transition}
      className="site-shell py-8 sm:py-10"
    >
      {children}
    </Motion.main>
  )
}

export default PageShell
