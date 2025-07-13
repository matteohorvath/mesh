/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPosts, getAllTagsFromPosts } from "@/lib/notion";
import { blogConfig } from "@/lib/blog-config";
import BlogSearch from "@/components/blog/BlogSearch";
import Tags from "@/components/blog/Tags";
import Navigation from "@/components/navigation";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: false });
  const tags = getAllTagsFromPosts(posts as any);

  return Object.keys(tags).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag);

  return {
    title: `Posts tagged "${tag}" - ${blogConfig.title}`,
    description: `Browse posts tagged with "${tag}" from ${blogConfig.title}`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag);
  const posts = await getAllPosts({ includePages: false });
  const tags = getAllTagsFromPosts(posts as any);

  // Filter posts by tag
  const filteredPosts = posts.filter(
    (post: any) => post.tags && post.tags.includes(tag),
  );

  if (filteredPosts.length === 0) {
    notFound();
  }

  const scrollToJoin = () => {
    // No-op for blog page
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation scrollToJoin={scrollToJoin} />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Posts tagged &ldquo;{tag}&rdquo;
            </h1>
            <p className="text-lg text-muted-foreground">
              {filteredPosts.length} post{filteredPosts.length === 1 ? "" : "s"}{" "}
              found
            </p>
          </header>

          <Tags tags={tags} currentTag={tag} />

          <BlogSearch posts={filteredPosts as any} currentTag={tag} />
        </div>
      </div>
    </main>
  );
}
