import React from "react";
import { categoryCard } from "@/constants";
import Image from "next/image";

interface CategoryCardProps {
  image: string;
  category: string;
  id: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, id, image }) => {
  return (
    <div className="bg-red-200 h-36 justify-center items-center gap-3 flex flex-col overflow-hidden rounded-lg shadow">
      <Image src={image} alt="image" width={200} height={200} />
      <p>{category}</p>
    </div>

    // <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    //   <div className="p-4 bg-white rounded-lg shadow">Vegetables</div>
    //   <div className="p-4 bg-white rounded-lg shadow">Seafood</div>
    //   <div className="p-4 bg-white rounded-lg shadow">Eggs</div>
    //   <div className="p-4 bg-white rounded-lg shadow">Baking</div>
    //   <div className="p-4 bg-white rounded-lg shadow">Cheese</div>
    //   <div className="p-4 bg-white rounded-lg shadow">Fresh Fruit</div>
    //   <div className="p-4 bg-white rounded-lg shadow">Meat</div>
    //   <div className="p-4 bg-white rounded-lg shadow">Milk</div>
    //   <div className="p-4 bg-white rounded-lg shadow">Drinks</div>
    // </div>
  );
};

export default CategoryCard;
