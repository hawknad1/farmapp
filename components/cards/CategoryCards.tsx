import React from "react";
import CategoryCard from "../CategoryCard";
import { categoryCard } from "@/constants";

const CategoryCards = () => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4 p-4 w-max ">
        {categoryCard.map((card) => (
          <CategoryCard data={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
