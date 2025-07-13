"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import BlogPost from "./BlogPost";

interface Post {
  id: string;
  title: string;
  slug: string;
  date: number;
  summary?: string;
  tags?: string[];
}

interface BlogSearchProps {
  posts: Post[];
  currentTag?: string;
}

export default function BlogSearch({ posts, currentTag }: BlogSearchProps) {
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = posts.filter((post) => {
    const tagContent = post.tags ? post.tags.join(" ") : "";
    const searchContent = `${post.title} ${post.summary || ""} ${tagContent}`;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative mb-8">
        <input
          type="text"
          placeholder={
            currentTag ? `Search in #${currentTag}` : "Search articles..."
          }
          className="w-full px-4 py-3 pl-12 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
      </div>

      <div className="space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchValue
                ? "No posts found matching your search."
                : "No posts available."}
            </p>
          </div>
        ) : (
          filteredPosts
            .slice(0, 20)
            .map((post) => <BlogPost key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}
