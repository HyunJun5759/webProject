import NewRangeBg from "@/components/background/NewRangeBg";
import Buttons from "../Buttons";
import { useState } from "react";

export default function SixthPage({ handleMovePage, defaultValue, onSave }) {
  console.log(`defaultValue: ${defaultValue}`);
  const [isOptionChecked, setIsOptionChecked] = useState(defaultValue);
  const content = {
    header: {
      title: "DHCP 옵션을 구성합니다.",
      description:
        "클라이언트가 범위를 사용할 수 있게 되기 전에 가장 일반적인 DHCP 옵션을 구성해야 합니다",
    },
    body: {
      description:
        "클라이언트가 주소를 얻을 때 라우터의 IP 주소(기본 게이트웨이) DNS 서버 및 범위의 WINS 설정과 같은 DHCP 옵션이 주어집니다.",
    },
  };

  function onSaveDhcpOption() {
    onSave({ dhcpOption: isOptionChecked });
  }
  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header} body={content.body}>
          <div>
            <div>
              여기서 선택한 설정이 이 범위에 적용되며 이 서버의 서버 옵션
              폴더에서 구성된 설정보다. 우선합니다.
            </div>

            <div className="mt-4">
              지금 이 범위에 대해 DHCP 옵션을 구성하시겠습니까?
            </div>

            <div className="mt-4">
              <div className="mb-2">
                <input
                  type="radio"
                  name="dhcpOption"
                  className="mr-2"
                  onClick={() => {
                    setIsOptionChecked(true);
                  }}
                  defaultChecked={isOptionChecked}
                />
                <span>예 지금 구성합니다(Y).</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="dhcpOption"
                  className="mr-2"
                  onClick={() => {
                    setIsOptionChecked(false);
                  }}
                  defaultChecked={!isOptionChecked}
                />
                <span>아니오. 나중에 구성하겠습니다.(O).</span>
              </div>
            </div>
          </div>
        </NewRangeBg>
      </div>
      <div className="h-[10%]">
        <Buttons handleMovePage={handleMovePage} onSave={onSaveDhcpOption} />
      </div>
    </div>
  );
}

// 663

// 351044639260

// 35104463926066
