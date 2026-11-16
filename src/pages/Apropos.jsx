import workPhoto from '../assets/resia-work.jpeg'
import SectionTitle from '../components/SectionTitle'

export default function Apropos({ language }) {
  const en = language === 'en'
  return (
    <div>
      <SectionTitle title={en ? <>Curious by nature.<br /><em className="font-accent text-orange-600 dark:text-orange-400">Thoughtful by choice.</em></> : <>Curieuse par nature.<br /><em className="font-accent text-orange-600 dark:text-orange-400">Rigoureuse par choix.</em></>}>{en ? 'I build useful, robust digital products designed around the people who use them.' : 'Je développe des solutions digitales utiles, robustes et pensées pour les personnes qui les utilisent.'}</SectionTitle>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <img src={workPhoto} alt={en ? 'Resia Djonga working at her desk' : 'Resia Djonga au travail dans son bureau'} className="aspect-[4/3] w-full rounded-3xl object-cover transition-transform duration-500 ease-out hover:scale-[1.025] active:scale-[.99] motion-reduce:transform-none" />
        <div className="space-y-6 text-base leading-8 text-stone-600 dark:text-stone-300">
          <p>{en ? 'As developer, I like understanding the full picture and bringing intuitive interfaces to life.' : 'Développeuse, j’aime comprendre un besoin dans son ensemble et donner vie à des interfaces intuitives.'}</p>
          <p>{en ? 'I am a student at PrimeTek, where I am developing my skills in IT and web development. Curious and motivated, I enjoy learning new technologies and applying them to real-world projects.' : 'Je suis étudiante chez PrimeTek, où je développe mes compétences en informatique et en développement web. Curieuse et motivée, j’aime apprendre de nouvelles technologies et les mettre en pratique dans des projets concrets.'}</p>
          <p>{en ? 'I combine technical rigor, creativity and attention to detail to build reliable, scalable web experiences.' : 'Je combine exigence technique, créativité et sens du détail pour construire des expériences web fiables et évolutives.'}</p>
          <p>{en ? 'Based in Kinshasa, I welcome remote collaborations and projects with a meaningful impact.' : 'Basée à Kinshasa, je suis ouverte aux collaborations à distance et aux projets qui ont un impact concret.'}</p>
          <div className="grid grid-cols-3 gap-4 border-t border-stone-200 pt-6 dark:border-white/10">
            {([['100%', en ? 'Commitment' : 'Engagement'], ['360°', en ? 'Product vision' : 'Vision produit'], ['∞', en ? 'Curiosity' : 'Curiosité']]).map(([value, label]) => <div key={label} className="rounded-xl transition-transform duration-300 hover:-translate-y-1 active:scale-95 motion-reduce:transform-none"><strong className="font-display text-3xl text-stone-900 dark:text-stone-100">{value}</strong><span className="mt-1 block text-xs text-stone-500">{label}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
