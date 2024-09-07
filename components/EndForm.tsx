import React from "react";

const EndForm = () => {
  return (
    <div className=" w-[332px] h-[445px] border-[1px] rounded-md p-5">
      <h1 className=" font-bold text-gray-600 text-sm mb-5">
        Seamlessly Integrate Custom HTML Elements
      </h1>
      <p className=" text-gray-500 text-sm mb-10">
        Unleash creativity with out Custom HTML feature. Add links, custom
        messages,or any Html content to elevate the tracking page experience for
        your customers.
      </p>
      <h1 className=" m-2"> HTML Link</h1>
      <div className="  h-32  w-full border-[1px] rounded-md"></div>
      <div className=" flex flex-row justify-evenly mt-8">
        <button className="px-2 py-1 border-[1px] border-gray-400 rounded-md">
          Preview
        </button>
        <button className=" px-2 py-1 border-[1px] border-gray-400 rounded-md text-white bg-black">
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default EndForm;
