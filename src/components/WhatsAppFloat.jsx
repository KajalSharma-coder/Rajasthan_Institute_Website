import { MessageCircleMore } from 'lucide-react'
import { whatsappApiBase } from '../data/site'

function WhatsAppFloat() {
  return (
    <a
      href={`${whatsappApiBase}?text=Hello%20Rajdhani%20Education`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_45px_rgba(37,211,102,0.4)] transition duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircleMore size={28} />
    </a>
  )
}

export default WhatsAppFloat
