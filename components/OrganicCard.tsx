import Image from "next/image";
import React from "react";

const OrganicCard = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">
        Fresh & Flavorful organic goods
      </h2>
      <div className="flex flex-col md:flex-row">
        <Image
          src="/images/banner.jpg"
          alt="Farmer"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div className="ml-0 md:ml-8 mt-4 md:mt-0">
          <div className="mb-4">
            <h4 className="font-bold">Healthy Cruciferous</h4>
            <p>Cruciferous vegetables belong to the Brassicaceae family...</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Fresh Root Vegetables</h4>
            <p>Root vegetables like carrots, beets, and radishes...</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Dry Fruits & Nuts</h4>
            <p>
              Dry fruits and nuts are a great source of essential nutrients...
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Organic Vegetables</h4>
            <p>
              Organic vegetables are grown without the use of synthetic
              pesticides...
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Natural Citrus Fruits</h4>
            <p>Citrus fruits are known for their high vitamin C content...</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Healthy Leafy Green</h4>
            <p>
              Leafy greens like spinach, kale, and lettuce are nutrient-dense...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganicCard;
