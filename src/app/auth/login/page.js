/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

"use client";

import Button from "@/components/auth/button";
import Background_Login from "@/components/background/authBackground";
import Link from "next/link";
import TextInput from "@/components/auth/TextInput";
// import { loginAction } from "@/lib/action";
// import { useFormState } from "react-dom";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

function Submit({ isLoading }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {isLoading ? "전송중..." : "로그인"}
    </button>
  );
}

export default function Login() {
  // const [state, formAction] = useFormState(loginAction, null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  async function submitLogin(event) {
    event.preventDefault();

    setIsLoading(true);

    const enterdEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const res = await signIn("credentials", {
      redirect: false,
      email: enterdEmail,
      password: enteredPassword,
    });

    if (!res.error) {
      setIsLoading(false);
      router.replace("/");
    }
    setError(res.error);
  }
  return (
    <>
      <Background_Login>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center h-10 mx-auto">
            <Image
              width="50"
              height="10"
              src="https://tailwindui.com/img/logos/mark.svg"
              alt="Your Company"
            />
          </div>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitLogin}>
            <div>
              <TextInput
                type="text"
                title="이메일"
                id="email"
                ref={emailRef}
                message={error}
              />
            </div>

            <div>
              <TextInput
                title="비밀번호"
                type="password"
                id="password"
                find={true}
                ref={passwordRef}
              />
            </div>

            <div>
              <Submit isLoading={isLoading} />
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500">
            계정이 없으신가요?{" "}
            <Link
              href="/auth/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              회원가입
            </Link>
          </p>
        </div>
      </Background_Login>
    </>
  );
}
1;
