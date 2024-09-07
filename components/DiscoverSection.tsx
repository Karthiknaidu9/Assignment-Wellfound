import React from "react";
import BrandAesthetics from "./BrandAesthetics";
import Explore from "./Explore";
import EndForm from "./EndForm";

const DiscoverSection = () => {
  return (
    <div className=" p-10">
      <h1 className=" text-3xl font-bold text-gray-700 mb-8">
        Discover The Heart of Our Functionality
      </h1>
      <div className=" flex flex-row justify-evenly">
        <BrandAesthetics />
        <Explore />
        <EndForm />
      </div>
    </div>
  );
};

export default DiscoverSection;
