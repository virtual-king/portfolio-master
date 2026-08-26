import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { TEAM_WORKS } from '../data';

// ============================================
// METADATA GENERATION FOR SEO
// ============================================
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectById(params.id);
  
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
      url: `https://dipendrabhatta.com/projects/${params.id}`,
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
    { id: 'somtu-digital-media' },  // ← New SOMTU project
    { id: 'lalpurja-nepal' },
    { id: 'somtu-vmag' },           // ← SOMTU VMAG (different)
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
    {
      id: 'zegal-seo',
      title: 'Zegal',
      subtitle: 'Global SEO',
      desc: 'Led international SEO across 5 markets (HK, SG, UK, AU, NZ). Built 6,730+ backlinks, boosted traffic by 45% (13,000→18,900 visitors).',
      tags: ['International SEO', 'Technical SEO', 'Link Building', 'Analytics'],
      accent: '#10b981',
      logo: '/images/projects/zegal.png',
      heroImage: '/images/projects/zegal.png',
      stats: [
        { label: 'Backlinks Built', value: '6,730+' },
        { label: 'Traffic Growth', value: '45%' },
        { label: 'Markets', value: '5' },
        { label: 'Keyword Growth', value: '15%' },
      ],
      achievements: [
        'Increased monthly organic traffic by 45% (13,000→18,900 visitors)',
        'Built 6,730+ high-quality backlinks',
        'Expanded organic keyword footprint by 15% (28,000→32,400 keywords)',
        'Improved technical site health from 80% to 99%',
        'Increased Domain Rating from 54 to 60',
        'Enhanced User Rating from 44 to 48',
      ],
      instagramPosts: [],
      fullDescription: `
        <h2>Project Overview</h2>
        <p>Zegal is a leading legal technology platform operating across multiple international markets. As the SEO Executive, I led the global SEO strategy across five markets: Hong Kong, Singapore, UK, Australia, and New Zealand.</p>
        
        <h2>The Challenge</h2>
        <p>Zegal needed to improve its organic visibility across all five markets simultaneously while maintaining technical excellence and building authority in the competitive legal tech space.</p>
        
        <h2>Strategy & Execution</h2>
        <ul>
          <li><strong>Technical SEO:</strong> Ran comprehensive technical audits with Screaming Frog and Ahrefs to identify crawl errors, broken links, and duplicate content.</li>
          <li><strong>Core Web Vitals:</strong> Optimized LCP, CLS, and FID using Lighthouse and PageSpeed Insights, improving page-load performance across all markets.</li>
          <li><strong>Content Strategy:</strong> Developed market-specific content strategies with competitive analysis (Ahrefs, Ubersuggest) and content-gap targeting.</li>
          <li><strong>Link Building:</strong> Executed strategic off-page campaigns securing 6,730+ high-quality backlinks from authoritative sources.</li>
        </ul>
        
        <h2>Key Results</h2>
        <ul>
          <li><strong>45% increase</strong> in monthly organic traffic (13,000→18,900 visitors)</li>
          <li><strong>6,730+</strong> high-quality backlinks built</li>
          <li><strong>15% expansion</strong> in organic keyword footprint (28,000→32,400 keywords)</li>
          <li><strong>99%</strong> technical site health (improved from 80%)</li>
          <li><strong>Domain Rating</strong> increased from 54 to 60</li>
          <li><strong>User Rating</strong> improved from 44 to 48</li>
        </ul>
      `,
    },
    // In the projects array inside getProjectById function
{
  id: 'somtu-digital-media',
  title: 'SOMTU',
  subtitle: 'Digital Media Lead',
  desc: 'Established official Instagram and LinkedIn from scratch. Grew Facebook from 10,000 to 12,000 followers. Collaborated with University of Barcelona to launch Post Graduate Diploma in Sustainable Business Management.',
  tags: ['Social Media Growth', 'Brand Strategy', 'Content Creation', 'Partnerships'],
  accent: '#06b6d4',
  logo: '/images/projects/somtu.png',
  heroImage: '/images/projects/somtu.png',
  stats: [
    { label: 'Facebook Growth', value: '10K→12K' },
    { label: 'Followers Added', value: '2,000+' },
    { label: 'Partnerships', value: '3+' },
    { label: 'Campaigns', value: '5+' },
  ],
  achievements: [
    'Established official Instagram and LinkedIn accounts from scratch',
    'Grew Facebook page from 10,000 to 12,000 followers',
    'Collaborated with University of Barcelona to launch Post Graduate Diploma in Sustainable Business Management',
    'Engaged CEOs and Executive Directors for program advocacy',
    'Designed all promotional materials (certificates, banners, standees) for major college events',
    'Repurposed inactive campus TV screens as owned media channel',
  ],
  instagramPosts: TEAM_WORKS.filter(w => w.id.includes('somtu')),
  fullDescription: `
    <h2>Digital Media Lead — School of Management, Tribhuvan University (SOMTU)</h2>
    <p><strong>2024 – 2026 | Kathmandu, Nepal</strong></p>

    <h3>Overview</h3>
    <p>As Digital Media Lead at SOMTU, I was responsible for establishing and growing the school's digital presence across multiple platforms, creating a cohesive brand identity, and driving engagement through strategic content and partnerships.</p>

    <h3>Key Initiatives</h3>
    <ul>
      <li><strong>Social Media Growth:</strong> Established the official Instagram and LinkedIn accounts from scratch and grew the SOMTU Facebook page from 10,000 to 12,000 followers.</li>
      <li><strong>International Collaboration:</strong> Collaborated with the University of Barcelona and international/national professors to launch and promote the Post Graduate Diploma in Sustainable Business Management.</li>
      <li><strong>Program Advocacy:</strong> Engaged CEOs and Executive Directors for program advocacy, building strong industry connections.</li>
      <li><strong>Design & Branding:</strong> Designed all promotional materials (certificates, banners, standees) for major college events.</li>
      <li><strong>Owned Media:</strong> Repurposed inactive campus TV screens as an owned media channel, maximizing existing infrastructure.</li>
    </ul>

    <h3>Results</h3>
    <ul>
      <li>2,000+ follower growth across platforms</li>
      <li>Successful launch of Post Graduate Diploma with international university partnership</li>
      <li>Enhanced brand visibility through strategic content and events</li>
      <li>Establishment of owned media channels on campus</li>
    </ul>
  `,
},
    
    {
      id: 'lalpurja-nepal',
      title: 'Lalpurja Nepal',
      subtitle: 'Digital Growth',
      desc: 'Generated 1,172+ qualified leads (1,000+ property inquiries, 172 hires) through targeted paid and organic campaigns.',
      tags: ['Lead Generation', 'Content Strategy', 'Paid Ads', 'Social Media'],
      accent: '#8b5cf6',
      logo: '/images/projects/lalpurja.png',
      heroImage: '/images/projects/lalpurja.png',
      stats: [
        { label: 'Qualified Leads', value: '1,172+' },
        { label: 'Engagement Growth', value: '40%' },
        { label: 'Team Size', value: '4' },
        { label: 'Lead Types', value: '2' },
      ],
      achievements: [
        'Generated 1,172+ qualified leads (1,000+ property inquiries, 172 hires)',
        'Grew social media engagement and reach by 40%',
        'Led and mentored a 4-person content team',
        'Multi-platform content strategy implementation',
        'Achieved 100% SEO and brand compliance across all content',
      ],
      instagramPosts: [],
      fullDescription: `
        <h2>Project Overview</h2>
        <p>Lalpurja Nepal is a leading real estate platform in Nepal. I led the digital marketing strategy across property-listing and hiring verticals, delivering significant lead generation and engagement growth.</p>
        
        <h2>Strategy</h2>
        <ul>
          <li><strong>Lead Generation:</strong> Generated 1,172+ qualified leads (1,000+ property inquiries, 172 hires) through targeted paid and organic campaigns.</li>
          <li><strong>Content Strategy:</strong> Built and managed a performance-driven, multi-platform content calendar that grew social media engagement and reach by 40%.</li>
          <li><strong>Team Leadership:</strong> Led and mentored a 4-person content team, establishing editorial workflows that achieved 100% SEO and brand compliance.</li>
        </ul>
        
        <h2>Results</h2>
        <ul>
          <li>1,172+ qualified leads generated</li>
          <li>40% increase in engagement and reach</li>
          <li>100% SEO and brand compliance across all content</li>
          <li>Scalable content workflows established</li>
        </ul>
      `,
    },
    {
      id: 'somtu-vmag',
      title: 'SOMTU Digital Marketing',
      subtitle: 'Social Media',
      desc: 'Grew social media following by 340% in 2 months. Led 6 departments and 24 team members, driving video views from 150 to 5,500+ within 24 hours.',
      tags: ['Social Media', 'Team Leadership', 'Content Strategy', 'Growth'],
      accent: '#f59e0b',
      logo: '/images/projects/vmag.jpg',
      heroImage: '/images/projects/vmag2.jpg',
      stats: [
        { label: 'Followers Growth', value: '340%' },
        { label: 'Team Members', value: '24' },
        { label: 'Video Views', value: '5,500+' },
        { label: 'Departments', value: '6' },
      ],
      achievements: [
        'Grew social media following by 340% in 2 months',
        'Drove video views from 150 to 5,500+ within 24 hours',
        'Led 6 departments and 24 team members',
        'Led team to Top 25 finish in National Ads Competition',
        'Standardized operational workflows and content strategy',
      ],
      instagramPosts: [],
      fullDescription: `
        <h2>Project Overview</h2>
        <p>SOMTU VMAG is the official media and communications team for the School of Management, Tribhuvan University. As Coordinator, I led a complete digital transformation and social media growth strategy.</p>
        
        <h2>The Challenge</h2>
        <p>The team needed to build a strong digital presence from scratch, establish content workflows, and create engaging content that resonates with students and faculty.</p>
        
        <h2>Strategy</h2>
        <ul>
          <li><strong>Content Strategy:</strong> Led content strategy, policy-making, and team management across 6 departments and 24 team members, standardizing operational workflows.</li>
          <li><strong>Social Media Growth:</strong> Grew social media following by 340% in 2 months and set an engagement record by driving video views from 150 to 5,500+ within 24 hours.</li>
          <li><strong>Event Coverage:</strong> Directed multimedia coverage for major university events, including the SOMTU Graduate Conference.</li>
          <li><strong>Competitions:</strong> Led the team to a Top 25 finish in the National Ads Competition ('Indigenous Knowledge for a Sustainable Future').</li>
        </ul>
        
        <h2>Results</h2>
        <ul>
          <li>340% social media growth in 2 months</li>
          <li>5,500+ video views within 24 hours</li>
          <li>Top 25 finish in National Ads Competition</li>
          <li>Successful event coverage for major university conferences</li>
        </ul>
      `,
    },
    {
      id: 'bernhardt-college',
      title: 'Bernhardt',
      subtitle: 'Digital Strategy',
      desc: 'Grew Facebook views 264% and Instagram views from 9.2K to 70K+ in two months. Generated 89+ leads at ~$1.01/lead.',
      tags: ['Paid Ads', 'Social Media', 'Lead Generation', 'Analytics'],
      accent: '#ef4444',
      logo: '/images/projects/bernhardt.png',
      heroImage: '/images/projects/bernhardt.png',
      stats: [
        { label: 'Facebook Views', value: '264%' },
        { label: 'Instagram Views', value: '9.2K→70K+' },
        { label: 'Cost Per Lead', value: '$1.01' },
        { label: 'Leads Generated', value: '89+' },
      ],
      achievements: [
        'Grew Facebook views by 264%',
        'Instagram views from 9.2K to 70K+ in two months',
        'Generated 89+ qualified admissions leads at ~$1.01/lead (60% below benchmark)',
        'Led full website audit with 27 prioritized issues',
        'Presented coded redesign mockups to college leadership',
      ],
      instagramPosts: [],
      fullDescription: `
        <h2>Project Overview</h2>
        <p>Bernhardt College is a leading educational institution in Nepal. As Digital Media & EMIS Officer, I managed the complete digital strategy and lead generation efforts.</p>
        
        <h2>The Challenge</h2>
        <p>The college needed to increase brand visibility, generate qualified leads, and improve its digital presence across all platforms while maintaining cost efficiency.</p>
        
        <h2>Strategy</h2>
        <ul>
          <li><strong>Social Media Growth:</strong> Planned and executed organic + paid social strategy across Facebook, Instagram, and LinkedIn, growing Facebook views 264% and Instagram views from 9.2K to 70K+ within two months.</li>
          <li><strong>Lead Generation:</strong> Designed, launched, and optimized Meta ad campaigns and SMS outreach, generating 89+ qualified admissions leads at a blended cost of ~$1.01/lead (60% below industry benchmark).</li>
          <li><strong>Website Audit:</strong> Led a full website audit (27 prioritized issues) and presented coded redesign mockups to college leadership.</li>
          <li><strong>EMIS Management:</strong> Administered the college's EMIS platform, including MIDAS integration, alongside IT support and cross-departmental coordination.</li>
        </ul>
        
        <h2>Results</h2>
        <ul>
          <li>264% Facebook view growth</li>
          <li>70K+ Instagram views</li>
          <li>89+ leads at ~$1.01/lead</li>
          <li>27 issues identified and fixed in website audit</li>
        </ul>
      `,
    },
    {
      id: 'happy-mountain',
      title: 'Happy Mountain Nepal',
      subtitle: 'Content Strategy',
      desc: 'Directed content strategy for a team of writers producing SEO-optimized blogs, articles, and landing pages. Led full website revamp.',
      tags: ['Content Strategy', 'SEO', 'Social Media', 'Website Design'],
      accent: '#ec4899',
      logo: '/images/projects/happymountain.jpg',
      heroImage: '/images/projects/happymountain.jpeg',
      stats: [
        { label: 'Content Team', value: '4+' },
        { label: 'Website Revamp', value: '100%' },
        { label: 'SEO Compliance', value: '100%' },
        { label: 'Social Platforms', value: '3+' },
      ],
      achievements: [
        'Led content team producing SEO-optimized content',
        'Owned social media strategy across platforms',
        'Led full website revamp to improve user experience',
        'Achieved 100% SEO and brand compliance across all content',
      ],
      instagramPosts: [],
      fullDescription: `
        <h2>Project Overview</h2>
        <p>Happy Mountain Nepal is a lifestyle and wellness brand. I directed the content strategy and digital presence across all platforms.</p>
        
        <h2>Strategy</h2>
        <ul>
          <li><strong>Content Strategy:</strong> Directed content strategy for a team of writers producing SEO-optimized blogs, articles, and landing pages to grow organic traffic and brand visibility.</li>
          <li><strong>Social Media:</strong> Owned social media strategy across platforms, creating engaging content that resonated with target audiences.</li>
          <li><strong>Website Revamp:</strong> Led a full website revamp (design, structure, content) to improve user experience and conversion readiness.</li>
          <li><strong>Team Leadership:</strong> Mentored and guided the content team to achieve 100% SEO and brand-compliance across all published content.</li>
        </ul>
        
        <h2>Results</h2>
        <ul>
          <li>100% SEO and brand compliance across all content</li>
          <li>Successful website revamp improving user experience</li>
          <li>Strong social media presence across multiple platforms</li>
          <li>Scalable content workflows established</li>
        </ul>
      `,
    },
  ];
  
  return projects.find(p => p.id === id);
}

// ============================================
// PROJECT DETAIL PAGE COMPONENT
// ============================================
export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  
  if (!project) {
    notFound();
  }

  // Schema.org structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: project.title,
    description: project.desc,
    url: `https://dipendrabhatta.com/projects/${params.id}`,
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
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/65" />
              {/* Gradient Overlay */}
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

          {/* Instagram Showcase - All images from homepage */}
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