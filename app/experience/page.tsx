'use client';

import Card from '../../components/ui/Card';

export default function Experience() {
  // PAID EXPERIENCES (Actual Jobs) - Arranged by date (most recent first)
  const experiences = [
    {
      title: "Digital Media & EMIS Officer",
      company: "Kathmandu BernHardt College",
      period: "May 2026 – Present",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/bernhardt.png",
      description: "Took over digital strategy for a college whose Facebook page had been in steady decline (-98% reach over the prior 4 months). Rebuilt the content approach, launched the institution's first data-driven paid ad strategy, and led a full website audit and redesign initiative — all managed solo, end-to-end.",
      achievements: [
        "Grew Facebook reach from 308,390 views (4 months pre-tenure) to 340,764 views in a single 28-day window",
        "Instagram views grew from 9.2K to ~180,000 across the engagement",
        "Generated 123 paid leads across two ad campaigns at a blended cost of ~$1.53/lead",
        "Conducted 27-point website audit and personally coded redesign mockups",
        "Coordinated EMIS/Midas platform integration and cross-functional website fixes",
        "Planned and executed 2 SMS outreach campaigns (920+ recipients) and 2 full-cycle Meta ad campaigns",
        "Shifted strategy from static/multi-photo posts to Reels based on performance data"
      ],
      technologies: ["Meta Ads Manager", "Facebook/Instagram Insights", "SMS Marketing", "Website Audit", "UX Review", "Content Strategy", "Campaign Analytics", "EMIS/CRM"]
    },
    {
      title: "Marketing Intern",
      company: "Changan Deepal Showroom (MAW Vriddhi Autocorp Pvt. Ltd.)",
      period: "Jul 2025 – Sep 2025",
      location: "Naxal, Kathmandu",
      logo: "/images/experience/changan.jpg",
      description: "Supported Below-the-Line (BTL) marketing and brand activation initiatives for Nepal's premium EV brand. Managed large-scale events and coordinated with top influencers for brand campaigns.",
      achievements: [
        "Executed NADA Auto Show marketing reaching 10,000+ attendees with Deepal Flying Car promotions",
        "Coordinated professional photoshoots with celebrities including Durgesh Thapa, Sabita Karki, and Muna Gauchan",
        "Managed national SMS marketing campaigns reaching 80,000+ recipients with 83% delivery success",
        "Organized interactive robot and robodog showcases for experiential marketing engagement"
      ],
      technologies: ["BTL Marketing", "Event Management", "Influencer Coordination", "SMS Marketing", "Brand Activation"]
    },
    {
      title: "Content and Social Media Strategist",
      company: "Happy Mountain Nepal",
      period: "Apr 2024 – May 2025",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/happymountain.jpg",
      description: "Directed content strategy and social media presence for lifestyle and wellness brand, leading a team of writers and managing full website revamp.",
      achievements: [
        "Led content team producing SEO-optimized blogs, articles, and landing pages",
        "Owned social media strategy across multiple platforms",
        "Led full website revamp to improve user experience and conversion readiness",
        "Achieved 100% SEO and brand compliance across all content"
      ],
      technologies: ["Content Strategy", "SEO", "Social Media", "Website Design", "Team Leadership"]
    },
    {
      title: "Mentor and Facilitator",
      company: "SUMS Nepal Pvt Ltd",
      period: "Sep 2024 – Dec 2024",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/sums.jpg",
      description: "Facilitated interactive workshops and mentored students in entrepreneurial skills, bridging the gap between academia and industry.",
      achievements: [
        "Facilitated 5 workshops on Team Building, Design Thinking, and Business Pitching",
        "Mentored 137+ students through startup ideation to execution stages",
        "Co-led program design with international peers for outcome-driven learning",
        "Researched industry-academia gaps to inform practical skill-based content"
      ],
      technologies: ["Workshop Facilitation", "Mentoring", "Design Thinking", "Entrepreneurship", "Program Design"]
    },
    {
      title: "Digital Marketing Manager",
      company: "Lalpurja Nepal",
      period: "Apr 2024 – Dec 2024",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/lalpurja.png",
      description: "Led digital marketing initiatives for real estate brand, focusing on lead generation and social media growth through strategic content and advertising campaigns.",
      achievements: [
        "Generated 1,000+ qualified leads for 16 properties through targeted digital campaigns",
        "Achieved 172 hiring leads with multi-platform content strategies",
        "Increased overall engagement by 40% with optimized content calendar",
        "Managed and grew social media presence for Lalpurja Nepal and Sanjay Nepal's personal brand",
        "Supervised content team of 4, ensuring SEO compliance and brand consistency"
      ],
      technologies: ["Lead Generation", "Social Media Marketing", "SEO", "Content Strategy", "Team Management", "Meta Ads"]
    },
    {
      title: "Search Engine Optimization Executive",
      company: "ZEGAL",
      period: "Jan 2022 – Feb 2024",
      location: "Hong Kong (Remote)",
      logo: "/images/experience/zegal.png",
      description: "Led international SEO strategy across Hong Kong, Singapore, UK, Australia, and New Zealand, driving organic growth and technical optimization.",
      achievements: [
        "Increased organic keyword coverage from 28,000 to 32,400+ through competitive mapping",
        "Built 6,730+ high-quality backlinks, increasing domain rating from 54 to 60",
        "Improved site health from 80% to 99% through technical SEO initiatives",
        "Grew monthly organic traffic from 13,000 to 18,900 visitors",
        "Led SEO strategy adaptation for 5 international markets"
      ],
      technologies: ["International SEO", "Technical SEO", "Ahrefs", "SEMrush", "Google Search Console", "Backlink Building"]
    },
    {
      title: "Social Media Strategist",
      company: "COER University",
      period: "Oct 2021 – Jan 2024",
      location: "Roorkee, India",
      logo: "/images/experience/coer.jpg",
      description: "Managed and grew social media presence for educational institution, executing growth campaigns and high-profile collaborations.",
      achievements: [
        "Increased Instagram and Facebook followers by 60% within 6 months",
        "Built COER University social presence from scratch to 17k Facebook and 7k Instagram followers",
        "Secured collaborations with celebrities including Akshay Kumar, Sherley Setia, and Kumar Vishwas",
        "Managed social media for major college events and celebrity appearances"
      ],
      technologies: ["Social Media Growth", "Influencer Marketing", "Community Management", "Content Creation", "Event Promotion"]
    }
  ];

  // PROJECTS (Personal / Portfolio work)
  const projects = [
    {
      title: "Deepal Marketing Campaign",
      company: "CHANGAN Deepal",
      period: "2024 – 2025",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/changan.jpg",
      description: "Led comprehensive marketing campaigns for Nepal's premium EV brand, including national SMS marketing, event activation, and creative direction for celebrity photoshoots.",
      achievements: [
        "Executed national SMS campaign reaching 80,000+ recipients with 83% delivery rate",
        "Coordinated on-ground activation for 10,000+ attendees at NADA Auto Show",
        "Managed two full product launch events at Soaltee Hotel",
        "Creative direction for photoshoots with top celebrities including Shristi Shrestha, Durgesh Thapa, Sabita Karki, and Muna Gauchan"
      ],
      technologies: ["Brand Activation", "Event Management", "Influencer Coordination", "SMS Marketing"]
    },
    {
      title: "SOMTU Digital Media",
      company: "School of Management, Tribhuvan University",
      period: "2024 – 2026",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/somtu.png",
      description: "Established and grew SOMTU's digital presence from scratch, creating a cohesive brand identity across multiple platforms.",
      achievements: [
        "Established official Instagram and LinkedIn accounts from scratch",
        "Grew Facebook page from 10,000 to 12,000 followers",
        "Collaborated with University of Barcelona to launch Post Graduate Diploma in Sustainable Business Management",
        "Designed all promotional materials for major college events",
        "Repurposed campus TV screens as owned media channel"
      ],
      technologies: ["Social Media Growth", "Brand Strategy", "Content Creation", "Partnerships"]
    },
    {
      title: "SOMTU VMAG",
      company: "Video Magazine - SOMTU",
      period: "2024 – Present",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/vmag2.jpg",
      description: "Led video magazine initiatives and social media growth for university publication, setting new engagement records.",
      achievements: [
        "Grew social media followers from 136 to 640 organically in 2 months",
        "Achieved record 5.5k video views in 24 hours (from 150 baseline)",
        "Led 24+ member team across multiple departments",
        "Selected in Top 25 teams for National Ads Competition"
      ],
      technologies: ["Video Production", "Team Leadership", "Social Media Growth", "Content Strategy"]
    },
    {
      title: "Bernhardt Digital Strategy",
      company: "Kathmandu BernHardt College",
      period: "2025 – 2026",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/bernhardt.png",
      description: "Managed complete digital strategy and lead generation efforts for leading educational institution.",
      achievements: [
        "Grew Facebook views by 264% in two months",
        "Instagram views from 9.2K to 70K+ in two months",
        "Generated 89+ qualified admissions leads at ~$1.01/lead (60% below benchmark)",
        "Led full website audit with 27 prioritized issues"
      ],
      technologies: ["Paid Ads", "Social Media", "Lead Generation", "Analytics"]
    },
    {
      title: "SUMS Entrepreneurship Program",
      company: "SUMS Nepal Pvt Ltd",
      period: "2024",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/sums.jpg",
      description: "Designed and facilitated entrepreneurship workshops for students, bridging the gap between academia and industry.",
      achievements: [
        "Co-designed and facilitated 5 entrepreneurship workshops for 137+ students",
        "Mentored teams end-to-end from ideation through pitch delivery",
        "Partnered with Dutch student collaborators for program design",
        "Researched industry-academia gaps to inform practical skill-based content"
      ],
      technologies: ["Workshop Facilitation", "Mentoring", "Design Thinking", "Entrepreneurship"]
    }
  ];

  const education = [
    {
      degree: "MBA in Marketing",
      school: "School of Management, Tribhuvan University",
      period: "2024 – Running",
      location: "Kathmandu, Nepal",
      logo: "/images/experience/somtu.png",
      description: "Pursuing Master of Business Administration with specialization in Marketing, combining theoretical knowledge with practical digital marketing experience."
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "College of Engineering Roorkee",
      period: "2018 – 2022",
      location: "Roorkee, India",
      logo: "/images/experience/coer.jpg",
      description: "Bachelor's degree in Computer Science with focus on software development and technology applications in business contexts."
    },
    {
      degree: "Science Stream",
      school: "DAV College, Jawalakhel",
      period: "2017 – 2018",
      location: "Lalitpur, Nepal",
      logo: "/images/experience/dav.png",
      description: "Completed high school education with science focus, building foundation for technology and analytical career path."
    }
  ];

  return (
    <div className="min-h-screen bg-navy text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Career Timeline</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Professional Journey</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            <span className="text-blue-400 font-semibold">4+ years</span> of driving digital growth across 
            <span className="text-emerald-400 font-semibold"> international markets</span>, 
            <span className="text-purple-400 font-semibold"> brand campaigns</span>, and 
            <span className="text-orange-400 font-semibold"> educational initiatives</span>
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          <div className="text-center p-4 md:p-6 bg-navy-light/50 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold text-blue-400">7+</div>
            <div className="text-xs md:text-sm text-gray-400">Roles</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-navy-light/50 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold text-emerald-400">45%</div>
            <div className="text-xs md:text-sm text-gray-400">Traffic Growth</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-navy-light/50 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold text-purple-400">1K+</div>
            <div className="text-xs md:text-sm text-gray-400">Leads Generated</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-navy-light/50 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300">
            <div className="text-xl md:text-2xl font-bold text-orange-400">10K+</div>
            <div className="text-xs md:text-sm text-gray-400">Event Attendees</div>
          </div>
        </div>

        {/* WORK EXPERIENCE SECTION - Paid Jobs */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/30"></div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
              💼 Work Experience
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/30"></div>
          </div>
          <p className="text-center text-gray-400 text-sm mb-8">Professional roles and paid positions</p>
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-4 sm:p-6 md:p-8 bg-navy-light/50 border border-white/8 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
                  {/* Logo Section */}
                  <div className="lg:w-2/5">
                    <div className="w-full h-40 sm:h-48 lg:h-56 overflow-hidden rounded-2xl shadow-lg bg-navy-light/50 flex items-center justify-center border border-white/5">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="text-gray-400 text-center p-4">
                          <i className="ri-building-line text-4xl block mb-2 text-blue-400/50"></i>
                          <span className="text-xs">{exp.company}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-3/5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 md:mb-4">
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5">{exp.title}</h3>
                        <p className="text-base sm:text-lg text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-medium whitespace-nowrap self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-4 flex items-center">
                      <i className="ri-map-pin-line mr-1.5"></i>
                      {exp.location}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-white mb-2 md:mb-3 flex items-center text-sm sm:text-base">
                        <i className="ri-trophy-line mr-2 text-yellow-400"></i>
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs sm:text-sm text-gray-300 flex items-start">
                            <i className="ri-checkbox-circle-line text-emerald-400 mr-2 mt-0.5 flex-shrink-0"></i>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* PROJECTS SECTION - Personal / Portfolio */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/30"></div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
              🚀 Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/30"></div>
          </div>
          <p className="text-center text-gray-400 text-sm mb-8">Personal projects and initiatives</p>
          <div className="space-y-6 md:space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/8 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
                  <div className="lg:w-2/5">
                    <div className="w-full h-40 sm:h-48 lg:h-56 overflow-hidden rounded-2xl shadow-lg bg-navy-light/50 flex items-center justify-center border border-white/5">
                      {project.logo ? (
                        <img
                          src={project.logo}
                          alt={project.company}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="text-gray-400 text-center p-4">
                          <i className="ri-projector-line text-4xl block mb-2 text-purple-400/50"></i>
                          <span className="text-xs">{project.company}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 md:mb-4">
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5">{project.title}</h3>
                        <p className="text-base sm:text-lg text-purple-400 font-semibold">{project.company}</p>
                      </div>
                      <span className="text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-medium whitespace-nowrap self-start sm:self-auto">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-4 flex items-center">
                      <i className="ri-map-pin-line mr-1.5"></i>
                      {project.location}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-3 md:mb-4">
                      <h4 className="font-semibold text-white mb-2 md:mb-3 text-sm sm:text-base">Project Highlights</h4>
                      <ul className="space-y-1.5">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs sm:text-sm text-gray-300 flex items-start">
                            <i className="ri-star-line text-yellow-400 mr-2 mt-0.5 flex-shrink-0"></i>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-white/5 text-purple-300 border border-purple-500/20 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-500/30"></div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
              🎓 Education
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500/30"></div>
          </div>
          <div className="space-y-6 md:space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-4 sm:p-6 md:p-8 bg-navy-light/50 border border-white/8 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-full h-40 sm:h-48 overflow-hidden rounded-2xl shadow-lg bg-navy-light/50 flex items-center justify-center border border-white/5">
                      {edu.logo ? (
                        <img
                          src={edu.logo}
                          alt={edu.school}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="text-gray-400 text-center p-4">
                          <i className="ri-graduation-cap-line text-4xl block mb-2 text-blue-400/50"></i>
                          <span className="text-xs">{edu.school}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 md:mb-4">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full font-medium whitespace-nowrap self-start sm:self-auto">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-emerald-400 font-semibold mb-1.5">{edu.school}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-4 flex items-center">
                      <i className="ri-map-pin-line mr-1.5"></i>
                      {edu.location}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <Card className="mt-8 md:mt-12 p-6 md:p-8 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/20 text-center">
          <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-white">Language Proficiency</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div>
              <div className="text-base sm:text-lg font-semibold text-white">English</div>
              <div className="text-xs sm:text-sm text-gray-400">Fluent</div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-semibold text-white">Nepali</div>
              <div className="text-xs sm:text-sm text-gray-400">Fluent</div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-semibold text-white">Hindi</div>
              <div className="text-xs sm:text-sm text-gray-400">Fluent</div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-semibold text-white">Chinese</div>
              <div className="text-xs sm:text-sm text-gray-400">HSK 2</div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}