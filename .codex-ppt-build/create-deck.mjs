import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { Presentation, PresentationFile } from '@oai/artifact-tool'

const workspaceDir = 'C:/Users/HP/Desktop/resiadjonga-portofolio'
const buildDir = path.join(workspaceDir, '.codex-ppt-build')
const outputDir = path.join(workspaceDir, 'output', 'presentations')
const skillDir = 'C:/Users/HP/.codex/plugins/cache/openai-primary-runtime/presentations/26.1112.11217/skills/presentations'
const runtimePython = 'C:/Users/HP/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe'
const runtimeNodeModules = 'C:/Users/HP/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules'
const finalPath = path.join(outputDir, 'arborescence-composants-portfolio.pptx')
const stagingDir = path.join(workspaceDir, '.codex-finalizer')
const candidatePath = path.join(stagingDir, 'candidate.pptx')

await fs.mkdir(outputDir, { recursive: true })
await fs.mkdir(stagingDir, { recursive: true })
await fs.mkdir(path.join(buildDir, 'render'), { recursive: true })

const { resolvePresentationFont, finalizePresentation } = await import(pathToFileURL(path.join(skillDir, 'container_tools/artifact_tool_utils.mjs')).href)
const font = resolvePresentationFont()
const deck = Presentation.create({ slideSize: { width: 1280, height: 720 } })

const C = {
  ink: '#152039',
  muted: '#596579',
  blue: '#2457ff',
  pale: '#f4f6fb',
  line: '#d8deeb',
  white: '#ffffff',
  softBlue: '#e9efff',
  orange: '#f2a45f',
}

function rect(slide, x, y, w, h, fill, radius = 0, lineFill = 'none') {
  return slide.shapes.add({
    geometry: radius ? 'roundRect' : 'rect',
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { style: 'solid', fill: lineFill, width: lineFill === 'none' ? 0 : 1 },
    ...(radius ? { borderRadius: radius } : {}),
  })
}

function text(slide, value, x, y, w, h, size, color = C.ink, bold = false, opts = {}) {
  const shape = slide.shapes.add({
    geometry: 'textbox',
    name: opts.name,
    position: { left: x, top: y, width: w, height: h },
    fill: 'none',
    line: { style: 'solid', fill: 'none', width: 0 },
  })
  shape.text = value
  shape.text.style = {
    fontSize: size,
    color,
    bold,
    typeface: opts.typeface ?? font,
    alignment: opts.align ?? 'left',
    verticalAlignment: opts.valign ?? 'top',
    autoFit: 'shrinkText',
    wrap: 'square',
    insets: opts.insets ?? 0,
  }
  return shape
}

function baseSlide(title, number) {
  const slide = deck.slides.add()
  slide.background.fill = C.pale
  rect(slide, 0, 0, 1280, 8, C.blue)
  text(slide, title, 72, 42, 1050, 58, 38, C.ink, true)
  text(slide, String(number).padStart(2, '0'), 1150, 48, 60, 30, 16, C.blue, true, { align: 'right' })
  rect(slide, 72, 670, 1136, 1, C.line)
  text(slide, 'PORTFOLIO RESIA DJONGA  ·  STRUCTURE DU CODE', 72, 680, 650, 20, 11, C.muted, true)
  return slide
}

// Slide 1: title and framing.
{
  const slide = deck.slides.add()
  slide.background.fill = C.pale
  rect(slide, 0, 0, 14, 720, C.blue)
  rect(slide, 82, 100, 8, 424, C.orange)
  text(slide, 'PORTFOLIO  ·  REACT + VITE', 122, 135, 580, 28, 16, C.blue, true)
  text(slide, 'Arborescence\ndes composants', 118, 205, 900, 150, 54, C.ink, true)
  text(slide, 'Organisation du code et liens entre les composants', 122, 386, 820, 48, 24, C.muted)
  text(slide, 'Pages · composants partagés · hooks · données', 122, 466, 820, 32, 18, C.muted)
  rect(slide, 122, 606, 390, 42, C.softBlue, 18)
  text(slide, 'Arborescence sans dossier assets', 142, 616, 350, 24, 14, C.blue, true, { valign: 'middle' })
  text(slide, '01', 1135, 650, 70, 24, 14, C.muted, true, { align: 'right' })
  slide.speakerNotes.text = 'Présenter le but du schéma : montrer comment les fichiers du portfolio sont rangés et comment les composants principaux s’assemblent.'
}

// Slide 2: editable file tree, with no assets branch.
{
  const slide = baseSlide('Arborescence du projet', 2)
  text(slide, 'portfolio/', 82, 112, 300, 32, 22, C.blue, true)
  rect(slide, 625, 116, 1, 500, C.line)

  const leftGroups = [
    { folder: 'src/', files: ['main.jsx', 'App.jsx'] },
    { folder: 'components/', files: ['Layout.jsx', 'ThemeToggle.jsx', 'SectionTitle.jsx', 'ProjectsSection.jsx'] },
    { folder: 'pages/', files: ['Accueil.jsx', 'Apropos.jsx', 'Competences.jsx', 'Cv.jsx', 'Contact.jsx', 'Faq.jsx', 'Confidentialite.jsx', 'Conditions.jsx'] },
  ]
  let y = 155
  for (const group of leftGroups) {
    text(slide, group.folder, 100, y, 480, 25, 18, C.blue, true)
    y += 27
    for (const file of group.files) {
      text(slide, `·  ${file}`, 128, y, 450, 22, 15, C.ink)
      y += 24
    }
    y += 4
  }

  const rightGroups = [
    { folder: 'hooks/', files: ['usePathname.js', 'useLanguage.js', 'useTheme.js', 'useSeo.js'] },
    { folder: 'data/', files: ['portfolio.js', 'socialLinks.js'] },
    { folder: 'racine de src/', files: ['index.css'] },
    { folder: 'public/', files: ['CV français et anglais', 'aperçu du CV anglais', 'icônes et images publiques'] },
  ]
  y = 120
  for (const group of rightGroups) {
    text(slide, group.folder, 676, y, 500, 25, 18, C.blue, true)
    y += 27
    for (const file of group.files) {
      text(slide, `·  ${file}`, 704, y, 470, 22, 15, C.ink)
      y += 24
    }
    y += 7
  }
  text(slide, 'Les fichiers de public/ sont servis directement par le site.', 676, 574, 500, 34, 13, C.muted)
  slide.speakerNotes.text = 'Décrire chaque dossier : pages pour les écrans, components pour les éléments réutilisés, hooks pour les comportements communs, data pour les contenus. La branche assets est volontairement retirée du schéma.'
}

// Slide 3: runtime hierarchy and reusable pieces.
{
  const slide = baseSlide('Comment les composants s’assemblent', 3)
  const node = (label, x, y, w, h, fill, color = C.ink) => {
    rect(slide, x, y, w, h, fill, 16, fill === C.white ? C.line : 'none')
    text(slide, label, x + 10, y + 10, w - 20, h - 20, 19, color, true, { align: 'center', valign: 'middle' })
  }

  node('main.jsx', 75, 135, 205, 62, C.white)
  text(slide, '→', 294, 148, 48, 40, 28, C.blue, true, { align: 'center' })
  node('App.jsx', 350, 135, 205, 62, C.white)
  text(slide, '→', 570, 148, 48, 40, 28, C.blue, true, { align: 'center' })
  node('Layout.jsx', 628, 135, 235, 62, C.softBlue, C.blue)
  text(slide, 'cadre commun', 885, 151, 280, 28, 16, C.muted)

  rect(slide, 628, 224, 235, 1, C.line)
  node('ThemeToggle.jsx', 78, 265, 245, 64, C.white)
  text(slide, 'élément partagé', 91, 337, 220, 24, 13, C.muted, false, { align: 'center' })

  node('Page selon l’URL', 360, 265, 270, 64, C.blue, C.white)
  text(slide, 'App.jsx sélectionne la page', 369, 337, 250, 24, 13, C.muted, false, { align: 'center' })

  node('SectionTitle.jsx', 670, 265, 250, 64, C.white)
  text(slide, 'réutilisé par plusieurs pages', 673, 337, 245, 24, 13, C.muted, false, { align: 'center' })

  text(slide, 'Accueil.jsx', 360, 404, 230, 32, 20, C.ink, true)
  text(slide, 'inclut ProjectsSection.jsx', 360, 438, 270, 26, 16, C.muted)
  text(slide, 'Autres pages', 670, 404, 230, 32, 20, C.ink, true)
  text(slide, 'À propos · Compétences · CV\nContact · FAQ · pages légales', 670, 438, 440, 60, 16, C.muted)

  rect(slide, 78, 530, 1120, 92, C.white, 18, C.line)
  text(slide, 'Logique partagée', 102, 549, 220, 28, 17, C.blue, true)
  text(slide, 'hooks : navigation, langue, thème, SEO', 333, 549, 390, 28, 16, C.ink)
  text(slide, 'data : projets, compétences, réseaux sociaux', 333, 581, 600, 25, 16, C.ink)
  slide.speakerNotes.text = 'Suivre le flux du démarrage vers App, puis Layout et la page demandée. Montrer que ThemeToggle et SectionTitle sont partagés, tandis que l’accueil intègre la section des projets. Les hooks et données alimentent plusieurs pages.'
}

// Slide 4: oral summary.
{
  const slide = baseSlide('À retenir pour l’exposé', 4)
  text(slide, '4', 84, 132, 80, 82, 68, C.blue, true)
  text(slide, 'groupes de fichiers', 174, 151, 420, 44, 26, C.ink, true)
  const summaries = [
    ['Pages', 'ce que voit le visiteur'],
    ['Composants', 'les éléments réutilisés'],
    ['Hooks', 'les comportements partagés'],
    ['Données', 'les contenus affichés'],
  ]
  let y = 258
  for (const [head, body] of summaries) {
    text(slide, head, 110, y, 200, 30, 19, C.blue, true)
    text(slide, body, 330, y, 650, 30, 19, C.ink)
    y += 56
  }
  rect(slide, 84, 510, 1100, 110, C.softBlue, 18)
  text(slide, 'Phrase de conclusion', 112, 530, 280, 25, 14, C.blue, true)
  text(slide, '« J’ai séparé les pages, les composants réutilisables, les comportements communs et les données pour garder un code clair et facile à faire évoluer. »', 112, 560, 1030, 42, 18, C.ink)
  slide.speakerNotes.text = 'Conclure en résumant l’organisation en quatre groupes : pages, composants, hooks et données.'
}

const pngs = []
for (const [i, slide] of deck.slides.items.entries()) {
  const pngPath = path.join(buildDir, 'render', `slide-${String(i + 1).padStart(2, '0')}.png`)
  const blob = await deck.export({ slide, format: 'png', scale: 1 })
  await fs.writeFile(pngPath, new Uint8Array(await blob.arrayBuffer()))
  pngs.push(pngPath)
}

await (await PresentationFile.exportPptx(deck)).save(candidatePath)
const result = await finalizePresentation({
  workspaceDir,
  candidatePath,
  finalPath,
  pythonExecutable: runtimePython,
  integrityValidatorPath: path.join(skillDir, 'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath: path.join(skillDir, 'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs: ['--expected-slide-size-emu', '12192000,6858000', '--validate-heading-fit'],
  explicitTotalSlideCount: 4,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  fontPolicy: { basis: 'design', families: [font] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(stagingDir, 'arborescence-composants-portfolio.validation.json'),
})
console.log(JSON.stringify({ finalPath, font, pngs, result }, null, 2))
