"use client";
import TextInput from "@/components/auth/TextInput";
import Background from "@/components/background/mainBackground";
import Button from "@/components/auth/button";
import { useFormState } from "react-dom";
import { writeAction } from "@/lib/action";
export default function WritePage() {
  const [state, formAction] = useFormState(writeAction, null);

  return (
    <Background>
      <div className="flex justify-center">
        <form className="w-1/2" action={formAction}>
          <TextInput title="제목" type="text" id="title" name="title" />
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            내용
          </label>
          <div className="mt-2 mb-2">
            <textarea
              id="description"
              name="description"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>

          <Button title="작성" />
        </form>
      </div>
    </Background>
  );
}
