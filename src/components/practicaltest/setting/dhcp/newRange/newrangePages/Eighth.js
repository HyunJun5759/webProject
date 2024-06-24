import NewRangeBg from "@/components/background/NewRangeBg";
import IpInput from "../../../IpInput";
import { useRef, useState } from "react";
import Button from "../../../Button";
import Buttons from "../Buttons";
import AdressAdd from "../../AdressAdd";
export default function EighthPage({ handleMovePage, onSave, defaultValue }) {
  const [parentDomain, setParentDomain] = useState(defaultValue?.parentDomain);
  const [serverName, setServerName] = useState(defaultValue?.serverName);

  const content = {
    header: {
      title: "도메인 이름 및 DNS 서버",
      description:
        "DNS(Domain Name System)가 네트워크상의 클라이언트에 의해 사용되는 도메인 이름을 매핑 및 변환합니다.",
    },

    body: {
      description:
        "네트워크상의 클라이언트 컴퓨터가 DNS 이름 확인에 사용할 부모 도메인을 지정할 수 있습니다.",
    },
  };

  const ip = {
    firstIpRef: useRef(defaultValue?.ip.firstIp),
    secondIpRef: useRef(defaultValue?.ip.secondIp),
    thirdIpRef: useRef(defaultValue?.ip.thirdIp),
    fourthIpRef: useRef(defaultValue?.ip.fourthIp),
  };

  const [adressListData, setAdressListData] = useState({
    adressTotal: 0,
    adressList: [],
  });

  function onSaveDomainName() {
    onSave({
      domainName: {
        parentDomain: parentDomain,
        serverName: serverName,
        ip: {
          firstIp: ip.firstIpRef.current.value,
          secondIp: ip.secondIpRef.current.value,
          thirdIp: ip.thirdIpRef.current.value,
          fourthIp: ip.fourthIpRef.current.value,
        },
      },
    });
  }

  function onChangeParentDomain(event) {
    setParentDomain(event.target.value);
  }

  function onChangeServerName(event) {
    setServerName(event.target.value);
  }

  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header} body={content.body}>
          <div>
            <div className="mb-4">
              <span className="mr-4 ">부모 도메인(M): </span>
              <input
                type="text"
                className="w-[70%]"
                onChange={onChangeParentDomain}
                value={parentDomain}
                defaultValue={defaultValue?.parentDomain}
              />
            </div>

            <div className="mb-3">
              네트워크상의 DNS 서버를 사용하도록 범위 클라이언트를 구성하려면
              DNS 서버의 IP 주소를 입력하십시오.
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col w-[55%] max-w-[500px]">
                <span>서버 이름</span>
                <input
                  type="text"
                  onChange={onChangeServerName}
                  value={serverName}
                  defaultValue={defaultValue?.serverName}
                />
                <div className="flex justify-end mt-3">
                  <Button title="확인(E)" disabled={true} />
                </div>
              </div>

              <AdressAdd
                ref={ip}
                adressListData={adressListData}
                defaultValue={defaultValue?.ip}
              />
            </div>
          </div>
        </NewRangeBg>
      </div>
      <div className="h-[10%]">
        <Buttons handleMovePage={handleMovePage} onSave={onSaveDomainName} />
      </div>
    </div>
  );
}
