export type TeamWork = {
  id: string;
  title: string;
  instagramUrl: string;
  description: string;
  image: string;
  video?: string;
  isVideo?: boolean;
};

export const TEAM_WORKS: TeamWork[] = [
  // Featuring Sabita Karki
  {
    id: 'sabita-1',
    title: 'Fashion Forward Series',
    instagramUrl: 'https://www.instagram.com/p/DZWM8x6obJ3/',
    description: 'Featuring Sabita Karki',
    image: '/images/instagram/sabita-1.png',
    isVideo: false,
  },
  {
    id: 'sabita-2',
    title: 'Fashion Forward Series',
    instagramUrl: 'https://www.instagram.com/p/DZT8CAXNg68/',
    description: 'Featuring Sabita Karki',
    image: '/images/instagram/sabita-2.png',
    isVideo: false,
  },
  {
    id: 'sabita-3',
    title: 'Fashion Forward Series',
    instagramUrl: 'https://www.instagram.com/p/DYzaQm4NaZF/',
    description: 'Featuring Sabita Karki',
    image: '/images/instagram/sabita-3.png',
    isVideo: false,
  },
  {
    id: 'sabita-4',
    title: 'Fashion Forward Series',
    instagramUrl: 'https://www.instagram.com/p/DYmtxfgEbLD/',
    description: 'Featuring Sabita Karki',
    image: '/images/instagram/sabita-4.png',
    isVideo: false,
  },
  // Featuring Shristi Shrestha
  {
    id: 'shristi-1',
    title: 'Fashion Forward Series',
    instagramUrl: 'https://www.instagram.com/p/DYuM86YN1R3/',
    description: 'Featuring Shristi Shrestha',
    image: '/images/instagram/shristi-1.png',
    isVideo: false,
  },
  {
    id: 'shristi-reel',
    title: 'Fashion Forward Series',
    instagramUrl: 'https://www.instagram.com/reel/DYuM86YN1R3/',
    description: 'Reel featuring Shristi Shrestha',
    image: '/images/instagram/shristi-2.png',
    isVideo: false,
  },

  // Featuring Muna Gauchan
  {
    id: 'muna-1',
    title: 'Fashion Forward Series',
    instagramUrl: 'https://www.instagram.com/p/DYpAi8AtNzl/',
    description: 'Featuring Muna Gauchan',
    image: '/images/instagram/muna-1.png',
    isVideo: false,
  },
  {
    id: 'muna-reel',
    title: 'Fashion Forward Series',
    instagramUrl: 'https://www.instagram.com/reel/DYpAi8AtNzl/',
    description: 'Reel featuring Muna Gauchan',
    image: '/images/instagram/muna-2.png',
    isVideo: false,
  },
];