import React from "react";

function Orders() {
  return (
    <div className=" mb-10">
      <h1 className="text-3xl font-bold text-gray-600 m-10">
        Welcome, John Mathew!
      </h1>
      <div className="flex flex-row mx-20 justify-between">
        {/* Order Sync Successful Section */}
        <div className="w-80 h-48 border-[1px] border-gray-400 rounded-md">
          <h1 className="m-5 font-bold text-gray-600">
            Order Sync Successful!
          </h1>
          <p className="m-5 text-sm">
            Your details for the last 30 days have been successfully synced.
            Check them out now.
          </p>
          <div>
            <button className="m-5 border-[1px] p-2 text-white bg-black rounded-md text-sm">
              Explore Your Order
            </button>
          </div>
        </div>

        {/* Customize Customer Notifications Section */}
        <div className="w-80 h-48 border-[1px] border-gray-400 rounded-md bg-[#FFF8DB]">
          <h1 className="m-5 font-bold text-gray-600">
            Customize Customer Notifications
          </h1>
          <p className="m-5 text-sm">
            Tailor your email experience: Set the sender email and choose
            notification triggers.
          </p>
          <div>
            <button className="m-5 border-[1px] p-2 text-white bg-black rounded-md text-sm ">
              Customize Notifications
            </button>
          </div>
        </div>

        {/* Tracking Link Section */}
        <div className="w-80 h-48 border-[1px] border-gray-400 rounded-md bg-[#EAF4FF]">
          <h1 className="m-5 font-bold text-gray-600">
            Your Tracking Link has been generated
          </h1>
          <p className="m-5 text-sm">
            Include the link to your store's navigation menu.
          </p>
          <div className=" flex flex-row">
            <button className="ml-5 border-[1px] p-2 text-white bg-black rounded-md text-sm ">
              Copy Link
            </button>
            <button className="ml-5 border-[1px] p-2 text-white bg-black rounded-md text-sm ">
              Explore Your Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
