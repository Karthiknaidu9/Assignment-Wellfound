import React from "react";

const Explore = () => {
  return (
    <div className=" flex flex-col h-[445px] gap-8">
      <div className="w-[448px] h-[152px] border-[1px] border-gray-300 rounded-md p-5">
        <h1 className=" font-bold text-gray-600 text-sm mb-3">
          Exclusive Onboarding Support for High-Volume Brands
        </h1>
        <p className="text-gray-500 text-sm mb-4">
          Unlock personalized guidanc! Book a one-on-oneonboarding call to
          streaming your experience
        </p>
        <button className=" px-2 py-1 text-white bg-black rounded-md">
          Schedule A Call
        </button>
      </div>
      <div className="w-[448px] h-[152px] border-[1px] border-gray-300 rounded-md p-5">
        <h1 className=" font-bold text-gray-600 text-sm mb-3">
          Exclusive Our Integrated EcoSystem
        </h1>
        <p className="text-gray-500 text-sm mb-3">
          Discover a variety of popular integration tailored for your
          convenience
        </p>

        <button className=" px-2 py-1 text-white bg-black rounded-md">
          Explore Integrations
        </button>
      </div>
    </div>
  );
};

export default Explore;
