'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import { TEAM_WORKS } from './projects/data';

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

/* ─── animated counter ─── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [visible, to]);
  return <span ref={ref}>{count}{suffix}</span>;
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

/* ─── Data ─── */
const services = [
  {
    icon: 'ri-search-line',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.35)',
    title: 'SEO & Analytics',
    desc: 'Technical SEO, keyword research, and data-driven optimization to improve search rankings and organic traffic.',
    features: ['Technical SEO Audit', 'Keyword Research', 'Analytics & Reporting'],
  },
  {
    icon: 'ri-pencil-line',
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(139,92,246,0.35)',
    title: 'Content Strategy',
    desc: 'Creating content strategies that build brand authority, drive engagement and achieve measurable results.',
    features: ['Content Strategy', 'Content Optimization', 'Performance Tracking'],
  },
  {
    icon: 'ri-megaphone-line',
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.35)',
    title: 'Paid & Lifestyle Marketing',
    desc: 'Multi-channel campaigns including Google Ads, Meta Ads, SMS/email, and lead generation with measurable ROI.',
    features: ['PPC Marketing', 'Email & SMS Campaigns', 'Conversion Optimization'],
  },
];

const projects = [
  {
    title: 'CHANGAN Deepal Marketing Campaign',
    desc: 'Executed national SMS campaign reaching 80,000+ recipients and coordinated on-ground activation for 10,000+ attendees at NADA Auto Show.',
    tags: ['Brand Activation', 'Event Management', 'Influencer Coordination', 'SMS Marketing'],
    accent: '#3b82f6',
  },
  {
    title: 'Zegal Global SEO Optimization',
    desc: 'Led international SEO across 5 markets, built 6,730+ backlinks, and boosted monthly traffic by 45% (13,000→18,900 visitors).',
    tags: ['International SEO', 'Link Building', 'Analytics'],
    accent: '#10b981',
  },
  {
    title: 'Lalpurja Nepal Digital Growth',
    desc: 'Generated 1,172+ qualified leads through targeted campaigns. Grew social media engagement by 40%.',
    tags: ['Lead Generation', 'Content Strategy', 'Paid Ads'],
    accent: '#8b5cf6',
  },
];

const blogPosts = [
  {
    title: 'Why Luxury Brands Don\'t Sell — They Make You Feel',
    excerpt: 'We dive into how luxury brands use consumer psychology to create desire rather than just selling products.',
    date: 'Dec 10, 2024',
    category: 'Insights',
  },
  {
    title: 'How Data-Driven SEO Changed My Approach to Content',
    excerpt: 'What happens when you stop guessing keywords and start listening to what the data is actually telling you.',
    date: 'Dec 16, 2024',
    category: 'SEO',
  },
  {
    title: 'The Art of Brand Storytelling in the Digital Age',
    excerpt: 'Great marketing isn\'t about selling — it\'s about creating a narrative your audience wants to be part of.',
    date: 'Dec 16, 2024',
    category: 'Strategy',
  },
];

const stats = [
  { value: 45, suffix: '%', label: 'Organic Traffic Growth' },
  { value: 6730, suffix: '+', label: 'Backlinks Added' },
  { value: 1300, suffix: '+', label: 'Leads Generated' }, // Increased from 1172 to 1300+
  { value: 4, suffix: '+', label: 'Years Experience' },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* Background blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left - Text */}
            <div>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                  Dipendra
                </span>
                <br />
                <span className="text-gray-300 text-4xl sm:text-5xl lg:text-6xl">
                  Bhatta
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
                  Digital Marketing Specialist with 4+ years driving international SEO and lead-generation strategy for B2B and consumer brands across Asia-Pacific markets.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 border-0 shadow-lg shadow-blue-900/40">
                    View My Work
                    <i className="ri-arrow-right-line ml-2" />
                  </Button>
                </Link>
                <a href="/Dipendra_Bhatta_Resume_August.pdf" download>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5">
                    Download CV
                    <i className="ri-download-line ml-2" />
                  </Button>
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  { icon: 'ri-linkedin-box-fill', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dipendra-bhatta-/' },
                  { icon: 'ri-instagram-line', label: 'Instagram', href: 'https://www.instagram.com/dipendrabhattaofficial/' },
                  { icon: 'ri-medium-fill', label: 'Medium', href: 'https://medium.com/@dipendrabhattadigitalmarketing' },
                  { icon: 'ri-mail-line', label: 'Email', href: 'mailto:akashbhatta014@gmail.com' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <i className={`${s.icon} text-lg`} />
                    <span className="hidden sm:inline">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Profile Image with Rings - No Particles */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
                
                {/* Background glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-2xl animate-pulse-soft" />
                
                {/* Rotating Outer Ring - Clockwise */}
                <div className="absolute inset-2 rounded-full border border-blue-500/15 animate-spin-slow pointer-events-none" />
                
                {/* Rotating Inner Ring - Counter-Clockwise */}
                <div className="absolute inset-8 rounded-full border border-blue-400/10 animate-spin-slow-reverse pointer-events-none" />

                {/* Medium Ring - Clockwise */}
                <div className="absolute inset-4 rounded-full border border-blue-500/5 animate-spin-slow pointer-events-none" style={{ animationDuration: '35s' }} />

                {/* Profile Image */}
                <div className="absolute inset-10 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-900/50 bg-navy-light/50">
                    <img
                      src="/images/dipendra_bhatta_digital_marketing_Specialist.jpeg"
                      alt="Dipendra Bhatta - Digital Marketing Specialist"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
                    
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
                  </div>
                </div>

                {/* Title below image */}
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                  <p className="text-xs text-gray-400 tracking-wider">Digital Marketing Specialist</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-pulse-soft">
          <span>Scroll</span>
          <i className="ri-arrow-down-line text-base" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════ */}
      <section className="border-y border-white/8 bg-navy-light/60 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80}>
              <p className="font-heading text-4xl font-bold text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16 text-center">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">What I Do</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold">Services That Drive Growth</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <div
                  className="group relative h-full rounded-2xl border border-white/8 bg-navy-light/50 p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  style={{ '--glow': s.glow } as React.CSSProperties}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${s.glow}, transparent 70%)` }}
                  />

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <i className={`${s.icon} text-2xl text-white`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-white">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((feature) => (
                      <li key={feature} className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Service <i className="ri-arrow-right-line" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-light/40">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          </FadeIn>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="group relative rounded-2xl border border-white/8 bg-navy-light/50 p-8 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: p.accent }}
                  />
                  <div className="relative z-10 pl-4">
                    <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 mb-4 max-w-2xl leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-3 py-1 rounded-full border"
                          style={{ borderColor: `${p.accent}40`, color: p.accent, background: `${p.accent}15` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href="/projects">
                      <button
                        className="flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: p.accent }}
                      >
                        Read More <i className="ri-arrow-right-line" />
                      </button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INSIGHTS & STRATEGY (BLOG)
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Insights</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold">Insights & Strategy</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.title} delay={i * 100}>
                <Link href="/blog">
                  <div className="group h-full rounded-2xl border border-white/8 bg-navy-light/50 p-7 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/8">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1 text-blue-400 group-hover:gap-2 transition-all">
                        Read More <i className="ri-arrow-right-line" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INSTAGRAM SHOWCASE
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-light/20">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <i className="ri-instagram-line text-3xl text-pink-500" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Some of my work
            </h2>
            <a
              href="https://www.instagram.com/dipendrabhattaofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
            >
              Follow @dipendrabhatta
              <i className="ri-arrow-right-line" />
            </a>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {TEAM_WORKS.map((work, i) => (
              <FadeIn key={work.id} delay={(i % 4) * 100}>
                <a
                  href={work.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-white/10 hover:border-pink-500/30 transition-all duration-500 group-hover:scale-105">
                    <img
                      src={work.image}
                      alt={work.description}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="ri-instagram-line text-3xl text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-xs font-medium truncate">{work.description}</p>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-900/40 via-navy-light to-navy p-12 text-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/20 blur-3xl rounded-full" />
              </div>
              <div className="relative z-10">
                <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Focus Plan Execute Repeat</p>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                  Let's build something <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    amazing together
                  </span>
                </h2>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                  Got a project in mind? I'm currently available for freelance projects and full-time opportunities.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="px-10 bg-blue-600 hover:bg-blue-500 border-0 shadow-lg shadow-blue-900/40 transition-all duration-300 hover:-translate-y-0.5">
                    Start a Project
                    <i className="ri-arrow-right-line ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}