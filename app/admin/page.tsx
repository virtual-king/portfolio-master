'use client';

import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';

const EMPTY_POST: Omit<BlogPost, 'id'> = {
  slug: '',
  title: '',
  excerpt: '',
  content: '',
  category: 'SEO',
  tags: [],
  date: new Date().toISOString().split('T')[0],
  readTime: '5 min',
  published: false,
  coverImage: '',
};

/* ── helpers ── */
function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function AdminPage() {
  const [password, setPassword]   = useState('');
  const [authed, setAuthed]       = useState(false);
  const [authError, setAuthError] = useState('');

  const [posts, setPosts]         = useState<BlogPost[]>([]);
  const [loading, setLoading]     = useState(false);
  const [view, setView]           = useState<'list' | 'edit'>('list');
  const [editing, setEditing]     = useState<BlogPost | null>(null);
  const [form, setForm]           = useState<Omit<BlogPost, 'id'>>(EMPTY_POST);
  const [saving, setSaving]       = useState(false);
  const [msg, setMsg]             = useState('');
  const [tagInput, setTagInput]   = useState('');

  /* ── fetch posts ── */
  async function fetchPosts(pw: string) {
    setLoading(true);
    const res = await fetch('/api/admin/posts', { headers: { 'x-admin-token': pw } });
    if (!res.ok) { setLoading(false); return false; }
    setPosts(await res.json());
    setLoading(false);
    return true;
  }

  /* ── login ── */
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError('');
    const ok = await fetchPosts(password);
    if (ok) setAuthed(true);
    else setAuthError('Incorrect password.');
  }

  /* ── open editor ── */
  function openNew() {
    setEditing(null);
    setForm({ ...EMPTY_POST, date: new Date().toISOString().split('T')[0] });
    setTagInput('');
    setView('edit');
  }
  function openEdit(post: BlogPost) {
    setEditing(post);
    setForm({ slug: post.slug, title: post.title, excerpt: post.excerpt, content: post.content, category: post.category, tags: post.tags, date: post.date, readTime: post.readTime, published: post.published, coverImage: post.coverImage });
    setTagInput(post.tags.join(', '));
    setView('edit');
  }

  /* ── save ── */
  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    const payload = { ...form, tags: tagInput.split(',').map((t) => t.trim()).filter(Boolean) };
    if (!payload.slug) payload.slug = slugify(payload.title);

    const method = editing ? 'PUT' : 'POST';
    const body = editing ? JSON.stringify({ ...payload, id: editing.id }) : JSON.stringify(payload);

    const res = await fetch('/api/admin/posts', { method, headers: { 'Content-Type': 'application/json', 'x-admin-token': password }, body });
    setSaving(false);
    if (res.ok) {
      setMsg(editing ? 'Post updated ✓' : 'Post created ✓');
      fetchPosts(password);
      setTimeout(() => { setMsg(''); setView('list'); }, 1200);
    } else {
      setMsg('Error saving post.');
    }
  }

  /* ── delete ── */
  async function handleDelete(id: string) {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    await fetch('/api/admin/posts', { method: 'DELETE', headers: { 'Content-Type': 'application/json', 'x-admin-token': password }, body: JSON.stringify({ id }) });
    fetchPosts(password);
  }

  /* ── auto-slug ── */
  useEffect(() => {
    if (!editing && form.title) setForm((f) => ({ ...f, slug: slugify(f.title) }));
  }, [form.title]);

  /* ════════════════════ LOGIN ════════════════════ */
  if (!authed) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-white/10 bg-navy-light/70 backdrop-blur p-8">
            <div className="mb-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                <i className="ri-lock-2-line text-blue-400 text-xl" />
              </div>
              <h1 className="font-heading text-2xl font-bold text-white">Admin Panel</h1>
              <p className="text-gray-400 text-sm mt-1">Blog management</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {authError && <p className="text-red-400 text-sm">{authError}</p>}
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  /* ════════════════════ EDITOR ════════════════════ */
  if (view === 'edit') {
    return (
      <div className="min-h-screen bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-10">
            <button onClick={() => setView('list')} className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-arrow-left-line text-lg" />
            </button>
            <h1 className="font-heading text-2xl font-bold">{editing ? 'Edit Post' : 'New Post'}</h1>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Title *</label>
                <input required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Post title" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Slug</label>
                <input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="auto-generated-from-title" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Excerpt *</label>
                <textarea required rows={2} value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Short summary shown in listings" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-400 mb-2">Content *</label>
                <textarea required rows={14} value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white resize-y font-mono text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder={'Use ## for headings, **bold** for emphasis, blank lines between paragraphs'} />
                <p className="text-xs text-gray-600 mt-1">Supports: ## H2, **bold**, numbered lists (1. item)</p>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Category</label>
                <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors">
                  <option>SEO</option>
                  <option>Content Strategy</option>
                  <option>Podcast</option>
                  <option>Digital Marketing</option>
                  <option>Analytics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Read Time</label>
                <input value={form.readTime} onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="5 min" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Date</label>
                <input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Tags</label>
                <input value={tagInput} onChange={(e) => setTagInput(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="SEO, Content, Analytics" />
                <p className="text-xs text-gray-600 mt-1">Comma-separated</p>
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button type="button" onClick={() => setForm((f) => ({ ...f, published: !f.published }))}
                  className={`relative w-11 h-6 rounded-full transition-colors ${form.published ? 'bg-blue-600' : 'bg-white/10'}`}>
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.published ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className="text-sm text-gray-300">{form.published ? 'Published' : 'Draft'}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button type="submit" disabled={saving}
                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                {saving ? 'Saving…' : (editing ? 'Update Post' : 'Publish Post')}
              </button>
              <button type="button" onClick={() => setView('list')} className="text-gray-400 hover:text-white transition-colors text-sm">
                Cancel
              </button>
              {msg && <span className={`text-sm ${msg.includes('Error') ? 'text-red-400' : 'text-emerald-400'}`}>{msg}</span>}
            </div>
          </form>
        </div>
      </div>
    );
  }

  /* ════════════════════ LIST ════════════════════ */
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-heading text-3xl font-bold">Blog Admin</h1>
            <p className="text-gray-400 text-sm mt-1">{posts.length} post{posts.length !== 1 ? 's' : ''}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={openNew}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm">
              <i className="ri-add-line" /> New Post
            </button>
            <button onClick={() => setAuthed(false)}
              className="text-gray-500 hover:text-white transition-colors text-sm px-3 py-2.5">
              Sign out
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-24 text-gray-500">Loading…</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <i className="ri-article-line text-5xl mb-4 block opacity-30" />
            No posts yet. Create your first one.
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id}
                className="flex items-center gap-4 rounded-xl border border-white/8 bg-navy-light/50 px-6 py-4 hover:border-white/15 transition-all">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium text-white truncate">{post.title}</h3>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full ${post.published ? 'bg-emerald-500/15 text-emerald-400' : 'bg-gray-500/15 text-gray-500'}`}>
                      {post.published ? 'Live' : 'Draft'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{post.category} · {post.date} · {post.readTime} read</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer"
                    className="p-2 text-gray-500 hover:text-white transition-colors" title="View">
                    <i className="ri-external-link-line" />
                  </a>
                  <button onClick={() => openEdit(post)}
                    className="p-2 text-gray-500 hover:text-blue-400 transition-colors" title="Edit">
                    <i className="ri-edit-line" />
                  </button>
                  <button onClick={() => handleDelete(post.id)}
                    className="p-2 text-gray-500 hover:text-red-400 transition-colors" title="Delete">
                    <i className="ri-delete-bin-line" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
