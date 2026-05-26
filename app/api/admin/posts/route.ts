import { NextRequest, NextResponse } from 'next/server';
import { getAllPostsAdmin, saveAllPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';

const ADMIN_PASSWORD = '1234';

function authorized(req: NextRequest): boolean {
  const token = req.headers.get('x-admin-token');
  return token === ADMIN_PASSWORD;
}

// GET — fetch all posts (admin, includes drafts)
export async function GET(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const posts = getAllPostsAdmin();
  return NextResponse.json(posts);
}

// POST — create new post
export async function POST(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body: Omit<BlogPost, 'id'> = await req.json();
  const posts = getAllPostsAdmin();
  const newPost: BlogPost = {
    ...body,
    id: Date.now().toString(),
  };
  posts.unshift(newPost);
  saveAllPosts(posts);
  return NextResponse.json(newPost, { status: 201 });
}

// PUT — update existing post
export async function PUT(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body: BlogPost = await req.json();
  const posts = getAllPostsAdmin();
  const idx = posts.findIndex((p) => p.id === body.id);
  if (idx === -1) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  posts[idx] = body;
  saveAllPosts(posts);
  return NextResponse.json(posts[idx]);
}

// DELETE — remove post by id
export async function DELETE(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await req.json();
  const posts = getAllPostsAdmin().filter((p) => p.id !== id);
  saveAllPosts(posts);
  return NextResponse.json({ success: true });
}