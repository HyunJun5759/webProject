import Background from "@/components/background/mainBackground";
import Link from "next/link";
const tableContent = [
  { subject: "케이블", count: 1, point: 6.5 },
  { subject: "윈도우", count: 8, point: 5.5 },
  { subject: "리눅스", count: 3, point: 5.5 },
  { subject: "네트워크", count: 3, point: 5.5 },
  { subject: "라우터", count: 3, point: 5.5 },
];

export default function PracticalTestPage() {
  return (
    <>
      <Background>
        <div className="flex flex-col">
          <div className="flex justify-center mb-20">
            <h1 className="text-xl lg:text-4xl">
              네트워크 관리사 2급 실기 기출문제
            </h1>
          </div>

          <div>
            <table className="w-full border border-collapse table-auto border-slate-400 h-60">
              <thead>
                <tr className="">
                  <th className="border border-slate-300">과목명</th>
                  <th className="border border-slate-300">문항수</th>
                  <th className="border border-slate-300">배점</th>
                  <th className="border border-slate-300">선택</th>
                </tr>
              </thead>

              <tbody>
                {tableContent.map((subjectContent) => {
                  return (
                    <tr key={subjectContent.subject}>
                      <td className="border border-slate-300">
                        {subjectContent.subject}
                      </td>
                      <td className="border border-slate-300">
                        {subjectContent.count}
                      </td>
                      <td className="border border-slate-300">
                        {subjectContent.point}
                      </td>
                      <td className="border border-slate-300">
                        <input type="checkbox" className="" defaultChecked />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-16">
            <Link
              className="px-20 py-8 rounded-md bg-stone-300"
              href="/test/practicaltest/teststart"
            >
              시작
            </Link>
          </div>
        </div>
      </Background>
    </>
  );
}
