/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPosts, getAllTagsFromPosts } from "@/lib/notion";
import { blogConfig } from "@/lib/blog-config";
import BlogSearch from "@/components/blog/BlogSearch";
import Tags from "@/components/blog/Tags";
import Navigation from "@/components/navigation";

export const metadata = {
  title: `Search - ${blogConfig.title}`,
  description: `Search through ${blogConfig.title} blog posts`,
};

export default async function BlogSearchPage() {
  const posts = await getAllPosts({ includePages: false });
  const tags = getAllTagsFromPosts(posts as any);

  return (
    <main className="min-h-screen bg-background">
      <Navigation scrollToJoin={scrollToJoin} />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Search Blog Posts
            </h1>
            <p className="text-lg text-muted-foreground">
              Find articles and posts from {blogConfig.title}
            </p>
          </header>

          <Tags tags={tags} />

          <BlogSearch posts={posts as any} />
        </div>
      </div>
    </main>
  );
}
