import React from "react";
import PieChartRep from "./PieChartRep";
import DetalCard from "./DetalCard";
import TrackingPage from "./TrackingPage";

function PerformanceMetrics() {
  const fields = [
    "LifeTime",
    "LastWeek",
    "LastMonth",
    "LastYear",
    "Customize Time Line",
  ];

  return (
    <div className="  bg-[#FFF7EE] p-5">
      <h1 className="text-3xl font-bold text-gray-600 m-5">
        Instant Dive Into your PerformanceMertrics
      </h1>
      <div className="flex flex-row">
        {fields.map((item, index) => (
          <div className=" bg-white ml-5 p-2 rounded-md" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className=" flex flex-row justify-between ">
        <PieChartRep />
        <DetalCard />
        <TrackingPage />
      </div>
    </div>
  );
}

export default PerformanceMetrics;
