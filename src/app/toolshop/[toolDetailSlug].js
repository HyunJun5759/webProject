import clientPromise from "@/lib/mongodb";

export default async function ToolDetailPage({ params }) {
  const client = await clientPromise;

  return <div>{params.toolDetailSlug}</div>;
}
