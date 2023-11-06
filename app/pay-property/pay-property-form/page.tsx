/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import ConfirmCancelBtn from "@/app/Component/NextCancelBtn";
import Form from "@/app/Component/InputText";
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
      <header className="text-[20px]">
        <div className="flex justify-between px-10 pt-10 gap-5">
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              1
            </div>
            <span>Enter BIN</span>
          </div>

          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              2
            </div>
            <span>View Information</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              3
            </div>
            <span>Confirm Payment</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              4
            </div>
            <span>Payment Type</span>
          </div>
        </div>
      </header>

      <Link
        className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
        href={"/pay-property"}
      >
        <MdKeyboardBackspace size={40} className="text-[#335F96]" />
        <p>Back</p>
      </Link>
      <div className="flex justify-center ">
        <Form label={"ARP/TD No."} placeholder={"Type Here"} size={15} />
        <Form
          label={"Property Identification No."}
          placeholder={"Type Here"}
          size={15}
        />
      </div>
      <Form label={"Owner"} placeholder={"Type Here"} size={38} />
      <Form label={"Address"} placeholder={"Type Here"} size={38} />
      <div className="flex justify-center ">
        <Form label={"OCT/TCT/CLOA No."} placeholder={"Type Here"} size={15} />

        <Form label={"Lot No."} placeholder={"Type Here"} size={15} />
      </div>
      <div className="flex justify-center ">
        <Form
          label={"Municipal Assessor"}
          placeholder={"Type Here"}
          size={15}
        />

        <Form
          label={"Provincial Assessor"}
          placeholder={"Type Here"}
          size={15}
        />
      </div>

      {/* <div className="relative text-[30px] text-black flex justify-around bg-[#ffffff75]">
            <div className="absolute w-[700px] h-[3px] bg-black top-[50px]"></div>
            <div className="">
              <h1>Details</h1>
              <p>Sari-Sari Store</p>
              <p className="pl-[50px]">Business Tax</p>
              <p className="pl-[50px]">Mayor's Permit</p>
              <p>Sari-Sari Store</p>
              <p className="pl-[50px]">Business Tax</p>
              <p className="pl-[50px]">Mayor's Permit</p>
            </div>
            <div>
              <h1>Amount</h1>
              <p className="text-transparent">.</p>
              <p>1,500.00</p>
              <p>800.00</p>
              <p className="text-transparent">.</p>
              <p>1,500.00</p>
              <p>800.00</p>
            </div>
          </div> */}
      <div className="flex justify-center gap-20">
        <ConfirmCancelBtn
          text={"Cancel"}
          link={"/menu"}
          bgcolor={"#d3010cee"}
        />
        <ConfirmCancelBtn
          text={"Confirm"}
          link={"/pay-property/pay-property-form/payment-info"}
          bgcolor={"#335F96"}
        />
      </div>
    </div>
  );
}
