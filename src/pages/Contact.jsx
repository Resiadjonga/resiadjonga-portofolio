import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { socialLinks } from '../data/socialLinks'

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=resiadjonga20%40gmail.com'
export default function Contact({ language }) {
  const en = language === 'en'
  const [emailPrepared, setEmailPrepared] = useState(false)
  const [isPreparingEmail, setIsPreparingEmail] = useState(false)
  const handleProjectSubmit = (event) => {
    event.preventDefault()
    if (isPreparingEmail) return
    setIsPreparingEmail(true)
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const project = formData.get('project')
    const subject = en ? `Project inquiry from ${name}` : `Proposition de projet de ${name}`
    const body = en
      ? `Name: ${name}\nEmail: ${email}\n\nProject details:\n${project}`
      : `Nom : ${name}\nE-mail : ${email}\n\nDescription du projet :\n${project}`
    const params = new URLSearchParams({ view: 'cm', fs: '1', to: 'resiadjonga20@gmail.com', su: subject, body })
    window.open(`https://mail.google.com/mail/?${params.toString()}`, '_blank', 'noopener,noreferrer')
    window.setTimeout(() => {
      setIsPreparingEmail(false)
      setEmailPrepared(true)
    }, 500)
  }

  return (
    <div>
      <SectionTitle title={en ? <>Let’s build something<br /><em className="font-accent text-orange-600 dark:text-orange-400">meaningful.</em></> : <>Construisons quelque<br /><em className="font-accent text-orange-600 dark:text-orange-400">chose de fort.</em></>}>{en ? 'A project, an opportunity or just an idea? I’d be happy to talk about it.' : 'Un projet, une opportunité ou simplement une idée ? Je serais ravie d’en discuter avec vous.'}</SectionTitle>
      <div className="grid gap-10 border-t border-stone-200 pt-8 sm:grid-cols-2 dark:border-white/10">
        <div><p className="font-mono text-xs uppercase tracking-[.2em] text-stone-500">{en ? 'Email me' : 'M’écrire'}</p><a className="mt-3 inline-flex items-center gap-3 font-display text-2xl transition hover:text-orange-600 sm:text-3xl" href={gmailComposeUrl} target="_blank" rel="noreferrer"><img aria-hidden="true" className="size-7 object-contain" src="/gmail.jpg" alt="" />resiadjonga20@gmail.com <span aria-hidden="true">↗</span></a></div>
        <div><p className="font-mono text-xs uppercase tracking-[.2em] text-stone-500">{en ? 'Location' : 'Localisation'}</p><p className="mt-3 font-display text-2xl">{en ? 'Kinshasa/DRC · Available remotely' : 'Kinshasa/RDC· Disponible à distance'}</p></div>
      </div>
      <div className="mt-10 flex flex-wrap gap-3" aria-label={en ? 'Social profiles' : 'Profils sociaux'}>
        {socialLinks.map(({ label, url, icon }) => <a key={label} href={typeof url === 'function' ? url(en) : url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-stone-300 px-5 py-3 text-sm font-medium transition hover:border-orange-600 hover:text-orange-600 dark:border-white/15 dark:hover:border-orange-400 dark:hover:text-orange-400"><img aria-hidden="true" className="size-5 rounded object-contain" src={icon} alt="" />{label}<span aria-hidden="true">↗</span></a>)}
      </div>
      <section className="mt-16 border-t border-stone-200 pt-10 dark:border-white/10" aria-labelledby="project-inquiry-title">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-orange-600 dark:text-orange-400">{en ? 'Have a project in mind?' : 'Un projet en tête ?'}</p>
          <h2 id="project-inquiry-title" className="mt-3 font-display text-3xl font-semibold">{en ? 'Tell me about it.' : 'Parlons de votre idée.'}</h2>
          <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">{en ? 'Share your contact details and a short description of the work you have in mind.' : 'Indiquez vos coordonnées et décrivez brièvement le projet sur lequel vous aimeriez travailler avec moi.'}</p>
        </div>
        <form className="mt-8 grid max-w-2xl gap-5" onSubmit={handleProjectSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium" htmlFor="project-name">{en ? 'Full name' : 'Nom complet'}<input id="project-name" name="name" type="text" autoComplete="name" placeholder={en ? 'e.g. Alex Martin' : 'Ex. : Alex Martin'} required className="rounded-xl border border-stone-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-orange-600 dark:border-white/15 dark:bg-white/[.04] dark:focus:border-orange-400" /></label>
            <label className="grid gap-2 text-sm font-medium" htmlFor="project-email">{en ? 'Email address' : 'Adresse e-mail'}<input id="project-email" name="email" type="email" autoComplete="email" placeholder={en ? 'e.g. alex@example.com' : 'Ex. : alex@exemple.com'} required className="rounded-xl border border-stone-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-orange-600 dark:border-white/15 dark:bg-white/[.04] dark:focus:border-orange-400" /></label>
          </div>
          <label className="grid gap-2 text-sm font-medium" htmlFor="project-description">{en ? 'What would you like to build?' : 'Quel projet souhaitez-vous réaliser ?'}<textarea id="project-description" name="project" rows="5" placeholder={en ? 'Briefly describe your project, goals, and timeline…' : 'Décrivez brièvement votre projet, vos objectifs et vos délais…'} required className="resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 font-normal leading-6 outline-none transition focus:border-orange-600 dark:border-white/15 dark:bg-white/[.04] dark:focus:border-orange-400" /></label>
          <div>
            <button type="submit" disabled={isPreparingEmail} aria-busy={isPreparingEmail} className="inline-flex items-center rounded-full bg-orange-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:cursor-wait disabled:opacity-70">{isPreparingEmail ? (en ? 'Preparing…' : 'Préparation…') : (en ? 'Prepare email' : 'M’envoyer le projet')} {isPreparingEmail ? <span aria-hidden="true" className="ml-4 size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> : <span className="ml-4" aria-hidden="true">↗</span>}</button>
            {emailPrepared && <p className="mt-3 rounded-xl border border-green-600/30 bg-green-600/10 px-4 py-3 text-sm text-green-800 dark:text-green-300" role="status">{en ? 'Your email draft is ready in a new tab. Review it and send it when you’re ready.' : 'Votre brouillon est prêt dans un nouvel onglet. Vous pouvez le relire et l’envoyer quand vous le souhaitez.'}</p>}
          </div>
        </form>
      </section>
    </div>
  )
}
