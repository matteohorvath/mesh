import Link from "next/link";

interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    author?: string;
    publishedAt?: string;
    tags?: string[];
  };
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <Link
            href={`/blog/${post.slug}`}
            className="text-gray-900 hover:text-gray-600"
          >
            {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>By {post.author || "mesh team"}</span>
          {post.publishedAt && (
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          )}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {post.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
