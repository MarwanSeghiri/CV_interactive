import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Marwan Seghiri',
    title: { fr: 'Developpeur Web', en: 'Web Developer' },
    location: 'Chelles, France'
  },
  languages: {
    default: 'fr',
    available: ['fr']
  },
  contact: [
    { type: 'email', label: 'marwan.seghiri.77@gmail.com' }
  ],
  skills: [
    {
      title: { fr: 'Technos' },
      type: 'badges',
      items: [{ name: 'HTML' }, { name: 'CSS' }]
    }
  ],
  experiences: [
    {
      id: 'test',
      company: { fr: 'Test' },
      role: { fr: 'Developpeur' },
      period: { fr: '2024' },
      description: { fr: 'Test' },
      techs: []
    }
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT' },
      skills: { fr: 'SKILLS' },
      experience: { fr: 'EXPERIENCE' }
    }
  }
}
