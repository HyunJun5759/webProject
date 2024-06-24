import NewRangeBg from "@/components/background/NewRangeBg";
import { useRef, useState } from "react";
import Buttons from "../Buttons";
export default function SecondPage({
  onSave,
  handleMovePage,
  data,
  defaultValue,
}) {
  const { handleNextPage, handlePrevPage } = handleMovePage;
  const [nameInput, setNameInput] = useState(
    defaultValue && defaultValue.name ? defaultValue.name : null
  );
  const [descriptionInput, setDescriptionInput] = useState(
    defaultValue && defaultValue.description ? defaultValue.description : null
  );
  const content = {
    header: {
      title: "범위 이름",
      description:
        "식별 가능한 범위 이름을 제공해야 합니다. 원하는 경우에는 설명을 제공할수 있습니다.",
    },
    body: {
      description:
        "이 범위의 이름 및 설명을 입력하십시오. 이 정보로 네트워크에서 범위가 어떻게 사용되는지 빨리 확인할 수 있습니다.",
    },
  };

  function onChangeName(event) {
    setNameInput(event.target.value);
  }
  function onChangeDescription(event) {
    setDescriptionInput(event.target.value);
  }

  function onSaveNameAndDescription() {
    onSave({ rangeName: { name: nameInput, description: descriptionInput } });
  }

  return (
    <div className="flex flex-col h-full">
      <div className="h-[90%]">
        <NewRangeBg header={content.header} body={content.body}>
          <div className="mb-2">
            <label className="mr-14">이름(A):</label>
            <input
              type="text"
              className="border border-black w-[70%]"
              onChange={onChangeName}
              defaultValue={defaultValue && defaultValue.name}
            />
          </div>
          <div>
            <label className="mr-14">설명(D):</label>
            <input
              type="text"
              className="border border-black w-[70%]"
              onChange={onChangeDescription}
              defaultValue={defaultValue && defaultValue.description}
            />
          </div>
        </NewRangeBg>
      </div>
      <div className="h-[10%]">
        <Buttons
          handleMovePage={handleMovePage}
          onSave={onSaveNameAndDescription}
        />
      </div>
    </div>
  );
}
