import Image from "next/image";
import Img from "../../../../../../../public/설치마법사.png";
import Buttons from "../Buttons";
export default function FirstPage({ handleMovePage, onSave }) {
  return (
    <div className="w-full h-full">
      <div className="h-[90%]">
        <div className="flex h-full">
          <Image src={Img} width={200} />
          <div className="pl-12 pr-12">
            <h2 className="mb-4 text-lg font-bold">새 범위 마법사 완료</h2>
            <p className="mb-4">새 범위 마법사를 완료했습니다.</p>
            <p>마법사를 끝내려면 [마침]을 클릭하십시오.</p>
          </div>
        </div>
      </div>
      <div className="h-[10%]">
        <Buttons handleMovePage={handleMovePage} onSave={onSave} />
      </div>
    </div>
  );
}
