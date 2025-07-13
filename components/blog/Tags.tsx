"use client";

import Link from "next/link";
import { blogConfig } from "@/lib/blog-config";
import { Badge } from "@/components/ui/badge";

interface TagsProps {
  tags: Record<string, number>;
  currentTag?: string;
}

export default function Tags({ tags, currentTag }: TagsProps) {
  const tagEntries = Object.entries(tags).sort((a, b) => b[1] - a[1]);

  if (tagEntries.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {currentTag && (
          <Link href={blogConfig.path}>
            <Badge variant="secondary" className="cursor-pointer">
              All Posts
            </Badge>
          </Link>
        )}
        {tagEntries.map(([tag, count]) => (
          <Link key={tag} href={`${blogConfig.path}/tag/${tag}`}>
            <Badge
              variant={currentTag === tag ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/10"
            >
              {tag} ({count})
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
