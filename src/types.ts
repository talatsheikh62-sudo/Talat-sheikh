export type ProjectCategory = 
  | 'all'
  | 'graphic-design'
  | 'photoshop'
  | 'illustrator'
  | 'coreldraw'
  | 'video-editing'
  | 'office-work';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  software: string[];
  description: string;
  image: string;
  client?: string;
  duration?: string;
  deliverables?: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  category: 'design' | 'video' | 'office';
  categoryLabel: string;
  description: string;
  experienceYears: string;
}

export interface LanguageItem {
  name: string;
  percentage: number;
  level: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  subject?: string;
  description: string;
}

export interface ExperienceItem {
  position: string;
  institution: string;
  location: string;
  duration: string;
  experienceSpan: string;
  description: string;
  keyResponsibilities: string[];
  achievements: string[];
}

export interface PersonalInfo {
  fullName: string;
  fatherName: string;
  dateOfBirth: string;
  maritalStatus: string;
  domicile: string;
  nationality: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
  whatsappNumber: string;
}
