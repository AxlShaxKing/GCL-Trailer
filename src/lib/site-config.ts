import {
  Search,
  GraduationCap,
  Lightbulb,
  Rocket,
  Building2,
  Crown,
  type LucideIcon,
} from 'lucide-react'

/**
 * ------------------------------------------------------------------
 * FICHIER DE CONFIGURATION CENTRAL
 * Modifiez ici : logo, couleurs (voir globals.css), textes,
 * date de lancement, liens sociaux et e-mail de réception.
 * ------------------------------------------------------------------
 */

// LOGOS ------------------------------------------------------------
// Remplacez les fichiers dans /public ou changez les chemins ci-dessous.
export const LOGO_COLOR = '/logo-gcl.png'
export const LOGO_WHITE = '/logo-gcl-white.png'
export const BRAND_NAME = 'Génération Contenu Local'
export const BRAND_SHORT = 'GCL'

// DATE DE LANCEMENT ------------------------------------------------
// Mettez `null` pour désactiver le compte à rebours.
// Exemple : new Date('2026-09-01T00:00:00')
export const LAUNCH_DATE: Date | null = new Date('2026-09-01T00:00:00')

// E-MAIL DE RÉCEPTION (utilisé côté serveur uniquement) -----------
// À définir dans .env.local : NOTIFY_EMAIL=contact@exemple.cd
export const CONTACT_EMAIL = 'contact@gcl.cd'

// LIENS SOCIAUX ----------------------------------------------------
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'X', href: 'https://x.com' },
]

// LIENS DE NAVIGATION ----------------------------------------------
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Notre vision', href: '#vision' },
  { label: 'Progression', href: '#progression' },
  { label: 'Contact', href: '#notify' },
]

// ÉTAPES DE TRANSFORMATION -----------------------------------------
export type Stage = {
  id: number
  key: string
  title: string
  headline: string
  text: string
  icon: LucideIcon
}

export const TRANSFORMATION_STAGES: Stage[] = [
  {
    id: 1,
    key: 'RECHERCHE',
    title: 'Recherche',
    headline: 'Je suis à la recherche d’une opportunité.',
    text: 'Un parcours qui commence par l’ambition et la volonté d’avancer.',
    icon: Search,
  },
  {
    id: 2,
    key: 'APPRENTISSAGE',
    title: 'Apprentissage',
    headline: 'Je développe mes compétences.',
    text: 'La montée en compétence transforme le potentiel en savoir-faire.',
    icon: GraduationCap,
  },
  {
    id: 3,
    key: 'COMPÉTENCE',
    title: 'Compétence',
    headline: 'Je transforme mes idées en projets.',
    text: 'Chaque idée devient un projet concret, mesurable et réalisable.',
    icon: Lightbulb,
  },
  {
    id: 4,
    key: 'PROJET',
    title: 'Projet',
    headline: 'Je ne cherche plus seulement une opportunité…',
    text: 'La bascule : je décide de créer ma propre voie.',
    icon: Rocket,
  },
  {
    id: 5,
    key: 'ENTREPRENEURIAT',
    title: 'Entrepreneuriat',
    headline: 'Je crée la mienne.',
    text: 'Une entreprise naît, avec une équipe et une croissance durable.',
    icon: Building2,
  },
  {
    id: 6,
    key: 'LEADERSHIP',
    title: 'Leadership',
    headline: 'J’ai l’honneur de créer des opportunités.',
    text: 'Le leadership local qui fait émerger l’industrie congolaise.',
    icon: Crown,
  },
]

export const FINAL_QUOTE =
  'Hier, je cherchais une opportunité. Aujourd’hui, j’ai l’honneur de les créer.'
