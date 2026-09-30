import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Copy, Check } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0f172a] text-white font-black text-xs tracking-widest uppercase mb-3 shadow-[3px_3px_0px_#ff5e36]">
            CONTACT
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 font-heading tracking-tight">
            {contact.title}
          </h2>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="creative-block p-8 sm:p-10"
          >
            {/* Email Bar */}
            <div className="p-4 rounded-2xl bg-slate-100 border-2 border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#ff5e36] shrink-0" />
                <span className="text-base sm:text-xl font-mono font-black text-slate-900">
                  {contact.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-2.5 rounded-xl btn-bold-primary text-xs uppercase font-extrabold flex items-center gap-2 self-end sm:self-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channel Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="p-5 rounded-2xl bg-amber-300 border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] flex flex-col items-center justify-center gap-2 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Mail className="w-6 h-6 text-slate-900" />
                <span className="text-xs font-black text-slate-900 uppercase">Email</span>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="p-5 rounded-2xl bg-cyan-300 border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] flex flex-col items-center justify-center gap-2 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Phone className="w-6 h-6 text-slate-900" />
                <span className="text-xs font-black text-slate-900 uppercase">Call</span>
              </a>

              <a
                href={`https://wa.me/${contact.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-emerald-300 border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] flex flex-col items-center justify-center gap-2 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <MessageSquare className="w-6 h-6 text-slate-900" />
                <span className="text-xs font-black text-slate-900 uppercase">WhatsApp</span>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-purple-300 border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] flex flex-col items-center justify-center gap-2 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <GithubIcon className="w-6 h-6 text-slate-900" />
                <span className="text-xs font-black text-slate-900 uppercase">GitHub</span>
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
