"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function Statistics({ statistics }) {
  const { data } = useSession();
  const [menu, setMenu] = useState(0);

  function chagneTotal() {
    setMenu(0);
  }
  function chagneWrittenTest() {
    setMenu(1);
  }

  function chagnePracticalTest() {
    setMenu(2);
  }

  return (
    <div className="flex flex-col w-1/4 text-center border-2 border-black rounded-lg shadow-lg">
      <div className="flex justify-around p-2 border-b-2 border-black">
        <div className="text-lg font-semibold">
          <button onClick={chagneTotal}>총합</button>
        </div>
        <div className="text-lg font-semibold">
          <button onClick={chagneWrittenTest}>필기</button>
        </div>
        <div className="text-lg font-semibold">
          <button onClick={chagnePracticalTest}>실기</button>
        </div>
      </div>

      <div>
        <h2 className="py-4 text-2xl font-bold text-gray-700">
          {data ? data.user.name : "???"}님
        </h2>
        <div>
          <div className="py-2 text-xl font-bold text-gray-800">
            푼 문제: {data ? `${statistics[menu].solved}개` : "???개"}
          </div>
          <div className="py-2 text-xl font-bold text-gray-800">
            맞춘 문제:{" "}
            {data ? `${statistics[menu].correctQuestion}개` : "???개"}
          </div>
          <div className="py-2 text-xl font-bold text-gray-800">
            정답률: {data ? `${statistics[menu].correctRate}%` : "???%"}
          </div>
        </div>
        {!data && (
          <Link
            href="/login"
            className="flex w-1/2 mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
}
