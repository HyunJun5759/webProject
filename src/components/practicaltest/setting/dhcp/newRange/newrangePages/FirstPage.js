import Image from "next/image";
import Img from "../../../../../../../public/설치마법사.png";
import Buttons from "../Buttons";
export default function FirstPage({ onSave, handleMovePage, data }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex h-[90%]">
        <Image src={Img} width={200} />
        <div className="pl-12 pr-12">
          <h2 className="mb-4 text-lg font-bold">새 범위 마법사 시작</h2>
          <p className="mb-4">
            이 마법사는 네트워크상의 컴퓨터에 IP 주소를 분배하기 위한 범위
            설정을 도와줍니다.
          </p>
          <p>계속하려면 [다음]을 클릭하십시오.</p>
        </div>
      </div>

      <div className="h-[10%]">
        <Buttons handleMovePage={handleMovePage} />
      </div>
    </div>
  );
}
