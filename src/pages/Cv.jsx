import SectionTitle from '../components/SectionTitle'

export default function Cv({ language }) {
  const en = language === 'en'

  return (
    <article>
      <SectionTitle title={en ? <>My<br /><em className="font-accent text-orange-600 dark:text-orange-400">résumé.</em></> : <>Mon<br /><em className="font-accent text-orange-600 dark:text-orange-400">CV.</em></>}>
        {en ? 'View my résumé or download the original CV.' : 'Consultez mon parcours ou téléchargez mon CV original.'}
      </SectionTitle>
      <div className="mb-8 flex flex-wrap items-center gap-4 border-t border-stone-200 pt-8 dark:border-white/10">
        <a
          href="/cv-resia-djonga.jpeg"
          download="CV-Resia-Djonga.jpeg"
          className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          {en ? 'Download CV (JPEG)' : 'Télécharger le CV (JPEG)'} <span aria-hidden="true">↓</span>
        </a>
        <span className="text-sm text-stone-500 dark:text-stone-400">{en ? 'Original image · 325 KB' : 'Image originale · 325 Ko'}</span>
      </div>
      <figure className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-white/10">
        <img
          src="/cv-resia-djonga.jpeg"
          alt={en ? 'Resia Djonga’s résumé in French, including education, experience, skills and references' : 'CV de Resia Djonga présentant sa formation, son expérience, ses compétences et ses références'}
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="border-t border-stone-200 px-5 py-3 text-center text-xs text-stone-500 dark:border-white/10 dark:text-stone-400">
          {en ? 'The résumé is provided in French.' : 'CV fourni en français.'}
        </figcaption>
      </figure>
    </article>
  )
}
