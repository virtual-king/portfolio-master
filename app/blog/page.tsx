import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';

export const metadata = {
  title: 'Blog | Dipendra Bhatta',
  description: 'Insights on SEO, content strategy, and digital marketing.',
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  SEO:               { bg: 'bg-blue-500/15',   text: 'text-blue-400',   border: 'border-blue-500/25' },
  'Content Strategy':{ bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/25' },
  Podcast:           { bg: 'bg-purple-500/15',  text: 'text-purple-400',  border: 'border-purple-500/25' },
};

function CategoryBadge({ category }: { category: string }) {
  const c = categoryColors[category] ?? { bg: 'bg-gray-500/15', text: 'text-gray-400', border: 'border-gray-500/25' };
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${c.bg} ${c.text} ${c.border}`}>
      {category}
    </span>
  );
}

export default function BlogPage() {
  const posts: BlogPost[] = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Writing</p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-gray-400 max-w-xl">
            Thoughts on SEO, content strategy, podcasting, and the craft of digital marketing.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`}>
            <div className="group relative rounded-2xl border border-white/8 bg-navy-light/50 p-8 lg:p-12 hover:border-white/20 transition-all duration-500 mb-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <CategoryBadge category={featured.category} />
                    <span className="text-xs text-gray-500">Featured</span>
                  </div>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime} read</span>
                  </div>
                </div>
                <div className="shrink-0 text-blue-400 flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all">
                  Read article <i className="ri-arrow-right-line text-base" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group h-full rounded-2xl border border-white/8 bg-navy-light/50 p-7 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <CategoryBadge category={post.category} />
                    <span className="text-xs text-gray-500">{post.readTime} read</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/8">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 text-blue-400 group-hover:gap-2 transition-all">
                      Read <i className="ri-arrow-right-line" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            <i className="ri-article-line text-5xl mb-4 block opacity-30" />
            No posts published yet.
          </div>
        )}
      </div>
    </div>
  );
}
