import { useEffect } from 'react'
import { socialLinks } from '../data/socialLinks'

const pageMetadata = {
  fr: {
    '/': ['Resia Djonga — Développeuse web à Kinshasa', 'Portfolio de Resia Djonga, développeuse web à Kinshasa, RDC. Découvrez ses projets, compétences en React, Vue.js et Next.js, et contactez-la.'],
    '/apropos': ['À propos — Resia Djonga, développeuse web', 'Découvrez le parcours de Resia Djonga, étudiante en informatique et développeuse web basée à Kinshasa, en République démocratique du Congo.'],
    '/competences': ['Compétences web — React, Vue.js, Next.js | Resia Djonga', 'Compétences de Resia Djonga en développement front-end : React, Next.js, Vue.js, Nuxt.js, JavaScript, Tailwind CSS et Bootstrap.'],
    '/cv': ['CV — Resia Djonga, développeuse web à Kinshasa', 'Consultez et téléchargez le CV de Resia Djonga : formation en informatique de gestion, expériences professionnelles et compétences.'],
    '/contact': ['Contact — Resia Djonga, développeuse web à Kinshasa', 'Contactez Resia Djonga pour une collaboration web à distance, un projet front-end ou une opportunité professionnelle. Basée à Kinshasa, RDC.'],
    '/faq': ['FAQ — Collaborer avec Resia Djonga', 'Réponses aux questions sur les collaborations à distance, les projets web et la prise de contact avec Resia Djonga.'],
    '/confidentialite': ['Confidentialité — Portfolio de Resia Djonga', 'Informations sur les données saisies dans le formulaire de contact et les préférences enregistrées par le portfolio de Resia Djonga.'],
    '/conditions-utilisation': ['Conditions d’utilisation — Portfolio de Resia Djonga', 'Conditions de consultation et de réutilisation des textes, photographies, projets et autres contenus du portfolio de Resia Djonga.'],
  },
  en: {
    '/': ['Resia Djonga — Web Developer in Kinshasa', 'Portfolio of Resia Djonga, a web developer in Kinshasa, DRC. Explore projects and front-end skills in React, Vue.js and Next.js, or get in touch.'],
    '/apropos': ['About — Resia Djonga, Web Developer', 'Meet Resia Djonga, an IT student and web developer based in Kinshasa, Democratic Republic of the Congo.'],
    '/competences': ['Web Development Skills — React, Vue.js, Next.js | Resia Djonga', 'Explore Resia Djonga’s front-end skills in React, Next.js, Vue.js, Nuxt.js, JavaScript, Tailwind CSS and Bootstrap.'],
    '/cv': ['Résumé — Resia Djonga, Web Developer in Kinshasa', 'View and download Resia Djonga’s résumé, featuring her education, professional experience and skills.'],
    '/contact': ['Contact — Resia Djonga, Web Developer in Kinshasa', 'Contact Resia Djonga about remote web collaboration, a front-end project or a professional opportunity. Based in Kinshasa, DRC.'],
    '/faq': ['FAQ — Working with Resia Djonga', 'Answers about remote collaboration, web projects and how to contact Resia Djonga.'],
    '/confidentialite': ['Privacy Notice — Resia Djonga Portfolio', 'How contact form information and locally saved preferences are handled on Resia Djonga’s portfolio.'],
    '/conditions-utilisation': ['Terms of Use — Resia Djonga Portfolio', 'Terms for browsing and reusing text, photographs, projects and other content from Resia Djonga’s portfolio.'],
  },
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }
  element.content = content
}

export function useSeo(pathname, language) {
  useEffect(() => {
    const [title, description] = (pageMetadata[language] || pageMetadata.fr)[pathname] || pageMetadata.fr['/']
    const canonicalUrl = new URL(pathname === '/' ? '/' : pathname, window.location.origin).href
    const portraitUrl = new URL('/resia-portrait.jpeg', window.location.origin).href
    document.title = title
    document.documentElement.lang = language
    setMeta('name', 'description', description)
    setMeta('name', 'robots', 'index, follow')
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Resia Djonga — Portfolio')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:locale', language === 'en' ? 'en_US' : 'fr_FR')
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', portraitUrl)
    setMeta('property', 'og:image:alt', language === 'en' ? 'Portrait of Resia Djonga, web developer in Kinshasa' : 'Portrait de Resia Djonga, développeuse web à Kinshasa')
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', portraitUrl)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl

    let personData = document.head.querySelector('#person-structured-data')
    if (!personData) {
      personData = document.createElement('script')
      personData.id = 'person-structured-data'
      personData.type = 'application/ld+json'
      document.head.append(personData)
    }
    personData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Resia Djonga',
      jobTitle: language === 'en' ? 'Web Developer' : 'Développeuse web',
      url: canonicalUrl,
      image: portraitUrl,
      sameAs: socialLinks.filter(({ label }) => label !== 'WhatsApp').map(({ url }) => url),
      address: { '@type': 'PostalAddress', addressLocality: 'Kinshasa', addressCountry: 'CD' },
      knowsAbout: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'JavaScript', 'Tailwind CSS', 'Web development'],
    })
  }, [pathname, language])
}
