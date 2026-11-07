import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Layers, 
  Palette, 
  Video, 
  Sparkles, 
  Languages, 
  CheckCircle2,
  Film,
  Type
} from 'lucide-react';
import { skillsData, languagesData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'design' | 'video' | 'office'>('all');

  const filteredSkills = filterCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === filterCategory);

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-xs font-semibold text-sky-400 mb-3">
            <span>PROFESSIONAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Technical Skills & Linguistic Proficiency
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A comprehensive overview of creative software suites, computer office systems, and multilingual communication abilities.
          </p>
        </div>

        {/* Section 6: Professional Skills */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display flex items-center gap-2">
                <Palette className="w-5 h-5 text-sky-400" />
                <span>Core Software Mastery</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Proficiency bars calibrated across four years of commercial and institutional design execution
              </p>
            </div>

            {/* Filter Tabs / Segmented Control */}
            <div className="inline-flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start sm:self-auto">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filterCategory === 'all'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Tools ({skillsData.length})
              </button>
              <button
                onClick={() => setFilterCategory('design')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filterCategory === 'design'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Design & Vector
              </button>
              <button
                onClick={() => setFilterCategory('video')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filterCategory === 'video'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Video Editing
              </button>
              <button
                onClick={() => setFilterCategory('office')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filterCategory === 'office'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Office & Urdu DTP
              </button>
            </div>
          </div>

          {/* Skill Cards Grid with Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-900 transition-all duration-300 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  {/* Top Line: Name, Category, Level */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-950/90 border border-sky-800/80 flex items-center justify-center text-sky-400 font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                        {skill.name.includes('MS Office') ? <FileSpreadsheet className="w-5 h-5 text-emerald-400" /> :
                         skill.name.includes('InPage') ? <Type className="w-5 h-5 text-amber-400" /> :
                         skill.name.includes('CorelDRAW') ? <Layers className="w-5 h-5 text-green-400" /> :
                         skill.name.includes('Illustrator') ? <Palette className="w-5 h-5 text-orange-400" /> :
                         skill.name.includes('Photoshop') ? <Palette className="w-5 h-5 text-sky-400" /> :
                         <Film className="w-5 h-5 text-purple-400" />}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] text-slate-400">
                          {skill.categoryLabel} · {skill.experienceYears}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-lg font-extrabold text-sky-400 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mt-2 mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar Container */}
                <div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                    <div 
                      className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1.5 font-medium">
                    <span>Fundamentals</span>
                    <span>Intermediate</span>
                    <span className="text-sky-400 font-semibold">Expert / Master</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Languages (Circular Progress Indicators) */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display flex items-center justify-center gap-2">
              <Languages className="w-6 h-6 text-sky-400" />
              <span>Language Proficiency</span>
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Verbal, written, and technical communications across native and international mediums
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languagesData.map((lang) => {
              // Circular progress SVG calculations
              const radius = 54;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (lang.percentage / 100) * circumference;

              return (
                <div 
                  key={lang.name}
                  className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 text-center flex flex-col items-center shadow-xl group"
                >
                  {/* Circular SVG Gauge */}
                  <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 128 128">
                      {/* Background circle track */}
                      <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        className="stroke-slate-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Animated Progress circle */}
                      <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        className="stroke-sky-400 group-hover:stroke-cyan-300 transition-all duration-700 ease-out"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>

                    {/* Centered Percentage */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-extrabold text-white tabular-nums tracking-tight font-display">
                        {lang.percentage}%
                      </span>
                      <span className="text-[10px] text-sky-400 uppercase font-bold tracking-wider">
                        Fluency
                      </span>
                    </div>
                  </div>

                  {/* Language Title & Fluency Status */}
                  <h4 className="text-xl font-bold text-white font-display mb-1">
                    {lang.name}
                  </h4>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-950/80 text-sky-300 text-xs font-semibold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>{lang.level}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
