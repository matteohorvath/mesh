/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPosts } from "@/lib/notion";
import { blogConfig } from "@/lib/blog-config";
import BlogPost from "@/components/blog/BlogPost";
import Pagination from "@/components/blog/Pagination";
import Navigation from "@/components/navigation";

export const metadata = {
  title: `Blog - ${blogConfig.title}`,
  description: blogConfig.description,
};

export default async function BlogPage() {
  const posts = await getAllPosts({ includePages: false });
  const postsToShow = posts.slice(0, blogConfig.postsPerPage);
  const totalPosts = posts.length;
  const showNext = totalPosts > blogConfig.postsPerPage;
  const currentPage = 1;

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {blogConfig.title} Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              {blogConfig.description}
            </p>
          </header>

          <div className="space-y-6">
            {postsToShow.length > 0 ? (
              postsToShow.map((post: any) => (
                <BlogPost key={post.id} post={post} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No blog posts found.</p>
              </div>
            )}
          </div>

          {showNext && <Pagination page={currentPage} showNext={showNext} />}
        </div>
      </div>
    </main>
  );
}
