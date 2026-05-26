'use client';

import Link from 'next/link';

const footerLinks = [
  { name: 'Home',       href: '/' },
  { name: 'About',      href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills',     href: '/skills' },
  { name: 'Projects',   href: '/projects' },
  { name: 'Blog',       href: '/blog' },
  { name: 'Contact',    href: '/contact' },
];

const socials = [
  { icon: 'ri-linkedin-fill',  href: 'https://www.linkedin.com/in/dipendra-bhatta-/', label: 'LinkedIn'  },
  { icon: 'ri-github-fill',    href: 'https://github.com/virtual-king',               label: 'GitHub'    },
  { icon: 'ri-instagram-line', href: 'https://www.instagram.com/dipendrabhattaofficial/', label: 'Instagram' },
  { icon: 'ri-medium-fill',    href: 'https://medium.com/@dipendra-bhatta',            label: 'Medium'    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
              <span className="text-blue-400">D.</span>Bhatta
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Digital Marketing Strategist blending creativity and data to grow brands across Nepal and international markets.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Pages</h3>
            <ul className="space-y-2">
              {footerLinks.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                    hover:bg-blue-500 hover:text-white transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <i className={`${icon} text-base`} aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm">
              <a
                href="mailto:akashbhatta014@gmail.com"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
              >
                akashbhatta014@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {year} Dipendra Bhatta. All rights reserved.</p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
