import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  data: any;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 w-max">
        <div className="flex flex-col gap-2" key={data?.id}>
          <div className="w-28 h-28 bg-[#F1EEDC] flex justify-center rounded-lg shadow-sm">
            <Image
              src={data?.imageUrl}
              alt="image"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="text-xs tracking-wide font-semibold">
            {data?.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
