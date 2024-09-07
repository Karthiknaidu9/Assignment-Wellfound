"use client";
import React from "react";
import { Icon } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  const titles = [
    "Home",
    "Order",
    "Integrations",
    "Tracking Page",
    "Partner With Us",
  ];
  return (
    <div className="flex flex-row  align-center border-b-[1px] border-black mx-5 justify-between">
      <div className="flex flex-row gap-5 m-3 font-semibold">
        {titles.map((item, index) => (
          <div className=" m-2" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className=" flex flex-row gap-12 ml-6 items-center">
        <div className=" flex flex-row w-32 text-gray-500 border-b-[1px] border-black ">
          <div className="w-5 h-5">
            <Icon source={SearchIcon} />
          </div>
          <div className=" mx-auto ">Search</div>
        </div>
        <div className=" flex flex-row gap-4 justify-center align-center ">
          <div className=" items-center">
            <MdOutlineAccountCircle />
          </div>
          <div>Account</div>
        </div>
        <div className=" flex flex-row gap-4 justify-center align-center ">
          <IoSettingsOutline className=" items-center" />
          <div> Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
