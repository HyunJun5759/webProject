import Button from "../../Button";

export default function Buttons({ handleMovePage, isLastPage, onSave }) {
  const { handleNextPage, handlePrevPage } = handleMovePage;
  return (
    <div className="flex justify-end pr-4 bg-[#F0F0F0] items-center h-full ">
      <div className="">
        <Button title="< 뒤로(B)" onClick={handlePrevPage} />
      </div>

      <div className="ml-1">
        <Button
          title={isLastPage ? "마침" : "다음(N) >"}
          onClick={
            isLastPage
              ? onSaveNewRange
              : () => {
                  handleNextPage();
                  onSave && onSave();
                }
          }
        />
      </div>

      <div className="ml-10">
        <Button title="취소" />
      </div>
    </div>
  );
}
