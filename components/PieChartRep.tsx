import React from "react";
import { Component } from "./PieChartDonut";

function PieChartRep() {
  const divstatus = [
    {
      title: "Delivered",
      color: "#E76E50",
    },
    {
      title: "Out for Delivery",
      color: "#2A9D90",
    },
    {
      title: "Intransit",
      color: "#274754",
    },
    {
      title: "Pending",
      color: "#E8C468",
    },
    {
      title: "Exception",
      color: "#F4A462",
    },
  ];
  return (
    <div className="w-[448px] h-[368px] ml-5 my-10 mr-10  bg-white overflow-x-auto rounded-md">
      <div className=" flex flex-row justify-evenly p-3">
        <h2 className="font-bold text-gray-600">Shipment Updates</h2>
        <h2 className="font-bold text-gray-600">Totle Orders : 324</h2>
      </div>
      <div className=" flex flex-row gap-5 ">
        {divstatus.map((item, index) => (
          <div
            key={index}
            className="p-2 border-[1px] font-bold text-sm text-black whitespace-nowrap"
            style={{ backgroundColor: item.color }}
          >
            {item.title}
          </div>
        ))}
      </div>
      <Component />
    </div>
  );
}

export default PieChartRep;
