import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Marwan Seghiri',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Étudiant BUT MMI 3e année',
      en: 'BUT MMI 3rd Year Student'
    },
    subtitle: {
      fr: 'Développeur Web & 3D',
      en: 'Web & 3D Developer'
    },
    location: 'Chelles (77500), 14 min Gare de l\'Est'
  },
  seo: {
    title: 'Marwan Seghiri — Développeur Web & 3D',
    description: 'CV interactif de Marwan Seghiri, étudiant BUT MMI spécialisé en développement web, React, Node.js, 3D Blender, Unity et Unreal Engine.'
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' }
  },
  contact: [
    { type: 'linkedin', label: 'Marwan Seghiri', href: 'https://www.linkedin.com/in/marwan-seghiri-4660972a0' },
    { type: 'github', label: 'MarwanSeghiri', href: 'https://github.com/MarwanSeghiri' },
    { type: 'website', label: 'Portfolio', href: 'https://marwanseghiri.github.io/Portfolio-MARWAN-SEGHIRI/' },
    { type: 'email', label: 'marwan.seghiri.77@gmail.com' },
    { type: 'phone', label: '+33 7 68 48 61 83' },
    { type: 'location', label: 'Chelles, France' }
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B1', en: 'B1' } },
        { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'B1', en: 'B1' } },
        { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'B1', en: 'B1' } }
      ]
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Angular' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' }
      ]
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'PHP' },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'SQL' },
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'WordPress' }
      ]
    },
    {
      title: { fr: 'DevOps', en: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'Linux' },
        { name: 'Windows' }
      ]
    },
    {
      title: { fr: 'GameDev / 3D', en: 'GameDev / 3D' },
      type: 'badges',
      items: [
        { name: 'Unity' },
        { name: 'Unreal Engine' },
        { name: 'Blender' }
      ]
    },
    {
      title: { fr: 'Langages Système', en: 'System Languages' },
      type: 'badges',
      items: [
        { name: 'C' },
        { name: 'C#' }
      ]
    },
    {
      title: { fr: 'Design', en: 'Design' },
      type: 'badges',
      items: [
        { name: 'Photoshop' },
        { name: 'InDesign' },
        { name: 'Canva' }
      ]
    },
    {
      title: { fr: 'Soft Skills', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'À l\'écoute, Patient, Sérieux, Travail d\'équipe', en: 'Good listener, Patient, Serious, Team player' } }
      ]
    }
  ],
  experiences: [
    {
      id: 'laposte',
      company: { fr: 'La Poste', en: 'La Poste' },
      role: { fr: 'Agent de distribution - Colis recommandés', en: 'Delivery Agent - Registered Mail' },
      type: { fr: 'CDI Job étudiant', en: 'Part-time CDI Student Job' },
      period: { fr: 'Samedis
