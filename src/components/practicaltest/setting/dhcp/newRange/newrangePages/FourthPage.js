"use client";

import IpInput from "@/components/practicaltest/setting/IpInput";
import { useRef, useState } from "react";
import Buttons from "../Buttons";
import NewRangeBg from "@/components/background/NewRangeBg";
import Button from "../../../Button";

export default function FourthPage({ handleMovePage, defaultValue, onSave }) {
  const [adressListData, setAdressListData] = useState({
    adressTotal: 0,
    adressList: [],
  });
  const [selectAdress, setSelectAdress] = useState();
  const startIp = {
    firstStartIp: useRef(defaultValue?.startIp?.firstIp),
    secondStartIp: useRef(defaultValue?.startIp?.secondIp),
    thirdStartIp: useRef(defaultValue?.startIp?.thirdIp),
    fourthStartIp: useRef(defaultValue?.startIp?.fourthIp),
  };

  const endIp = {
    firstEndIp: useRef(defaultValue?.endIp?.firstIp),
    secondEndIp: useRef(defaultValue?.endIp?.secondIp),
    thirdEndIp: useRef(defaultValue?.endIp?.thirdIp),
    fourthEndIp: useRef(defaultValue?.endIp?.fourthIp),
  };

  function onSaveExcludedAddress() {
    onSave({
      excludedAddress: {
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
      },
    });
  }
  function onAdd() {
    const enteredFirstStartIp = startIp.firstStartIp.current.value;
    const enteredSecondStartIp = startIp.secondStartIp.current.value;
    const enteredThirdStartIp = startIp.thirdStartIp.current.value;
    const enteredFourthStartIp = startIp.fourthStartIp.current.value;

    const enteredFirstEndIp = endIp.firstStartIp.current.value;
    const enteredSecondENdIp = endIp.secondStartIp.current.value;
    const enteredThirdENdIp = endIp.thirdStartIp.current.value;
    const enteredFourthENdIp = endIp.fourthStartIp.current.value;

    setAdressListData((prev) => {
      return {
        ...prev,
        adressTotal: prev.adressTotal + 1,
        adressList: [
          ...prev.adressList,
          {
            number: prev.adressTotal,
            firstIp: enteredFirstStartIp,
            secondIp: enteredSecondStartIp,
            thirdIp: enteredThirdStartIp,
            fourthIp: enteredFourthStartIp,
          },
        ],
      };
    });
  }

  function onDelete() {
    setAdressListData((prev) => {
      return {
        ...prev,
        adressList: prev.adressList.filter(
          (adress) => adress.number != selectAdress
        ),
      };
    });
  }

  function onSelect(number) {
    setSelectAdress(number);
  }

  const content = {
    header: {
      title: "제외 주소 및 지연 추가",
      description:
        "제외 주소란 서버에 의해 분배되지 않는 주소 또는 주소의 범위입니다. 지연은 서버에서 DHCPOFFER 메세지 전송을 지연하는 기간입니다.",
    },
    body: {
      description:
        "제외할 IP 주소 범위를 입력하십시오. 단일 주소를 제외하려면 [시작 IP주소]에만 주소를 입력하십시오.",
    },
  };
  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header} body={content.body}>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex gap-2">
                <div className="flex flex-col mb-2">
                  <label className="">시작 IP 주소(S):</label>
                  <IpInput
                    ref={[
                      startIp.firstStartIp,
                      startIp.secondStartIp,
                      startIp.thirdStartIp,
                      startIp.fourthStartIp,
                    ]}
                    defaultValue={defaultValue?.startIp}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="">끝 IP 주소(E):</label>
                  <IpInput
                    ref={[
                      endIp.firstEndIp,
                      endIp.secondEndIp,
                      endIp.thirdEndIp,
                      endIp.fourthEndIp,
                    ]}
                    defaultValue={defaultValue?.endIp}
                  />
                </div>
              </div>

              <div className="flex items-end pl-2">
                <div className="h-1/2">
                  <Button onClick={onAdd} title="추가(D)" />
                </div>
              </div>
            </div>

            <div className="pb-24">
              <div>
                <span>제외된 주소 범위(C):</span>
              </div>

              <div className="flex">
                <div className="overflow-scroll w-[360px] h-40 bg-white border border-black">
                  <ul className="">
                    {adressListData.adressList.map((adress, idx) => {
                      return (
                        <li
                          key={adress.number}
                          className="w-full"
                          onClick={() => onSelect(adress.number)}
                        >
                          {`주소 ${adress.firstIp}.${adress.secondIp}.${adress.thirdIp}.${adress.fourthIp}`}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex flex-col justify-between pl-2">
                  <div>
                    <Button title="제거(V)" onClick={onDelete} />
                  </div>

                  <div className="flex flex-col">
                    <div>서브넷 지연(밀리초)(L):</div>
                    <div>
                      <input type="number" className="w-[10%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NewRangeBg>
      </div>
      <div className="h-[10%]">
        <Buttons
          handleMovePage={handleMovePage}
          onSave={onSaveExcludedAddress}
        />
      </div>
    </div>
  );
}
