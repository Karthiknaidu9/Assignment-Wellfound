import React from "react";

function DetalCard() {
  return (
    <div className=" my-10 w-[216px] h-[368px] bg-[#956F00] text-white text-sm  rounded-md p-5">
      <h1 className=" font-bold tracking-wider">
        Star Facts about your orders!!!
      </h1>
      <p className=" mt-5">
        There are 8 shipments that have been in out for delivery for more than 3
        days.
      </p>
      <p className=" mt-5">There are 5 shipments in exception right now</p>
      <p className=" mt-5">The maximum chargebacks are from Maimi</p>
      <button className=" bg-white text-black font-semibold px-2 py-1 mt-10 rounded-md">
        Cheak Orders Page
      </button>
    </div>
  );
}

export default DetalCard;
