import { clientConfig } from "@/lib/server/config";
import { getAllPosts, getPostBlocks } from "@/lib/notion";
import { createHash } from "crypto";
import { useRouter } from "next/router";
import { useConfig } from "@/lib/config";
import Container from "@/components/Container";
import Post from "@/components/Post";
import Comments from "@/components/Comments";

export async function getStaticProps() {
  const posts = await getAllPosts({ includePages: true });
  const post = posts.find((t) => t.slug === "index");
  if (!post) return { notFound: true };

  const blockMap = await getPostBlocks(post.id);
  const emailHash = createHash("md5")
    .update(clientConfig.email)
    .digest("hex")
    .trim()
    .toLowerCase();

  return {
    props: { post, blockMap, emailHash },
    revalidate: 1,
  };
}
export default function IndexPage({ post, blockMap, emailHash }) {
  const router = useRouter();
  const BLOG = useConfig();

  if (router.isFallback) return null;

  return (
    <Container
      layout="blog"
      title={post.title}
      description={post.summary}
      slug={post.slug}
      type="article"
      fullWidth={post.fullWidth}
    >
      <Post
        post={post}
        blockMap={blockMap}
        emailHash={emailHash}
        fullWidth={post.fullWidth}
      />
    </Container>
  );
}
