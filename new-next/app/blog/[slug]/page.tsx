import { getPayload } from "payload";
import config from "../../../payload.config";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const payload = await getPayload({ config });

  try {
    const posts = await payload.find({
      collection: "posts",
      where: {
        slug: {
          equals: params.slug,
        },
        status: {
          equals: "published",
        },
      },
      limit: 1,
    });

    if (!posts.docs.length) {
      notFound();
    }

    const post = posts.docs[0];

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <span>By {post.author || "mesh team"}</span>
              {post.publishedAt && (
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {post.excerpt && (
            <div className="text-lg text-gray-700 mb-8 italic">
              {post.excerpt}
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {/* Rich text content will be rendered here */}
            <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Back to blog
        </Link>
        <div className="text-center py-12">
          <p className="text-red-500">
            Error loading blog post. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
