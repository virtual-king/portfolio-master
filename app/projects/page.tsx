'use client';

import { useState } from 'react';
import { PEOPLE, COMPANIES, TEAM_WORKS } from './data';
import Image from 'next/image';

export default function Projects() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleExpanded = (personId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(personId)) {
        newSet.delete(personId);
      } else {
        newSet.clear();
        newSet.add(personId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My Professional Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Collaborations, partnerships, and team achievements that define my career in digital marketing
          </p>
        </div>

        {/* Section 1: People I've Worked With */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              People I've Worked With
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Professional collaborations that have shaped my journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PEOPLE.map((person) => {
              const isExpanded = expandedCards.has(person.id);

              return (
                <div
                  key={person.id}
                  className="relative bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => toggleExpanded(person.id)}
                >
                  {/* Front Side - Person Card */}
                  <div className={`transition-all duration-500 ${isExpanded ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                    {/* Image Section */}
                    <div className="h-64 overflow-hidden">
                      {/* <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="text-2xl font-bold">
                              {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </span>
                          </div>
                          <p className="text-sm font-medium">{person.name}</p>
                        </div>
                      </div> */}
                      <Image className='object-cover w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center' src={person.image} height="100" width="100" alt={person.name.split(' ').map(n => n[0]).join('').slice(0, 2)} />
                    </div>

                    {/* Info Section */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {person.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {person.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {person.company}
                      </p>

                      {/* Click indicator */}
                      <div className="flex items-center justify-center text-gray-400 dark:text-gray-500">
                        <span className="text-xs">Click to see our work together</span>
                        <i className="ri-arrow-down-line ml-1"></i>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Work Details */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <div className="h-full p-6 overflow-y-auto">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {person.workDetails.title}
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                          {person.workDetails.duration}
                        </p>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {person.workDetails.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {person.workDetails.achievements.map((achievement, index) => (
                            <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                              <i className="ri-check-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Skills Applied:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {person.workDetails.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Close indicator */}
                      <div className="flex items-center justify-center text-gray-400 dark:text-gray-500">
                        <i className="ri-arrow-up-line mr-1"></i>
                        <span className="text-xs">Click to see profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Companies I've Worked With */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Companies I've Worked With
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Trusted partners and clients in my professional journey
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {COMPANIES.map((company) => (
                <div
                  key={company.id}
                  className="group relative p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="w-24 h-24 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center">
                        {company.name}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: My Team Works - Instagram Links */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Team Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Check out our team's work on Instagram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_WORKS.map((work) => (
              <a
                key={work.id}
                href={work.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Instagram Card Header */}
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                  <div className="text-white text-center z-10">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className="ri-instagram-line text-2xl"></i>
                    </div>
                    <p className="text-sm font-medium">View on Instagram</p>
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {work.title}
                  </h3>
                  {work.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {work.description}
                    </p>
                  )}

                  {/* Instagram Link Indicator */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <i className="ri-external-link-line mr-1"></i>
                      Open in Instagram
                    </span>
                    <i className="ri-arrow-right-up-line text-gray-400 group-hover:text-blue-500 transition-colors"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click on people cards to reveal collaboration details
          </p>
        </div>
      </div>
    </div>
  );
}