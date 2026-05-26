'use client';

import { useState } from 'react';
import type { Person } from '../app/projects/data';

interface FlipCardProps {
  person: Person;
}

export default function FlipCard({ person }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className={`flip-card h-96 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        {/* Front Side - Person Image */}
        <div className="flip-card-front bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="h-full flex flex-col">
            {/* Image Section */}
            <div className="h-64 overflow-hidden">
              {!imageError ? (
                <img
                  src={person.image}
                  alt={`${person.name} - ${person.role}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{person.name}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Info Section */}
            <div className="flex-1 p-6 flex flex-col justify-center text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {person.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                {person.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {person.company}
              </p>
              
              {/* Flip indicator */}
              <div className="mt-4 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <span className="text-xs">Click to see our work together</span>
                <i className="ri-arrow-right-line ml-1"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Work Details */}
        <div className="flip-card-back bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
              <ul className="space-y-1">
                {person.workDetails.achievements.map((achievement, index) => (
                  <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                    <i className="ri-check-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mb-4">
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

            {/* Flip back indicator */}
            <div className="mt-4 flex items-center justify-center text-gray-400 dark:text-gray-500">
              <i className="ri-arrow-left-line mr-1"></i>
              <span className="text-xs">Click to see profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}