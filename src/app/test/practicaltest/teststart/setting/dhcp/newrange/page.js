"use client";

import { useCallback, useState } from "react";
import FirstPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/FirstPage";
import SecondPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/SecondPage";
import ThirdPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/ThirdPage";
import FourthPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/FourthPage";
import FifthPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/Fifth";
import SixthPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/Sixth";
import SeventhPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/Seventh";
import EighthPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/Eighth";
import NinthPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/Ninth";
import TenthPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/Tenth";
import EndPage from "@/components/practicaltest/setting/dhcp/newRange/newrangePages/End";
import Buttons from "@/components/practicaltest/setting/dhcp/newRange/Buttons";
const pages = [
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
  SixthPage,
  SeventhPage,
  EighthPage,
  NinthPage,
  TenthPage,
  EndPage,
];

export default function NewRange() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    ipv4NewRange: {
      rangeName: { name: null, description: null },
      ipAddressRange: {
        startIp: null,
        endIp: null,
        length: null,
        subnetmask: null,
      },
      excludedAddress: { startIp: null, endIp: null },
      rentperiod: { date: 8, hour: 0, minute: 0 },
      dhcpOption: true,
      routerIp: {
        firstIp: null,
        secondIp: null,
        thirdIp: null,
        fourthIp: null,
      },
      domainName: {
        parentDomain: null,
        serverName: null,
        ip: { firstIp: null, secondIp: null, thirdIp: null, fourthIp: null },
      },
      winsServer: {
        serverName: null,
        ip: { firstIp: null, secondIp: null, thirdIp: null, fourthIp: null },
      },
      rangeActivation: true,
    },
  });

  const pageName = [
    "start",
    "rangeName",
    "ipAddressRange",
    "excludedAddress",
    "rentperiod",
    "dhcpOption",
    "routerIp",
    "domainName",
    "winsServer",
    "rangeActivation",
    "end",
  ];

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pages.length));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const onSave = (newData) => {
    setData((prev) => {
      return {
        ...prev,
        ipv4NewRange: {
          ...prev.ipv4NewRange,
          ...newData,
        },
      };
    });
  };

  function onSaveLocal() {
    localStorage.setItem("dhcp-newrange", JSON.stringify(data));
  }

  const CurrentPageComponent = pages[currentPage - 1];
  const isLastPage = currentPage === 11 ? true : false;
  // console.log(
  //   `defaultValue: ${JSON.stringify(
  //     data.ipv4NewRange[pageName[currentPage - 1]]
  //   )}`
  // );
  return (
    <div className="h-[550px] min-w-[500px]">
      <div className="p-1 bg-white">새 범위 마법사</div>
      <div className="flex h-[94%] w-[100%]">
        <CurrentPageComponent
          onSave={isLastPage ? onSaveLocal : onSave}
          data={data}
          handleMovePage={{ handleNextPage, handlePrevPage }}
          defaultValue={data.ipv4NewRange[pageName[currentPage - 1]]}
        />
      </div>
    </div>
  );
}
