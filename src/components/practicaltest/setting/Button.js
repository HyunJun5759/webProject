export default function Button({ title, onClick, disabled }) {
  const buttonColor = `${
    disabled ? "bg-[#CCCCCC]" : "bg-[#E1E1E1]"
  } border border-[#B0B0B0]`;
  return (
    <button
      className={`w-[90px] ${buttonColor}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
