'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { COMPANIES } from '../data';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const company = useMemo(() => COMPANIES.find(c => c.id === params.id), [params.id]);

  if (!company) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-center text-gray-500">Project not found.</p>
        <div className="text-center mt-6">
          <Link href="/projects" className="text-blue-600 hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-6">
        <img src={company.logo} alt={`${company.name} logo`} className="w-16 h-16 object-contain" />
        <h1 className="text-3xl font-bold">{company.name}</h1>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{company.summary}</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Highlights</h2>
        <ul className="list-disc ml-6 space-y-2">
          {company.highlights.map(h => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Key Skills</h2>
        <div className="flex flex-wrap gap-2">
          {company.skills.map(s => (
            <span key={s} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">{s}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
          <i className="ri-arrow-left-line"></i>
          Back to Projects
        </Link>
      </div>
    </div>
  );
}


