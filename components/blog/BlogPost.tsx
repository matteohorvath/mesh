"use client";

import Link from "next/link";
import FormattedDate from "./FormattedDate";
import { blogConfig } from "@/lib/blog-config";

interface Post {
  id: string;
  title: string;
  slug: string;
  date: number;
  summary?: string;
}

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Link href={`${blogConfig.path}/${post.slug}`}>
      <article className="mb-6 md:mb-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary/50 transition-colors">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline">
          <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-foreground hover:text-primary transition-colors">
            {post.title}
          </h2>
          <FormattedDate
            date={post.date}
            className="flex-shrink-0 text-muted-foreground text-sm"
          />
        </header>
        <main>
          <p className="hidden md:block leading-8 text-muted-foreground mt-2">
            {post.summary}
          </p>
        </main>
      </article>
    </Link>
  );
}
