import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { TEAM_WORKS } from '../data';

// ============================================
// METADATA GENERATION FOR SEO
// ============================================
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return {
      title: 'Project Not Found | Dipendra Bhatta',
    };
  }

  return {
    title: `${project.title} | ${project.subtitle} | Dipendra Bhatta`,
    description: project.desc.substring(0, 160),
    keywords: project.tags.join(', '),
    openGraph: {
      title: `${project.title} | ${project.subtitle}`,
      description: project.desc.substring(0, 160),
      type: 'article',
      url: `https://dipendrabhatta.com/projects/${id}`,
      images: [
        {
          url: project.heroImage || project.logo || '/og-image.png',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${project.subtitle}`,
      description: project.desc.substring(0, 160),
      images: [project.heroImage || project.logo || '/og-image.png'],
    },
  };
}

// ============================================
// STATIC PARAMS FOR ALL PROJECTS
// ============================================
export async function generateStaticParams() {
  const projects = [
    { id: 'zegal-seo' },
    { id: 'changan-deepal' },
    { id: 'lalpurja-nepal' },
    { id: 'somtu-vmag' },
    { id: 'bernhardt-college' },
    { id: 'happy-mountain' },
  ];
  
  return projects.map((project) => ({
    id: project.id,
  }));
}

// ============================================
// PROJECT DATA
// ============================================
function getProjectById(id: string) {
  const projects = [
    {
      id: 'changan-deepal',
      title: 'CHANGAN Deepal',
      subtitle: 'S07',
      desc: 'Executed national SMS campaign reaching 80,000+ recipients and coordinated on-ground activation for 10,000+ attendees at NADA Auto Show.',
      tags: ['Brand Activation', 'Event Management', 'Influencer Coordination', 'SMS Marketing'],
      accent: '#3b82f6',
      logo: '/images/projects/changan.jpg',
      heroImage: '/images/projects/changan.jpg',
      stats: [
        { label: 'SMS Reach', value: '80,000+' },
        { label: 'Event Attendees', value: '10,000+' },
        { label: 'Product Launches', value: '2' },
        { label: 'Delivery Rate', value: '83%' },
      ],
      achievements: [
        'National SMS campaign with 83% delivery rate reaching 80,000+ recipients',
        'Coordinated on-ground activation for 10,000+ attendees at NADA Auto Show',
        'Managed two full product launch events at Soaltee Hotel',
        'Creative direction for photoshoots with top celebrities',
        'Competitive intelligence reports for 5+ EV brands',
      ],
      instagramPosts: TEAM_WORKS.filter(w => w.id.includes('sabita') || w.id.includes('shristi') || w.id.includes('muna')),
      fullDescription: `
        <h2>Campaign Overview</h2>
        <p>The CHANGAN Deepal Marketing Campaign was a comprehensive brand activation strategy designed to launch Nepal's premium EV brand in the competitive automotive market.</p>
        
        <h2>Key Initiatives</h2>
        <ul>
          <li><strong>National SMS Campaign:</strong> Reached 80,000+ recipients with an 83% delivery rate, creating widespread brand awareness.</li>
          <li><strong>NADA Auto Show:</strong> Coordinated on-ground activation for 10,000+ attendees, managing visitor information, influencer/VIP access, and crowd control.</li>
          <li><strong>Product Launches:</strong> Managed two full product launch events (S07 ICA and S05) at Soaltee Hotel, handling venue setup, AV equipment, and car displays.</li>
          <li><strong>Creative Direction:</strong> Provided creative direction for brand-aligned photoshoots with top celebrities including Shristi Shrestha, Durgesh Thapa, Sabita Karki, and Muna Gauchan.</li>
        </ul>
        
        <h2>Results</h2>
        <ul>
          <li>80,000+ SMS recipients at 83% delivery rate</li>
          <li>10,000+ attendees at NADA Auto Show</li>
          <li>Successful launch of two EV models</li>
          <li>High-impact brand visibility through celebrity collaborations</li>
        </ul>
      `,
    },
    // Add more projects as needed
  ];
  
  return projects.find(p => p.id === id);
}

// ============================================
// PROJECT DETAIL PAGE COMPONENT - FIXED
// ============================================
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    notFound();
  }

  // Schema.org structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: project.title,
    description: project.desc,
    url: `https://dipendrabhatta.com/projects/${id}`,
    keywords: project.tags.join(', '),
    creator: {
      '@type': 'Person',
      name: 'Dipendra Bhatta',
      url: 'https://dipendrabhatta.com',
    },
  };

  return (
    <>
      {/* Structured Data Script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-navy text-white">
        {/* HERO SECTION - Black overlay with proper sizing */}
        <div className="relative h-[45vh] min-h-[350px] md:h-[50vh] lg:h-[55vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          {project.heroImage ? (
            <div className="absolute inset-0">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/65" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-navy" />
          )}
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-300 font-light mb-3">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          {/* Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 md:mb-8 group"
          >
            <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform" /> 
            Back to Projects
          </Link>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
            {project.stats.map((stat, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-white/10 bg-navy-light/50 p-3 md:p-4 text-center hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <p 
                  className="text-xl md:text-2xl lg:text-3xl font-bold"
                  style={{ color: project.accent }}
                >
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border font-medium"
                style={{
                  borderColor: `${project.accent}40`,
                  color: project.accent,
                  background: `${project.accent}10`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-6 md:mb-8" />

          {/* Full Description */}
          <div 
            className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-heading prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300 prose-li:marker:text-blue-400 prose-ul:my-4 prose-li:my-1 prose-p:text-sm md:prose-p:text-base lg:prose-p:text-lg"
            dangerouslySetInnerHTML={{ __html: project.fullDescription || '' }}
          />

          {/* Achievements */}
          {project.achievements && (
            <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-2xl border border-white/10 bg-navy-light/50">
              <h3 className="font-heading text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Key Achievements</h3>
              <ul className="space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span 
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: project.accent }}
                    />
                    <span className="text-sm md:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Instagram Showcase */}
          {project.id === 'changan-deepal' && project.instagramPosts && project.instagramPosts.length > 0 && (
            <div className="mt-8 md:mt-12">
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 text-center">
                📸 Campaign Highlights
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {project.instagramPosts.slice(0, 8).map((post) => (
                  <a
                    key={post.id}
                    href={post.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-navy-light/50 border border-white/10 hover:border-pink-500/30 transition-all duration-500 group-hover:scale-105">
                      <img
                        src={post.image}
                        alt={post.description}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <i className={`${post.isVideo ? 'ri-play-circle-fill' : 'ri-instagram-line'} text-2xl md:text-3xl text-white`} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                        <p className="text-white text-xs font-medium truncate">{post.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 via-navy-light to-navy text-center">
            <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4">
              Ready to achieve similar results?
            </h3>
            <p className="text-gray-400 mb-4 md:mb-6 max-w-xl mx-auto text-sm md:text-base">
              Let's discuss how I can help you build authority and drive organic growth.
            </p>
            <Link href="/contact">
              <button 
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium text-white rounded-lg transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                style={{ 
                  backgroundColor: project.accent,
                  boxShadow: `0 8px 30px ${project.accent}40`
                }}
              >
                Let's Work Together
                <i className="ri-arrow-right-line ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}