import Image from "next/image";
import Chip from "./chip";
import { ProductItem } from "./types/productItem";
import Link from "next/link";

const SuggestItem = ({ product }: { product: ProductItem }) => {
  const { image, name, previosPrice, price, discount } = product;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="w-48 min-w-full flex flex-col gap-2 relative bg-white-color p-3 hover:drop-shadow-front hover:z-10">
        <Image className="self-center" src={image} alt="" layout="responsive" />
        <h2 className="text-base text-text-color line-clamp-1">{name}</h2>
        <div className="flex flex-row justify-between items-center">
          <Chip text={`${discount}%`} />
          <h3 className="text-xs text-grey-color justify-between">{`${previosPrice} تومان`}</h3>
        </div>
        <h2 className="self-end text-base text-success-color">{`${price} تومان`}</h2>
      </div>
    </Link>
  );
};

export default SuggestItem;
