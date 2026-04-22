import PageShell from '../components/PageShell'
import SectionHeading from '../components/SectionHeading'

const policySections = [
  {
    title: 'Information We Collect',
    content:
      'We may collect details you submit through the contact form, including your name, email address, and message content, only for communication and educational inquiry purposes.',
  },
  {
    title: 'How We Use Information',
    content:
      'Your information is used to respond to questions, provide admission guidance, and improve communication related to Rajdhani Education services.',
  },
  {
    title: 'Data Sharing',
    content:
      'Rajdhani Education does not sell your personal information. Information is only shared when necessary to respond to your inquiry or comply with applicable requirements.',
  },
  {
    title: 'Communication Channels',
    content:
      'When you submit the contact form, you may be redirected to WhatsApp to continue the conversation. Please review WhatsApp policies separately for their platform handling.',
  },
  {
    title: 'Updates to This Policy',
    content:
      'This privacy policy may be updated periodically to reflect operational changes. Continued use of the website indicates acceptance of the latest version shown here.',
  },
]

function PrivacyPage() {
  return (
    <PageShell>
      <section className="section-card px-6 py-12 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Privacy Policy"
          title="Your information matters, and we aim to handle it responsibly"
          description="This page provides a simple overview of how Rajdhani Education may collect, use, and protect information shared through this website."
        />
        <div className="mt-10 space-y-6">
          {policySections.map((section) => (
            <div
              key={section.title}
              className="rounded-[1.75rem] border border-brand-100 bg-brand-50/60 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {section.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

export default PrivacyPage
