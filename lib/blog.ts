import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types/blog';

const DATA_PATH = path.join(process.cwd(), 'data', 'blog-posts.json');

export function getAllPosts(): BlogPost[] {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  const posts: BlogPost[] = JSON.parse(raw);
  return posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPostsAdmin(): BlogPost[] {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function saveAllPosts(posts: BlogPost[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2), 'utf-8');
}
