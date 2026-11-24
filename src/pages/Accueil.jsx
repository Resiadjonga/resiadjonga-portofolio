import portrait from '../assets/resia-portrait.jpeg'
import { technologies } from '../data/portfolio'
import ProjectsSection from '../components/ProjectsSection'

export default function Accueil({ navigate, language }) {
  const en = language === 'en'
  const orbitTools = [...new Set([...technologies, 'HTML5', 'CSS3', 'JavaScript ES6+', 'Vite'])]
  const highlights = en
    ? [['01', 'Useful interfaces', 'A thoughtful experience'], ['02', 'From concept to code', 'An end-to-end approach'], ['03', 'Curiosity without limits', 'Always learning']]
    : [['01', 'Des interfaces utiles', 'Une expérience soignée'], ['02', 'Du concept au code', 'Une approche complète'], ['03', 'Une curiosité sans fin', 'Toujours en apprentissage']]
  return (
    <div className="space-y-20">
      <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <div>
          <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-stone-300 px-4 py-2 text-xs text-stone-600 dark:border-white/15 dark:text-stone-300"><span className="size-2 rounded-full bg-emerald-500" />{en ? 'Available for new opportunities' : 'Disponible pour de nouvelles opportunités'}</p>
          <p className="mb-3 font-mono text-sm text-orange-600 dark:text-orange-400">{en ? 'Welcome to my digital world.' : 'Bonjour, bienvenu(e) dans mon univers digital.'}</p>
          <p className="mb-3 font-mono text-sm text-orange-600 dark:text-orange-400">{en ? 'I’m' : 'Je suis'}</p>
          <h1 className="font-display text-6xl font-semibold leading-[.98] tracking-tight sm:text-8xl">Resia<br /><em className="font-accent font-normal text-orange-600 dark:text-orange-400">Djonga.</em></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600 dark:text-stone-300">{en ? 'I’m a passionate developer who brings ideas to life by creating modern, intuitive, and high-performing web experiences. I combine creativity, logic, and innovation to build meaningful digital solutions.' : 'Développeuse passionnée, je donne vie aux idées en créant des expériences web modernes, intuitives et performantes. J’allie créativité, logique et innovation pour concevoir des solutions digitales qui ont du sens.'}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700">{en ? 'Discover my work' : 'Découvrir mes réalisations'} <span className="ml-2">↗</span></button>
            <button onClick={() => navigate('/apropos')} className="text-sm font-medium text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-orange-600 dark:text-stone-200">{en ? 'Learn more' : 'En savoir plus'}</button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-orange-600/30" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.7rem] bg-stone-200 dark:bg-stone-800">
            <img className="h-full w-full scale-[1.08] object-cover object-center origin-center" src={portrait} alt={en ? 'Resia Djonga, React.js developer' : 'Resia Djonga, développeuse React.js'} />
          </div>
          <div className="relative ml-4 mt-4 w-fit rounded-2xl border border-stone-200 bg-white/95 p-4 shadow-xl dark:border-white/10 dark:bg-stone-900/95"><p className="font-mono text-[10px] text-orange-600 dark:text-orange-400">DEVELOPER</p><p className="mt-1 text-sm font-medium">{en ? 'Behind every line of code, an idea comes to life.' : 'Derrière chaque ligne de code, une idée prend vie.'}</p></div>
        </div>
      </section>
      <section className="border-y border-stone-200 py-12 dark:border-white/10">
        <p className="mb-8 text-center font-mono text-[10px] uppercase tracking-[.2em] text-stone-500">{en ? 'Technologies & tools' : 'Technologies & outils'}</p>
        <div className="relative mx-auto aspect-square w-full max-w-[420px]" role="list" aria-label={en ? 'Technologies and tools' : 'Technologies et outils'}>
          <div className="absolute inset-[16%] rounded-full border border-orange-600/20" />
          <div className="absolute inset-[29%] grid place-items-center rounded-full bg-orange-600/5 text-center">
            <span className="font-display text-lg font-semibold">Tech<br />Stack</span>
          </div>
          <div className="absolute inset-0 animate-spin [animation-duration:42s] motion-reduce:animate-none">
            {orbitTools.map((technology, index) => {
              const angle = (360 / orbitTools.length) * index
              return <span role="listitem" key={technology} className="absolute left-1/2 top-1/2 [transform:rotate(var(--angle))_translateX(min(42vw,175px))]" style={{ '--angle': `${angle}deg` }}><span className="block max-w-[100px] -rotate-[var(--angle)] whitespace-nowrap rounded-full border border-orange-600/20 bg-white/90 px-2.5 py-1.5 text-center text-xs font-semibold leading-tight text-stone-700 shadow-sm dark:bg-stone-900/95 dark:text-stone-200">{technology}</span></span>
            })}
          </div>
        </div>
      </section>
      <ProjectsSection language={language} />
      <section className="grid gap-8 rounded-3xl bg-[#e8ecf5] p-7 sm:grid-cols-3 sm:p-10 dark:bg-[#111827]">
        {highlights.map(([number, title, description]) => <article key={number}><span className="font-mono text-xs text-orange-600 dark:text-orange-400">{number}</span><h2 className="mt-4 font-display text-xl">{title}</h2><p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{description}</p></article>)}
      </section>
    </div>
  )
}
