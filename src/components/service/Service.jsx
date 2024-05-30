import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { LiaCartArrowDownSolid } from "react-icons/lia";

const Service = () => {
  return (
    <>
      <div className="container mx-auto px-5 flex py-11 gap-10 items-center justify-center flex-wrap">
        <div className="border bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
          <FaShippingFast size={30} />
          <p>Free Shipping</p>
        </div>
        <div className="border bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
          <LiaCartArrowDownSolid size={30} />
          <p>Authentic Products</p>
        </div>
        <div className="border bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
          <TbTruckReturn size={30} />
          <p>Easy Return</p>
        </div>
        <div className="border bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
          <MdPayment size={30} />
          <p>Secure Payment</p>
        </div>
      </div>
    </>
  );
};

export default Service;
