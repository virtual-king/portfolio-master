
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: 'ri-home-line' },
    { name: 'Projects', href: '/projects', icon: 'ri-folder-line' },
    { name: 'Skills', href: '/skills', icon: 'ri-code-line' },
    { name: 'Experience', href: '/experience', icon: 'ri-briefcase-line' },
    { name: 'Contact', href: '/contact', icon: 'ri-mail-line' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="grid grid-cols-5 h-16">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              pathname === item.href
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <i className={`${item.icon} text-lg`}></i>
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
