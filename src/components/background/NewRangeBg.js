export default function NewRangeBg({ header, body, children }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-[20%] px-4 ">
        <span className="font-bold">{header.title}</span>
        <p className="px-4">{header.description}</p>
      </div>

      <div className="bg-[#F0F0F0] h-[80%] pt-4 px-8 w-full">
        <p className="mb-5">{body && body.description && body.description}</p>
        {children}
      </div>
    </div>
  );
}
