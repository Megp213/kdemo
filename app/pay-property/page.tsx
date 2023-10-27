"use client";

import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import InputNumber from "../Component/InputNumber";
import BackButton from "../Component/BackButton";
import LabelStepper from "../Component/PageIndicator";
import NextCancelBtn from "../Component/NextCancelBtn";

export default function page() {
  return (
    <div>
      <LabelStepper stepNum={0} />
      <main className="bgtax-image flex flex-col justify-center w-full pt-[40px]">
        <InputNumber
          name="name"
          placeholder="Enter Tax No."
          link="/pay-property/pay-property-form"
          qrImg={"/example-qr.webp"}
        />
        <div className="flex gap-20 text-[30px] pt-10 justify-center">
          <NextCancelBtn link={"/menu"} text={"Cancel"} bgcolor={"#ff0000"} />
          <NextCancelBtn
            link={"/pay-property/pay-property-form"}
            text={"Next"}
            bgcolor={"#335F96"}
          />
        </div>
      </main>
    </div>
  );
}
