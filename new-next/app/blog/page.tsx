import { getPayload } from "payload";
import config from "../../payload.config";
import Link from "next/link";

export default async function BlogPage() {
  const payload = await getPayload({ config });

  try {
    const posts = await payload.find({
      collection: "posts",
      where: {
        status: {
          equals: "published",
        },
      },
      sort: "-publishedAt",
    });

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">mesh blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.docs.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
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
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {post.tags.map((tag, index) => (
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
          ))}
        </div>

        {posts.docs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts published yet.</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">mesh blog</h1>
        <div className="text-center py-12">
          <p className="text-red-500">
            Error loading blog posts. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
