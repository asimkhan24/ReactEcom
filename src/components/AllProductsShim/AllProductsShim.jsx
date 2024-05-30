import React from "react";

const AllProductsShim = () => {
  const ArrayData = new Array(9).fill("");
  return (
    <div>
      <div className="flex gap-4 justify-center flex-wrap">
        {ArrayData.map((item, i) => (
          <div
            className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            key={i}
          >
            <div className="w-full px-2 py-2 bg-[#ccc] h-[200px]"></div>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900 bg-[#ccc] w-[120px] h-[20px]"></h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <div className="text-3xl font-bold text-slate-900 bg-[#ccc] w-[120px] h-[20px]"></div>
                {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                <div className="flex items-center">
                  <span className="px-2.5 py-0.5 text-xs font-semibold bg-[#ccc] w-[50px] h-[20px]"></span>
                </div>
              </div>
              <div className="py-4 bg-[#ccc] w-full mx-auto h-[20px]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsShim;
