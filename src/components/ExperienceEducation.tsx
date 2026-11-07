import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Award, 
  Building,
  School,
  Star,
  Layers
} from 'lucide-react';
import { educationData, experienceData } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-xs font-semibold text-sky-400 mb-3">
            <span>CAREER & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Experience & Educational Background
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Four years of continuous institutional graphic design and digital operations alongside structured academic milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Section 9: Work Experience (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Work Experience</h3>
                <p className="text-xs text-slate-400">Institutional computer operations & creative media leadership</p>
              </div>
            </div>

            {experienceData.map((exp) => (
              <div 
                key={exp.institution}
                className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 sm:p-8 shadow-xl hover:border-sky-500/50 transition-all duration-300"
              >
                {/* Position Title & Duration Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white font-display">
                      {exp.position}
                    </h4>
                    <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm mt-1">
                      <Building className="w-4 h-4 shrink-0" />
                      <span>{exp.institution}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-300 text-xs font-bold self-start whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Location & Experience Span */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pb-4 mb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                  <span className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5 font-medium text-sky-300">
                    <Award className="w-3.5 h-3.5" />
                    <span>{exp.experienceSpan}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Core Operational & Design Responsibilities
                  </h5>
                  <ul className="space-y-2.5">
                    {exp.keyResponsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className="pt-4 border-t border-slate-700/60 bg-slate-900/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-2xl">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2.5 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5" />
                    <span>Institutional Highlights & Impact</span>
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

          {/* Section 8: Education Timeline (Col 5) */}
          <div id="education" className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Education</h3>
                <p className="text-xs text-slate-400">Formal diplomas, degrees & technical qualifications</p>
              </div>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-700/80 space-y-8">
              
              {educationData.map((edu, idx) => (
                <div key={edu.degree} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors shadow-md" />
                  
                  {/* Education Item Card */}
                  <div className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-sky-500/40 transition-all duration-300 shadow-lg">
                    
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-sky-400 tabular-nums">
                        {edu.duration}
                      </span>
                      {edu.subject && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                          Subject: {edu.subject}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-white font-display group-hover:text-sky-300 transition-colors">
                      {edu.degree}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium mt-1 mb-2">
                      <School className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>

            {/* Verification Note Box */}
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center gap-3 text-xs text-slate-300">
              <Award className="w-5 h-5 text-sky-400 shrink-0" />
              <span>
                All educational documents, computer diploma certificates, and school service records are certified and verifiable upon request.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
