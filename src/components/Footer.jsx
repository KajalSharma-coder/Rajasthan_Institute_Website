import { Link } from 'react-router-dom'
import { Mail, MapPinned, Phone } from 'lucide-react'
import { emailAddress, navLinks, whatsappNumber } from '../data/site'

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/50 bg-slate-950 text-white">
      <div className="site-shell py-12">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.3fr_0.9fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-brand-600 font-display text-lg font-bold">
                RE
              </div>
              <div>
                <h3 className="text-xl font-semibold">Rajdhani Education</h3>
                <p className="text-sm text-slate-300">
                  Premium learning support for ambitious students.
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              We blend guidance, discipline, and modern teaching to help students
              build strong foundations and confident futures.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <Phone size={17} className="text-cyan-300" />
                {whatsappNumber}
              </p>
              <p className="flex items-center gap-3">
                <Mail size={17} className="text-cyan-300" />
                {emailAddress}
              </p>
              <p className="flex items-center gap-3">
                <MapPinned size={17} className="text-cyan-300" />
                Responsive online-first educational support
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3 text-sm text-slate-300">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="transition hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          All Rights Reserved Rajdhani Education © 2026
        </div>
      </div>
    </footer>
  )
}

export default Footer
