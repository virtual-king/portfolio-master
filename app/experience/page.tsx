'use client';

import Card from '../../components/ui/Card';

export default function Experience() {
  const experiences = [
    {
      title: "Marketing Intern",
      company: "Changan Deepal Showroom (MAW Vriddhi Autocorp Pvt. Ltd.)",
      period: "Jul 2025 – Sep 2025",
      location: "Naxal, Kathmandu",
      description: "Supported Below-the-Line (BTL) marketing and brand activation initiatives for Nepal's premium EV brand. Managed large-scale events and coordinated with top influencers for brand campaigns.",
      achievements: [
        "Executed NADA Auto Show marketing reaching 10,000+ attendees with Deepal Flying Car promotions",
        "Coordinated professional photoshoots with celebrities including Durgesh Thapa, Sabita Karki, and Muna Gauchan",
        "Managed national SMS marketing campaigns reaching 80,000+ recipients with 83% delivery success",
        "Organized interactive robot and robodog showcases for experiential marketing engagement"
      ],
      technologies: ["BTL Marketing", "Event Management", "Influencer Coordination", "SMS Marketing", "Brand Activation"],
      image: "Changan Deepal showroom, electric vehicles display, NADA Auto Show event, brand activation, automotive marketing, premium EV brand Nepal"
    },
    {
      title: "Mentor and Facilitator",
      company: "SUMS Nepal Pvt Ltd",
      period: "2024 – Present",
      location: "Kathmandu, Nepal",
      description: "Facilitated interactive workshops and mentored students in entrepreneurial skills, bridging the gap between academia and industry.",
      achievements: [
        "Facilitated 5 workshops on Team Building, Design Thinking, and Business Pitching",
        "Mentored 137+ students through startup ideation to execution stages",
        "Co-led program design with international peers for outcome-driven learning",
        "Researched industry-academia gaps to inform practical skill-based content"
      ],
      technologies: ["Workshop Facilitation", "Mentoring", "Design Thinking", "Entrepreneurship", "Program Design"],
      image: "Workshop facilitation, student mentoring, entrepreneurship training, team building activities, educational leadership"
    },
    {
      title: "Digital Marketing Intern",
      company: "Lalpurja Nepal",
      period: "Apr 2024 – Dec 2024",
      location: "Kathmandu, Nepal",
      description: "Led digital marketing initiatives for real estate brand, focusing on lead generation and social media growth through strategic content and advertising campaigns.",
      achievements: [
        "Generated 1,000+ qualified leads for 16 properties through targeted digital campaigns",
        "Achieved 172 hiring leads with multi-platform content strategies",
        "Increased overall engagement by 40% with optimized content calendar",
        "Managed and grew social media presence for Lalpurja Nepal and Sanjay Nepal's personal brand",
        "Supervised content team of 4, ensuring SEO compliance and brand consistency"
      ],
      technologies: ["Lead Generation", "Social Media Marketing", "SEO", "Content Strategy", "Team Management", "Meta Ads"],
      image: "Real estate digital marketing, property lead generation, social media management, content strategy, team coordination Nepal"
    },
    {
      title: "Search Engine Optimization Executive",
      company: "ZEGAL",
      period: "Jan 2022 – Feb 2024",
      location: "International Markets",
      description: "Led international SEO strategy across Hong Kong, Singapore, UK, Australia, and New Zealand, driving organic growth and technical optimization.",
      achievements: [
        "Increased organic keyword coverage from 28,000 to 32,400+ through competitive mapping",
        "Built 6,730+ high-quality backlinks, increasing domain rating from 54 to 60",
        "Improved site health from 80% to 99% through technical SEO initiatives",
        "Grew monthly organic traffic from 13,000 to 18,900 visitors",
        "Led SEO strategy adaptation for 5 international markets"
      ],
      technologies: ["International SEO", "Technical SEO", "Ahrefs", "SEMrush", "Google Search Console", "Backlink Building"],
      image: "International SEO strategy, global digital marketing, search engine optimization, analytics dashboard, multi-country marketing"
    },
    {
      title: "Social Media Strategist",
      company: "COER University",
      period: "Oct 2021 – Jan 2024",
      location: "Roorkee, India",
      description: "Managed and grew social media presence for educational institution, executing growth campaigns and high-profile collaborations.",
      achievements: [
        "Increased Instagram and Facebook followers by 60% within 6 months",
        "Built COER University social presence from scratch to 17k Facebook and 7k Instagram followers",
        "Secured collaborations with celebrities including Akshay Kumar, Sherley Setia, and Kumar Vishwas",
        "Managed social media for major college events and celebrity appearances"
      ],
      technologies: ["Social Media Growth", "Influencer Marketing", "Community Management", "Content Creation", "Event Promotion"],
      image: "University social media management, educational institution marketing, influencer collaborations, student engagement, campus events"
    }
  ];

  const projects = [
    {
      title: "SOMTU VMAG Coordinator",
      company: "Video Magazine - School of Management Tribhuvan University",
      period: "Dec 2024 – Present",
      location: "Kathmandu, Nepal",
      description: "Led video magazine initiatives and social media growth for university publication, setting new engagement records.",
      achievements: [
        "Grew social media followers from 136 to 640 organically in 2 months",
        "Achieved record 5.5k video views in 24 hours (from 150 baseline)",
        "Led 24+ member team across multiple departments",
        "Selected in Top 25 teams for National Ads Competition",
        "Managed coverage for major university events including Annual Day and Graduate Conference"
      ],
      technologies: ["Video Production", "Team Leadership", "Social Media Growth", "Content Strategy", "Event Coverage"],
      image: "University video magazine, content team management, social media growth, educational content creation, team leadership"
    }
  ];

  const education = [
    {
      degree: "MBA in Marketing",
      school: "School of Management, Tribhuvan University",
      period: "2024 – Running",
      location: "Kathmandu, Nepal",
      description: "Pursuing Master of Business Administration with specialization in Marketing, combining theoretical knowledge with practical digital marketing experience.",
      image: "MBA education, business school, marketing specialization, academic pursuit, management studies Nepal"
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "College of Engineering Roorkee",
      period: "2018 – 2022",
      location: "Roorkee, India",
      description: "Bachelor's degree in Computer Science with focus on software development and technology applications in business contexts.",
      image: "Computer science engineering, technology education, software development, engineering campus, technical education India"
    },
    {
      degree: "Science Stream",
      school: "DAV College, Jawalakhel",
      period: "2017 – 2018",
      location: "Lalitpur, Nepal",
      description: "Completed high school education with science focus, building foundation for technology and analytical career path.",
      image: "Science education, high school studies, academic foundation, DAV College campus, preparatory education Nepal"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-blue-600 dark:text-blue-400">3+ years</span> of driving digital growth across 
            <span className="font-semibold text-green-600 dark:text-green-400"> international markets</span>, 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> brand campaigns</span>, and 
            <span className="font-semibold text-orange-600 dark:text-orange-400"> educational initiatives</span>
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Roles</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">70%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Traffic Growth</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Leads Generated</div>
          </div>
          <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">10K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Event Attendees</div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Image Section */}
                  <div className="lg:w-2/5">
                    <div className="w-full h-48 lg:h-64 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(exp.image)}&width=400&height=300&seq=exp-${index}&orientation=landscape`}
                        alt={exp.company}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-3/5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">{exp.company}</p>
                      </div>
                      <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                      <i className="ri-map-pin-line mr-2"></i>
                      {exp.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <i className="ri-trophy-line mr-2 text-yellow-500"></i>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <i className="ri-checkbox-circle-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                            {achievement}
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

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Key Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 backdrop-blur-sm border-0 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/5">
                    <div className="w-full h-48 lg:h-56 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(project.image)}&width=400&height=300&seq=proj-${index}&orientation=landscape`}
                        alt={project.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                        <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{project.company}</p>
                      </div>
                      <span className="text-sm bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full font-medium mt-2 sm:mt-0">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                      <i className="ri-map-pin-line mr-2"></i>
                      {project.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Project Highlights</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <i className="ri-star-line text-yellow-500 mr-2 mt-0.5 flex-shrink-0"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-purple-700 dark:text-purple-300 rounded-full font-medium border border-purple-200 dark:border-purple-800"
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
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-full h-48 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(edu.image)}&width=300&height=200&seq=edu-${index}&orientation=landscape`}
                        alt={edu.school}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <span className="text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full font-medium mt-2 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                      <i className="ri-map-pin-line mr-2"></i>
                      {edu.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Language Proficiency</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-lg font-semibold">English</div>
              <div className="text-sm opacity-90">Fluent</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Nepali</div>
              <div className="text-sm opacity-90">Fluent</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Hindi</div>
              <div className="text-sm opacity-90">Fluent</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Chinese</div>
              <div className="text-sm opacity-90">HSK 1</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}