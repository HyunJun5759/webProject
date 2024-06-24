export default function AdressList(adressList) {
  return (
    <div className="w-full h-full bg-white border border-black">
      <ul className="">
        {adressList.length > 0 &&
          adressList.map((adress, idx) => {
            return (
              <li
                key={adress.number}
                className="w-full"
                onClick={() => onSelect(adress.number)}
              >
                {`주소 ${adress.firstIp}.${adress.secondIp}.${adress.thirdIp}.${adress.fourthIp}`}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
