/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";

import PaymentType from "@/app/Component/PaymentType";
import LabelStepper from "@/app/Component/LabelStepper";
import NextCancelBtn from "@/app/Component/NextCancelBtn";

const Page: React.FC = () => {
  return (
    <div className="text-[25px]">
      <LabelStepper stepNum={3} title={"Enter Tax"} />
      <div className="flex text-[40px] items-center flex-col mt-[150px] mb-[350px] ">
        <h1 className="font-bold uppercase">Choose Preferred payment type</h1>
        <div className="flex gap-20 pt-5">
          <PaymentType />
        </div>
        <div className="absolute bottom-[352px] w-full">
        <div className="flex gap-24 text-[30px] justify-center mb-10">
          <NextCancelBtn
            link={"/pay-property/pay-property-form/payment-info"}
            text={"Back"}
            bgcolor={"#fff"}
          />
          <div className="text-white invisible">
            <NextCancelBtn
              link={"#"}
              text={"Next"}
              bgcolor={"#005893"}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;
