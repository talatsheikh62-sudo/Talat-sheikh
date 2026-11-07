import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Calendar, 
  Award,
  Globe2
} from 'lucide-react';
import { 
  personalInfo, 
  heroDetails, 
  skillsData, 
  languagesData, 
  educationData, 
  experienceData, 
  hobbiesData 
} from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextCv = () => {
    const cvText = `
============================================================
                     CURRICULUM VITAE
                       TALLAT MAAN
           Computer Operator | Graphic Designer
============================================================

CONTACT INFORMATION:
-------------------
Phone: ${personalInfo.phone} (${personalInfo.phoneFormatted})
Email: ${personalInfo.email}
Address: ${personalInfo.address}
WhatsApp: https://wa.me/${personalInfo.whatsappNumber}

PERSONAL DETAILS:
----------------
Father's Name: ${personalInfo.fatherName}
Date of Birth: ${personalInfo.dateOfBirth}
Marital Status: ${personalInfo.maritalStatus}
Domicile: ${personalInfo.domicile}
Nationality: ${personalInfo.nationality}

PROFESSIONAL SUMMARY:
--------------------
${heroDetails.aboutSummary}
${heroDetails.quote}

WORK EXPERIENCE:
---------------
Position: ${experienceData[0].position}
Institution: ${experienceData[0].institution}
Location: ${experienceData[0].location}
Duration: ${experienceData[0].duration}
Overview: ${experienceData[0].experienceSpan}

Key Responsibilities:
${experienceData[0].keyResponsibilities.map(r => `• ${r}`).join('\n')}

Key Achievements:
${experienceData[0].achievements.map(a => `• ${a}`).join('\n')}

EDUCATION:
---------
${educationData.map(e => `• ${e.degree} - ${e.institution} (${e.duration})${e.subject ? ` | Subject: ${e.subject}` : ''}`).join('\n')}

PROFESSIONAL SKILLS:
-------------------
${skillsData.map(s => `• ${s.name} (${s.level}%) - ${s.description}`).join('\n')}

LANGUAGES:
---------
${languagesData.map(l => `• ${l.name}: ${l.percentage}% (${l.level})`).join('\n')}

HOBBIES & INTERESTS:
-------------------
${hobbiesData.map(h => `• ${h.name} - ${h.description}`).join('\n')}

============================================================
Generated from Tallat Maan Portfolio Website
============================================================
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Tallat_Maan_CV_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopySummary = () => {
    const summary = `TALLAT MAAN - Computer Operator & Graphic Designer\nPhone: ${personalInfo.phone}\nEmail: ${personalInfo.email}\nExperience: 4 Years at The Trust School (2023-2026)\nSkills: MS Office, InPage, CorelDRAW, Adobe Photoshop, Illustrator, Premiere Pro, After Effects\nAddress: ${personalInfo.address}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-slate-950/90 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" />
            <span className="font-bold text-white text-sm sm:text-base font-display">
              Curriculum Vitae Preview – Tallat Maan
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              title="Copy Summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownloadTextCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              title="Download Text CV"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Text CV</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-sm"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Scrollable Content Box (Also target for printing) */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-slate-950">
          
          <div 
            id="printable-cv"
            className="max-w-3xl mx-auto bg-white text-slate-900 rounded-xl p-8 sm:p-12 shadow-2xl border border-slate-200"
          >
            {/* CV Header: Two columns */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-6 border-b-2 border-slate-900 gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display uppercase">
                  TALLAT MAAN
                </h1>
                <p className="text-base sm:text-lg font-bold text-sky-700 mt-1 uppercase tracking-wide">
                  Computer Operator | Graphic Designer
                </p>
                <p className="text-xs text-slate-600 max-w-md mt-2 leading-relaxed italic">
                  &ldquo;{heroDetails.quote}&rdquo;
                </p>
              </div>

              {/* Photo & Quick Contacts */}
              <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 shrink-0">
                <img
                  src={heroDetails.avatarUrl}
                  alt="Tallat Maan"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border-2 border-slate-900 shadow-md"
                />
                <div className="text-left sm:text-right text-xs text-slate-600 space-y-0.5">
                  <div className="font-semibold text-slate-900">{personalInfo.phone}</div>
                  <div className="text-slate-600">{personalInfo.email}</div>
                  <div className="text-slate-500">Lahore, Punjab</div>
                </div>
              </div>
            </div>

            {/* Personal Information Table */}
            <div className="my-6">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-3 border-b border-slate-300">
                Personal Information
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Father&apos;s Name:</span>
                  <span className="font-bold text-slate-900">{personalInfo.fatherName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Date of Birth:</span>
                  <span className="font-bold text-slate-900">{personalInfo.dateOfBirth}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Marital Status:</span>
                  <span className="font-bold text-slate-900">{personalInfo.maritalStatus}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Domicile:</span>
                  <span className="font-bold text-slate-900">{personalInfo.domicile}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Nationality:</span>
                  <span className="font-bold text-slate-900">{personalInfo.nationality}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block">Address:</span>
                  <span className="font-bold text-slate-900 leading-tight block">{personalInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="my-6">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-3 border-b border-slate-300">
                Work Experience
              </h2>
              <div className="space-y-3">
                {experienceData.map((exp, i) => (
                  <div key={i} className="text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                      <span className="text-sm text-sky-900">{exp.position}</span>
                      <span className="text-slate-600 font-medium">{exp.duration}</span>
                    </div>
                    <div className="text-slate-700 font-semibold mb-1">
                      {exp.institution} – {exp.location}
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-2">
                      {exp.experienceSpan}. {exp.description}
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      {exp.keyResponsibilities.slice(0, 4).map((res, idx) => (
                        <li key={idx} className="leading-relaxed">{res}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="my-6">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-3 border-b border-slate-300">
                Education
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[11px] font-bold text-sky-700 block">{edu.duration}</span>
                    <h3 className="font-bold text-slate-900 text-xs mt-0.5">{edu.degree}</h3>
                    <p className="text-slate-600 text-[11px]">{edu.institution}</p>
                    {edu.subject && (
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                        Subject: {edu.subject}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills & Languages */}
            <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-3 border-b border-slate-300">
                  Professional Skills
                </h2>
                <div className="space-y-2 text-xs">
                  {skillsData.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-1">
                      <span className="font-semibold text-slate-800">{s.name}</span>
                      <span className="font-bold text-sky-700">{s.level}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-3 border-b border-slate-300">
                  Languages & Fluency
                </h2>
                <div className="space-y-2 text-xs mb-4">
                  {languagesData.map((l, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-1">
                      <span className="font-semibold text-slate-800">{l.name}</span>
                      <span className="font-bold text-sky-700">{l.percentage}% ({l.level})</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-1 mb-2 border-b border-slate-300">
                  Hobbies & Interests
                </h2>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                  <span className="px-2 py-0.5 bg-slate-100 rounded">Cricket</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded">Football</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded">Computer Gaming</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
