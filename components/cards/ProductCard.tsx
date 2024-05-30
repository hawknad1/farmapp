"use client";
ShoppingBagIcon;
import { StarIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="cursor-pointer">
      <div className="bg-gray-100 rounded-lg shadow-sm hover:shadow-md h-fit w-44">
        <div className="p-4  flex flex-col gap-4 items-center ">
          <div className="self-start bg-blue-400 px-1.5 py-0.  rounded-full ">
            <p className="text-[10px] text-white tracking-wide">New</p>
          </div>
          <Image
            src={data?.imageUrl}
            alt="Red Capsicum"
            width={100}
            height={100}
            className="h-32 w-32 object-contain"
          />
          <div className="self-start w-full">
            <p className="text-[10px] text-blue-400">{data?.category}</p>
            <p className="text-base tracking-wide font-semibold">
              {data?.title}
            </p>
            <div className="flex items-center">
              <StarIcon className="size-3 text-yellow-500" />
              <StarIcon className="size-3 text-yellow-500" />
              <StarIcon className="size-3 text-yellow-500" />
              <StarIcon className="size-3 text-yellow-500" />
              <p className="text-[10px] text-blue-500 tracking-wide"> · 4.0</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-sm tracking-wide font-semibold">{`GHC ${data?.price}`}</p>
              <div className="bg-green-300 p-1.5 rounded-full cursor-pointer">
                <ShoppingBagIcon className="size-4 text-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
