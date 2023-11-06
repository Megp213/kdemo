import NextCancelBtn from "@/app/Component/NextCancelBtn";

import LabelStepper from "@/app/Component/PageIndicator";
import PaymentForm from "@/app/Component/PaymentForm";

import React from "react";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={2} />
      <PaymentForm placeholder={"Type Here"} />

      <div className="flex gap-20 text-[30px] justify-center pt-10 absolute top-[90%] w-full">
        <NextCancelBtn
          link={"/pay-business/pay-business-form"}
          text={"Back"}
          bgcolor={"#fff"}
        />
        <div className="text-white">
          <NextCancelBtn
            link={"/pay-business/pay-business-form/payment-info/payment-type"}
            text={"Next"}
            bgcolor={"#005893"}
          />
        </div>
      </div>
    </div>
  );
}
