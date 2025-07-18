interface Post {
  tags?: string[];
}

export function getAllTagsFromPosts(posts: Post[]) {
  const taggedPosts = posts.filter((post) => post?.tags);
  const tags = [...taggedPosts.map((p) => p.tags).flat()];
  const tagObj: Record<string, number> = {};

  tags.forEach((tag) => {
    if (tag) {
      if (tag in tagObj) {
        tagObj[tag]++;
      } else {
        tagObj[tag] = 1;
      }
    }
  });

  return tagObj;
}
