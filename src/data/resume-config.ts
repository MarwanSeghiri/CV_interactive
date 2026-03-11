import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Marwan Seghiri',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Developpeur Web',
      en: 'Web Developer'
    },
    subtitle: {
      fr: 'BUT MMI 3e annee',
      en: 'BUT MMI 3rd Year'
    },
    location: 'Chelles, France'
  },
  seo: {
    title: 'Marwan Seghiri - Developpeur Web',
    description: 'CV Developpeur Web MMI'
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { 
      fr: 'FR', 
      en: 'EN' 
    }
  },
  contact: [
    { type: 'email', label: 'marwan.seghiri.77@gmail.com' },
    { type: 'phone', label: '+33 7 68 48 61 83' },
    { type: 'linkedin', label: 'Marwan Seghiri', href: 'https://www.linkedin.com/in/marwan-seghiri-4660972a0' }
  ],
  skills: [
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React' }
      ]
    }
  ],
  experiences: [
    {
      id: 'laposte',
      company: { fr: 'La Poste', en: 'La Poste' },
      role: { fr: 'Agent Distribution', en: 'Delivery Agent' },
      type: { fr: 'CDI Etudiant', en: 'Student Job' },
      period: { fr: '2024 - Present', en: '2024 - Present' },
      description: {
        fr: 'Distribution colis recommandes.',
        en: 'Registered mail delivery.'
      },
      techs: [],
      details: {
        context: {
          fr: 'Job etudiant CDI samedis.',
          en: 'Student part-time job.'
        },
        env: {
          fr: 'Service client',
          en: 'Customer service'
        }
      }
    }
  ],
  education: [
    {
      school: { fr: 'IUT Meaux', en: 'IUT Meaux' },
      degree: { fr: 'BUT MMI', en: 'BUT MMI' },
      period: '2023 - 2026'
    }
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPETENCES', en: 'SKILLS' },
      experience: { fr: 'EXPERIENCES', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' }
    },
    experience: {
      mainTasks: { fr: 'Missions:', en: 'Tasks:' },
      moreTasks: { fr: 'Plus...', en: 'More...' },
      training: { fr: 'Formations:', en: 'Training:' },
      techEnv: { fr: 'Environnement:', en: 'Environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' }
    },
    actions: {
      clickHint: { fr: 'Cliquez pour details', en: 'Click for details' },
      switchTheme: { fr: 'Theme', en: 'Theme' },
      downloadPdf: { fr: 'PDF', en: 'PDF' }
    }
  }
}
