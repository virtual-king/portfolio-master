'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeProvider';

const navLinks = [
  { name: 'Home',       href: '/' },
  { name: 'About',      href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills',     href: '/skills' },
  { name: 'Projects',   href: '/projects' },
  { name: 'Blog',       href: '/blog' },
  { name: 'Contact',    href: '/contact' },
];

export default function Navbar() {
  const pathname    = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* Add shadow when scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300
        bg-[#0a1628] text-white
        ${scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.45)]' : ''}`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white hover:text-blue-300 transition-colors"
          aria-label="Go to homepage"
        >
          <span className="text-blue-400">D.</span>Bhatta
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                  ${isActive(href)
                    ? 'text-blue-300 bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/8'
                  }`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {name}
                {isActive(href) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right-side controls ── */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light'
              ? <i className="ri-moon-line text-lg" aria-hidden="true" />
              : <i className="ri-sun-line text-lg"  aria-hidden="true" />
            }
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span aria-hidden="true">
              {menuOpen
                ? <i className="ri-close-line text-xl" />
                : <i className="ri-menu-line  text-xl" />
              }
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-[#0d1f3c] border-t border-white/10 overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-4 py-3 space-y-1" role="list">
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors min-h-[44px] flex items-center
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                  ${isActive(href)
                    ? 'text-blue-300 bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/8'
                  }`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
