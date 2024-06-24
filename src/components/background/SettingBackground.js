import Button from "../practicaltest/setting/Button";

export default function SettingBackground({ children }) {
  return (
    <div className="px-10 pt-14 bg-[#F0F0F0] h-[100vh] min-w-[600px] max-w-[600px]">
      <div className="h-[90%] px-10 bg-white border-2 border-[#D9D9D9]">
        {children}
      </div>
      <div className="flex justify-end gap-3 mt-5">
        <Button title="확인" />
        <Button title="취소" />
      </div>
    </div>
  );
}
