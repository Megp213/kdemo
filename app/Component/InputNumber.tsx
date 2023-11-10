import React, { useRef, useState } from "react";
import NextCancelBtn from "./NextCancelBtn";
import KeyboardAlpha from "./KeyboardAlpha";
import KeyboardSymbol from "./KeyboardSymbol";
import { handleKeyClick, setCursorPosition } from "../functions/KeyboardUtils";

interface InputNumberProps {
  name: string;
  placeholder: string;
  link: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  name,
  placeholder,
  link,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputFieldRef = useRef<HTMLInputElement | null>(null);
  const [activeKeyboard, setActiveKeyboard] = useState("alpha");

  const handleKeyClickWrapper = (key: string) => {
    const updatedValue = handleKeyClick(key, inputValue, inputFieldRef, setActiveKeyboard);
    setInputValue(updatedValue);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 text-[40px] m-[10px]">
      <input
        ref={inputFieldRef}
        value={inputValue}
        name={name}
        placeholder={placeholder}
        className="text-center rounded-2xl border-2 border-gray-400"
        onClick={(e) => {
          const cursorPosition = e.currentTarget.selectionStart || 0;
          setCursorPosition(inputFieldRef, cursorPosition);
        }}
      />

      <div className="fixed bottom-0">
        {activeKeyboard === "alpha" ? (
          <KeyboardAlpha handleKeyClick={handleKeyClickWrapper} />
        ) : (
          <KeyboardSymbol handleKeyClick={handleKeyClickWrapper} />
        )}

        <div className="flex gap-24 text-[30px] justify-center my-10">
          <NextCancelBtn link={"/menu"} text={"Back"} bgcolor={"#fff"} />
          <div className="text-white">
            <NextCancelBtn link={link} text={"Next"} bgcolor={"#005893"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
