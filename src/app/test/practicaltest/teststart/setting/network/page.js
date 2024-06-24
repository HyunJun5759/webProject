"use client";

import SettingBackground from "@/components/background/SettingBackground";

export default function SettingNetworkPage() {
  function openIpv4() {
    const newWindow = window.open(
      "/test/practicaltest/teststart/setting/network/ipv4",
      "_blank",
      "width=600, height=600"
    );
  }
  function openIpv6() {
    const newWindow = window.open(
      "/test/practicaltest/teststart/setting/network/ipv6",
      "_blank",
      "width=600, height=600"
    );
  }

  const content = [
    { description: "Microsoft Network용 클라이언트" },
    { description: "Qos 패킷 스케줄러" },
    { description: "Microsoft 네트워크용 파일 및 프린터 공유" },
    {
      description: "Internet Protocol Version 6 (TCP/IP v6)",
      onClick: openIpv6,
    },
    {
      description: "Internet Protocol Version 4 (TCP/IP v4)",
      onClick: openIpv4,
    },
    { description: "Link-Layer Topology Discovery Mapper I/O Driver" },
    { description: "Link-Layer Topology Discovery Responder" },
  ];
  const buttonColor = "bg-[#E1E1E1] border border-[#B0B0B0]";

  return (
    <SettingBackground>
      <div className="">네트워킹</div>
      <div className="flex flex-col">
        <div>연결에 사용할 장치:</div>
        <div className="border border-black">
          Realtek PCls FE Family Controller
        </div>
        <div className="flex justify-end mt-3">
          <button disabled className={`px-3 ${buttonColor} bg-[#CCCCCC]`}>
            구성(C)...
          </button>
        </div>
      </div>
      <div className="">
        <div>이 연결에 다음 항목 사용(O):</div>

        <div className="border-2 border-[#686868]">
          {content.map((description) => (
            <button onClick={description.onClick && description.onClick}>
              <input type="checkbox" checked="on" className="mx-2" />
              <span className="">{description.description}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <button className={`w-[32%] px-3 ${buttonColor}`}>설치(N)...</button>
        <button className={`w-[32%] px-3 ${buttonColor} bg-[#CCCCCC]`}>
          제거(U)
        </button>
        <button className={`w-[32%] px-3 ${buttonColor} bg-[#CCCCCC]`}>
          속성(R)
        </button>
      </div>

      <fieldset className="h-24 mt-5 mb-5 border border-[#E2E2E2]">
        <legend className="ml-2">설명</legend>
        설명
      </fieldset>
    </SettingBackground>
  );
}
