'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

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

/* ─── data ─── */
const services = [
  {
    icon: 'ri-search-eye-line',
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59,130,246,0.35)',
    title: 'Search Engine Optimization',
    desc: 'Data-driven SEO strategies that build sustainable digital growth — from keyword research and technical audits to link building that converts.',
  },
  {
    icon: 'ri-quill-pen-line',
    color: 'from-emerald-500 to-teal-700',
    glow: 'rgba(16,185,129,0.35)',
    title: 'Content Strategy & Optimization',
    desc: 'Compelling brand stories that blend creativity with analytics, strengthen voice, boost engagement, and turn ideas into measurable results.',
  },
  {
    icon: 'ri-mic-2-line',
    color: 'from-purple-500 to-violet-700',
    glow: 'rgba(139,92,246,0.35)',
    title: 'Podcast Production',
    desc: 'End-to-end podcast setup — concept to launch. Authentic audio experiences that build trust, authority, and a loyal community around your brand.',
  },
];

const projects = [
  {
    title: 'CHANGAN Deepal Marketing Campaign',
    desc: 'Executed BTL campaigns for Nepal\'s premium EV brand including NADA Auto Show. Coordinated with top influencers and managed live brand engagement for 10,000+ attendees.',
    tags: ['Brand Activation', 'Experiential Marketing', 'Influencer Coordination'],
    accent: '#3b82f6',
    num: '01',
  },
  {
    title: 'Zegal Global SEO Optimization',
    desc: 'Led international SEO across HK, SG, UK, AU & NZ. Grew domain authority from 54→60, built 6,730+ backlinks, and boosted monthly traffic by 45%.',
    tags: ['Technical SEO', 'Data Analytics', 'Link Building'],
    accent: '#10b981',
    num: '02',
  },
  {
    title: 'Lalpurja Nepal Digital Growth',
    desc: 'Generated 1,000+ property leads and 172 hiring leads through optimised ad campaigns and multi-platform content strategies. Boosted engagement 40%.',
    tags: ['Lead Generation', 'SEO', 'Social Media Marketing'],
    accent: '#8b5cf6',
    num: '03',
  },
];

const posts = [
  {
    title: 'How Data-Driven SEO Changed My Approach to Content',
    excerpt: 'What happens when you stop guessing keywords and start listening to what the data is actually telling you.',
    date: 'Dec 15, 2024',
    readTime: '5 min',
    category: 'SEO',
  },
  {
    title: 'The Art of Brand Storytelling in the Digital Age',
    excerpt: 'Great marketing isn\'t about selling — it\'s about creating a narrative your audience wants to be part of.',
    date: 'Dec 10, 2024',
    readTime: '7 min',
    category: 'Content Strategy',
  },
  {
    title: 'Why Every Brand Needs a Podcast Strategy in 2025',
    excerpt: 'Audio is the last intimate medium. Here\'s why podcasting is the highest-trust channel available to marketers today.',
    date: 'Dec 5, 2024',
    readTime: '6 min',
    category: 'Podcast',
  },
];

const stats = [
  { value: 45, suffix: '%', label: 'Avg. Traffic Growth' },
  { value: 6730, suffix: '+', label: 'Backlinks Built' },
  { value: 1000, suffix: '+', label: 'Leads Generated' },
  { value: 5, suffix: '+', label: 'Years Experience' },
];

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
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* Parallax background blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[100px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8"
                style={{ animation: 'welcome-enter-anim 600ms ease forwards' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
              </div>

              <h1
                className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
                style={{ animation: 'welcome-enter-anim 600ms ease 100ms both forwards' }}
              >
                Hi, I'm{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                    Dipendra
                  </span>
                </span>
                <br />
                <span className="text-gray-300 text-4xl sm:text-5xl lg:text-6xl">
                  Bhatta
                </span>
              </h1>

              <p
                className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl"
                style={{ animation: 'welcome-enter-anim 600ms ease 200ms both forwards' }}
              >
                A <span className="text-white font-medium">Digital Marketing Specialist</span> who blends
                creativity and analytics to craft campaigns that genuinely connect
                brands with people — and move the needle.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{ animation: 'welcome-enter-anim 600ms ease 300ms both forwards' }}
              >
                <Link href="/projects">
                  <Button size="lg" className="w-full sm:w-auto px-8 bg-blue-600 hover:bg-blue-500 border-0 shadow-lg shadow-blue-900/40 transition-all duration-300 hover:-translate-y-0.5">
                    View My Work
                    <i className="ri-arrow-right-line ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              {/* Social proof */}
              <div
                className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10"
                style={{ animation: 'welcome-enter-anim 600ms ease 400ms both forwards' }}
              >
                {[
                  { icon: 'ri-linkedin-box-fill', label: 'LinkedIn', href: '#' },
                  { icon: 'ri-twitter-x-line', label: 'Twitter', href: '#' },
                  { icon: 'ri-mail-line', label: 'Email', href: 'mailto:dipendra@example.com' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <i className={`${s.icon} text-lg`} />
                    <span className="hidden sm:inline">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — profile card */}
            <div
              className="relative flex justify-center lg:justify-end"
              style={{ animation: 'welcome-enter-anim 700ms ease 200ms both forwards' }}
            >
              {/* Decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute w-96 h-96 rounded-full border border-blue-500/10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              </div>

              {/* Avatar */}
              <div className="relative z-10">
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-900/50">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFQuolCaYolWw/profile-displayphoto-scale_400_400/B4DZlYis2WJAAg-/0/1758127126081?e=1762992000&v=beta&t=JkG6exxwueJpMnzYIy-4O-Oe8Bft67WdMWEj_lL-llo"
                    alt="Dipendra Bhatta"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -bottom-4 -left-8 bg-navy-light border border-white/10 rounded-xl px-4 py-2 shadow-xl backdrop-blur-sm">
                  <p className="text-xs text-gray-400">Domain Authority</p>
                  <p className="text-white font-bold text-lg">54 → <span className="text-emerald-400">60</span></p>
                </div>
                <div className="absolute -top-4 -right-8 bg-navy-light border border-white/10 rounded-xl px-4 py-2 shadow-xl backdrop-blur-sm">
                  <p className="text-xs text-gray-400">Traffic Growth</p>
                  <p className="text-white font-bold text-lg text-blue-400">+45%</p>
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
          WHAT I DO
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16 text-center">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Services</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold">What I Do</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Three core disciplines, one goal — measurable digital growth.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <div
                  className="group relative h-full rounded-2xl border border-white/8 bg-navy-light/50 p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  style={{ '--glow': s.glow } as React.CSSProperties}
                >
                  {/* hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${s.glow}, transparent 70%)` }}
                  />

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <i className={`${s.icon} text-2xl text-white`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-white">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <i className="ri-arrow-right-line" />
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
          <FadeIn className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold">Featured Projects</h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 shrink-0">
                View All <i className="ri-arrow-right-line ml-1" />
              </Button>
            </Link>
          </FadeIn>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <FadeIn key={p.num} delay={i * 80}>
                <div className="group relative rounded-2xl border border-white/8 bg-navy-light/50 p-8 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* number watermark */}
                  <span
                    className="absolute right-8 top-1/2 -translate-y-1/2 font-heading text-8xl font-bold opacity-5 select-none pointer-events-none"
                    style={{ color: p.accent }}
                  >
                    {p.num}
                  </span>

                  {/* left accent bar */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: p.accent }}
                  />

                  <div className="relative z-10 pl-4">
                    <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white mb-3">{p.title}</h3>
                    <p className="text-gray-400 mb-5 max-w-2xl leading-relaxed">{p.desc}</p>
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
                        View Case Study <i className="ri-external-link-line" />
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
          LATEST POSTS
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Insights</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold">Latest Posts</h2>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 shrink-0">
                All Posts <i className="ri-arrow-right-line ml-1" />
              </Button>
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <FadeIn key={post.title} delay={i * 100}>
                <Link href="/blog">
                  <div className="group h-full rounded-2xl border border-white/8 bg-navy-light/50 p-7 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime} read</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/8">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1 text-blue-400 group-hover:gap-2 transition-all">
                        Read <i className="ri-arrow-right-line" />
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
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-900/40 via-navy-light to-navy p-12 text-center">
              {/* bg glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/20 blur-3xl rounded-full" />
              </div>
              <div className="relative z-10">
                <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Let's Work Together</p>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to grow your<br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    digital presence?
                  </span>
                </h2>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                  Whether you need an SEO overhaul, content strategy, or a podcast launch — let's talk about what's possible.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="px-10 bg-blue-600 hover:bg-blue-500 border-0 shadow-lg shadow-blue-900/40 transition-all duration-300 hover:-translate-y-0.5">
                    Start a Conversation
                    <i className="ri-send-plane-line ml-2" />
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
