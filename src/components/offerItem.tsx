import Image from "next/image";
import Card from "./card";
import Chip from "./chip";
export interface Product {
  id: number;
  image: string;
  name: string;
  previosPrice: string;
  price: string;
  discount: string;
}

const OfferItem = ({ product }: { product: Product }) => {
  const { image, name, previosPrice, price, discount } = product;

  return (
    <div className="flex flex-col bg-white-color p-3 gap-1">
      <Image src={image} alt="" width={128} height={128} />
      <h2 className="text-base text-text-color">{name}</h2>
      <div className="flex flex-row justify-between items-center">
        <Chip text={`${discount}%`} />
        <h3 className="text-xs text-grey-color justify-between">{`${previosPrice} تومان`}</h3>
      </div>
      <h2 className="self-end text-sm text-base text-success-color">{`${price} تومان`}</h2>
    </div>
  );
};

export default OfferItem;
