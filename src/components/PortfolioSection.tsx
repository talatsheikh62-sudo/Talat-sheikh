import React, { useState } from 'react';
import { 
  Plus, 
  ExternalLink, 
  X, 
  Check, 
  Image as ImageIcon, 
  Calendar, 
  Tag, 
  FolderPlus,
  Layers,
  Sparkles,
  Palette
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { initialProjects } from '../data/portfolioData';

export const PortfolioSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(() => {
    // Check localStorage for any added projects
    try {
      const saved = localStorage.getItem('tallat_portfolio_projects');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return initialProjects;
  });

  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form state for adding project
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ProjectCategory>('graphic-design');
  const [newSoftware, setNewSoftware] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newDeliverables, setNewDeliverables] = useState('');

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'photoshop', label: 'Photoshop' },
    { id: 'illustrator', label: 'Illustrator' },
    { id: 'coreldraw', label: 'CorelDRAW' },
    { id: 'video-editing', label: 'Video Editing' },
    { id: 'office-work', label: 'Office & InPage' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) return;

    const categoryLabels: Record<ProjectCategory, string> = {
      'all': 'All Projects',
      'graphic-design': 'Graphic Design',
      'photoshop': 'Adobe Photoshop',
      'illustrator': 'Adobe Illustrator',
      'coreldraw': 'CorelDRAW Projects',
      'video-editing': 'Video Editing',
      'office-work': 'Computer Office Work'
    };

    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      categoryLabel: categoryLabels[newCategory] || 'Design',
      software: newSoftware ? newSoftware.split(',').map(s => s.trim()) : ['Adobe Creative Suite'],
      description: newDescription,
      image: newImage.trim() || '/src/assets/images/portfolio_photoshop_design_1794058644157.jpg',
      client: newClient.trim() || 'Private Client',
      duration: '1 Week',
      deliverables: newDeliverables 
        ? newDeliverables.split(',').map(d => d.trim()) 
        : ['Final High-Res Output', 'Source Files'],
      featured: false
    };

    const updated = [newProj, ...projects];
    setProjects(updated);
    try {
      localStorage.setItem('tallat_portfolio_projects', JSON.stringify(updated));
    } catch {
      // storage unavailable
    }

    // Reset form
    setNewTitle('');
    setNewSoftware('');
    setNewClient('');
    setNewDescription('');
    setNewImage('');
    setNewDeliverables('');
    setIsAddModalOpen(false);
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-xs font-semibold text-sky-400 mb-3">
              <span>PROJECT SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              Featured Portfolio & Client Works
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Curated gallery across graphic design, Photoshop manipulation, Illustrator vector art, CorelDRAW print production, video timelines, and Urdu InPage office automation.
            </p>
          </div>

          {/* Add Project CTA Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-md shadow-sky-600/20 active:scale-95 self-start md:self-auto shrink-0"
          >
            <FolderPlus className="w-4 h-4" />
            <span>Add New Project</span>
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {filterTabs.map((tab) => {
            const count = tab.id === 'all' 
              ? projects.length 
              : projects.filter(p => p.category === tab.id).length;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  activeFilter === tab.id
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/25'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === tab.id ? 'bg-sky-800/60 text-sky-100' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if custom user image fails to load
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Software Pills */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.software.slice(0, 2).map((s, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md text-[10px] font-semibold text-sky-300 border border-slate-700/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Category Chip */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm border border-slate-700">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors font-display line-clamp-1 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
                    <span>Client: <strong className="text-slate-300">{project.client}</strong></span>
                    <span className="inline-flex items-center gap-1 text-sky-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                      <span>View Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800 p-8">
            <Layers className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white">No projects found in this category</h4>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Add your first project to this collection or switch to &quot;All Projects&quot; to view completed work.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 text-xs font-semibold text-sky-400 bg-sky-950 border border-sky-800 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800">
              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Main Showcase Image */}
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[16/9] w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Client / Organization</span>
                  <span className="font-bold text-white">{selectedProject.client || 'Private Client'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Turnaround Time</span>
                  <span className="font-bold text-white">{selectedProject.duration || 'Completed'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Category</span>
                  <span className="font-bold text-sky-400">{selectedProject.categoryLabel}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project Overview & Scope
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tools & Software Used */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Software Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.software.map((sw, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg bg-sky-950/80 border border-sky-800/80 text-xs font-semibold text-sky-300"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              {selectedProject.deliverables && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Interested in a similar design or office automation project?
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors whitespace-nowrap"
              >
                Inquire With Tallat
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Add New Project Modal */}
      {isAddModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <h3 className="text-xl font-bold text-white font-display">Add Portfolio Project</h3>
                <p className="text-xs text-slate-400">Upload or document your graphic design and office work</p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Annual School Magazine & InPage Urdu Layout"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Category *</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as ProjectCategory)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="graphic-design">Graphic Design</option>
                    <option value="photoshop">Adobe Photoshop</option>
                    <option value="illustrator">Adobe Illustrator</option>
                    <option value="coreldraw">CorelDRAW Projects</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="office-work">Computer Office Work</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Client / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. The Trust School"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Software Used (Comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Adobe Illustrator, CorelDRAW, InPage"
                  value={newSoftware}
                  onChange={(e) => setNewSoftware(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Deliverables (Comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. 300 DPI Print File, Source Vector, PDF Document"
                  value={newDeliverables}
                  onChange={(e) => setNewDeliverables(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Preview Image URL (Optional)</label>
                <input
                  type="url"
                  placeholder="Paste direct image URL or leave blank for design mockup"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explain the client problem, creative solution, and tools executed..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
