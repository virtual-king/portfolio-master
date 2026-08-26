'use client';

import { useState } from 'react';
import Card from '../../components/ui/Card';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('seo');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const marketingCategories = [
    {
      id: 'seo',
      name: 'SEO & Analytics',
      icon: 'ri-line-chart-line',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      id: 'content',
      name: 'Content Strategy',
      icon: 'ri-pen-nib-line',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      id: 'social',
      name: 'Social Media',
      icon: 'ri-share-line',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      id: 'btl',
      name: 'BTL & Event Marketing',
      icon: 'ri-user-voice-line',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    }
  ];

  const digitalMarketingSkills = {
    seo: [
      { 
        name: "International SEO", 
        level: 92, 
        icon: "ri-global-line",
        description: "Multi-country SEO strategy (HK, SG, UK, AU, NZ)",
        projects: 5,
        impact: "32,400+ organic keywords",
        achievement: "Increased domain rating from 54 to 60"
      },
      { 
        name: "Technical SEO", 
        level: 88, 
        icon: "ri-settings-line",
        description: "Site health optimization & crawlability",
        projects: 12,
        impact: "99% site health score",
        achievement: "6,730+ high-quality backlinks built"
      },
      { 
        name: "Google Analytics", 
        level: 90, 
        icon: "ri-dashboard-line",
        description: "Data-driven performance tracking",
        projects: 25,
        impact: "45% traffic growth",
        achievement: "13K to 18.9K monthly visitors"
      },
      { 
        name: "Keyword Strategy", 
        level: 85, 
        icon: "ri-search-line",
        description: "Competitive mapping & clustering",
        projects: 18,
        impact: "4,400+ new keywords",
        achievement: "Improved SERP visibility"
      }
    ],
    content: [
      { 
        name: "Content Strategy", 
        level: 87, 
        icon: "ri-article-line",
        description: "Multi-platform content planning",
        projects: 30,
        impact: "40% engagement growth",
        achievement: "1,300+ qualified leads generated"
      },
      { 
        name: "Video Production", 
        level: 82, 
        icon: "ri-video-line",
        description: "Creative direction & scriptwriting",
        projects: 15,
        impact: "5.5K views in 24 hours",
        achievement: "Record-breaking video performance"
      },
      { 
        name: "Copywriting", 
        level: 89, 
        icon: "ri-edit-line",
        description: "Brand-aligned creative content",
        projects: 50,
        impact: "172 hiring leads",
        achievement: "Professional photoshoot coordination"
      },
      { 
        name: "AI Content Tools", 
        level: 84, 
        icon: "ri-robot-line",
        description: "ChatGPT, Banana AI, Veo2 integration",
        projects: 20,
        impact: "Enhanced productivity",
        achievement: "Innovative content creation"
      }
    ],
    social: [
      { 
        name: "Social Media Growth", 
        level: 91, 
        icon: "ri-user-add-line",
        description: "Organic follower acquisition & Reels strategy",
        projects: 8,
        impact: "Facebook reach: 308K→340K in 28 days",
        achievement: "Instagram growth: 9.2K→180K"
      },
      { 
        name: "Influencer Marketing", 
        level: 86, 
        icon: "ri-user-star-line",
        description: "Celebrity collaborations & partnerships",
        projects: 12,
        impact: "10,000+ event attendees",
        achievement: "Worked with Akshay Kumar, Durgesh Thapa, Sabita Karki"
      },
      { 
        name: "Community Management", 
        level: 83, 
        icon: "ri-group-line",
        description: "Audience engagement & interaction",
        projects: 6,
        impact: "17K Facebook followers",
        achievement: "Built COER University presence from scratch"
      },
      { 
        name: "Paid Social Ads", 
        level: 85, 
        icon: "ri-megaphone-line",
        description: "Meta Ads Manager campaigns & lead gen",
        projects: 15,
        impact: "123 leads at ~$1.53/lead",
        achievement: "Two-stage data-driven ad strategy"
      }
    ],
    btl: [
      { 
        name: "Event Management", 
        level: 88, 
        icon: "ri-calendar-event-line",
        description: "Large-scale exhibition coordination",
        projects: 8,
        impact: "10,000+ attendees",
        achievement: "NADA Auto Show success"
      },
      { 
        name: "Brand Activation", 
        level: 85, 
        icon: "ri-flashlight-line",
        description: "Experiential marketing campaigns",
        projects: 6,
        impact: "83% campaign delivery rate",
        achievement: "Deepal EV product launches"
      },
      { 
        name: "Influencer Coordination", 
        level: 87, 
        icon: "ri-team-line",
        description: "Talent management & collaboration",
        projects: 10,
        impact: "Professional brand alignment",
        achievement: "Worked with top celebrities"
      },
      { 
        name: "SMS Marketing", 
        level: 82, 
        icon: "ri-chat-1-line",
        description: "Large-scale campaign execution",
        projects: 3,
        impact: "80,000+ recipients",
        achievement: "920+ SMS outreach campaigns"
      }
    ]
  };

  const certifications = [
    {
      name: "Google Analytics",
      issuer: "Google",
      year: "Proficient",
      level: "Expert",
      color: "bg-gradient-to-r from-green-500 to-blue-500",
      icon: "ri-google-fill"
    },
    {
      name: "SEO Specialist",
      issuer: "Ahrefs & SEMrush",
      year: "Advanced",
      level: "Professional",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      icon: "ri-line-chart-line"
    },
    {
      name: "Meta Ads Manager",
      issuer: "Meta",
      year: "Proficient",
      level: "Advanced",
      color: "bg-gradient-to-r from-blue-600 to-purple-600",
      icon: "ri-facebook-fill"
    },
    {
      name: "Content Marketing",
      issuer: "HubSpot Academy",
      year: "Certified",
      level: "Professional",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      icon: "ri-markup-line"
    }
  ];

  const tools = [
    { name: "Google Analytics", proficiency: "Expert", category: "Analytics", icon: "ri-google-fill" },
    { name: "Ahrefs", proficiency: "Expert", category: "SEO", icon: "ri-line-chart-line" },
    { name: "SEMrush", proficiency: "Advanced", category: "SEO", icon: "ri-search-line" },
    { name: "Meta Business Suite", proficiency: "Advanced", category: "Social", icon: "ri-facebook-fill" },
    { name: "Google Search Console", proficiency: "Expert", category: "SEO", icon: "ri-dashboard-line" },
    { name: "Canva", proficiency: "Advanced", category: "Design", icon: "ri-palette-line" },
    { name: "Mailchimp", proficiency: "Advanced", category: "Email", icon: "ri-mail-line" },
    { name: "WordPress", proficiency: "Intermediate", category: "CMS", icon: "ri-wordpress-fill" },
    { name: "Microsoft Excel", proficiency: "Advanced", category: "Analytics", icon: "ri-table-line" },
    { name: "Adobe Creative Suite", proficiency: "Basic", category: "Design", icon: "ri-adobe-fill" }
  ];

  const notableAchievements = [
    { metric: "45%", label: "Organic Traffic Growth" },
    { metric: "1,300+", label: "Qualified Leads Generated" },
    { metric: "32,400+", label: "Organic Keywords" },
    { metric: "6,730+", label: "High-Quality Backlinks" },
    { metric: "10,000+", label: "Event Attendees Managed" },
    { metric: "80,000+", label: "SMS Campaign Reach" }
  ];

  return (
    <div className="min-h-screen bg-navy text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Expertise</p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4">Skills & Capabilities</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            <span className="text-blue-400 font-semibold">4+ years</span> of driving 
            <span className="text-emerald-400 font-semibold"> measurable growth</span> through 
            <span className="text-purple-400 font-semibold"> data-driven strategies</span> and 
            <span className="text-orange-400 font-semibold"> innovative campaigns</span>
          </p>
        </div>

        {/* Quick Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {notableAchievements.map((achievement, index) => (
            <div key={index} className="text-center p-4 bg-navy-light/50 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400">
                {achievement.metric}
              </div>
              <div className="text-xs text-gray-400 mt-1 leading-tight">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Skill Categories */}
        <div className="rounded-2xl border border-white/8 bg-navy-light/50 p-8 mb-12 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {marketingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                  activeCategory === category.id 
                    ? `bg-gradient-to-br ${category.color} text-white shadow-lg shadow-blue-500/20 scale-105`
                    : 'bg-navy-light/30 text-gray-400 hover:text-white hover:bg-navy-light/50 border border-white/5'
                }`}
              >
                <i className={`${category.icon} text-2xl mb-2 block`}></i>
                <span className="font-semibold text-sm">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Animated Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalMarketingSkills[activeCategory as keyof typeof digitalMarketingSkills]?.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 ${
                  hoveredSkill === skill.name
                    ? 'border-blue-500 bg-blue-900/20 shadow-lg shadow-blue-500/10'
                    : 'border-white/8 bg-navy-light/30 hover:border-white/20'
                }`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${marketingCategories.find(c => c.id === activeCategory)?.color} flex items-center justify-center`}>
                      <i className={`${skill.icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar with Animation */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>{skill.projects} projects completed</span>
                    <span className="font-semibold text-blue-300">{skill.impact}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${marketingCategories.find(c => c.id === activeCategory)?.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                        transition: hoveredSkill === skill.name ? 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'width 0.3s ease-out'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 rounded-full">
                    🏆 {skill.achievement}
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">Proven Results</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Proficiencies */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-center mb-12 text-white">
            Tools & Platform Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 text-center rounded-2xl border border-white/8 bg-navy-light/50 hover:scale-105 transition-transform duration-300 hover:border-white/20">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${cert.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                  <i className={`${cert.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-white">{cert.name}</h3>
                <p className="text-gray-400 mb-1 text-sm">{cert.issuer}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs font-medium px-2 py-1 bg-blue-500/15 text-blue-400 border border-blue-500/20 rounded-full">
                    {cert.level}
                  </span>
                  <span className="text-sm text-gray-500">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Tools Grid */}
        <div className="rounded-2xl border border-white/8 bg-navy-light/50 p-8 backdrop-blur-sm">
          <h2 className="font-heading text-3xl font-bold text-center mb-8 text-white">
            Marketing Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="p-4 text-center rounded-xl bg-navy-light/30 border border-white/5 hover:border-white/20 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <i className={`${tool.icon} text-white`}></i>
                </div>
                <h4 className="font-semibold text-sm text-white mb-1">{tool.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  tool.proficiency === 'Expert' 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                    : tool.proficiency === 'Advanced'
                    ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                    : 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/20'
                }`}>
                  {tool.proficiency}
                </span>
                <div className="text-xs text-gray-500 mt-1">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-3xl border border-blue-500/20">
          <h3 className="font-heading text-2xl font-bold mb-6 text-white">Career Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-lg font-semibold mb-2 text-blue-400">🚀 SEO Growth</div>
              <div className="text-sm text-gray-300">45% organic traffic increase across international markets</div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2 text-emerald-400">💼 Lead Generation</div>
              <div className="text-sm text-gray-300">1,300+ qualified leads through digital campaigns</div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2 text-purple-400">🎯 Social Growth</div>
              <div className="text-sm text-gray-300">Instagram views 9.2K→180K, Facebook reach 308K→340K in 28 days</div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2 text-pink-400">🌟 Influencer Collabs</div>
              <div className="text-sm text-gray-300">Worked with top celebrities & industry professionals</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}