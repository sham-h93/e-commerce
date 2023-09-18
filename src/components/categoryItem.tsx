import Image from "next/image";
import { CategoryItem } from "./types/categoryItem";

const CategoryItem = ({ image, text }: CategoryItem) => {
  return (
    <div className=" flex flex-col gap-3 items-center relative">
      <div className="w-24 h-24 bg-primary-color bg-opacity-25 rounded-full flex items-center justify-center">
        <Image src={image} width={96} height={96} alt="" />
      </div>
      <h3 className="text-gray-500">{text}</h3>
    </div>
  );
};

export default CategoryItem;
