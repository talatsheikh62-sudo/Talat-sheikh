import { 
  PersonalInfo, 
  SkillItem, 
  LanguageItem, 
  EducationItem, 
  ExperienceItem, 
  Project 
} from '../types';

export const personalInfo: PersonalInfo = {
  fullName: 'TALLAT MAAN',
  fatherName: 'Asghar Ali',
  dateOfBirth: '06-07-2002',
  maritalStatus: 'Single',
  domicile: 'Punjab',
  nationality: 'Pakistani',
  phone: '03254642633',
  phoneFormatted: '+92 325 4642633',
  email: 'talatsheikh62@gmail.com',
  address: 'House No 23, Model Town, Lahore.',
  whatsappNumber: '923254642633'
};

export const heroDetails = {
  name: 'TALLAT MAAN',
  titles: ['Computer Operator', 'Graphic Designer', 'Urdu InPage Specialist', 'Video Editor'],
  tagline: 'Computer Operator | Graphic Designer',
  quote: 'Creative Graphic Designer and Computer Operator passionate about delivering innovative visual solutions and professional digital work.',
  aboutSummary: 'Passionate graphic designer with a flair for innovative and impactful visual solutions. Adept at translating concepts into compelling designs that resonate with clients and leave a lasting impression.',
  avatarUrl: '/src/assets/images/tallat_maan_portrait_1794058643853.jpg',
  stats: [
    { label: 'Experience', value: '4+ Years' },
    { label: 'Completed Projects', value: '250+' },
    { label: 'Software Suites', value: '7 Tools' },
    { label: 'Languages', value: '3 Fluent' }
  ]
};

export const skillsData: SkillItem[] = [
  {
    name: 'MS Office',
    level: 95,
    category: 'office',
    categoryLabel: 'Office Automation',
    description: 'Expertise in MS Word documentation, complex Excel spreadsheet calculations & formulas, PowerPoint presentations, and Access databases.',
    experienceYears: '4+ Years'
  },
  {
    name: 'InPage',
    level: 95,
    category: 'office',
    categoryLabel: 'Urdu Publishing',
    description: 'Mastery over Urdu typography, Nastaliq formatting, Urdu examination papers, literary books, certificates, and multi-column Urdu publications.',
    experienceYears: '4+ Years'
  },
  {
    name: 'CorelDRAW',
    level: 90,
    category: 'design',
    categoryLabel: 'Vector & Print',
    description: 'Advanced vector graphics, flex banners, large-format signboards, prepress color separation, packaging layouts, and laser cutting vectors.',
    experienceYears: '3+ Years'
  },
  {
    name: 'Adobe Illustrator',
    level: 88,
    category: 'design',
    categoryLabel: 'Vector & Branding',
    description: 'Modern brand identities, vector logos, corporate stationery kits, icon design, typography manipulation, and digital vector illustration.',
    experienceYears: '3+ Years'
  },
  {
    name: 'Adobe Photoshop',
    level: 92,
    category: 'design',
    categoryLabel: 'Creative Imaging',
    description: 'Photo manipulation, advertising posters, social media banners, retouching, color grading, clipping paths, and visual composite art.',
    experienceYears: '4+ Years'
  },
  {
    name: 'Adobe After Effects',
    level: 80,
    category: 'video',
    categoryLabel: 'Motion Graphics',
    description: 'Dynamic logo reveals, lower thirds, title animations, promotional video intros, and visual effect transitions.',
    experienceYears: '2+ Years'
  },
  {
    name: 'Adobe Premiere Pro',
    level: 85,
    category: 'video',
    categoryLabel: 'Video Editing',
    description: 'Professional timeline video editing, multi-cam synchronization, color correction, voiceover cleaning, and social media reels.',
    experienceYears: '3+ Years'
  }
];

export const languagesData: LanguageItem[] = [
  {
    name: 'Urdu',
    percentage: 100,
    level: 'Native Proficiency',
    description: 'Complete native fluency in spoken, written, and specialized InPage Nastaliq desktop publishing.'
  },
  {
    name: 'Punjabi',
    percentage: 100,
    level: 'Native Proficiency',
    description: 'Native mother tongue with seamless verbal fluency and regional cultural communication.'
  },
  {
    name: 'English',
    percentage: 50,
    level: 'Professional Working',
    description: 'Professional working proficiency in software interfaces, official correspondence, and technical instructions.'
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'Matriculation',
    institution: 'Govt.',
    duration: '2019–2021',
    description: 'Completed secondary school certificate with strong academic foundation in science and computer fundamentals.'
  },
  {
    degree: 'Computer Application',
    institution: 'CTTC College, Kangpur',
    subject: 'Computer',
    duration: '2021–2022',
    description: 'Specialized diploma in Computer Applications covering Office Automation, InPage Urdu DTP, operating systems, and computer hardware management.'
  },
  {
    degree: 'Intermediate (FA)',
    institution: 'Govt. Board',
    duration: '2023–2025',
    description: 'Higher secondary certificate in Faculty of Arts, developing balanced skills in social studies, languages, and creative communications.'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    position: 'Computer Operator and Graphic Designer',
    institution: 'The Trust School – Senior Girls',
    location: 'Thokar Niaz Baig, Lahore',
    duration: '2023–2026',
    experienceSpan: 'Four Years experience as a Computer Operator and Graphic Designer',
    description: 'Serving as the primary Computer Operator and Graphic Designer, handling institutional media, examination systems, bilingual Urdu/English publications, and official digital records.',
    keyResponsibilities: [
      'Designing official school publications, annual magazines, prospectus brochures, event banners, and academic certificates.',
      'Composing and formatting bilingual (English & Urdu InPage) examination question papers, date sheets, and result cards.',
      'Maintaining student digital records, attendance registers, and automated grading calculation spreadsheets in MS Excel.',
      'Editing event videography, promotional teasers, and social media celebration videos using Premiere Pro and After Effects.',
      'Preparing prepress artwork and coordinating with commercial printers for flex banners, backdrops, and school stationery.'
    ],
    achievements: [
      'Digitized and organized examination tabulation records for over 1,200+ students, reducing result preparation time by 60%.',
      'Created over 180+ event banners, stage backdrops, and certificates for annual sports days, speech contests, and graduations.',
      'Established standardized InPage and Word formatting templates ensuring 100% typographic consistency across all school departments.'
    ]
  }
];

export const hobbiesData = [
  {
    name: 'Cricket',
    icon: 'trophy',
    color: 'from-amber-500 to-orange-500',
    description: 'Active club cricket player and enthusiastic follower of Pakistan national cricket team fixtures and tape-ball tournaments.'
  },
  {
    name: 'Football',
    icon: 'activity',
    color: 'from-emerald-500 to-teal-600',
    description: 'Passionate football fan and player, appreciating tactical team play, agility, stamina, and international league matches.'
  },
  {
    name: 'Computer Gaming',
    icon: 'gamepad-2',
    color: 'from-sky-500 to-blue-600',
    description: 'Enthusiastic PC gamer interested in competitive esports, simulation gameplay, and high-performance PC hardware optimization.'
  },
  {
    name: 'Digital Typography',
    icon: 'type',
    color: 'from-indigo-500 to-violet-600',
    description: 'Passionate about Urdu calligraphy, Nastaliq font variations, and modern bilingual typography layout compositions.'
  }
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Brand Identity & Stationery System',
    category: 'illustrator',
    categoryLabel: 'Adobe Illustrator',
    software: ['Adobe Illustrator', 'CorelDRAW'],
    description: 'Complete corporate identity kit featuring geometric logo marks, vector letterheads, envelopes, business cards, and brand guide booklet.',
    image: '/src/assets/images/portfolio_illustrator_vector_1794058644657.jpg',
    client: 'Aurora Tech Solutions',
    duration: '2 Weeks',
    deliverables: ['Vector Logo Formats', 'Brand Identity Guidelines', 'Stationery Print Package', 'Color Palette Specs'],
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Ignite the Imagination – Creative Art Poster',
    category: 'photoshop',
    categoryLabel: 'Adobe Photoshop',
    software: ['Adobe Photoshop'],
    description: 'High-impact creative advertising poster featuring multi-exposure photo composite, vibrant splash effects, and balanced editorial typography.',
    image: '/src/assets/images/portfolio_photoshop_design_1794058644157.jpg',
    client: 'Creative Studio Lahore',
    duration: '1 Week',
    deliverables: ['High-Res 300 DPI Print File', 'Social Media Carousel Assets', 'Digital Billboard Mockup'],
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Cinematic Video Editing & Motion Timeline',
    category: 'video-editing',
    categoryLabel: 'Video Editing',
    software: ['Adobe Premiere Pro', 'Adobe After Effects'],
    description: 'Full-length promotional event coverage and documentary showcase with dynamic cut pacing, audio master leveling, and custom motion title cards.',
    image: '/src/assets/images/portfolio_video_editing_1794058644883.jpg',
    client: 'The Trust School Media Cell',
    duration: '3 Weeks',
    deliverables: ['4K Master Video', 'Social Media 9:16 Reels', 'Motion Lower Thirds Package', 'Audio Clean-up & Mix'],
    featured: true
  },
  {
    id: 'proj-4',
    title: 'School Annual Sports Day & Stage Backdrop',
    category: 'coreldraw',
    categoryLabel: 'CorelDRAW Projects',
    software: ['CorelDRAW', 'Adobe Photoshop'],
    description: 'Large-scale 24ft x 12ft flex banner backdrop designed for the annual athletic championship, featuring high-resolution sport vectors and print-ready color separations.',
    image: '/src/assets/images/portfolio_illustrator_vector_1794058644657.jpg',
    client: 'The Trust School – Senior Girls',
    duration: '5 Days',
    deliverables: ['Prepress Vector Output', 'Stage Backdrop Flex File', 'Trophy & Medal Stickers', 'Invitation Cards'],
    featured: false
  },
  {
    id: 'proj-5',
    title: 'Bilingual Urdu InPage Examination & Result Suite',
    category: 'office-work',
    categoryLabel: 'Computer Office Work',
    software: ['InPage Urdu', 'MS Word', 'MS Excel'],
    description: 'Standardized examination paper templates in Urdu Nastaliq script and automated Excel grade calculation sheets with auto-generated student progress report cards.',
    image: '/src/assets/images/portfolio_photoshop_design_1794058644157.jpg',
    client: 'Academic Examination Board',
    duration: 'Ongoing',
    deliverables: ['InPage Urdu Question Templates', 'Excel Auto-Tabulation Sheet', 'Printable Result Cards', 'Data Entry Validation'],
    featured: true
  },
  {
    id: 'proj-6',
    title: 'Commercial Flex Signboard & Marketing Flyers',
    category: 'graphic-design',
    categoryLabel: 'Graphic Design',
    software: ['CorelDRAW', 'Adobe Photoshop', 'Adobe Illustrator'],
    description: 'Commercial shop signboards, promotional flyers, and social media announcement banners tailored for local retail clients in Lahore.',
    image: '/src/assets/images/portfolio_illustrator_vector_1794058644657.jpg',
    client: 'Retail Business Clients',
    duration: '10 Days',
    deliverables: ['Exterior Flex Signboard File', 'Double-Sided Promotional Flyer', 'WhatsApp Catalog Cards'],
    featured: false
  }
];
