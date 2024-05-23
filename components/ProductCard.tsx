import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div className="p-4 bg-white rounded-lg shadow">
        <Image
          src="/images/banner.jpg"
          alt="Red Capsicum"
          width={100}
          height={100}
        />
        <h4 className="font-bold mt-2">Red capsicum</h4>
        <p>$20.00</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <Image
          src="/images/banner.jpg"
          alt="Fresh Seafood"
          width={100}
          height={100}
        />
        <h4 className="font-bold mt-2">Fresh Seafood</h4>
        <p>$20.00</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <Image src="/images/banner.jpg" alt="Orange" width={100} height={100} />
        <h4 className="font-bold mt-2">Orange</h4>
        <p>$20.00</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <Image src="/vercel.svg" alt="Eclair" width={100} height={100} />
        <h4 className="font-bold mt-2">Eclair</h4>
        <p>$20.00</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <Image
          src="/images/banner.jpg"
          alt="Raw minced meat"
          width={100}
          height={100}
        />
        <h4 className="font-bold mt-2">Raw minced meat</h4>
        <p>$20.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
