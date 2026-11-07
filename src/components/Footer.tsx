import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  MessageSquare,
  Sparkles,
  Share2
} from 'lucide-react';
import { personalInfo, heroDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Description (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-500 flex items-center justify-center font-bold text-xl text-white shadow-md shadow-sky-500/20">
                TM
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight font-display">
                  TALLAT MAAN
                </h3>
                <p className="text-xs text-sky-400 font-semibold tracking-wide">
                  Computer Operator | Graphic Designer
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              &ldquo;{heroDetails.quote}&rdquo;
            </p>

            <div className="text-xs text-slate-400 pt-2 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{personalInfo.address}</span>
            </div>
          </div>

          {/* Quick Navigation (Col 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About Tallat Maan
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-colors">
                  Professional Skills & Languages
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-sky-400 transition-colors">
                  Education & Qualifications
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-400 transition-colors">
                  Work Experience (The Trust School)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-sky-400 transition-colors">
                  Design & Office Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Social Channels (Col 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect With Tallat
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-white font-medium">
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-white font-medium">
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <a 
                  href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hello%20Tallat,%20contacting%20you%20via%20your%20portfolio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: {personalInfo.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-900 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center hover:bg-slate-700 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-sky-400 flex items-center justify-center hover:bg-slate-700 transition-colors"
                title="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            Copyright © 2026 <span className="text-slate-300 font-medium">Tallat Maan</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Lahore, Punjab, Pakistan</span>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
