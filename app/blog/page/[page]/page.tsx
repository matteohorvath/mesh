/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllPosts } from "@/lib/notion";
import { blogConfig } from "@/lib/blog-config";
import BlogPost from "@/components/blog/BlogPost";
import Pagination from "@/components/blog/Pagination";
import Navigation from "@/components/navigation";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: {
    page: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: false });
  const totalPages = Math.ceil(posts.length / blogConfig.postsPerPage);

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const page = parseInt(params.page);

  return {
    title: `Blog - Page ${page} - ${blogConfig.title}`,
    description: blogConfig.description,
  };
}

export default async function BlogPagePagination({ params }: BlogPageProps) {
  const page = parseInt(params.page);
  const posts = await getAllPosts({ includePages: false });

  if (page < 2) {
    notFound();
  }

  const startIndex = (page - 1) * blogConfig.postsPerPage;
  const endIndex = startIndex + blogConfig.postsPerPage;
  const postsToShow = posts.slice(startIndex, endIndex);

  if (postsToShow.length === 0) {
    notFound();
  }

  const totalPosts = posts.length;
  const showNext = page * blogConfig.postsPerPage < totalPosts;

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
              {blogConfig.title} Blog - Page {page}
            </h1>
            <p className="text-lg text-muted-foreground">
              {blogConfig.description}
            </p>
          </header>

          <div className="space-y-6">
            {postsToShow.map((post: any) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>

          <Pagination page={page} showNext={showNext} />
        </div>
      </div>
    </main>
  );
}
