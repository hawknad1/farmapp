import React from "react";
import ProductCard from "./cards/ProductCard";
import { productCard } from "@/constants";

const ProductCards = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4 p-4 w-max ">
        {productCard.map((card) => (
          <ProductCard data={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
