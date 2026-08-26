'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { TEAM_WORKS } from './data';

/* ─── tiny hook: reveals element when it enters viewport ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Section fade-in wrapper ─── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 'changan-deepal',
      title: 'CHANGAN Deepal',
      subtitle: 'Marketing Campaign',
      desc: 'Executed national SMS campaign reaching 80,000+ recipients and coordinated on-ground activation for 10,000+ attendees at NADA Auto Show.',
      tags: ['Brand Activation', 'Event Management', 'Influencer Coordination', 'SMS Marketing'],
      accent: '#3b82f6',
      logo: '/images/projects/changan.jpg',
      stats: [
        { label: 'SMS Reach', value: '80,000+' },
        { label: 'Event Attendees', value: '10,000+' },
      ],
    },
    {
      id: 'zegal-seo',
      title: 'Zegal',
      subtitle: 'Global SEO',
      desc: 'Led international SEO across 5 markets. Built 6,730+ backlinks, boosted traffic by 45% (13,000→18,900 visitors).',
      tags: ['International SEO', 'Technical SEO', 'Link Building', 'Analytics'],
      accent: '#10b981',
      logo: '/images/projects/zegal.png',
      stats: [
        { label: 'Backlinks', value: '6,730+' },
        { label: 'Traffic Growth', value: '45%' },
      ],
    },
    {
      id: 'lalpurja-nepal',
      title: 'Lalpurja Nepal',
      subtitle: 'Digital Growth',
      desc: 'Generated 1,172+ qualified leads (1,000+ property inquiries, 172 hires) through targeted paid and organic campaigns.',
      tags: ['Lead Generation', 'Content Strategy', 'Paid Ads', 'Social Media'],
      accent: '#8b5cf6',
      logo: '/images/projects/lalpurja.png',
      stats: [
        { label: 'Qualified Leads', value: '1,172+' },
        { label: 'Engagement Growth', value: '40%' },
      ],
    },
    {
      id: 'somtu-vmag',
      title: 'SOMTU Digital Marketing',
      subtitle: 'Social Media',
      desc: 'Grew social media following by 340% in 2 months. Led 6 departments and 24 team members.',
      tags: ['Social Media', 'Team Leadership', 'Content Strategy', 'Growth'],
      accent: '#f59e0b',
      logo: '/images/projects/vmag.jpg',
      stats: [
        { label: 'Followers Growth', value: '340%' },
        { label: 'Team Members', value: '24' },
      ],
    },
    {
      id: 'bernhardt-college',
      title: 'Bernhardt',
      subtitle: 'Digital Strategy',
      desc: 'Grew Facebook views 264% and Instagram views from 9.2K to 70K+. Generated 89+ leads at ~$1.01/lead.',
      tags: ['Paid Ads', 'Social Media', 'Lead Generation', 'Analytics'],
      accent: '#ef4444',
      logo: '/images/projects/bernhardt.png',
      stats: [
        { label: 'Facebook Views', value: '264%' },
        { label: 'Instagram Views', value: '9.2K→70K+' },
      ],
    },
    {
      id: 'happy-mountain',
      title: 'Happy Mountain Nepal',
      subtitle: 'Content Strategy',
      desc: 'Directed content strategy for a team of writers producing SEO-optimized blogs and landing pages.',
      tags: ['Content Strategy', 'SEO', 'Social Media', 'Website Design'],
      accent: '#ec4899',
      logo: '/images/projects/happymountain.jpeg',
      stats: [
        { label: 'Content Team', value: '4+' },
        { label: 'Website Revamp', value: '100%' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-navy text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 max-w-xl text-lg">
            A collection of projects and campaigns I've led across digital marketing, SEO, and brand strategy.
          </p>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Link href={`/projects/${project.id}`}>
                <div className="group relative rounded-2xl border border-white/8 bg-navy-light/50 overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/5 h-full flex flex-col cursor-pointer">
                  
                  {/* Logo Section */}
                  <div className="relative h-52 w-full bg-gradient-to-br from-navy-light to-navy overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
                    {project.logo ? (
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          style={{ maxHeight: '80%', maxWidth: '80%' }}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <i className="ri-folder-image-line text-5xl text-gray-600" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy via-navy/50 to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 flex-1 flex flex-col">
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: project.accent }} />
                    
                    <div className="pl-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-heading text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                          {project.subtitle}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-0.5 rounded-full border"
                            style={{
                              borderColor: `${project.accent}30`,
                              color: project.accent,
                              background: `${project.accent}10`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs text-gray-500">+{project.tags.length - 3}</span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 mb-3 text-xs">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <span className="text-white font-semibold">{stat.value}</span>
                            <span className="text-gray-500">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium transition-all hover:gap-3 mt-auto" style={{ color: project.accent }}>
                        View Project Details
                        <i className="ri-arrow-right-line" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}