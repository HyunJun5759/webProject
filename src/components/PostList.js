"use client";

import { useState } from "react";
import Background from "./background/mainBackground";
import Link from "next/link";
export default function PostList({ posts }) {
  const [isCommunity, setIsCommunity] = useState(true);
  function chagneBoardCummunity() {
    setIsCommunity(true);
  }

  function chagneBoardNotice() {
    setIsCommunity(false);
  }
  return (
    <Background>
      <div>
        <div className="flex items-center justify-between py-4">
          <div>
            <button
              className="px-12 py-4 font-bold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
              onClick={chagneBoardNotice}
            >
              공지
            </button>
            <button
              className="px-12 py-4 ml-4 font-bold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
              onClick={chagneBoardCummunity}
            >
              커뮤니티
            </button>
          </div>
          <Link href="/community/write">
            <div className="px-8 py-3 font-bold text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
              글쓰기
            </div>
          </Link>
        </div>

        <div className="grid text-center grid-cols-custom">
          <div className="py-3 border border-gray-300">글 번호</div>
          <div className="py-3 border border-gray-300">제목</div>
          <div className="py-3 border border-gray-300">글쓴이</div>
          <div className="py-3 border border-gray-300">작성일</div>
          {posts &&
            isCommunity &&
            posts.map((item) => {
              let dateString = item.date + "";
              const date = dateString.substr(5, 5);
              return (
                <>
                  <Link
                    className="py-3 border border-gray-300"
                    href={`./community/${item._id}`}
                  >
                    {item.number}
                  </Link>
                  <Link
                    className="py-3 border border-gray-300"
                    href={`./community/${item._id}`}
                  >
                    {item.title}
                  </Link>
                  <Link
                    className="py-3 border border-gray-300"
                    href={`./community/${item._id}`}
                  >
                    {item.writer}
                  </Link>
                  <Link
                    className="py-3 border border-gray-300"
                    href={`./community/${item._id}`}
                  >
                    {date}
                  </Link>
                </>
              );
            })}
        </div>

        {/* <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg table-fixed">
              <colgroup>
                <col className="w-[10%]" />
                <col className="w-[60%]" />
                <col className="w-[20%]" />
                <col className="w-[10%]" />
              </colgroup>
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 border-b border-gray-200">글 번호</th>
                  <th className="py-3 border-b border-gray-200 ">제목</th>
                  <th className="py-3 border-b border-gray-200 ">글쓴이</th>
                  <th className="py-3 border-b border-gray-200 ">작성일</th>
                </tr>
              </thead>
              <tbody>
                {!isCommunity &&
                  notices.map((notice) => {
                    return (
                      <tr
                        className="text-center hover:bg-gray-50"
                        key={notice.number}
                      >
                        <td className="py-3 border-b border-gray-200">
                          {notice.number}
                        </td>
                        <td className="py-3 border-b border-gray-200">
                          {notice.title}
                        </td>
                        <td className="py-3 border-b border-gray-200">
                          {notice.wrtie}
                        </td>
                        <td className="py-3 border-b border-gray-200">
                          {notice.date}
                        </td>
                      </tr>
                    );
                  })}
  
                {isCommunity &&
                  posts &&
                  posts.map((post) => {
                    return (
                      <tr className="text-center hover:bg-gray-50" key={post._id}>
                        <td>
                          <Link href={`./community/${post._id}`}>
                            <td className="py-3 border-b border-gray-200">
                              {post.number}
                            </td>
                            <td className="py-3 border-b border-gray-200">
                              {post.title}
                            </td>
                            <td className="py-3 border-b border-gray-200">
                              {post.writer}
                            </td>
                            <td className="py-3 border-b border-gray-200">
                              {post.date}
                            </td>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table> */}
      </div>
    </Background>
  );
}
