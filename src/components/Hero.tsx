import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  Award,
  Layers,
  MessageSquare
} from 'lucide-react';
import { heroDetails, personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden text-white"
    >
      {/* Subtle background glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-sky-300">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Available for Full-Time Roles & Freelance Work</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                <span className="block text-slate-100 font-display">TALLAT</span>
                <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent font-display">
                  MAAN
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-sky-200/90 tracking-wide pt-1">
                Computer Operator <span className="text-sky-400 font-normal">|</span> Graphic Designer
              </p>
            </div>

            {/* Direct Quote from Brief */}
            <div className="relative pl-4 border-l-2 border-sky-500 py-1 max-w-2xl">
              <p className="text-base sm:text-lg text-slate-300 italic leading-relaxed">
                &ldquo;{heroDetails.quote}&rdquo;
              </p>
            </div>

            {/* Key Value Props / Chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 pt-1">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Urdu InPage Specialist</span>
              </span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Adobe Suite & CorelDRAW</span>
              </span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>The Trust School (2023–2026)</span>
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Button 1: View My Portfolio */}
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 rounded-xl shadow-lg shadow-sky-600/25 hover:shadow-sky-500/35 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <span>View My Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Button 2: Download CV */}
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-600 rounded-xl transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download CV</span>
              </button>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Location & Direct WhatsApp Badge */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Lahore, Punjab, Pakistan</span>
              </span>
              <span>·</span>
              <a 
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hello%20Tallat,%20I%20am%20interested%20in%20hiring%20you.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {personalInfo.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Impact Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500 via-blue-600 to-cyan-400 opacity-30 blur-lg group-hover:opacity-60 transition duration-500" />
              
              {/* Main Photo Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                
                {/* Photo Element */}
                <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
                  <img
                    src={heroDetails.avatarUrl}
                    alt="Tallat Maan – Computer Operator and Graphic Designer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Overlay Badge 1: 4 Years Experience */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">4+ Years</div>
                    <div className="text-[10px] text-slate-400">Professional Exp.</div>
                  </div>
                </div>

                {/* Overlay Badge 2: Verified Computer Operator & Designer */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">The Trust School</div>
                        <div className="text-[10px] text-slate-400">Senior Girls · Lahore</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-semibold text-sky-400">2023–2026</div>
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider">Active Role</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-width Stats Strip Below Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {heroDetails.stats.map((stat) => (
            <div 
              key={stat.label}
              className="flex flex-col items-center md:items-start p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/60 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
