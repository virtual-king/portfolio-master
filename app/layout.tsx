import type { Metadata } from "next";
// import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";

// const pacifico = Pacifico({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-pacifico',
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Portfolio - John Doe",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* ${geistSans.variable} ${geistMono.variable} ${pacifico.variable}  */}
      <body className={`antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}>
        <ThemeProvider>
          <Header />
          <main className="pt-16 min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
