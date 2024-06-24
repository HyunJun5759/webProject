"use client";

import { useState } from "react";
import { forwardRef } from "react";

const IpInput = forwardRef(function IpInput({ disabled, defaultValue }, ref) {
  const [firstIp, setFirstIp] = useState(
    defaultValue && defaultValue.firstIp && defaultValue.firstIp
  );
  const [secondIp, setSecondIp] = useState(
    defaultValue && defaultValue.secondIp && defaultValue.secondIp
  );
  const [thirdIp, setThirdIp] = useState(
    defaultValue && defaultValue.thirdIp && defaultValue.thirdIp
  );
  const [fourthIp, setFourthIp] = useState(
    defaultValue && defaultValue.fourthIp && defaultValue.fourthIp
  );

  const [firstRef, secondRef, thirdRef, fourthRef] = ref;
  function onChangeFirstIp(event) {
    const value = event.target.value;
    setFirstIp(value);
    if (value.length >= 3) {
      secondRef.current.focus();
    }
  }

  function onChangeSecondIp(event) {
    const value = event.target.value;
    setSecondIp(value);
    if (value.length >= 3) {
      thirdRef.current.focus();
    }
  }

  function onChangeThirdIp(event) {
    const value = event.target.value;
    setThirdIp(value);
    if (value.length >= 3) {
      fourthRef.current.focus();
    }
  }

  function onChangeFourthIp(event) {
    const value = event.target.value;
    setFourthIp(value);
  }

  const inputStyle = `border-none outline-0 m-0 w-[40px] text-center align-bottom text-[16px] ${
    disabled ? "bg-[#F0F0F0]" : ""
  }`;

  return (
    <div
      className={`w-[176px] bg-white inline-block text-0 border border-solid border-[#ccc] pl-[6px] pr-0 ${
        disabled ? "bg-[#F0F0F0]" : ""
      }`}
    >
      <input
        type="text"
        onChange={onChangeFirstIp}
        ref={firstRef}
        value={firstIp}
        maxLength={3}
        className={inputStyle}
        disabled={disabled}
      />
      <i className="inline-block w-[2px] h-[2px] mb-[2px] bg-[#333] rounded-[50%] align-bottom"></i>
      <input
        type="text"
        onChange={onChangeSecondIp}
        ref={secondRef}
        value={secondIp}
        maxLength={3}
        className={inputStyle}
        disabled={disabled}
        defaultValue={
          defaultValue && defaultValue.secondIp && defaultValue.secondIp
        }
      />
      <i className="inline-block w-[2px] h-[2px] mb-[2px] bg-[#333] rounded-[50%] align-bottom"></i>
      <input
        type="text"
        onChange={onChangeThirdIp}
        ref={thirdRef}
        value={thirdIp}
        maxLength={3}
        className={inputStyle}
        disabled={disabled}
        defaultValue={
          defaultValue && defaultValue.thirdIp && defaultValue.thirdIp
        }
      />
      <i className="inline-block w-[2px] h-[2px] mb-[2px] bg-[#333] rounded-[50%] align-bottom"></i>
      <input
        type="text"
        onChange={onChangeFourthIp}
        ref={fourthRef}
        value={fourthIp}
        maxLength={3}
        className={inputStyle}
        disabled={disabled}
        defaultValue={
          defaultValue && defaultValue.fourthIp && defaultValue.fourthIp
        }
      />
    </div>
  );
});

export default IpInput;
