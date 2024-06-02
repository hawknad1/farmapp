import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Middle = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center bg-orange-100 rounded-md px-3 cursor-pointer">
        <div className="">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Everyday fresh & clean with our products
          </h3>
          <button className="bg-red-500 text-white px-4 py-2 font-medium rounded-full">
            Shop Now
          </button>
        </div>
        <div className="">
          <Image
            src="/images/veg2.png"
            height={100}
            width={700}
            className="w-full h-[250px] object-contain"
            alt="Veggies"
          />
        </div>
      </div>
      <div className="flex items-center bg-green-100 rounded-md px-3 cursor-pointer">
        <div className="">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
            Everyday fresh & clean with our products
          </h3>
          <button className="bg-green-500 text-white px-3 py-2 rounded-full font-medium">
            Shop Now
          </button>
        </div>
        <div className="">
          <Image
            src="/images/veg.png"
            height={100}
            width={700}
            className="w-full h-[250px] object-contain"
            alt="Veggies"
          />
        </div>
      </div>
    </div>
  );
};

export default Middle;
