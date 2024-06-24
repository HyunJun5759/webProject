import PostList from "@/components/PostList";
import clientPromise from "@/lib/mongodb";

export default async function CummunityPage() {
  const client = await clientPromise;
  const posts = await client
    .db("User")
    .collection("posts")
    .find({})
    .limit(10)
    .toArray();

  return <PostList posts={posts} />;
}
