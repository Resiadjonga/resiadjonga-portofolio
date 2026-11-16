import SectionTitle from '../components/SectionTitle'
import { skillCategories } from '../data/portfolio'
import { useState } from 'react'

const pipPatterns = [
  ['col-start-2 row-start-2'],
  ['col-start-1 row-start-1', 'col-start-3 row-start-3'],
  ['col-start-1 row-start-1', 'col-start-2 row-start-2', 'col-start-3 row-start-3'],
  ['col-start-1 row-start-1', 'col-start-3 row-start-1', 'col-start-1 row-start-3', 'col-start-3 row-start-3'],
  ['col-start-1 row-start-1', 'col-start-3 row-start-1', 'col-start-2 row-start-2', 'col-start-1 row-start-3', 'col-start-3 row-start-3'],
  ['col-start-1 row-start-1', 'col-start-3 row-start-1', 'col-start-1 row-start-2', 'col-start-3 row-start-2', 'col-start-1 row-start-3', 'col-start-3 row-start-3'],
]
const diceSides = ['front', 'back', 'right', 'left', 'top', 'bottom']
const diceFaceTransforms = {
  front: '[transform:translateZ(24px)]',
  back: '[transform:rotateY(180deg)_translateZ(24px)]',
  right: '[transform:rotateY(90deg)_translateZ(24px)]',
  left: '[transform:rotateY(-90deg)_translateZ(24px)]',
  top: '[transform:rotateX(90deg)_translateZ(24px)]',
  bottom: '[transform:rotateX(-90deg)_translateZ(24px)]',
}

export default function Competences({ language }) {
  const en = language === 'en'
  const skills = en ? skillCategories.en : skillCategories.fr
  const [activeSkill, setActiveSkill] = useState(null)
  return (
    <div>
      <SectionTitle title={en ? <>From concept<br /><em className="font-accent text-orange-600 dark:text-orange-400">to interface.</em></> : <>Du concept<br /><em className="font-accent text-orange-600 dark:text-orange-400">à l’interface.</em></>}>{en ? 'I use modern technologies to build fast, accessible and maintainable experiences.' : 'J’utilise des technologies modernes pour créer des expériences rapides, accessibles et maintenables.'}</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(([number, title, tools, description]) => {
          const active = activeSkill === number
          const value = Number(number)
          const diceFaces = [value, ...Array.from({ length: 6 }, (_, index) => index + 1).filter((pipCount) => pipCount !== value)].map((pipCount, index) => ({ side: diceSides[index], dots: pipPatterns[pipCount - 1] }))
          return <button key={number} type="button" aria-pressed={active} onClick={() => setActiveSkill(active ? null : number)} className={`relative flex aspect-square flex-col overflow-hidden rounded-3xl border bg-[repeating-conic-gradient(rgb(36_87_255_/_5%)_0%_25%,transparent_0%_50%)] bg-size-[4.5rem_4.5rem] p-6 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 ${active ? 'border-orange-600 bg-orange-600 text-white shadow-xl shadow-orange-600/20' : 'border-stone-200 bg-white hover:border-orange-600/50 dark:border-white/10 dark:bg-stone-900'}`}>
            <span className={`font-mono text-xs ${active ? 'text-white/70' : 'text-orange-600 dark:text-orange-400'}`}>{number}</span>
            <h2 className="mt-5 font-display text-2xl font-semibold">{title}</h2>
            <p className={`mt-3 text-sm leading-6 ${active ? 'text-white/80' : 'text-stone-500 dark:text-stone-400'}`}>{description}</p>
            <p className={`mt-auto pt-4 text-sm leading-6 ${active ? 'text-white' : 'text-stone-700 dark:text-stone-300'}`}>{tools}</p>
            {active && <span aria-hidden="true" className="pointer-events-none absolute bottom-6 right-6 z-10 block size-12 [perspective:180px]">
              <span className="relative block size-full [transform-style:preserve-3d] animate-[spin_900ms_ease-in-out_1] motion-reduce:animate-none">
                {diceFaces.map(({ side, dots }) => <span key={side} className={`absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 rounded-lg border border-stone-300 bg-white p-1.5 shadow-inner ${diceFaceTransforms[side]}`}>{dots.map((position, index) => <span key={`${side}-${index}`} className={`size-1.5 self-center justify-self-center rounded-full bg-stone-800 ${position}`} />)}</span>)}
              </span>
            </span>}
          </button>
        })}
      </div>
    </div>
  )
}
