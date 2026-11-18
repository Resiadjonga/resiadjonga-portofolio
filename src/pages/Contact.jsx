import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { socialLinks } from '../data/socialLinks'

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=resiadjonga20%40gmail.com'
export default function Contact({ language }) {
  const en = language === 'en'
  const [emailPrepared, setEmailPrepared] = useState(false)
  const [sendError, setSendError] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isAttachmentMenuOpen, setIsAttachmentMenuOpen] = useState(false)
  const handleProjectSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const project = formData.get('message').trim()
    const attachments = formData.getAll('attachment').filter((file) => file.size)
    if (!project && !attachments.length) {
      form.elements.message.focus()
      form.elements.message.setCustomValidity(en ? 'Add a description or choose a project file.' : 'Ajoutez une description ou choisissez un fichier de projet.')
      form.elements.message.reportValidity()
      return
    }
    form.elements.message.setCustomValidity('')
    if (attachments.reduce((total, file) => total + file.size, 0) > 10 * 1024 * 1024) {
      setSendError(en ? 'Attachments must total less than 10 MB.' : 'La taille totale des fichiers doit être inférieure à 10 Mo.')
      return
    }
    setSendError('')
    const subject = en ? `Project inquiry from ${name}` : `Proposition de projet de ${name}`
    const body = en
      ? `Name: ${name}\nEmail: ${email}\n\nProject details:\n${project || '(See attached project files)'}${attachments.length ? `\n\nSelected files: ${attachments.map((file) => file.webkitRelativePath || file.name).join(', ')}\nPlease attach these files to the email before sending.` : ''}`
      : `Nom : ${name}\nE-mail : ${email}\n\nDescription du projet :\n${project || '(Voir les fichiers du projet en pièce jointe)'}${attachments.length ? `\n\nFichiers sélectionnés : ${attachments.map((file) => file.webkitRelativePath || file.name).join(', ')}\nVeuillez joindre ces fichiers à l’e-mail avant de l’envoyer.` : ''}`
    const params = new URLSearchParams({ view: 'cm', fs: '1', to: 'resiadjonga20@gmail.com', su: subject, body })
    if (window.open(`https://mail.google.com/mail/?${params.toString()}`, '_blank', 'noopener,noreferrer')) setEmailPrepared(true)
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
          <label className="grid gap-2 text-sm font-medium" htmlFor="project-description">{en ? 'What would you like to build? (optional if you attach a file)' : 'Quel projet souhaitez-vous réaliser ? (facultatif si vous joignez un fichier)'}<textarea id="project-description" name="message" rows="5" onChange={(event) => event.currentTarget.setCustomValidity('')} placeholder={en ? 'Briefly describe your project, goals, and timeline…' : 'Décrivez brièvement votre projet, vos objectifs et vos délais…'} className="resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 font-normal leading-6 outline-none transition focus:border-orange-600 dark:border-white/15 dark:bg-white/[.04] dark:focus:border-orange-400" /></label>
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" className="hidden" />
          <div className="grid justify-items-start gap-2">
            <div className="relative">
              <button type="button" aria-expanded={isAttachmentMenuOpen} aria-haspopup="true" onClick={() => setIsAttachmentMenuOpen((open) => !open)} className="inline-flex w-fit items-center rounded-full border border-stone-300 px-5 py-3 text-sm font-medium transition hover:border-orange-600 hover:text-orange-600 dark:border-white/15 dark:hover:border-orange-400 dark:hover:text-orange-400">{en ? 'Add a file or folder' : 'Ajouter un fichier ou un dossier'}<span className="ml-3" aria-hidden="true">⌄</span></button>
              <div className={`${isAttachmentMenuOpen ? 'absolute left-0 top-full z-10 mt-2 grid min-w-48 gap-1 rounded-xl border border-stone-200 bg-white p-2 shadow-lg dark:border-white/15 dark:bg-stone-900' : 'hidden'}`}>
                <label className="cursor-pointer rounded-lg px-3 py-2 text-sm transition hover:bg-stone-100 dark:hover:bg-white/10" htmlFor="project-file">{en ? 'Choose a file' : 'Choisir un fichier'}<input id="project-file" name="attachment" type="file" accept=".pdf,.txt,.md,.doc,.docx,.zip,.rar,.7z,application/pdf,text/plain,application/zip,application/x-zip-compressed" onChange={(event) => { const file = event.currentTarget.files[0]; if (file) { event.currentTarget.form.elements['project-folder'].value = ''; setSelectedProject({ label: file.name, items: [file.name] }) } event.currentTarget.form.elements.message.setCustomValidity(''); setIsAttachmentMenuOpen(false) }} className="sr-only" /></label>
                <label className="cursor-pointer rounded-lg px-3 py-2 text-sm transition hover:bg-stone-100 dark:hover:bg-white/10" htmlFor="project-folder">{en ? 'Choose a folder' : 'Choisir un dossier'}<input id="project-folder" name="attachment" type="file" webkitdirectory="" directory="" multiple onChange={(event) => { const files = [...event.currentTarget.files]; if (files.length) { event.currentTarget.form.elements['project-file'].value = ''; const folder = files[0].webkitRelativePath.split('/')[0]; setSelectedProject({ label: folder, items: files.map((file) => file.webkitRelativePath || file.name) }) } event.currentTarget.form.elements.message.setCustomValidity(''); setIsAttachmentMenuOpen(false) }} className="sr-only" /></label>
              </div>
            </div>
            {selectedProject && <div className="w-full rounded-xl border border-stone-200 p-3 dark:border-white/15" aria-live="polite">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-stone-800 dark:text-stone-200">{selectedProject.label} <span className="font-normal text-stone-500">({selectedProject.items.length} {en ? (selectedProject.items.length === 1 ? 'item' : 'items') : (selectedProject.items.length === 1 ? 'élément' : 'éléments')})</span></p>
                <button type="button" onClick={(event) => { event.currentTarget.form.elements.attachment[0].value = ''; event.currentTarget.form.elements.attachment[1].value = ''; setSelectedProject(null) }} aria-label={en ? 'Remove selected files' : 'Supprimer les éléments sélectionnés'} title={en ? 'Remove selection' : 'Annuler la sélection'} className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-lg text-stone-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-400">×</button>
              </div>
              {selectedProject.items.length > 1 && <ul className="mt-2 max-h-32 space-y-1 overflow-y-auto border-t border-stone-200 pt-2 text-xs text-stone-600 dark:border-white/10 dark:text-stone-400">{selectedProject.items.map((item) => <li key={item} className="truncate" title={item}>{item}</li>)}</ul>}
            </div>}
            <p className="text-xs leading-5 text-stone-500 dark:text-stone-400">{en ? 'Choose a PDF, text, or Word file, or select a project folder. Attach the selected files in Gmail before sending (10 MB total maximum).' : 'Choisissez un fichier PDF, texte ou Word, ou sélectionnez un dossier de projet. Joignez les fichiers sélectionnés dans Gmail avant l’envoi (10 Mo au total maximum).'}</p>
          </div>
          <div>
            <button type="submit" className="inline-flex items-center rounded-full bg-orange-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-orange-700">{en ? 'Send' : 'Envoyer'} <span className="ml-4" aria-hidden="true">↗</span></button>
            {emailPrepared && <p className="mt-3 rounded-xl border border-green-600/30 bg-green-600/10 px-4 py-3 text-sm text-green-800 dark:text-green-300" role="status">{en ? 'Your Gmail draft is ready. Attach the selected files before sending.' : 'Votre brouillon Gmail est prêt. Joignez les fichiers sélectionnés avant de l’envoyer.'}</p>}
            {sendError && <p className="mt-3 rounded-xl border border-red-600/30 bg-red-600/10 px-4 py-3 text-sm text-red-800 dark:text-red-300" role="alert">{sendError}</p>}
          </div>
        </form>
      </section>
    </div>
  )
}
