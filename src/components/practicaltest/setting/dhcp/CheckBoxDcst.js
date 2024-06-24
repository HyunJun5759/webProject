export default function CheckBox({ title, checked, onClick }) {
  return (
    <div className="mb-2">
      <input
        type="radio"
        name="dhcpOption"
        className="mr-2"
        checked={checked}
        onClick={onClick}
      />
      <span>{title}</span>
    </div>
  );
}
