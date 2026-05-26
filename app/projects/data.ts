export type Person = {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string | any;
  workDetails: {
    title: string;
    description: string;
    achievements: string[];
    skills: string[];
    duration: string;
  };
};

export type Company = {
  id: string;
  name: string;
  logo: string;
  website?: string;
};

export type TeamWork = {
  id: string;
  title: string;
  instagramUrl: string;
  description?: string;
};
import Durgesh from '../public/people/durgesh_thapa.jpg';
import Sabita from '../public/people/sabita_karki.jpg';
import Muna from '../public/people/muna-gauchan.jpg';
import Anjil from '../public/people/anjil-maskey.jpg';
import AutoIndustry from '../public/people/auto-industry.jpg';
export const PEOPLE: Person[] = [
  {
    id: 'durgesh-thapa',
    name: 'Durgesh Thapa',
    role: 'Nepali Music Star',
    company: 'CHANGAN Deepal',
    image: Durgesh,
    workDetails: {
      title: 'CHANGAN Deepal Marketing Campaign',
      description: 'Executed below-the-line (BTL) campaigns for Nepal\'s premium EV brand, including NADA Auto Show and Exchange Camp.',
      achievements: [
        'Coordinated with top influencers and managed live brand engagement',
        'Featured creative direction for shoots with 10,000+ attendees',
        'Successfully managed brand presence at major automotive events'
      ],
      skills: ['Brand Activation', 'Experimental Marketing', 'Influencer Coordination', 'Event Management'],
      duration: '2023 - Present'
    }
  },
  {
    id: 'sabita-karki',
    name: 'Sabita Karki',
    role: 'Fashion Model & Ramp Walk Choreographer',
    company: 'Lalpurja Nepal',
    image: Sabita,
    workDetails: {
      title: 'Lalpurja Nepal Digital Growth Strategy',
      description: 'Led comprehensive digital marketing strategy resulting in significant lead generation and engagement growth.',
      achievements: [
        'Generated 1,000+ property leads through optimized ad campaigns',
        'Achieved 172 hiring leads with multi-platform content strategies',
        'Boosted overall engagement by 40% with targeted SEO'
      ],
      skills: ['Lead Generation', 'SEO', 'Social Media Marketing', 'Content Strategy'],
      duration: '2022 - 2023'
    }
  },
  {
    id: 'muna-gauchan',
    name: 'Muna Gauchan',
    role: 'Artist',
    company: 'CHANGAN Deepal',
    image: Muna,
    workDetails: {
      title: 'Creative Content & Brand Storytelling',
      description: 'Developed engaging content strategies and brand stories that connected with target audiences.',
      achievements: [
        'Created viral content campaigns with high engagement rates',
        'Developed brand voice and storytelling framework',
        'Managed cross-platform content distribution'
      ],
      skills: ['Content Strategy', 'Brand Storytelling', 'Video Production', 'Digital Marketing'],
      duration: '2023 - Present'
    }
  },
  {
    id: 'anjil-maskey',
    name: 'Anjil Maskey',
    role: 'Fashion / Portrait Photographer from Nepal',
    company: 'Changan Deepal',
    image: Anjil,
    workDetails: {
      title: 'International SEO Optimization',
      description: 'Led international SEO strategy across Hong Kong, Singapore, UK, Australia, and New Zealand.',
      achievements: [
        'Increased domain authority from 54 to 60',
        'Built 6,730+ high-quality backlinks',
        'Boosted monthly traffic by 45% through technical improvements'
      ],
      skills: ['International SEO', 'Data Analytics', 'Technical SEO', 'Keyword Strategy'],
      duration: '2021 - 2022'
    }
  },
  {
    id: 'auto-industry',
    name: 'Automotive Industry Leaders',
    role: 'Industry Partners',
    company: 'NADA Auto Show',
    image: '/people/auto-industry.jpg',
    workDetails: {
      title: 'NADA Auto Show Coordination',
      description: 'Managed comprehensive brand presence and partnerships at Nepal\'s premier automotive exhibition.',
      achievements: [
        'Coordinated with industry leaders and automotive brands',
        'Managed live brand engagement for 10,000+ attendees',
        'Successfully executed exchange camp initiatives'
      ],
      skills: ['Event Management', 'Industry Relations', 'Brand Activation', 'Partnership Development'],
      duration: '2023 - Present'
    }
  }
];

export const COMPANIES: Company[] = [
  {
    id: 'changan-deepal',
    name: 'CHANGAN Deepal',
    logo: '/companies/changan-deepal.png',
    website: 'https://changan.com.np'
  },
  {
    id: 'lalpurja-nepal',
    name: 'Lalpurja Nepal',
    logo: '/companies/lalpurja-nepal.png',
    website: 'https://lalpurja.com'
  },
  {
    id: 'nada-auto-show',
    name: 'NADA Auto Show',
    logo: '/companies/nada-auto-show.png',
    website: 'https://nadaautoshow.com'
  },
  {
    id: 'auto-experts',
    name: 'Auto Experts Nepal',
    logo: '/companies/auto-experts.png'
  },
  {
    id: 'ev-nepal',
    name: 'EV Nepal',
    logo: '/companies/ev-nepal.png'
  }
];

export const TEAM_WORKS: TeamWork[] = [
  {
    id: 'cake-chautari',
    title: 'Advertisement for Cake Chautari',
    instagramUrl: 'https://www.instagram.com/reel/DN0xo4l5Ou5/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    description: 'Advertisement for Cake Chautari'
  },
  {
    id: 'cell-fusion',
    title: 'Advertisement for Cell Fusion',
    instagramUrl: 'https://www.instagram.com/reel/DNm5eDdSgYX/?utm_source=ig_web_copy_link',
    description: 'Advertisement for Cell Fusion'
  },
  {
    id: 'cell-fusion-2',
    title: 'Advertisement for Cell Fusion',
    instagramUrl: 'https://www.instagram.com/reel/DOEKTuYkj3B/?igsh=NjN6bXJtYTBiMWcz',
    description: 'Advertisement for Cell Fusion'
  }
];

export function getPersonById(id: string) {
  return PEOPLE.find(p => p.id === id);
}

export function getCompanyById(id: string) {
  return COMPANIES.find(c => c.id === id);
}