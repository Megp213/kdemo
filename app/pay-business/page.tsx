"use client";
import React from "react";
import LabelStepper from "../Component/PageIndicator";
import BackButton from "../Component/BackButton";
import InputNumber from "../Component/InputNumber";
import NextCancelBtn from "../Component/NextCancelBtn";

export default function Page() {
  return (
    <div>
      <LabelStepper stepNum={0} />
      <div className="flex flex-col justify-center w-full bgpaybusiness-image pt-[40px]">
        <InputNumber
          name="InputValue"
          placeholder="Enter BIN"
          link="/pay-business/pay-business-form"
          qrImg={"/Qr.png"}
        />
      </div>
      <div className="flex gap-20 text-[30px] justify-center pt-10">
        <NextCancelBtn link={"/menu"} text={"Cancel"} bgcolor={"#ff0000"} />
        <NextCancelBtn
          link={"/pay-business/pay-business-form"}
          text={"Next"}
          bgcolor={"#335F96"}
        />
      </div>
    </div>
  );
}
