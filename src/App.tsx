/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  Globe, 
  ExternalLink, 
  FileText, 
  Users, 
  BookOpen, 
  Layers, 
  Info,
  Menu,
  X
} from 'lucide-react';
import { NEWS_DATA, PUBLICATIONS_DATA, PROJECTS_DATA, MEMBERS_DATA } from './constants';
import { PublicationType } from './types';
import ChatBot from './components/ChatBot';

type Section = 'About' | 'Publications' | 'Projects' | 'Members';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('About');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveSection('About')}>
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold">A</div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold tracking-tight">AVIS Lab</span>
                <span className="text-[10px] text-zinc-500 font-medium hidden lg:block">Autonomous Vision & Intelligent Systems</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {(['About', 'Publications', 'Projects', 'Members'] as Section[]).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-zinc-900 ${
                    activeSection === section ? 'text-zinc-900 border-b-2 border-zinc-900' : 'text-zinc-500'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                {(['About', 'Publications', 'Projects', 'Members'] as Section[]).map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left text-lg font-medium text-zinc-600 hover:text-zinc-900"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeSection === 'About' && <AboutSection />}
            {activeSection === 'Publications' && <PublicationsSection />}
            {activeSection === 'Projects' && <ProjectsSection />}
            {activeSection === 'Members' && <MembersSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-display text-lg font-bold mb-4">AVIS Lab</h3>
              <p className="text-sm leading-relaxed">
                Autonomous Vision & Intelligent Systems Laboratory. Advancing the frontiers of artificial intelligence and human-computer interaction through rigorous research and innovative systems.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <p className="text-sm">123 University Ave, Science Building</p>
              <p className="text-sm">City, State 12345</p>
              <p className="text-sm mt-2">Email: contact@lab.university.edu</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 text-xs text-center">
            &copy; {new Date().getFullYear()} AVIS Lab. All rights reserved.
          </div>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
}

function AboutSection() {
  const slides = [
    //{ url: 'https://picsum.photos/seed/lab1/1920/1080', title: 'State-of-the-Art Research' },
    { url: '/photo/main1.png'},
    { url: 'https://picsum.photos/seed/lab2/1920/1080', title: 'Collaborative Environment' },
    { url: 'https://picsum.photos/seed/lab3/1920/1080', title: 'Innovation in Action' },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Slider */}
      <div className="relative h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].url} 
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-6xl font-display font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg md:text-xl font-light max-w-2xl mx-auto"
                >
                  Pushing the boundaries of knowledge through interdisciplinary excellence.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold">Latest News</h2>
          <div className="h-px flex-grow mx-8 bg-zinc-200 hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_DATA.map((news) => (
            <div key={news.id} className="group cursor-pointer">
              <div className="text-xs font-mono text-zinc-400 mb-2">{news.date}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-zinc-600 transition-colors">{news.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
                {news.content}
              </p>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-zinc-600 transition-colors"
              >
                Read More <ChevronRight size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-3xl shadow-sm border border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">Our Mission</span>
            <h2 className="text-4xl font-display font-bold mb-6">Pioneering the Future of Intelligence</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Our laboratory is dedicated to exploring the fundamental principles of intelligence and developing technologies that enhance human capabilities. We bring together experts from computer science, cognitive psychology, and engineering to tackle some of the most challenging problems in AI today.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-zinc-100 rounded-lg"><BookOpen size={20} /></div>
                <div>
                  <h4 className="font-bold text-sm">Excellence</h4>
                  <p className="text-xs text-zinc-500">Rigorous academic standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-zinc-100 rounded-lg"><Users size={20} /></div>
                <div>
                  <h4 className="font-bold text-sm">Community</h4>
                  <p className="text-xs text-zinc-500">Diverse and inclusive group</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/lab-team/800/600" 
              alt="Lab Team" 
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 text-white p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Active Researchers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PublicationsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<PublicationType | 'All'>('All');

  const filteredPubs = PUBLICATIONS_DATA.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filter === 'All' || pub.type === filter;
    return matchesSearch && matchesFilter;
  });

  const types: (PublicationType | 'All')[] = ['All', 'Journal', 'Conference', 'Workshop', 'Preprint'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold mb-4">Publications</h1>
        <p className="text-zinc-500 max-w-2xl">
          Our research is published in top-tier venues across machine learning, computer vision, and robotics.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === t 
                  ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-900/20' 
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {filteredPubs.length > 0 ? (
          filteredPubs.map((pub) => (
            <motion.div
              layout
              key={pub.id}
              className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                      pub.type === 'Journal' ? 'bg-emerald-100 text-emerald-700' :
                      pub.type === 'Conference' ? 'bg-blue-100 text-blue-700' :
                      pub.type === 'Preprint' ? 'bg-amber-100 text-amber-700' :
                      'bg-zinc-100 text-zinc-700'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 leading-tight">{pub.title}</h3>
                  <p className="text-sm text-zinc-600">
                    {pub.authors.map((author, idx) => (
                      <span key={idx} className={author === 'Lab Member' ? 'font-bold text-zinc-900' : ''}>
                        {author}{idx < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                  <p className="text-sm italic text-zinc-500">{pub.venue}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-zinc-50 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-600"
                      title="View Link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a 
                    href={pub.pdfUrl || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-50 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-600"
                    title="Download PDF"
                  >
                    <FileText size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-zinc-200">
            <div className="text-zinc-400 mb-2"><Search size={48} className="mx-auto opacity-20" /></div>
            <p className="text-zinc-500">No publications found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold mb-4">Research Projects</h1>
        <p className="text-zinc-500 max-w-2xl">
          Exploring diverse domains from fundamental machine learning theory to practical robotic systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  project.status === 'Ongoing' ? 'bg-emerald-500 text-white' : 'bg-zinc-500 text-white'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-zinc-600 transition-colors">{project.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-zinc-900 group-hover:translate-x-2 transition-transform"
              >
                Learn More <ChevronRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembersSection() {
  const [activeTab, setActiveTab] = useState<'Faculty' | 'Students'>('Faculty');

  const faculty = MEMBERS_DATA.filter(m => m.category === 'Faculty');
  const students = MEMBERS_DATA.filter(m => m.category === 'Students');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Our Members</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          A diverse group of researchers committed to excellence and innovation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-16">
        <div className="bg-zinc-100 p-1 rounded-2xl flex">
          {(['Faculty', 'Students'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-white text-zinc-900 shadow-sm' 
                  : 'text-zinc-500 hover:text-zinc-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <AnimatePresence mode="wait">
          {(activeTab === 'Faculty' ? faculty : students).map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover" // grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="p-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-colors">
                      <Mail size={14} />
                    </a>
                  )}
                  {member.website && (
                    <a 
                      href={member.website} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-colors"
                    >
                      <Globe size={14} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">{member.name}</h3>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">{member.role}</div>
              <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
                {member.description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
