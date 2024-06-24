// import React from "react";
// import Card from "../components/Card";
// import Calendar from "../components/Calendar";
// import Board from "../components/Board";
import BackgroundPage from "@/components/background/mainBackground";
import Link from "next/link";
import MainNavigation from "@/components/navigation/main-navigationBar";
const tableData = [
  {
    number: "2024년 제01회",
    rank: "2급",
    subject: "필기",
    Application: "2024-01-23~2024-01-26",
    testData: "2024-02-25",
    results: "2024-02-27	",
  },
  {
    number: "2024년 제01회",
    rank: "2급",
    subject: "실기",
    Application: "2024-02-27~2024-03-04",
    testData: "2024-03-31",
    results: "	2024-04-09",
  },
  {
    number: "2024년 제02회",
    rank: "2급",
    subject: "필기",
    Application: "2024-04-09~2024-04-12",
    testData: "2024-05-19",
    results: "2024-05-21",
  },
  {
    number: "2024년 제02회",
    rank: "2급",
    subject: "실기",
    Application: "2024-05-21~2024-05-24",
    testData: "2024-06-23",
    results: "2024-07-02",
  },
  {
    number: "2024년 제03회",
    rank: "2급",
    subject: "필기",
    Application: "	2024-07-23~2024-07-26",
    testData: "2024-08-25",
    results: "2024-08-27",
  },
  {
    number: "2024년 제03회",
    rank: "2급",
    subject: "실기",
    Application: "	2024-08-27~2024-08-30",
    testData: "2024-09-29",
    results: "2024-10-08",
  },
  {
    number: "2024년 제04회",
    rank: "2급",
    subject: "필기",
    Application: "	2024-10-08~2024-10-11",
    testData: "2024-11-03",
    results: "2024-11-05",
  },
  {
    number: "2024년 제04회",
    rank: "2급",
    subject: "실기",
    Application: "	2024-11-05~2024-11-08",
    testData: "2024-12-01",
    results: "2024-12-10",
  },
];

const Home = () => {
  return (
    <>
      <MainNavigation />
      <BackgroundPage>
        <section className="grid  grid-cols-2 auto-rows-[80px] sm:auto-rows-[150px] sm:grid-cols-6 gap-3">
          <article className="border-2 border-black border-solid sm:col-span-2">
            <Link
              href="/community"
              className="flex items-center justify-center w-full h-full hover:bg-slate-400"
            >
              공지사항
            </Link>
          </article>
          <article className="border-2 border-black border-solid sm:col-span-4 sm:row-span-2">
            <Link
              href="/test"
              className="flex items-center justify-center w-full h-full hover:bg-slate-400"
            >
              문제풀기
            </Link>
          </article>
          <article className="border-2 border-black border-solid ">
            <Link
              href="/toolshop"
              className="flex items-center justify-center w-full h-full hover:bg-slate-400"
            >
              장비거래
            </Link>
          </article>
          <article className="border-2 border-black border-solid">
            <Link
              href="/community"
              className="flex items-center justify-center w-full h-full hover:bg-slate-400"
            >
              커뮤니티
            </Link>
          </article>
        </section>

        <div className="flex flex-col border-2 border-black border-solid h-80 mt-11">
          <div className="flex justify-center h-8">
            <span className="texl-xl sm:text-3xl">시험일정</span>
          </div>

          <div className="h-full pt-4 overflow-x-auto border-2 border-black border-solid">
            <table className="w-full text-center">
              <thead>
                <tr>
                  <th className="px-4 py-2">회수</th>
                  <th className="px-4 py-2">등급</th>
                  <th className="px-4 py-2">과목</th>
                  <th className="px-4 py-2">접수기간</th>
                  <th className="px-4 py-2">수검일지</th>
                  <th className="px-4 py-2">합격발표</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => {
                  return (
                    <tr key={data.number}>
                      <td className="px-4 py-2">{data.number}</td>
                      <td className="px-4 py-2">{data.rank}</td>
                      <td className="px-4 py-2">{data.subject}</td>
                      <td className="px-4 py-2">{data.Application}</td>
                      <td className="px-4 py-2">{data.testData}</td>
                      <td className="px-4 py-2">{data.results}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </BackgroundPage>
    </>
  );
};

export default Home;
