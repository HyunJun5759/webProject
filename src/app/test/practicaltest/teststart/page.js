"use client";

import Background from "@/components/background/mainBackground";
import Img from "../../../../../public/image.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    number: 1,
    problem:
      "네트워크를 관리하는 K사원은 C Class 주소의 네트워크를 가지고 하나의 서브넷 당 6개의 호스트를 갖도록 네트워크를 구성하고자 한다. <제시문제>에 알맞은 네트워크 정보를 설정하시오",
    problemPresented:
      "1. IP : 192.168.10.59 <br> 2. Subnet: 하나의 서브넷은 6개의 호스트를 갖는다. <br> 3. Gateway: 192.168.100.62 <br> 4.DNS : 192.168.100.245",
  },
  {
    number: 2,
    problem:
      "22 네트워크를 관리하는 K사원은 C Class 주소의 네트워크를 가지고 하나의 서브넷 당 6개의 호스트를 갖도록 네트워크를 구성하고자 한다. <제시문제>에 알맞은 네트워크 정보를 설정하시오",
    problemPresented:
      "1. IP : 192.168.10.59 \n 2. Subnet: 하나의 서브넷은 6개의 호스트를 갖는다. \n 3. Gateway: 192.168.100.62 \n 4.DNS : 192.168.100.245",
  },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
  { number: 7 },
  { number: 8 },
  { number: 9 },
  { number: 10 },
  { number: 11 },
  { number: 12 },
  { number: 13 },
  { number: 14 },
  { number: 15 },
  { number: 16 },
  { number: 17 },
  { number: 18 },
];
export default function TestStart() {
  const [time, setTime] = useState();
  const [currentNumber, setCurrentNumber] = useState(0);

  function selectProblem(number) {
    console.log(number);
    setCurrentNumber(number);
  }

  function openProblem() {
    const test = window.open(
      "/test/practicaltest/teststart/setting/iis",
      "_blank",
      "width=1000, height=700"
    );

    // const newWindow = window.open(
    //   "/test/practicaltest/teststart/setting/network",
    //   "_blank",
    //   "width=600, height=600"
    // );
  }

  return (
    <Background>
      <div className="flex justify-around mb-3">
        <div className="text-4xl sm:">남은시간: 06:13</div>
        <div className="text-2xl">네트워크관리사 2급 실기 문제</div>
        <div className="flex flex-col ">
          <div>
            <label>수험번호</label>
            <input type="text" className="border border-black" />
          </div>
          <div>
            <label className="px-4">이름</label>
            <input type="text" className="border border-black" />
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        <menu className="flex flex-wrap gap-1">
          `
          {data.map((index, number) => {
            return (
              <li key={index.number}>
                <button
                  className="px-5 py-1 bg-orange-400"
                  onClick={() => {
                    selectProblem(number);
                  }}
                >
                  {index.number}
                </button>
              </li>
            );
          })}
        </menu>

        <button className="bg-orange-400">케이블링 닫기</button>
      </div>
      <div className="flex flex-col border border-blue-500">
        <div className="mb-5 text-4xl text-center">{`문제${
          currentNumber + 1
        }`}</div>
        <p className="p-4 text-xl">
          {/* 아래에 필요한 신규 케이블을 제작하시오. -네트워크를 관리하는 Kim사원은
          사무실 내부 이동으로 인하여 자리를 이전하게 되었고 현재 케이블을
          연장하여 새로운 자리로 배치를 하려고 한다. 기존의 HUB는 케이블의
          자동인식 모드를 지원하지 않는다. 기존 케이블이 짧은 관계로 기존
          케이블과 커플러를 이용하여 HUB와 업무용 PC간에 통신이 되도록 제작한다. */}

          {data[currentNumber].problem}
        </p>
        <div className="flex h-96">
          <div className="flex flex-col w-1/2 border border-black">
            <div className="py-2 text-center bg-gray-400">제시문제</div>
            <div
              className="relative h-full text-2xl"
              dangerouslySetInnerHTML={{
                __html: data[currentNumber].problemPresented,
              }}
            >
              {/* <Image src={Img} fill /> */}
            </div>
          </div>
          <div className="flex flex-col w-1/2 border border-black">
            <div className="py-2 text-center bg-gray-400">작업시 주의 사항</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={openProblem}
          className="px-3 py-2 bg-orange-400 rounded-sm"
        >
          풀이 시작
        </button>
      </div>
    </Background>
  );
}
