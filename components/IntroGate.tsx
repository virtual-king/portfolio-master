'use client';

import { useEffect, useState } from 'react';

export default function IntroGate() {
  // Always show on load; we hide after the sequence completes
  const [visible, setVisible] = useState(true);
  const [portal, setPortal] = useState(false);

  useEffect(() => {
    // No gating; always visible on first render of the page
    setVisible(true);
    // Auto-trigger the sequence after a brief delay
    const timer = setTimeout(() => {
      setPortal(true);
      setTimeout(() => {
        setVisible(false);
        setPortal(false);
      }, 2000);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // No more rope pulling needed

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[1000] bg-black text-white flex items-center justify-center overflow-hidden ${portal ? 'intro-portal' : ''}`}>
      {/* Just show welcome text directly */}
      <div className="relative flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center text-white welcome-enter">
          Welcome to my Portfolio
        </h1>
      </div>

      {/* Portal overlay */}
      {portal && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="portal-circle" />
        </div>
      )}
    </div>
  );
}


