import NewRangeBg from "@/components/background/NewRangeBg";
import Buttons from "../Buttons";
import { useState } from "react";

export default function FifthPage({ handleMovePage, defaultValue, onSave }) {
  const [date, setDate] = useState(defaultValue.date);
  const [hour, setHour] = useState(defaultValue.hour);
  const [minute, setMinute] = useState(defaultValue.minute);
  const content = {
    header: {
      title: "임대 기간",
      description:
        "임대 기간으로 이 범위에서 클라이언트가 IP주소를 사용할 수 있는 기간을 지정합니다.",
    },
    body: {
      description:
        "일반적으로 임대 기간은 컴퓨터가 동일한 실제 네트워크에 열결된 평균 시간과 같아야 합니다. 주로 휴대용 컴퓨터나 전화 접속 클라이언트로 구성되어 있는 이동 네트워크에는 짧은 임대 기간을 사용하는 것이 좋습니다. 또한. 고정된 위치에서 주로 데스크톱 컴퓨터로 구성되어 있는 안정적인 네트워크간에는 긴 임대 기간을 사용하는 것이 좋습니다. ",
    },
  };

  function onSaveRentperiod() {
    onSave({ rentperiod: { date: date, hour: hour, minute: minute } });
  }

  function onChangeDate(event) {
    setDate(event.target.value);
  }

  function onChangeHour(event) {
    setHour(event.target.value);
  }

  function onChangeMinute(event) {
    setMinute(event.target.value);
  }

  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header} body={content.body}>
          <div>
            <div>
              이 서버가 분배할 때 사용할 범위의 임대 기간을 설정하십시오.
            </div>
            <div>제한: </div>
            <div className="flex gap-12">
              <div className="flex flex-col">
                <div>일</div>
                <input
                  type="number"
                  className="w-11 border border-[#ABADB3]"
                  value={date}
                  defaultValue={defaultValue.dates}
                  onChange={onChangeDate}
                />
              </div>
              <div className="flex flex-col">
                <div>시간</div>
                <input
                  type="number"
                  className="w-11 border border-[#ABADB3]"
                  defaultValue={defaultValue.hour}
                  value={hour}
                  onChange={onChangeHour}
                />
              </div>
              <div className="flex flex-col">
                <div>분</div>
                <input
                  type="number"
                  className="w-11 border border-[#ABADB3]"
                  defaultValue={defaultValue.minute}
                  value={minute}
                  onChange={onChangeMinute}
                />
              </div>
            </div>
          </div>
        </NewRangeBg>
      </div>
      <div className="h-[10%]">
        <Buttons handleMovePage={handleMovePage} onSave={onSaveRentperiod} />
      </div>
    </div>
  );
}
