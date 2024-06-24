"use client";

import Background_Login from "@/components/background/authBackground";
import TextInput from "@/components/auth/TextInput";
import Button from "@/components/auth/button";
import { useFormState } from "react-dom";
import { signupAction } from "@/lib/action";
import Image from "next/image";
export default function Signup() {
  const [state, formAction] = useFormState(signupAction, null);
  return (
    <Background_Login>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          className="w-auto h-10 mx-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}
        <div className="flex justify-center h-10 mx-auto">
          <Image
            width="50"
            height="10"
            src="https://tailwindui.com/img/logos/mark.svg"
            alt="Your Company"
          />
        </div>
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          회원가입
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={formAction} className="space-y-3" method="post">
          <TextInput
            title="아이디"
            type="text"
            id="id"
            name="id"
            message={state && state.error.id && state.error.id}
          />
          <TextInput
            title="닉네임"
            type="text"
            id="name"
            name="name"
            message={state && state.error.name && state.error.name}
          />
          <TextInput
            title="비밀번호"
            type="password"
            id="password"
            name="password"
            message={state && state.error.password && state.error.password}
          />
          <TextInput
            title="비밀번호 확인"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            message={
              state &&
              state.error.confirmPassword &&
              state.error.confirmPassword
            }
          />
          <TextInput
            title="이메일"
            type="email"
            id="email"
            name="email"
            message={state && state.error.email && state.error.email}
          />
          <div>
            <Button title="회원가입" />
          </div>
        </form>
      </div>
    </Background_Login>
  );
}
