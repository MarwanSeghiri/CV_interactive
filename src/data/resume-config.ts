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
      fr: 'Développeur Web & 3D Full Stack',
      en: 'Full Stack Web & 3D Developer'
    },
    location: 'Chelles (77500), 14 min Gare de l\'Est'
  },
  seo: {
    title: 'Marwan Seghiri — Full Stack Developer',
    description: 'Stack48 (04-08/2026), EasyTech (04-06/2026), React, Docker, Unity'
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
        { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' },
        { name: 'React' }, { name: 'TypeScript' }, { name: 'Angular' },
        { name: 'Tailwind CSS' }, { name: 'Bootstrap' }
      ]
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' }, { name: 'PHP' }, { name: 'Python' },
        { name: 'Java' }, { name: 'PostgreSQL' }, { name: 'MySQL' }
      ]
    },
    {
      title: { fr: 'DevOps', en: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Git' }, { name: 'Docker' }, { name: 'Linux' }
      ]
    },
    {
      title: { fr: 'GameDev/3D', en: 'GameDev/3D' },
      type: 'badges',
      items: [
        { name: 'Unity' }, { name: 'Unreal Engine' }, { name: 'Blender' }
      ]
    }
  ],
  experiences: [
    {
      id: 'stack48',
      company: { fr: 'Stack48', en: 'Stack48' },
      role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '04/2026 - 08/2026', en: '04/2026 - 08/2026' },
      description: {
        fr: 'Full stack complet: maquette → charte → API → BDD → Docker → domaine.',
        en: 'Full stack: wireframe → design → API → DB → Docker → domain.'
      },
      techs: ['React', 'Node.js', 'Docker', 'PostgreSQL'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Développement end-to-end application web.',
          en: 'End-to-end web app development.'
        },
        tasks: {
          fr: [
            'Maquette & charte graphique',
            'Frontend React/TS',
            'API REST PostgreSQL',
            'Docker + domaine'
          ],
          en: [
            'Wireframe & design',
            'React/TS frontend',
            'REST API PostgreSQL',
            'Docker + domain'
          ]
        },
        env: {
          fr: 'React/Node.js/PostgreSQL/Docker',
          en: 'React/Node.js/PostgreSQL/Docker'
        }
      }
    },
    {
      id: 'easytech',
      company: { fr: 'Easy Tech', en: 'Easy Tech' },
      role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '04/2026 - 06/2026', en: '04/2026 - 06/2026' },
      description: {
        fr: '5+ sites full stack: maquette, code, API, hébergement.',
        en: '5+ full stack sites: design, code, API, hosting.'
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Collaboration équipe, respect specs.',
          en: 'Team collaboration, specs compliance.'
        },
        tasks: {
          fr: [
            'Maquettes responsive',
            'Backend PHP/MySQL',
            'Charte graphique',
            'Hébergement'
          ],
          en: [
            'Responsive wireframes',
            'PHP/MySQL backend',
            'Design system',
            'Hosting'
          ]
        },
        env: {
          fr: 'HTML/CSS/JS/PHP/MySQL',
          en: 'HTML/CSS/JS/PHP/MySQL'
        }
      }
    },
    {
      id: 'mairie',
      company: { fr: 'Mairie Brou-sur-Chantereine', en: 'Brou Town Hall' },
      role: { fr: 'Stagiaire Communication', en: 'Communication Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: '2023', en: '2023' },
      description: {
        fr: 'Affiches, design maillots, photographe officiel.',
        en: 'Posters, sportswear design, official photographer.'
      },
      techs: ['Photoshop', 'InDesign', 'Canva'],
      details: {
        context: {
          fr: 'Pôle communication mairie.',
          en: 'Town hall communication.'
        },
        env: {
          fr: 'Adobe Suite/Canva',
          en: 'Adobe Suite/Canva'
        }
      }
    },
    {
      id: 'laposte',
      company: { fr: 'La Poste', en: 'La Poste' },
      role: { fr: 'Agent Distribution', en: 'Delivery Agent' },
      type: { fr: 'CDI Job étudiant', en: 'Student Job' },
      period: { fr: 'Samedis - En cours', en: 'Saturdays - Ongoing' },
      description: {
        fr: 'Colis recommandés.',
        en: 'Registered mail.'
      },
      techs: [],
      details: {
        context: {
          fr: 'Job étudiant fiable.',
          en: 'Reliable student job.'
        },
        env: {
          fr: 'Logistique',
          en: 'Logistics'
        }
      }
    }
  ],
  education: [
    {
      school: { fr: 'IUT Meaux - Univ. Gustave Eiffel', en: 'IUT Meaux - Gustave Eiffel Univ.' },
      degree: { fr: 'BUT MMI', en: 'BUT MMI' },
      specialty: { fr: 'Web Dev & 3D', en: 'Web Dev & 3D' },
      period: '2023-2026'
    }
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' }
    },
    experience: {
      mainTasks: { fr: 'Missions :', en: 'Tasks:' },
      moreTasks: { fr: 'Plus...', en: 'More...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Stack :', en: 'Stack:' },
      technologies: { fr: 'Technologies', en: 'Technologies' }
    },
    actions: {
      clickHint: { fr: 'Cliquez pour détails', en: 'Click for details' },
      switchTheme: { fr: 'Thème', en: 'Theme' },
      downloadPdf: { fr: 'PDF', en: 'PDF' }
    }
  }
}
