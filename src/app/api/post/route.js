import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  const client = await clientPromise;

  const posts = await client.db("User").collection("posts").find({}).toArray();

  return Response.json(posts);
}
