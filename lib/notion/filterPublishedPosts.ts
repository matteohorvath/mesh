interface Post {
  type?: string[];
  title?: string;
  slug?: string;
  status?: string[];
  date?: number;
}

interface FilterOptions {
  posts: Post[];
  includePages: boolean;
}

export default function filterPublishedPosts({
  posts,
  includePages,
}: FilterOptions) {
  if (!posts || !posts.length) return [];

  return posts
    .filter((post) =>
      includePages
        ? post?.type?.[0] === "Post" || post?.type?.[0] === "Page"
        : post?.type?.[0] === "Post",
    )
    .filter(
      (post) =>
        post.title &&
        post.slug &&
        post?.status?.[0] === "Published" &&
        post.date &&
        post.date <= new Date().getTime(),
    );
}
