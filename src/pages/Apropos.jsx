import workPhoto from '../assets/resia-work.jpeg'
import SectionTitle from '../components/SectionTitle'

export default function Apropos({ language }) {
  const en = language === 'en'
  return (
    <div>
      <SectionTitle title={en ? <>Curious by nature.<br /><em className="font-accent text-orange-600 dark:text-orange-400">Thoughtful by choice.</em></> : <>Développeuse web passionnée par la création<br /><em className="font-accent text-orange-600 dark:text-orange-400">d’expériences numériques utiles, intuitives et évolutives.</em></>}>{en ? 'I build useful, robust digital products designed around the people who use them.' : 'Je suis Resia Djonga, développeuse web en formation chez PrimeTek, animée par la curiosité, la créativité et l’envie de transformer les idées en solutions numériques concrètes.'}</SectionTitle>
      {en ? (
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <img src={workPhoto} alt="Resia Djonga working at her desk" className="aspect-[4/3] w-full rounded-3xl object-cover transition-transform duration-500 ease-out hover:scale-[1.025] active:scale-[.99] motion-reduce:transform-none" />
          <div className="space-y-6 text-base leading-8 text-stone-600 dark:text-stone-300">
            <p>As developer, I like understanding the full picture and bringing intuitive interfaces to life.</p>
            <p>I am a student at PrimeTek, where I am developing my skills in IT and web development. Curious and motivated, I enjoy learning new technologies and applying them to real-world projects.</p>
            <p>I combine technical rigor, creativity and attention to detail to build reliable, scalable web experiences.</p>
            <p>Based in Kinshasa, I welcome remote collaborations and projects with a meaningful impact.</p>
          </div>
        </div>
      ) : (
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <img src={workPhoto} alt="Resia Djonga au travail dans son bureau" className="aspect-[4/3] w-full rounded-3xl object-cover transition-transform duration-500 ease-out hover:scale-[1.025] active:scale-[.99] motion-reduce:transform-none lg:sticky lg:top-24" />
          <div className="space-y-10 text-base leading-8 text-stone-600 dark:text-stone-300">
            <p>J’aime comprendre les besoins dans leur globalité, réfléchir aux meilleures approches et concevoir des interfaces qui allient simplicité, esthétique et fonctionnalité. Pour moi, le développement web ne consiste pas uniquement à écrire du code : c’est avant tout imaginer des expériences qui facilitent la vie des utilisateurs et répondent à de véritables besoins.</p>
            <section>
              <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-stone-100">Mon parcours</h2>
              <p className="mt-3">Actuellement étudiante chez PrimeTek, je développe progressivement mes compétences en informatique et en développement web. Chaque apprentissage représente une nouvelle occasion d’explorer, d’expérimenter et de repousser mes limites.</p>
              <p className="mt-3">Je m’intéresse particulièrement aux nouvelles technologies, à la conception d’interfaces et à la création de projets qui me permettent de mettre mes connaissances en pratique.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-stone-100">Ma vision du développement</h2>
              <p className="mt-3">Je crois qu’un bon projet numérique repose sur trois éléments essentiels :</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li><strong className="text-stone-800 dark:text-stone-100">La technique :</strong> concevoir des solutions fiables, structurées et évolutives.</li>
                <li><strong className="text-stone-800 dark:text-stone-100">La créativité :</strong> imaginer des interfaces modernes, attractives et agréables à utiliser.</li>
                <li><strong className="text-stone-800 dark:text-stone-100">L’expérience utilisateur :</strong> placer les besoins des personnes au cœur de chaque réalisation.</li>
              </ul>
              <p className="mt-3">Mon ambition est de continuer à apprendre, à progresser et à développer des solutions numériques qui associent innovation et utilité.</p>
            </section>
            <section className="border-t border-stone-200 pt-8 dark:border-white/10">
              <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-stone-100">Construisons quelque chose ensemble !</h2>
              <p className="mt-3">Basée à Kinshasa, en République démocratique du Congo, je suis ouverte aux collaborations à distance, aux opportunités professionnelles et aux projets innovants qui ont un impact concret.</p>
              <p className="mt-3">Je suis toujours enthousiaste à l’idée de rencontrer de nouvelles personnes, de partager des idées et de participer à des projets qui font la différence.</p>
            </section>
            <p className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100">Resia Djonga <span className="text-orange-600 dark:text-orange-400">/</span> <span className="font-accent font-normal">Transformer les idées en expériences numériques.</span></p>
          </div>
        </div>
      )}
    </div>
  )
}
