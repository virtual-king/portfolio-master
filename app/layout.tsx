import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─── Fonts ─────────────────────────────────────────────── */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

/* ─── Global SEO metadata ────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://dipendrabhatta.com'),

  title: {
    default: 'Dipendra Bhatta — Digital Marketing Specialist',
    template: '%s | Dipendra Bhatta',
  },

  description:
    'Digital Marketing Specialist with 4+ years of experience in SEO, content strategy, BTL marketing and brand campaigns across Nepal and international markets.',

  keywords: [
    'Digital Marketing',
    'SEO',
    'Nepal',
    'Content Strategy',
    'Brand Campaigns',
    'Dipendra Bhatta',
  ],

  authors: [{ name: 'Dipendra Bhatta', url: 'https://dipendrabhatta.com' }],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dipendrabhatta.com',
    siteName: 'Dipendra Bhatta Portfolio',
    title: 'Dipendra Bhatta — Digital Marketing Specialist',
    description:
      'Digital Marketing Specialist with 4+ years of experience in SEO, content strategy, BTL marketing and brand campaigns.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dipendra Bhatta Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dipendra Bhatta — Digital Marketing Specialist',
    description:
      'Digital Marketing Specialist with 4+ years of experience in SEO, content strategy, BTL marketing and brand campaigns.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* ─── Root layout ────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body
        className={`
          font-sans antialiased
          bg-navy text-white
          flex flex-col min-h-screen
        `}
      >
        {/* Skip-to-content link for keyboard users */}
        <a
          href="#main-content"
          className="
            sr-only focus:not-sr-only
            focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
            focus:px-4 focus:py-2 focus:rounded-lg
            focus:bg-blue-600 focus:text-white focus:font-semibold
          "
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="pt-16 flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}