import React from "react";

const BrandAesthetics = () => {
  return (
    <div className="w-[332px] h-[445px] border-[1px] border-gray-300 p-5 rounded-md">
      <h1 className=" font-bold text-gray-600 text-sm">
        Elevate Your Brand Aesthetics with Custom Tracking Page Styles
      </h1>
      <p className="py-5 text-gray-500 text-sm">
        Immerse your customers in a branded in a branded experience by
        personalizing the colors on your tracking page.
      </p>
      <div>
        <h1 className="text-gray-700 m-1">Accent Color</h1>
        <div className=" flex flex-row gap-3">
          <div className=" p-1 border-[1px] rounded-md w-full pl-4 border-gray-300">
            FF9898
          </div>
          <div className="bg-pink-500 rounded-md w-20"></div>
        </div>
      </div>
      <div>
        <h1 className="text-gray-700 mt-2 m-1">Accent Color</h1>
        <div className=" flex flex-row gap-3">
          <div className=" p-1 border-[1px] rounded-md w-full pl-4 border-gray-300">
            571010
          </div>
          <div className="bg-orange-900 rounded-md w-20"></div>
        </div>
      </div>
      <div>
        <h1 className="text-gray-600 m-2">Accent Color</h1>
        <div className=" flex flex-row gap-3">
          <div className=" p-1 border-[1px] rounded-md w-full pl-4 border-gray-300">
            FF9898
          </div>
          <div className="bg-pink-300 rounded-md w-20"></div>
        </div>
      </div>
      <div className=" flex flex-row justify-between mt-5 mx-5 ">
        <button className=" border-[1px] border-gray-300 rounded-md p-1">
          Preview
        </button>
        <button className=" border-[1px] border-gray-300 rounded-md p-1 text-white bg-black px-2">
          Apply Colors
        </button>
      </div>
    </div>
  );
};

export default BrandAesthetics;
