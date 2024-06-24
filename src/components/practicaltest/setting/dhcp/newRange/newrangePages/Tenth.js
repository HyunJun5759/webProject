import NewRangeBg from "@/components/background/NewRangeBg";
import CheckBox from "../../CheckBoxDcst";
import Buttons from "../Buttons";
import { useState } from "react";
export default function TenthPage({ handleMovePage, onSave, defaultValue }) {
  const [checked, setChecked] = useState(defaultValue);
  const content = {
    header: {
      title: "범위 활성화",
      description:
        "범위가 활성화되어야만 클라이언트가 주소 임대를 얻을 수 있습니다.",
    },
    body: {
      description: "이 범위를 지금 활성화하시겠습니까?",
    },
  };

  function onSaveRangeActivation() {
    onSave({ rangeActivation: checked });
  }

  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header} body={content.body}>
          <div className="flex flex-col">
            <CheckBox
              title="예 지금 활성화합니다(Y)"
              checked={checked}
              onClick={() => {
                setChecked(true);
              }}
            />
            <CheckBox
              title="아니오. 나중에 활성화합니다(O)."
              checked={!checked}
              onClick={() => {
                setChecked(false);
              }}
            />
          </div>
        </NewRangeBg>
      </div>
      <div className="h-[10%]">
        <Buttons
          handleMovePage={handleMovePage}
          onSave={onSaveRangeActivation}
        />
      </div>
    </div>
  );
}
