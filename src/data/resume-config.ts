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
    description: 'CV interactif de Marwan Seghiri, étudiant BUT MMI.'
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
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B1', en: 'B1' } }
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
        { name: 'TypeScript' }
      ]
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'PHP' },
        { name: 'Python' }
      ]
    }
  ],
  experiences: [
    {
      id: 'laposte',
      company: { fr: 'La Poste', en: 'La Poste' },
      role: { fr: 'Agent de distribution', en: 'Delivery Agent' },
      type: { fr: 'CDI Job étudiant', en: 'Part-time Student Job' },
      period: { fr: 'Samedis matin', en: 'Saturday mornings' },
      description: {
        fr: 'Distribution colis recommandés.',
        en: 'Registered mail delivery.'
      },
      techs: [],
      details: {
        context: {
          fr: 'Job étudiant CDI.',
          en: 'Student part-time job.'
        },
        env: {
          fr: 'Service client',
          en: 'Customer service'
        }
      }
    },
    {
      id: 'easytech',
      company: { fr: 'Easy Tech', en: 'Easy Tech' },
      role: { fr: 'Stagiaire Développement Web', en: 'Web Development Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '2024-2025', en: '2024-2025' },
      description: {
        fr: 'Développement sites web.',
        en: 'Web development.'
      },
      techs: ['HTML', 'CSS', 'JavaScript'],
      details: {
        context: {
          fr: 'Collaboration équipe.',
          en: 'Team collaboration.'
        },
        env: {
          fr: 'HTML/CSS/JS',
          en: 'HTML/CSS/JS'
        }
      }
    }
  ],
  education: [
    {
      school: { fr: 'IUT Meaux', en: 'IUT Meaux' },
      degree: { fr: 'BUT MMI', en: 'BUT MMI' },
      period: '2023-2026'
    }
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' }
    },
    experience: {
      mainTasks: {
