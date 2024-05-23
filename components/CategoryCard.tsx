import React from "react";

const CategoryCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div className="p-4 bg-white rounded-lg shadow">Vegetables</div>
      <div className="p-4 bg-white rounded-lg shadow">Seafood</div>
      <div className="p-4 bg-white rounded-lg shadow">Eggs</div>
      <div className="p-4 bg-white rounded-lg shadow">Baking</div>
      <div className="p-4 bg-white rounded-lg shadow">Cheese</div>
      <div className="p-4 bg-white rounded-lg shadow">Fresh Fruit</div>
      <div className="p-4 bg-white rounded-lg shadow">Meat</div>
      <div className="p-4 bg-white rounded-lg shadow">Milk</div>
      <div className="p-4 bg-white rounded-lg shadow">Drinks</div>
    </div>
  );
};

export default CategoryCard;
