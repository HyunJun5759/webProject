import NewRangeBg from "@/components/background/NewRangeBg";
import Button from "../../../Button";
import AdressAdd from "../../AdressAdd";
import { useRef, useState } from "react";
import Buttons from "../Buttons";
export default function NinthPage({ handleMovePage, onSave, defaultValue }) {
  const [serverName, setServerName] = useState();
  const [adressListData, setAdressListData] = useState({
    adressTotal: 0,
    adressList: [],
  });

  const content = {
    header: {
      title: "WINS 서버",
      description:
        "Windows를 실행하는 컴퓨터는 NetBIOS 컴퓨터 이름을 IP 주소로 변환하기 위해 WINS 서버를 사용할 수 있습니다.",
    },
    body: {
      description:
        "여기에 서버 IP 주소를 입력하면 Windows 클라이언트가 등록 및 NetBIOS 이름 확인에 브로드케스트를 사용하기 전에 WINS를 쿼리할 수 있게 됩니다.",
    },
  };

  const ip = {
    firstIpRef: useRef(defaultValue?.ip?.firstIp),
    secondIpRef: useRef(defaultValue?.ip?.secondIp),
    thirdIpRef: useRef(defaultValue?.ip?.thirdIp),
    fourthIpRef: useRef(defaultValue?.ip?.fourthIp),
  };

  function onSaveWINSServer() {
    onSave({
      winsServer: {
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

  function onChangeServerName(event) {
    setServerName(event.target.value);
  }

  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header} body={content.body}>
          <div className="flex flex-col">
            <p>
              네트워크상의 DNS 서버를 사용하도록 범위 클라이언트를 구성하려면
              DNS 서버의 IP 주소를 입력하십시오.
            </p>

            <div className="flex gap-7">
              <div className="flex flex-col w-[55%]">
                <span>서버이름</span>
                <input
                  type="text"
                  className="w-full"
                  onChange={onChangeServerName}
                  value={serverName}
                  defaultValue={defaultValue?.serverName}
                />
                <div className="flex justify-end mt-3">
                  <Button title="확인(E)" />
                </div>
              </div>

              <AdressAdd
                ref={ip}
                adressListData={adressListData}
                defaultValue={defaultValue?.ip}
              />
            </div>

            <div className="mt-4">
              Windows DHCP 클라이언트에 대한 동작을 변경하려면 범위 옵션에서
              옵션 046(WINS/NBT 노드 종류)을 수정하십시오.
            </div>
          </div>
        </NewRangeBg>
      </div>
      <div className="h-[10%]">
        <Buttons handleMovePage={handleMovePage} onSave={onSaveWINSServer} />
      </div>
    </div>
  );
}
