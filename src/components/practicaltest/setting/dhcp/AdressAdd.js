import IpInput from "../IpInput";
import AdressList from "./AdressList";
import Button from "../Button";
import { forwardRef } from "react";
export default forwardRef(function AdressAdd(
  { adressListData, defaultValue },
  ref
) {
  const { firstIpRef, secondIpRef, thirdIpRef, fourthIpRef } = ref;
  return (
    <div className="flex flex-col max-w-[400px]">
      <div>IP 주소(P):</div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <IpInput
            ref={[firstIpRef, secondIpRef, thirdIpRef, fourthIpRef]}
            defaultValue={defaultValue && defaultValue}
          />
          <div className="h-24">
            <AdressList
              adressList={
                adressListData.adressList.length >= 1 &&
                adressListData.adressList
              }
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button title="추가(D)" />
          <Button title="추가(D)" />
          <Button title="추가(D)" />
          <Button title="추가(D)" />
        </div>
      </div>
    </div>
  );
});
