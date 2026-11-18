import SectionTitle from '../components/SectionTitle'

export default function Confidentialite({ language }) {
  const en = language === 'en'

  return (
    <article>
      <SectionTitle title={en ? <>Privacy<br /><em className="font-accent text-orange-600 dark:text-orange-400">notice.</em></> : <>Confidentialité<br /><em className="font-accent text-orange-600 dark:text-orange-400">des données.</em></>}>
        {en ? 'How this portfolio handles information you choose to share.' : 'Comment ce portfolio traite les informations que vous choisissez de partager.'}
      </SectionTitle>
      <div className="max-w-3xl space-y-8 border-t border-stone-200 pt-8 text-stone-700 dark:border-white/10 dark:text-stone-300">
        <section>
          <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100">{en ? 'Contact form' : 'Formulaire de contact'}</h2>
          <p className="mt-3 leading-7">{en ? 'When you fill in the contact form, the information you enter is used to prepare an email draft addressed to resiadjonga20@gmail.com. This portfolio does not send the message or store your form entries or selected files on its own server. If you choose a file, it is not uploaded automatically: attach it in Gmail before sending. Google’s privacy terms apply to the email. You decide whether to send it.' : 'Lorsque vous remplissez le formulaire de contact, les informations saisies servent à préparer un brouillon d’e-mail destiné à resiadjonga20@gmail.com. Ce portfolio n’envoie pas le message et ne stocke ni les réponses ni les fichiers sélectionnés sur son propre serveur. Si vous choisissez un fichier, il n’est pas téléversé automatiquement : joignez-le dans Gmail avant l’envoi. Les règles de confidentialité de Google s’appliquent à l’e-mail. Vous choisissez de l’envoyer ou non.'}</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100">{en ? 'Local preferences' : 'Préférences locales'}</h2>
          <p className="mt-3 leading-7">{en ? 'The site saves your language and theme preferences in your browser’s local storage. These preferences are used only to keep your selected language and display theme.' : 'Le site enregistre vos préférences de langue et de thème dans le stockage local de votre navigateur. Elles servent uniquement à conserver la langue et le thème d’affichage choisis.'}</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100">{en ? 'Your choices and contact' : 'Vos choix et contact'}</h2>
          <p className="mt-3 leading-7">{en ? 'You can choose not to use the contact form and can clear local storage in your browser settings. For questions about this notice or information you have sent by email, write to' : 'Vous pouvez choisir de ne pas utiliser le formulaire et effacer le stockage local dans les paramètres de votre navigateur. Pour toute question sur cette notice ou sur les informations envoyées par e-mail, écrivez à'}{' '}<a className="text-orange-700 underline decoration-orange-600/40 underline-offset-4 hover:text-orange-600 dark:text-orange-400" href="mailto:resiadjonga20@gmail.com">resiadjonga20@gmail.com</a>.</p>
        </section>
      </div>
    </article>
  )
}
