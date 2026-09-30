import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff5e36] text-white font-black text-xs tracking-widest uppercase border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] mb-3">
            PROJECTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 font-heading tracking-tight">
            Selected Work
          </h2>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {projects.map((project, idx) => {
            const hasGithub = Boolean(project.github && project.github.trim() !== "");
            const hasDemo = Boolean(project.demo && project.demo.trim() !== "");

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="creative-block p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-300 border-2 border-slate-900 flex items-center justify-center mb-6 shadow-[3px_3px_0px_#0f172a]">
                    <FolderGit2 className="w-6 h-6 text-slate-900" />
                  </div>

                  <h3 className="text-3xl font-black text-slate-900 mb-3 font-heading">
                    {project.title}
                  </h3>

                  <p className="text-slate-700 font-semibold text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-slate-100 border-2 border-slate-900 text-xs font-black text-slate-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t-2 border-slate-900">
                  {hasGithub && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl btn-bold-secondary text-xs flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>CODE</span>
                    </a>
                  )}

                  {hasDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl btn-bold-primary text-xs flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>DEMO</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
