"use client";

import { useFormState } from "react-dom";
import { commentAction } from "@/lib/action";
export default function PostDetailForm({ id }) {
  const [state, formAction] = useFormState(commentAction, null);

  return (
    <div class="mt-6">
      <h2 class="text-2xl font-semibold mb-4">댓글작성</h2>
      <form action={formAction}>
        <div class="mb-4">
          <input type="hidden" name="postId" id="postId" value={id} />
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="comment"
          >
            내용
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            name="comment"
            rows="4"
            placeholder="Your comment"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            작성
          </button>
        </div>
      </form>
    </div>
  );
}
