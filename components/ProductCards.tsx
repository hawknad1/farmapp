import React from "react";
import ProductCard from "./cards/ProductCard";
import { productCard } from "@/constants";

const ProductCards = () => {
  return (
    <div className="flex space-x-4 p-4 ">
      {productCard.map((card) => (
        <ProductCard data={card} key={card.id} />
      ))}
    </div>
  );
};

export default ProductCards;
