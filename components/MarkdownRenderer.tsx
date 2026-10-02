'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-blue-400 prose-code:text-blue-300 prose-pre:bg-navy-light/50">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Custom image component using Next/Image
          img: ({ src, alt }) => {
            if (!src) return null;
            return (
              <div className="my-6 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={typeof src === 'string' ? src : URL.createObjectURL(src)}
                  alt={alt || ''}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  unoptimized={src.startsWith('/uploads')}
                />
              </div>
            );
          },
          // Style headings
          h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>,
          ul: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-1">{children}</ol>,
          li: ({ children }) => <li className="text-gray-300">{children}</li>,
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}