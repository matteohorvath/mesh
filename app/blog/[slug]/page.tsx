/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPosts, getPostBlocks } from "@/lib/notion";
import { blogConfig } from "@/lib/blog-config";
import Post from "@/components/blog/Post";
import Navigation from "@/components/navigation";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: true });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = await getAllPosts({ includePages: true });
  const post = posts.find((p: any) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - ${blogConfig.title}`,
    description: (post as any).summary || blogConfig.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = await getAllPosts({ includePages: true });
  const post = posts.find((p: any) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blockMap = await getPostBlocks((post as any).id);

  const scrollToJoin = () => {
    // No-op for blog page
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 pt-24">
        <Post
          post={post as any}
          blockMap={blockMap}
          fullWidth={(post as any).fullWidth}
        />
      </div>
    </main>
  );
}
