import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Dipendra Bhatta',
  description: 'Insights on SEO, content strategy, brand storytelling, and digital marketing.',
};

const blogPosts = [
  {
    title: "Why Luxury Brands Don't Sell — They Make You Feel",
    excerpt: 'We dive into how luxury brands use consumer psychology to create desire rather than just selling products.',
    date: 'Dec 10, 2024',
    category: 'Insights',
    url: 'https://medium.com/@dipendrabhattadigitalmarketing',
  },
  {
    title: 'How Data-Driven SEO Changed My Approach to Content',
    excerpt: 'What happens when you stop guessing keywords and start listening to what the data is actually telling you.',
    date: 'Dec 16, 2024',
    category: 'SEO',
    url: 'https://medium.com/@dipendrabhattadigitalmarketing',
  },
  {
    title: 'The Art of Brand Storytelling in the Digital Age',
    excerpt: "Great marketing isn't about selling — it's about creating a narrative your audience wants to be part of.",
    date: 'Dec 16, 2024',
    category: 'Strategy',
    url: 'https://medium.com/@dipendrabhattadigitalmarketing',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-navy text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Writing</p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4">Blog &amp; Insights</h1>
          <p className="text-gray-400 max-w-xl text-lg">
            Thoughts and analyses on SEO, content strategy, brand storytelling, and digital marketing.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group"
            >
              <div className="h-full rounded-2xl border border-white/8 bg-navy-light/50 p-7 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/8">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 text-blue-400 group-hover:gap-2 transition-all">
                    Read on Medium <i className="ri-arrow-right-line" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
