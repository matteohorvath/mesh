"use client";

import { blogConfig } from "@/lib/blog-config";
import FormattedDate from "./FormattedDate";
import NotionRenderer from "./NotionRenderer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";

interface Post {
  id: string;
  title: string;
  slug: string;
  date: number;
  summary?: string;
  tags?: string[];
  type?: string[];
  fullWidth?: boolean;
}

interface PostProps {
  post: Post;
  blockMap: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  fullWidth?: boolean;
}

export default function Post({ post, blockMap, fullWidth = false }: PostProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push(blogConfig.path);
  };

  const handleTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <article
      className={`flex flex-col mt-8 ${fullWidth ? "w-full" : "max-w-4xl mx-auto"}`}
    >
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {post.title}
        </h1>

        {post.type?.[0] !== "Page" && (
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-sm">By {blogConfig.author}</span>
            </div>
            <span>•</span>
            <FormattedDate date={post.date} className="text-sm" />

            {post.tags && post.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <NotionRenderer
          recordMap={blockMap}
          fullWidth={fullWidth}
          className="notion-content"
        />
      </div>

      {/* Back and Top buttons */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
        <Button variant="ghost" onClick={handleBackClick} className="group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Button>

        <Button variant="ghost" onClick={handleTopClick} className="group">
          <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
          Top
        </Button>
      </div>
    </article>
  );
}
