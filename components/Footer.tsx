'use client'

import Link from 'next/link'

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

const socials = [
  { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/in/dipendra-bhatta-/', label: 'LinkedIn' },
  { icon: 'ri-github-fill', href: 'https://github.com/virtual-king', label: 'GitHub' },
  { icon: 'ri-instagram-line', href: 'https://www.instagram.com/dipendrabhattaofficial/', label: 'Instagram' },
  { icon: 'ri-medium-fill', href: 'https://medium.com/@dipendrabhattadigitalmarketing', label: 'Medium' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy/95 text-gray-400 mt-auto border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
              <span className="text-blue-400">Dipendra</span> Bhatta
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Digital Marketing Specialist blending creativity and data to grow brands across Nepal and international markets.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Pages</h3>
            <ul className="space-y-2">
              {footerLinks.map(({ name, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors group"
                >
                  <i className={`${icon} text-base group-hover:scale-110 transition-transform`} aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm">
              <a href="mailto:akashbhatta014@gmail.com" className="hover:text-white transition-colors">
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
  )
}