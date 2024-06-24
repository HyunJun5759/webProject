"use client";

import LeftBar from "@/components/practicaltest/setting/dhcp/LeftBar";
import NewRange from "@/components/practicaltest/setting/dhcp/NewRange";
import { useState } from "react";

export default function DHCPPage() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedIpv4Menu, setSelectedIpv4Menu] = useState(null);
  const [data, setData] = useState({
    ipv4NewRange: {
      rangeName: { name: null, discription: null },
      ipAdressRange: {
        startIp: null,
        endIp: null,
        langth: null,
        subnetmask: null,
      },
      excludedAddress: { excludedAddressRange: null },
    },
  });
  const menuItems = [
    [
      {
        name: "통계 표시(S)...",
        disabled: true,
      },
    ],
    [
      {
        name: "새 범위(S)...",
        disabled: false,
        onClick: () => {
          window.open(
            "/test/practicaltest/teststart/setting/dhcp/newrange",
            "_blank",
            "width=800, height=550"
          );

          window.parentCallback = () => {
            console.log("1");
          };
        },
      },
    ],
    [
      {
        name: "사용자 클래스 정의(N)...",
        disabled: true,
      },
      {
        name: "공급업체 클래스 정의(C)...",
        disabled: true,
      },
    ],
    [
      {
        name: "모든 범위를 조정(A)...",
        disabled: true,
      },
    ],
    [
      {
        name: "미리 정의된 옵션 설정(E)...",
        disabled: true,
      },
    ],
    [
      {
        name: "새로 고침(F)...",
        disabled: true,
      },
      {
        name: "목록 내보내기(L)...",
        disabled: true,
      },
    ],
    [
      {
        name: "속성(P)...",
        disabled: true,
      },
    ],
    [
      {
        name: "도움말(H)...",
        disabled: true,
      },
    ],
  ];
  return (
    <div>
      <div className="bg-[#F3F3F3] h-[25px] flex gap-5 pl-5">
        <div>파일</div>
        <div>동작(A)</div>
        <div>보기(V)</div>
        <div>도움말(H)</div>
      </div>

      <div className="flex h-[90vh]">
        <LeftBar
          menuItems={menuItems}
          onClickIpv4={() => {
            setSelectedMenu("ipv4");
          }}
        />
        <div className="ml-3 w-[70%] border border-black">
          5{data && data.ipv4NewRange.rangeName.name}
          {selectedMenu === "ipv4" && <NewRange />}
        </div>
      </div>
    </div>
  );
}
