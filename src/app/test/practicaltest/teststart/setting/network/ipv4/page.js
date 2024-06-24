"use client";

import SettingBackground from "@/components/background/SettingBackground";
import { useRef, useState } from "react";
import IpInput from "@/components/practicaltest/setting/IpInput";
import Button from "@/components/practicaltest/setting/Button";
import CheckBox from "@/components/practicaltest/setting/CheckBox";
export default function SettingIpv4Page() {
  const [isAutoGet, setIsAutoGet] = useState(true);
  const firstIpRef = useRef();
  const secondIpRef = useRef();
  const thirdIpRef = useRef();
  const fourthIpRef = useRef();

  const firstSubnetRef = useRef();
  const secondSubnetRef = useRef();
  const thirdSubnetRef = useRef();
  const fourthSubnetRef = useRef();

  const firstGatewayRef = useRef();
  const secondGatewayRef = useRef();
  const thirdGatewayRef = useRef();
  const fourthGatewayRef = useRef();

  const firstDefaultDNSServer = useRef();
  const secondDefaultDNSServer = useRef();
  const thirdDefaultDNSServer = useRef();
  const fourthDefaultDNSServer = useRef();

  const firstDNSServer = useRef();
  const secondDNSServer = useRef();
  const thirdDNSServer = useRef();
  const fourthDNSServer = useRef();

  const ipRefs = [firstIpRef, secondIpRef, thirdIpRef, fourthIpRef];
  const subnetRefs = [
    firstSubnetRef,
    secondSubnetRef,
    thirdSubnetRef,
    fourthSubnetRef,
  ];
  const gatewayRefs = [
    firstGatewayRef,
    secondGatewayRef,
    thirdGatewayRef,
    fourthGatewayRef,
  ];

  const defaultDNSServer = [
    firstDefaultDNSServer,
    secondDefaultDNSServer,
    thirdDefaultDNSServer,
    fourthDefaultDNSServer,
  ];

  const dnsServer = [
    firstDNSServer,
    secondDNSServer,
    thirdDNSServer,
    fourthDNSServer,
  ];

  function onClickAutoCheckBox() {
    setIsAutoGet(true);
  }
  function onClickNextCheckBox() {
    setIsAutoGet(false);
  }

  return (
    <SettingBackground>
      <p className="mt-6 leading-4">
        네트워크가 IP 자동 설정 기능을 지원하면 IP 설정이 자동으로 할당되도록 할
        수 있습니다. 지원하지 않으면, 네트워크 관리자에게 적절한 IP 설정값을
        문의해야합니다
      </p>

      <div className="mt-4">
        <CheckBox
          title="자동으로 IP 주소 받기(O)"
          onClick={onClickAutoCheckBox}
          checked={isAutoGet}
        />

        <fieldset className="border border-[#E2E2E2]">
          <legend>
            <CheckBox
              title="다음 IP 주소 사용(O)"
              onClick={onClickNextCheckBox}
              checked={!isAutoGet}
            />
          </legend>

          <div className={`pl-4 ${isAutoGet && "text-[#A9A9A9]"}`}>
            <div className="flex">
              <div className="w-[50%]">
                <span>IP 주소(I) :</span>
              </div>
              <div className="w-[50%]">
                <IpInput ref={ipRefs} disabled={isAutoGet} />
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%]">
                <span>서브넷 마스크(U) :</span>
              </div>

              <div className="w-[50%]">
                <IpInput ref={subnetRefs} disabled={isAutoGet} />
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%]">
                <span>기본 게이트웨이(D) :</span>
              </div>

              <div className="w-[50%]">
                <IpInput ref={gatewayRefs} disabled={isAutoGet} />
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="mt-4">
        <CheckBox
          title="자동으로 DNS 서버 주소 받기(O)"
          onClick={onClickNextCheckBox}
          checked={isAutoGet}
          disabled={!isAutoGet}
        />

        <fieldset className="border border-[#E2E2E2]">
          <legend>
            <CheckBox
              title="다음 DNS 서버 주소 사용(O)"
              onClick={onClickNextCheckBox}
              checked={!isAutoGet}
            />
          </legend>

          <div className={`pl-4 ${isAutoGet && "text-[#A9A9A9]"}`}>
            <div className="flex mb-[5px]">
              <div className="w-[50%]">
                <span>기본 설정 DNS 서버(P) :</span>
              </div>
              <IpInput ref={defaultDNSServer} disabled={isAutoGet} />
            </div>

            <div className="flex">
              <div className="w-[50%]">
                <span>보조 DNS 서버(P) :</span>
              </div>

              <div className="w-[50%]">
                <IpInput ref={dnsServer} disabled={isAutoGet} />
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="flex justify-between mt-6">
        <div>
          <input type="checkbox" />
          <label className="ml-2">끝날 때 설정 유효성 검사(L)</label>
        </div>

        <div>
          <Button title="고급(V)..." />
        </div>
      </div>
    </SettingBackground>
  );
}
