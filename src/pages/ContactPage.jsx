import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import PageShell from '../components/PageShell'
import SectionHeading from '../components/SectionHeading'
import { emailAddress, whatsappApiBase, whatsappNumber } from '../data/site'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const whatsappText = `Hello my name is ${form.name}. My phone number is ${form.phone}. My email is ${form.email}. Message: ${form.message}`
    const encodedText = encodeURIComponent(whatsappText)

    window.open(`${whatsappApiBase}?text=${encodedText}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <PageShell>
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="section-card px-6 py-12 sm:px-10">
          <SectionHeading
            eyebrow="Contact"
            title="Start the conversation with Rajdhani Education"
            description="Send your details and message, and we will route you directly to WhatsApp for a quick and connected inquiry experience."
          />
          <div className="mt-10 space-y-5 text-sm text-slate-700 sm:text-base">
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
                <p>{whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-brand-100 bg-brand-50/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p>{emailAddress}</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="section-card px-6 py-12 sm:px-10">
          <h2 className="text-3xl font-semibold text-slate-950">Send a Message</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Fill in the form below. On submit, your message opens in WhatsApp
            with your details already prepared.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="input-field"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-field"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="input-field"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="input-field resize-none"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your query"
              />
            </div>

            <button type="submit" className="primary-button w-full sm:w-auto">
              Send to WhatsApp
              <Send size={17} />
            </button>
          </div>
        </form>
      </section>
    </PageShell>
  )
}

export default ContactPage
