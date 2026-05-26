import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { BlogPost } from '@/types/blog';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Dipendra Bhatta`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  // Simple markdown-like rendering: ## headings, **bold**, paragraphs
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="font-heading text-2xl font-bold text-white mt-10 mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    }
    if (block.match(/^\d+\./m)) {
      const items = block.split('\n').filter(Boolean);
      return (
        <ol key={i} className="list-decimal list-inside space-y-2 text-gray-300 my-4 pl-2">
          {items.map((item, j) => (
            <li key={j}>{item.replace(/^\d+\.\s*/, '')}</li>
          ))}
        </ol>
      );
    }
    // Handle **bold**
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-gray-300 leading-relaxed my-4">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
            : part
        )}
      </p>
    );
  });
}

const categoryColors: Record<string, string> = {
  SEO: 'text-blue-400 bg-blue-500/15 border-blue-500/25',
  'Content Strategy': 'text-emerald-400 bg-emerald-500/15 border-emerald-500/25',
  Podcast: 'text-purple-400 bg-purple-500/15 border-purple-500/25',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPost | undefined = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const catClass = categoryColors[post.category] ?? 'text-gray-400 bg-gray-500/15 border-gray-500/25';

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-12 transition-colors">
          <i className="ri-arrow-left-line" /> Back to Blog
        </Link>

        {/* Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${catClass}`}>
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.date}</span>
            <span className="text-gray-500 text-sm">· {post.readTime} read</span>
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed border-l-2 border-blue-500/40 pl-5">
            {post.excerpt}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mb-10" />

        {/* Content */}
        <article className="prose-custom">
          {renderContent(post.content)}
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/8">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/8">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">More in {post.category}</p>
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <div className="group rounded-xl border border-white/8 bg-navy-light/50 p-5 hover:border-white/20 transition-all duration-300">
                    <h4 className="font-heading font-semibold text-white group-hover:text-blue-300 transition-colors mb-1">
                      {r.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
