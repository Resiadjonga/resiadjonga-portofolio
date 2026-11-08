import SectionTitle from '../components/SectionTitle'

export default function Conditions({ language }) {
  const en = language === 'en'
  const sections = en
    ? [
        ['Purpose of this website', 'This portfolio presents Resia Djonga, her skills and selected projects. Its content is provided for general information and may change over time.'],
        ['Intellectual property', 'Unless a credit or separate licence says otherwise, the text, visual identity, photographs and original work on this website belong to Resia Djonga. Please ask before reproducing or adapting them. Project names or materials that belong to third parties remain their owners’ property.'],
        ['Acceptable use', 'You may browse and share links to this website for personal and professional purposes. Do not use it in a way that breaks the law, disrupts the website, or infringes another person’s rights.'],
        ['Projects and external links', 'Project descriptions are summaries of selected work and do not promise a particular result or service. Links to other websites are provided for convenience; their content and privacy practices are managed by their respective operators.'],
        ['Availability and updates', 'The website is provided as available. Content, links and features may be corrected, changed or removed. Nothing on this website creates a client, employment or other contractual relationship.'],
        ['Contact', 'For permission to reuse content or questions about these terms, write to'],
      ]
    : [
        ['Objet du site', 'Ce portfolio présente Resia Djonga, ses compétences et une sélection de projets. Son contenu est fourni à titre informatif et peut évoluer avec le temps.'],
        ['Propriété intellectuelle', 'Sauf mention d’un crédit ou d’une licence distincte, les textes, l’identité visuelle, les photographies et les créations originales de ce site appartiennent à Resia Djonga. Merci de demander son accord avant toute reproduction ou adaptation. Les noms et contenus de projets appartenant à des tiers restent la propriété de leurs titulaires.'],
        ['Utilisation du site', 'Vous pouvez consulter ce site et en partager les liens à des fins personnelles ou professionnelles. Vous ne devez pas l’utiliser d’une manière contraire à la loi, qui perturbe son fonctionnement ou qui porte atteinte aux droits d’autrui.'],
        ['Projets et liens externes', 'Les descriptions de projets résument une sélection de travaux et ne constituent pas une promesse de résultat ou de prestation. Les liens vers d’autres sites sont proposés pour faciliter la navigation ; leur contenu et leurs pratiques de confidentialité relèvent de leurs exploitants respectifs.'],
        ['Disponibilité et mises à jour', 'Le site est proposé selon sa disponibilité. Son contenu, ses liens et ses fonctionnalités peuvent être corrigés, modifiés ou supprimés. Les informations publiées ne créent pas à elles seules une relation client, de travail ou un autre engagement contractuel.'],
        ['Contact', 'Pour demander l’autorisation de réutiliser un contenu ou poser une question sur ces conditions, écrivez à'],
      ]

  return (
    <article>
      <SectionTitle title={en ? <>Terms of<br /><em className="font-accent text-orange-600 dark:text-orange-400">use.</em></> : <>Conditions<br /><em className="font-accent text-orange-600 dark:text-orange-400">d’utilisation.</em></>}>
        {en ? 'Rules for browsing and reusing content from this portfolio.' : 'Règles de consultation et de réutilisation du contenu de ce portfolio.'}
      </SectionTitle>
      <div className="max-w-3xl space-y-8 border-t border-stone-200 pt-8 text-stone-700 dark:border-white/10 dark:text-stone-300">
        {sections.map(([title, content], index) => (
          <section key={title}>
            <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100">{title}</h2>
            <p className="mt-3 leading-7">{content}{index === sections.length - 1 && <> <a className="text-orange-700 underline decoration-orange-600/40 underline-offset-4 hover:text-orange-600 dark:text-orange-400" href="mailto:resiadjonga20@gmail.com">resiadjonga20@gmail.com</a>.</>}</p>
          </section>
        ))}
      </div>
    </article>
  )
}
