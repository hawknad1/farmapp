import Image from "next/image";
import React from "react";

const DeliveryCard = () => {
  return (
    <>
      <Image
        src="/images/banner.jpg"
        alt="Delivery"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className="mt-4 md:mt-0 md:ml-8">
        <h2 className="text-3xl font-bold">
          We ship on the following day from 10:00 AM to 08:00 PM
        </h2>
        <p>For purchases over $20.00</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Order Now
        </button>
      </div>
    </>
  );
};

export default DeliveryCard;
