import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children, pathname, navigate, theme, toggleTheme, language, toggleLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isEnglish = language === 'en'
  const links = [
    { path: '/', label: isEnglish ? 'Home' : 'Accueil' },
    { path: '/apropos', label: isEnglish ? 'About' : 'À propos' },
    { path: '/competences', label: isEnglish ? 'Skills' : 'Compétences' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: isEnglish ? 'Contact' : 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ]
  const go = (event, path) => {
    event.preventDefault()
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-stone-900 transition-colors dark:bg-[#090d18] dark:text-stone-100">
      <header className="relative z-10 border-b border-stone-200/80 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" onClick={(e) => go(e, '/')} className="font-display text-2xl font-bold tracking-tight">RD<span className="text-orange-600">.</span></a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-stone-200 bg-[#f4f6fb] p-6 dark:border-white/10 dark:bg-[#090d18] md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 dark:md:bg-transparent`} aria-label={isEnglish ? 'Main navigation' : 'Navigation principale'}>
            {links.map((link) => <a key={link.path} href={link.path} onClick={(e) => go(e, link.path)} aria-current={pathname === link.path ? 'page' : undefined} className={`py-2 text-sm transition hover:text-orange-600 ${pathname === link.path ? 'text-orange-600 dark:text-orange-400' : 'text-stone-600 dark:text-stone-300'}`}>{link.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" onClick={toggleLanguage} className="rounded-full border border-stone-300 px-3 py-2 text-xs font-semibold tracking-wide transition hover:border-orange-500 dark:border-white/15" aria-label={isEnglish ? 'Passer en français' : 'Switch to English'}>{isEnglish ? 'EN' : 'FR'} <span className="px-1 text-stone-400">/</span> {isEnglish ? 'FR' : 'EN'}</button>
            <ThemeToggle theme={theme} onToggle={toggleTheme} language={language} />
            <button type="button" className="grid size-10 place-items-center rounded-full border border-stone-300 md:hidden dark:border-white/15" aria-label={isEnglish ? 'Open menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? '×' : '☰'}</button>
          </div>
        </div>
      </header>
      <main className="mx-auto min-h-[calc(100vh-170px)] max-w-7xl px-6 py-14 lg:px-10 lg:py-20">{children}</main>
      <footer className="border-t border-stone-200/80 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-xs text-stone-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:px-10 dark:text-stone-400">
          <span className="font-display text-base font-bold text-stone-900 dark:text-stone-100">RD<span className="text-orange-600">.</span></span>
          <span>© Resia Djonga · Kinshasa/RDC</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label={isEnglish ? 'Legal information' : 'Informations légales'}>
            <a className="transition hover:text-orange-600" href="/conditions-utilisation" onClick={(e) => go(e, '/conditions-utilisation')}>{isEnglish ? 'Terms of use' : 'Conditions d’utilisation'}</a>
            <a className="transition hover:text-orange-600" href="/confidentialite" onClick={(e) => go(e, '/confidentialite')}>{isEnglish ? 'Privacy notice' : 'Confidentialité'}</a>
          </nav>
          <a className="transition hover:text-orange-600" href="mailto:resiadjonga20@gmail.com">resiadjonga20@gmail.com</a>
        </div>
      </footer>
    </div>
  )
}
