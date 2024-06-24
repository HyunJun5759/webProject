"use client";

import IpInput from "@/components/practicaltest/setting/IpInput";
import NewRangeBg from "@/components/background/NewRangeBg";
import { useRef } from "react";
import Buttons from "../Buttons";
export default function ThirdPage({ handleMovePage, onSave, defaultValue }) {
  console.log(
    defaultValue &&
      defaultValue.startIp &&
      defaultValue.startIp.firstIp &&
      defaultValue.startIp.firstIp
  );
  const startIp = {
    firstStartIp: useRef(
      defaultValue && defaultValue.startIp ? defaultValue.startIp.firstIp : null
    ),
    secondStartIp: useRef(
      defaultValue && defaultValue.startIp
        ? defaultValue.startIp.secondIp
        : null
    ),
    thirdStartIp: useRef(
      defaultValue && defaultValue.startIp ? defaultValue.startIp.thirdIp : null
    ),
    fourthStartIp: useRef(
      defaultValue && defaultValue.startIp
        ? defaultValue.startIp.fourthIp
        : null
    ),
  };

  const endIp = {
    firstEndIp: useRef(),
    secondEndIp: useRef(),
    thirdEndIp: useRef(),
    fourthEndIp: useRef(),
  };

  const subnetIp = {
    firstSubnetIp: useRef(),
    secondSubnetIp: useRef(),
    thirdSubnetIp: useRef(),
    fourthSubnetIp: useRef(),
  };

  const content = {
    header: {
      title: "IP 주소 범위",
      description:
        "연속적인 IP 주소 집합을 식별하여 범위 주소 범위를 정의합니다.",
    },
  };

  function onSaveIpAdressRagne() {
    onSave({
      ipAddressRange: {
        startIp: {
          firstIp: startIp.firstStartIp.current.value,
          secondIp: startIp.secondStartIp.current.value,
          thirdIp: startIp.thirdStartIp.current.value,
          fourthIp: startIp.fourthStartIp.current.value,
        },
        endIp: {
          firstIp: endIp.firstEndIp.current.value,
          secondIp: endIp.secondEndIp.current.value,
          thirdIp: endIp.thirdEndIp.current.value,
          fourthIp: endIp.fourthEndIp.current.value,
        },
        subnetIp: {
          firstIp: subnetIp.firstSubnetIp.current.value,
          secondIp: subnetIp.secondSubnetIp.current.value,
          thirdIp: subnetIp.thirdSubnetIp.current.value,
          fourthIp: subnetIp.fourthSubnetIp.current.value,
        },
        length: 24,
      },
    });
  }
  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header}>
          <fieldset className="border border=[#DFDFDF]">
            <legend className="ml-3">DHCP 서버 구성 설정</legend>
            <div className="pb-3 pl-4">분배할 주소 범위를 입력하십시오.</div>

            <div className="flex flex-col pl-12">
              <div className="mb-1">
                <span className="mr-28">시작 IP 주소(S):</span>
                <IpInput
                  ref={[
                    startIp.firstStartIp,
                    startIp.secondStartIp,
                    startIp.thirdStartIp,
                    startIp.fourthStartIp,
                  ]}
                  disabled={false}
                  defaultValue={
                    defaultValue && defaultValue.startIp && defaultValue.startIp
                  }
                />
              </div>

              <div className="pb-4">
                <span className="mr-32">끝 IP 주소(E):</span>
                <IpInput
                  ref={[
                    endIp.firstEndIp,
                    endIp.secondEndIp,
                    endIp.thirdEndIp,
                    endIp.fourthEndIp,
                  ]}
                  disabled={false}
                  defaultValue={
                    defaultValue && defaultValue.endIp && defaultValue.endIp
                  }
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="ml-3">
              DHCP 클라이언트로 전파되는 구성 설정
            </legend>

            <div className="flex flex-col pt-5 pl-12">
              <div className="mb-2">
                <span className="mr-36">길이(L):</span>
                <input
                  type="number"
                  className="w-[90px] border border-[#ABADB3] text-right opacity-100"
                  value={24}
                />
              </div>

              <div>
                <span className="mr-[100px]">서브넷마스크(U):</span>
                <IpInput
                  ref={[
                    subnetIp.firstSubnetIp,
                    subnetIp.secondSubnetIp,
                    subnetIp.thirdSubnetIp,
                    subnetIp.fourthSubnetIp,
                  ]}
                  defaultValue={
                    defaultValue &&
                    defaultValue.subnetIp &&
                    defaultValue.subnetIp
                  }
                />
              </div>
            </div>
          </fieldset>
        </NewRangeBg>
      </div>

      <div className="h-[10%]">
        <Buttons handleMovePage={handleMovePage} onSave={onSaveIpAdressRagne} />
      </div>
    </div>
  );
}
