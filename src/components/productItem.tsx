import Image from "next/image";
import Chip from "./chip";
import { ProductItem } from "./types/productItemType";
import Link from "next/link";

const ProductItem = ({ product }: { product: ProductItem }) => {
  const { image, name, previosPrice, price, discount } = product;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="w-48 lg:w-56 min-w-full flex flex-col gap-2 relative bg-white-color p-3 hover:drop-shadow-front hover:z-10 transition-all">
        <Image className="self-center" src={image} alt="" layout="responsive" />
        <h2 className="text-base h-12 text-text-color line-clamp-2">{name} </h2>
        <div className="flex flex-row justify-between items-center">
          <Chip text={`${discount}%`} />
          <div className="flex flex-col items-end ">
            <h3 className="text-sm text-grey-color justify-between">
              {`${previosPrice}`} <span className="text-xs">تومان</span>
            </h3>
            <h2 className="self-end text-md text-success-color">
              {`${price}`} <span className="text-xs">تومان</span>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
