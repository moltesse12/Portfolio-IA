# BACKLOG — Portfolio Folly Nelson Emmanuel

## Informations Projet

| Element | Detail |
|---------|--------|
| **Nom** | Folly Nelson Emmanuel |
| **Statut** | Etudiant |
| **Domaine** | Data / IA |
| **Stack** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, next-intl |
| **Deploy** | Vercel |
| **Repo** | https://github.com/moltesse12/Portfolio-IA |
| **Bilingue** | FR (defaut) / EN |

---

## EPIC 1 : Internationalisation (i18n)

> En tant qu'utilisateur, je veux pouvoir naviguer en francais et en anglais.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-1.1 | Configurer le routing i18n avec locales `fr` et `en`, default `fr` | Haute | ✅ |
| US-1.2 | Creer le middleware de detection de locale | Haute | ✅ |
| US-1.3 | Creer les fichiers `messages/fr.json` et `messages/en.json` | Haute | ✅ |
| US-1.4 | Integrer le plugin next-intl dans `next.config.ts` | Haute | ✅ |
| US-1.5 | Restructurer `app/` en `app/[locale]/` | Haute | ✅ |
| US-1.6 | Creer le composant LanguageSwitcher | Moyenne | ✅ |
| US-1.7 | Ajouter `generateStaticParams` pour pre-rendering | Haute | ✅ |

---

## EPIC 2 : Structure & Architecture

> En tant que developpeur, je veux une structure de projet propre et scalable.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-2.1 | Creer les dossiers : components/ui, components/layout, components/sections, lib/constants, lib/types, lib/utils, hooks | Haute | ✅ |
| US-2.2 | Configurer le layout racine avec providers (theme, session) | Haute | ✅ |
| US-2.3 | Configurer les polices (Inter) | Haute | ✅ |
| US-2.4 | Creer le composant Sidebar avec navigation | Haute | ✅ |
| US-2.5 | Creer le composant MobileHeader responsive | Haute | ✅ |
| US-2.6 | Creer le composant Footer | Moyenne | ✅ |

---

## EPIC 3 : Page Home

> En tant que visiteur, je veux voir une page d'accueil attractive qui presente Folly.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-3.1 | Creer la page Home avec titre et presentation | Haute | ✅ |
| US-3.2 | Ajouter une animation d'entree (framer-motion) | Moyenne | ✅ |
| US-3.3 | Ajouter un lien vers les sections (About, Projects, etc.) | Haute | ✅ |

---

## EPIC 4 : Page About

> En tant que visiteur, je veux en savoir plus sur Folly et son parcours.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-4.1 | Creer la page About avec bio et presentation | Haute | ✅ |
| US-4.2 | Ajouter la section formations/education | Haute | ✅ |
| US-4.3 | Ajouter la section experiences (stages) | Haute | ✅ |

---

## EPIC 5 : Page Projects

> En tant que visiteur, je veux decouvrir les projets Data/ML de Folly.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-5.1 | Creer la page Projects avec grille de projets | Haute | ✅ |
| US-5.2 | Creer le composant ProjectCard | Haute | ✅ |
| US-5.3 | Ajouter 6+ projets Data/ML avec descriptions | Haute | ✅ |
| US-5.4 | Ajouter les tags technologies par projet | Moyenne | ✅ |

---

## EPIC 6 : Page Achievements

> En tant que visiteur, je veux voir les certifications et realisations de Folly.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-6.1 | Creer la page Achievements | Haute | ✅ |
| US-6.2 | Ajouter les certifications/badges | Moyenne | ✅ |

---

## EPIC 7 : Page Dashboard

> En tant que visiteur, je veux voir les stats de developpement de Folly.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-7.1 | Creer la page Dashboard | Haute | ✅ |
| US-7.2 | Integrer les stats GitHub (contributions) | Haute | ✅ |
| US-7.3 | Integrer les stats Wakatime | Moyenne | ✅ |
| US-7.4 | Integrer les stats Codewars | Basse | ✅ |
| US-7.5 | Integrer les stats Monkeytype | Basse | ✅ |

---

## EPIC 8 : Page Contact

> En tant que visiteur, je veux pouvoir contacter Folly via un formulaire.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-8.1 | Creer la page Contact avec formulaire | Haute | ✅ |
| US-8.2 | Creer l'API email avec Nodemailer (serveur securise) | Haute | ✅ |
| US-8.3 | Ajouter la validation cote client | Haute | ✅ |
| US-8.4 | Ajouter le message de succes/erreur | Moyenne | ✅ |

---

## EPIC 9 : Securite

> En tant que developpeur, je veux securiser l'application contre les vulnerabilites.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-9.1 | Corriger l'injection XSS dans les templates email | Critique | ✅ |
| US-9.2 | Rendre l'email destinataire configurable via .env | Haute | ✅ |
| US-9.3 | Masquer les messages d'erreur en production | Haute | ✅ |
| US-9.4 | Creer `.env.example` avec toutes les variables | Haute | ✅ |
| US-9.5 | Ajouter une validation basique sur les API routes | Moyenne | ✅ |

---

## EPIC 10 : SEO & Accessibilite

> En tant que visiteur, je veux que le site soit trouvable et accessible a tous.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-10.1 | Configurer les metadata (title, description, OG) | Haute | ✅ |
| US-10.2 | Creer `robots.txt` | Haute | ✅ |
| US-10.3 | Creer `sitemap.xml` via Next.js Metadata API | Haute | ✅ |
| US-10.4 | Ajouter JSON-LD (Person schema) | Moyenne | ✅ |
| US-10.5 | Ajouter hreflang tags | Moyenne | ✅ |
| US-10.6 | Ajouter aria-labels sur les boutons icones | Moyenne | ✅ |
| US-10.7 | Ajouter `<main>` wrapper semantique | Moyenne | ✅ |
| US-10.8 | Ajouter skip-to-content link | Basse | ✅ |

---

## EPIC 11 : Performance

> En tant que developpeur, je veux un site rapide et optimise.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-11.1 | Limiter les animations (framer-motion uniquement) | Moyenne | ✅ |
| US-11.2 | Configurer next/image avec domaines autorises | Moyenne | ✅ |
| US-11.3 | Ajouter loading.tsx pour les routes | Basse | ✅ |
| US-11.4 | Supprimer les deps inutiles du template | Basse | ✅ |

---

## EPIC 12 : Finishing & Deploy

> En tant que developpeur, je veux que le code soit propre et deploye sur Vercel.

| US | Description | Priorite | Status |
|----|-------------|----------|--------|
| US-12.1 | Lint sans erreur (`npm run lint`) | Haute | ✅ |
| US-12.2 | Typecheck sans erreur (`npx tsc --noEmit`) | Haute | ✅ |
| US-12.3 | Build sans erreur (`npm run build`) | Haute | ✅ |
| US-12.4 | Commit et push final | Haute | ✅ |
| US-12.5 | Documenter les etapes de deploy Vercel | Moyenne | ✅ |

---

## Resume

| Epic | Total US | Complete |
|------|----------|----------|
| EPIC 1 : i18n | 7 | 7/7 |
| EPIC 2 : Structure | 6 | 6/6 |
| EPIC 3 : Home | 3 | 3/3 |
| EPIC 4 : About | 3 | 3/3 |
| EPIC 5 : Projects | 4 | 4/4 |
| EPIC 6 : Achievements | 2 | 2/2 |
| EPIC 7 : Dashboard | 5 | 5/5 |
| EPIC 8 : Contact | 4 | 4/4 |
| EPIC 9 : Securite | 5 | 5/5 |
| EPIC 10 : SEO & A11y | 8 | 8/8 |
| EPIC 11 : Performance | 4 | 4/4 |
| EPIC 12 : Finishing | 5 | 5/5 |
| **TOTAL** | **56** | **56/56** |
