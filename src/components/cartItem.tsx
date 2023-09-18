"use client";
import Image from "next/image";
import Chip from "./chip";
import { ProductItem } from "./types/productItemType";
import Link from "next/link";
import IconButton from "./iconButton";
import { MdAdd, MdRemove } from "react-icons/md";
import Button from "./button";
import { Color } from "./enums/enums";
const CartItem = ({ product }: { product: ProductItem }) => {
  const { image, name, previosPrice, price, discount } = product;

  return (
    <div className="h-48 min-w-full flex flex-row gap-2 relative bg-white p-3 hover:drop-shadow-front hover:z-10 transition-all">
      <div className="h-full aspect-square">
        <Link href={`/product/${product.id}`}>
          <Image src={image} alt="" layout="responsive" />
        </Link>
      </div>
      <div className=" flex flex-row justify-between grow">
        <h2 className="text-base h-12 text-gray-500 line-clamp-2 w-1/2">
          {name}
        </h2>
        <div className="flex flex-col items-end">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col items-end ">
              <Chip text={`${discount}%`} />
              <h3 className="text-sm text-grey-color justify-between">
                {`${previosPrice}`} <span className="text-xs">تومان</span>
              </h3>
              <h2 className="self-end text-md text-success-color">
                {`${price}`} <span className="text-xs">تومان</span>
              </h2>
            </div>
            <div className="flex flex-row gap-4 items-center text-lg self-baseline">
              <IconButton onClick={() => {}}>
                <MdAdd size={24} />
              </IconButton>
              3
              <IconButton onClick={() => {}}>
                <MdRemove size={24} />
              </IconButton>
              <Button
                color={Color.Error}
                text="حذف"
                onClick={() => {}}
                height="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
