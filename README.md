# Portfolio de Resia Djonga

Portfolio React bilingue (français / anglais), développé avec Vite et Tailwind CSS.

## Lancer en local

```sh
npm install
npm run dev
```

Vite affiche l’adresse locale dans le terminal. Les pages disponibles sont `/`, `/apropos`, `/competences`, `/cv`, `/contact`, `/faq`, `/confidentialite` et `/conditions-utilisation`.

## Défi personnel : thèmes clair et sombre

Le thème clair et le thème sombre sont gérés dans le code avec Tailwind (`dark:`). Le choix est conservé dans le navigateur. Les couleurs et contrastes ont été définis pour rester lisibles dans les deux modes.

Les transitions restent limitées aux interactions de l’interface. La règle `prefers-reduced-motion` désactive les mouvements lorsque le système de la personne demande une réduction des animations.

## Compétences front-end

La section Front-end présente les technologies nommées dans le retour de formation : React, Next.js, Vue.js, Nuxt.js, Tailwind CSS et Bootstrap, ainsi que JavaScript, HTML et CSS. La liste pourra être complétée avec les autres frameworks abordés en session dès que leurs noms seront confirmés.

## Fidélité à la maquette et écarts connus

| Élément | Écart | Raison |
| --- | --- | --- |
| Navigation | Les sections sont accessibles par quatre routes dédiées au lieu d’une seule longue page. | Les pages Accueil, À propos, Compétences et Contact ont été demandées pour le passage au code. |
| Accueil | La navigation conserve quatre pages dédiées ; la maquette présente une page unique avec des sections. | La structure existante du site a été conservée. |
| Projets | Une section avec quatre projets est intégrée à l’accueil, sans liens vers des démos ou dépôts de code. | Les descriptions sont résumées à partir des titres fournis par Resia ; les technologies et l’état d’avancement restent à préciser. |
| À propos | Le texte PrimeTek a été ajouté et le contenu a été adapté en français et anglais. | Le parcours de formation a été ajouté à la demande de Resia ; les deux langues nécessitent un contenu dédié. |
| Compétences | Les compétences sont présentées en lignes de texte plutôt qu’en cartes extensibles comme dans la maquette. | La version actuelle privilégie une présentation compacte ; JavaScript est conservé dans Front-end, TypeScript n’étant pas utilisé par Resia. |
| Contact | La page affiche l’adresse, la localisation et trois liens sociaux avec icônes ; la maquette présente un bouton e-mail et des liens sociaux en pied de page. | Les coordonnées et icônes ont été ajoutées à la demande de Resia. |
| Animations | Les effets décoratifs de la maquette ne sont pas tous repris ; les transitions sont discrètes. | Préserver la fluidité, notamment sur téléphone, et respecter la préférence de réduction des mouvements. |

La maquette de référence utilise Manrope, DM Mono, Playfair Display, un accent bleu et des fonds bleu nuit / bleu clair. Les styles du site reprennent maintenant cette palette et ces polices.

## Vérification et publication

Vérifications effectuées : `npm run build`, `npm run lint` et `npm test`. L’audit Lighthouse reste à effectuer.

