import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Copy, 
  Clock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Graphic Design & Branding');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Build the WhatsApp and Mailto pre-filled content
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Tallat Maan,\n\nMy name is ${name || 'a visitor'}.\nEmail: ${email || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nInterested in: ${service}\n\nMessage:\n${message || 'I would like to discuss a job/design project with you.'}`
    );
    return `https://wa.me/${personalInfo.whatsappNumber}?text=${text}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Client'}: ${service}`);
    const body = encodeURIComponent(
      `Dear Tallat Maan,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}\n\nRegards,\n${name}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-xs font-semibold text-sky-400 mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Let&apos;s Discuss Your Project or Job Opportunity
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Open for full-time computer operator roles, graphic design appointments, and freelance creative commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-display mb-4">
              Direct Contact Channels
            </h3>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start justify-between gap-4 group hover:border-sky-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Direct Phone Call</span>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-base font-bold text-white hover:text-sky-300 transition-colors block mt-0.5"
                  >
                    {personalInfo.phone}
                  </a>
                  <span className="text-[11px] text-slate-400">Available 9:00 AM – 8:00 PM PKT</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition-colors"
                  title="Copy Phone Number"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start justify-between gap-4 group hover:border-sky-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Official Email Address</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold text-white hover:text-sky-300 transition-colors block mt-0.5 break-all"
                  >
                    {personalInfo.email}
                  </a>
                  <span className="text-[11px] text-slate-400">Response within 24 hours</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition-colors"
                  title="Copy Email"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold"
                >
                  Email
                </a>
              </div>
            </div>

            {/* WhatsApp Quick Chat Card */}
            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex items-start justify-between gap-4 group hover:border-emerald-600/70 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-medium block">Instant WhatsApp Chat</span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    {personalInfo.phoneFormatted}
                  </span>
                  <span className="text-[11px] text-slate-400">Fastest way to share project briefs</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=Hello%20Tallat,%20I%20would%20like%20to%20discuss%20a%20work%20opportunity.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0 self-center"
              >
                Chat Now
              </a>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">Residential & Work Address</span>
                <p className="text-sm font-bold text-white mt-0.5">
                  {personalInfo.address}
                </p>
                <span className="text-[11px] text-slate-400">Lahore, Punjab, Pakistan</span>
              </div>
            </div>

            {/* Copy Notification Toast */}
            {copiedText && (
              <div className="p-3 rounded-xl bg-sky-950 border border-sky-800 text-sky-300 text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Copied {copiedText} to clipboard!</span>
              </div>
            )}

          </div>

          {/* Right Column: Interactive Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 shadow-2xl">
              
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white font-display">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the form below to reach Tallat directly via email or one-click WhatsApp dispatch.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-300 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Muhammad Ahmad"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-300 mb-1.5">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 0300 1234567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-300 mb-1.5">
                          Service / Opportunity Type
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-sky-500 transition-colors"
                        >
                          <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                          <option value="Adobe Photoshop & Poster Art">Adobe Photoshop & Poster Art</option>
                          <option value="Adobe Illustrator Vector Logo">Adobe Illustrator Vector Logo</option>
                          <option value="CorelDRAW Flex & Printing">CorelDRAW Flex & Printing</option>
                          <option value="Video Editing & Premiere Pro">Video Editing & Premiere Pro</option>
                          <option value="Urdu InPage DTP & Office Work">Urdu InPage DTP & Office Work</option>
                          <option value="Full-Time Employment Inquiry">Full-Time Employment Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        Your Message / Project Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell Tallat about your project, timeline, organization, or questions..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 resize-none transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                      <button
                        type="submit"
                        className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-sky-600/20 active:scale-95 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </button>

                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-800 text-emerald-300 font-bold text-xs transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Thank You, {name}!
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formulated. You can dispatch it directly through your preferred channel right now:
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/30"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp (Instant)</span>
                    </a>

                    <a
                      href={getMailtoLink()}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-600/30"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send as Official Email</span>
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
