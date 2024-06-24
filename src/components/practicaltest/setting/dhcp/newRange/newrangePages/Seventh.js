import NewRangeBg from "@/components/background/NewRangeBg";
import IpInput from "../../../IpInput";
import { useRef, useState } from "react";
import Button from "../../../Button";
import AdressAdd from "../../AdressAdd";
import Buttons from "../Buttons";
export default function SeventhPage({ handleMovePage, defaultValue, onSave }) {
  const [adressListData, setAdressListData] = useState({ adressList: [] });
  const content = {
    header: {
      title: "라우터(기본 게이트웨이)",
      description:
        "이 범위에서 배포할 라우터 또는 기본 게이트웨이를 지정할 수 있습니다.",
    },
    body: {
      description:
        "클라이언트가 사용하는 라우터의 IP 주소를 추가하려면 아래에 주소를 입력하십시오.",
    },
  };

  const ip = {
    firstIpRef: useRef(defaultValue?.firstIp),
    secondIpRef: useRef(defaultValue?.secondIp),
    thirdIpRef: useRef(defaultValue?.thirdIp),
    fourthIpRef: useRef(defaultValue?.fourthIp),
  };

  function onSaveRouterIp() {
    onSave({
      routerIp: {
        firstIp: ip.firstIpRef.current.value,
        secondIp: ip.secondIpRef.current.value,
        thirdIp: ip.thirdIpRef.current.value,
        fourthIp: ip.fourthIpRef.current.value,
      },
    });
  }
  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header} body={content.body}>
          <AdressAdd
            ref={ip}
            adressListData={adressListData}
            defaultValue={defaultValue}
          />
        </NewRangeBg>
      </div>
      <div className="h-[10%]">
        <Buttons handleMovePage={handleMovePage} onSave={onSaveRouterIp} />
      </div>
    </div>
  );
}
