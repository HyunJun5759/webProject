import PostDetailForm from "@/components/PostDetailForm";
import Background from "@/components/background/mainBackground";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Comment from "@/components/Comment";
export default async function PostDetailPage({ params }) {
  const client = await clientPromise;

  const postDetail = await client
    .db("User")
    .collection("posts")
    .findOne({ _id: new ObjectId(params.postDetail) });
  const comments = postDetail.comment;
  return (
    <Background>
      <div class="container mx-auto px-4 py-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h1 class="text-3xl font-bold mb-4">{postDetail.title}</h1>
          <div class="flex items-center text-gray-600 mb-4">
            <div class="flex items-center mr-6">
              <svg
                class="w-6 h-6 text-gray-500 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>{postDetail.writer}</span>
            </div>
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-500 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11z" />
              </svg>
              <span>Published Date</span>
            </div>
          </div>
          <p class="text-gray-700 text-base mb-6">{postDetail.description}</p>
          <hr class="mb-6" />
          <h2 class="text-2xl font-semibold mb-4">댓글</h2>

          <div class="space-y-4">
            {comments.map((comment) => {
              return (
                <Comment
                  key={comment.comment}
                  name={comment.writer}
                  comment={comment.comment}
                />
              );
            })}
          </div>

          <PostDetailForm id={params.postDetail} />
        </div>
      </div>
    </Background>
  );
}
