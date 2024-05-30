import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-4 md:mt-0 md:ml-8 w-full ">
      <div className="sm:flex justify-center">
        <div className="flex justify-center">
          <Image
            src="/images/delivery.png"
            width={400}
            height={400}
            alt="Delivery Man"
            className="lg:h-[390px] lg:w-[390px] h-72 w-72 sm:h-80 object-cover sm:w-full "
          />
        </div>
        <div className="flex-1 lg:max-w-lg">
          <h2 className="text-3xl lg:text-4xl font-bold md:max-w-md md:mt-9 lg:mt-28 leading-snug ">
            Don't Miss Out On Tasty Organic Farm Produce
          </h2>
          <p className="mt-4">Save up to 50% off on your first buy</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
