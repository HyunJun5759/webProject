export default function CheckBox({ title, onClick, checked, disabled }) {
  return (
    <div className={`ml-4 ${disabled && "text-[#A9A9A9]"}`}>
      <input
        type="radio"
        onClick={onClick}
        checked={checked}
        className="accent-black"
      />
      <label htmlFor="getip" className="ml-2">
        {title}
      </label>
    </div>
  );
}
