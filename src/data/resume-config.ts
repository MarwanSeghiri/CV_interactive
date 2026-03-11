import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Marwan Seghiri',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Étudiant BUT MMI 3e année',
      en: 'BUT MMI 3rd Year Student',
    },
    subtitle: {
      fr: 'Développeur Web & 3D',
      en: 'Web & 3D Developer',
    },
    location: 'Chelles (77500), 14 min Gare de l\\'Est',
  },
  seo: {
    title: 'Marwan Seghiri — Développeur Web & 3D',
    description: 'CV interactif de Marwan Seghiri, étudiant BUT MMI spécialisé en développement web, React, Node.js, 3D Blender, Unity et Unreal Engine.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Marwan Seghiri', href: 'https://www.linkedin.com/in/marwan-seghiri-4660972a0' },
    { type: 'github', label: 'MarwanSeghiri', href: 'https://github.com/MarwanSeghiri' },
    { type: 'website', label: 'Portfolio', href: 'https://marwanseghiri.github.io/Portfolio-MARWAN-SEGHIRI/' },
    { type: 'email', label: 'marwan.seghiri.77@gmail.com' },
    { type: 'phone', label: '+33 7 68 48 61 83' },
    { type: 'location', label: 'Chelles, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B1', en: 'B1' } },
        { name: { fr: 'Arabe', en: 'Arabic' }, level: { fr: 'B1', en: 'B1' } },
        { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'B1', en: 'B1' } },
      ],
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
        { name: 'Bootstrap' },
      ],
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
        { name: 'WordPress' },
      ],
    },
    {
      title: { fr: 'DevOps', en: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'Linux' },
        { name: 'Windows' },
      ],
    },
    {
      title: { fr: 'GameDev / 3D', en: 'GameDev / 3D' },
      type: 'badges',
      items: [
        { name: 'Unity' },
        { name: 'Unreal Engine' },
        { name: 'Blender' },
      ],
    },
    {
      title: { fr: 'Langages Système', en: 'System Languages' },
      type: 'badges',
      items: [
        { name: 'C' },
        { name: 'C#' },
      ],
    },
    {
      title: { fr: 'Design', en: 'Design' },
      type: 'badges',
      items: [
        { name: 'Photoshop' },
        { name: 'InDesign' },
        { name: 'Canva' },
      ],
    },
    {
      title: { fr: 'Soft Skills', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'À l\\'écoute, Patient, Sérieux, Travail d\\'équipe', en: 'Good listener, Patient, Serious, Team player' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'laposte',
      company: { fr: 'La Poste', en: 'La Poste' },
      role: { fr: 'Agent de distribution - Colis recommandés', en: 'Delivery Agent - Registered Mail' },
      type: { fr: 'CDI Job étudiant', en: 'Part-time CDI Student Job' },
      period: { fr: 'Samedis matin - En cours', en: 'Saturday mornings - Ongoing' },
      description: {
        fr: 'Distribution des colis recommandés et suivi des livraisons.',
        en: 'Delivery of registered mail packages and shipment tracking.',
      },
      techs: [],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Job étudiant en CDI, travail le samedi matin.',
          en: 'Student part-time CDI job, Saturday mornings.',
        },
      },
    },
    {
      id: 'conservatoires',
      company: { fr: 'Conservatoires Paris-Vallée de la Marne', en: 'Paris-Vallée de la Marne Conservatories' },
      role: { fr: 'Agent d\\'accueil et services', en: 'Welcome and Services Agent' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: '09/2024 - En cours', en: '09/2024 - Ongoing' },
      description: {
        fr: 'Accueil visiteurs, préparation salles, gestion sécurité.',
        en: 'Visitor welcome, room preparation, security management.',
      },
      techs: [],
    },
    {
      id: 'psg',
      company: { fr: 'PSG - Parc des Princes', en: 'PSG - Parc des Princes' },
      role: { fr: 'Agent d\\'accueil et orientation', en: 'Welcome and Orientation Agent' },
      type: { fr: 'CDD', en: 'Fixed-term' },
      period: { fr: '09/2024 - En cours', en: '09/2024 - Ongoing' },
      description: {
        fr: 'Accueil supporters, gestion flux spectateurs.',
        en: 'Supporters welcome, crowd flow management.',
      },
      techs: [],
    },
    {
      id: 'animateur',
      company: { fr: 'Divers centres de loisirs', en: 'Various recreation centers' },
      role: { fr: 'Animateur ACM (BAFA)', en: 'Youth Animator (BAFA)' },
      type: { fr: 'Vacances scolaires / Jobs d\\'été', en: 'School holidays / Summer jobs' },
      period: { fr: '2023 - En cours', en: '2023 - Ongoing' },
      description: {
        fr: 'Animation enfants (3+ ans) et ados - matin/midi/soir.',
        en: 'Children (3+ years) and teens animation - morning/noon/evening.',
      },
      techs: [],
      details: {
        context: {
          fr: 'BAFA obtenu. Tous types d\\'âges, centres vacances/mercredis.',
          en: 'BAFA certified. All age groups, holiday centers.',
        },
      },
    },
    {
      id: 'easytech',
      company: { fr: 'Easy Tech', en: 'Easy Tech' },
      role: { fr: 'Stagiaire Développement Web', en: 'Web Development Intern' },
      type: { fr: 'Stage 3e année', en: '3rd year internship' },
      period: { fr: '2024-2025', en: '2024-2025' },
      description: {
        fr: 'Développement 5+ sites statiques HTML/CSS/JavaScript.',
        en: 'Development of 5+ static websites HTML/CSS/JavaScript.',
      },
      techs: ['HTML', 'CSS', 'JavaScript', 'React'],
      isHighlighted: true,
    },
  ],
  education: [
    {
      school: { fr: 'IUT Meaux - Université Gustave Eiffel', en: 'IUT Meaux - Gustave Eiffel University' },
      degree: { fr: 'BUT MMI (Métiers du Multimédia et Internet)', en: 'BUT MMI (Multimedia and Internet Professions)' },
      period: '2023 - 2026',
      specialty: { fr: 'Développement Web & 3D', en: 'Web Development & 3D' },
    },
    {
      school: { fr: 'Lycée Alfred Nobel', en: 'Alfred Nobel High School' },
      degree: { fr: 'Baccalauréat STMG Gestion-Finance', en: 'Bac STMG Management-Finance' },
      period: '2021 - 2023',
    },
    {
      school: { fr: 'Afocal', en: 'Afocal' },
      degree: { fr: 'BAFA Animateur ACM', en: 'BAFA Youth Animator' },
      period: '2023',
    },
  ],
  projects: [
    {
      id: 'portfolio',
      title: { fr: 'Portfolio Personnel', en: 'Personal Portfolio' },
      description: { fr: 'Site portfolio développement web et 3D.', en: 'Web development & 3D portfolio website.' },
      techs: ['HTML', 'CSS', 'JavaScript', 'React'],
      url: 'https://marwanseghiri.github.io/Portfolio-MARWAN-SEGHIRI/',
      github: 'https://github.com/MarwanSeghiri',
    },
  ],
  hobbies: [
    {
      title: { fr: 'Lecture', en: 'Reading' },
      details: [{ fr: 'Manga, BD, Romance', en: 'Manga, Comics, Romance' }],
    },
    {
      title: { fr: 'Sport', en: 'Sports' },
      details: [{ fr: 'Natation, Football, Boxe', en: 'Swimming, Football, Boxing' }],
    },
    {
      title: { fr: 'Musique', en: 'Music' },
      details: [{ fr: 'Rap, Variété française', en: 'Rap, French pop' }],
    },
  ],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES', en: 'EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech stack:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click experiences for more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
