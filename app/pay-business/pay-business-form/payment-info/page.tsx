import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import PaymentForm from "@/app/Component/PaymentForm";

import React from "react";

export default function page() {
  return (
    <div className=" text-[25px]">
      <LabelStepper stepNum={2} title={"Enter Bin"} />
      <PaymentForm />
      <div className="fixed bottom-[352px] w-full">
        <div className="flex gap-24 text-[30px] justify-center mb-10">
          <NextCancelBtn link={"/pay-business/pay-business-form"} text={"Back"} bgcolor={"#fff"} />
          <div className="text-white">
            <NextCancelBtn
              link={"/pay-business/pay-business-form/payment-info/payment-type"}
              text={"Next"}
               bgcolor={"#005893"}
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}
