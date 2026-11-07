import React from 'react';
import { 
  User, 
  Calendar, 
  Heart, 
  MapPin, 
  Globe2, 
  Phone, 
  Mail, 
  MessageSquare, 
  Trophy, 
  Activity, 
  Gamepad2, 
  Type,
  CheckCircle,
  FileSpreadsheet,
  Palette,
  Monitor
} from 'lucide-react';
import { personalInfo, heroDetails, hobbiesData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-xs font-semibold text-sky-400 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Designing Impactful Visuals & Managing Digital Workflows
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {heroDetails.aboutSummary}
          </p>
        </div>

        {/* 2-Column Grid: Professional Capabilities & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Card 1: Graphic Design Excellence */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-800/70 border border-slate-700/80 p-8 shadow-xl flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-md shadow-sky-500/20">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                Creative Graphic Design & Branding
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Specialized in translating abstract ideas into cohesive visual language. Extensive practical experience in Adobe Photoshop, Illustrator, and CorelDRAW creating print media, flex banners, corporate identities, social media creatives, and stage backdrops.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Logos, Brand Identity & Corporate Stationery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Photo Manipulation, Color Grading & Advertising Art</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Large Format Flex Banners & Prepress Color Separation</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center justify-between text-xs text-sky-400 font-semibold">
              <span>Adobe CC & CorelDRAW</span>
              <span>300 DPI Print & Digital Assets</span>
            </div>
          </div>

          {/* Card 2: Computer Operations & Office Automation */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-800/70 border border-slate-700/80 p-8 shadow-xl flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-md shadow-blue-500/20">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                Computer Operations & Urdu Publishing
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Over four years of hands-on institutional experience at The Trust School managing high-speed data operations, automated Excel grade tabulation, examination logistics, and native Urdu InPage Nastaliq desktop publishing for official curriculums.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Advanced InPage Urdu Nastaliq Composition & Formatting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Automated Result Tabulation & Excel Formula Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Academic Records, Question Papers & Official Correspondence</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center justify-between text-xs text-sky-400 font-semibold">
              <span>High-Speed Accurate Typing</span>
              <span>Bilingual Urdu & English</span>
            </div>
          </div>

        </div>

        {/* Section 4: Personal Information & Quick Contacts Card */}
        <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-8 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
            <div>
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <User className="w-5 h-5 text-sky-400" />
                <span>Personal Information</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Official personal record details for recruitment, documentation, and verification
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950/70 border border-sky-800/80 text-xs font-semibold text-sky-300 hover:bg-sky-900 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.phone}</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hello%20Tallat,%20contacting%20you%20from%20your%20portfolio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-800/80 text-xs font-semibold text-emerald-300 hover:bg-emerald-900 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Father's Name */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-xs font-medium text-slate-400 block mb-1">Father&apos;s Name</span>
              <span className="text-base font-bold text-white block">{personalInfo.fatherName}</span>
            </div>

            {/* Date of Birth */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-xs font-medium text-slate-400 block mb-1">Date of Birth</span>
              <span className="text-base font-bold text-white block">{personalInfo.dateOfBirth}</span>
            </div>

            {/* Marital Status */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-xs font-medium text-slate-400 block mb-1">Marital Status</span>
              <span className="text-base font-bold text-white block">{personalInfo.maritalStatus}</span>
            </div>

            {/* Domicile */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-xs font-medium text-slate-400 block mb-1">Domicile</span>
              <span className="text-base font-bold text-white block">{personalInfo.domicile}</span>
            </div>

            {/* Nationality */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-xs font-medium text-slate-400 block mb-1">Nationality</span>
              <span className="text-base font-bold text-white block">{personalInfo.nationality}</span>
            </div>

          </div>

          {/* Full Address banner */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="font-medium text-slate-300">Permanent Address:</span>
              <span>{personalInfo.address}</span>
            </div>
            <div className="text-slate-400">
              Region: Punjab, Pakistan · Time Zone: PKT (UTC+5)
            </div>
          </div>
        </div>

        {/* Section 10: Hobbies & Interests */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white font-display">
                Hobbies & Personal Interests
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Passions that energize focus, teamwork, strategic thinking, and creative stamina
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cricket */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/50 hover:bg-slate-800/90 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-display">Cricket</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active cricket player with keen passion for strategic gameplay, team coordination, discipline, and match focus.
              </p>
            </div>

            {/* Football */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-800/90 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-display">Football</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Passionate football enthusiast valuing athletic agility, collaborative communication, fast decision-making, and endurance.
              </p>
            </div>

            {/* Computer Gaming */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-sky-500/50 hover:bg-slate-800/90 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-display">Computer Gaming</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Avid PC gamer fascinated by real-time strategy, responsive UI/UX mechanics, high refresh rate rigs, and digital graphics.
              </p>
            </div>

            {/* Creative Typography & DTP */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-indigo-500/50 hover:bg-slate-800/90 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                <Type className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-display">Urdu Typography</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deep aesthetic fascination with traditional Nastaliq calligraphy, ligature balancing, and modern bilingual brand design.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
