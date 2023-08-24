import Link from "next/link";
import OfferItem, { Product } from "./offerItem";
import Card from "./card";

const OfferList = ({ products }: { products: [] }) => {
  const handleProductList = () => {
    return products.map((product: Product) => {
      return (
        <li key={product.id}>
          <Link href={""}>
            <OfferItem product={product} />
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="mx-6">
      <Card color={`bg-primary-color`}>
        <ul className="flex flex-row gap-3 p-3">
          <li>
            <div className="flex p-6 bg-warning-color h-full justify-center items-center">
              <h2 className="text-4xl text-white-color">شگفت انگیز ها</h2>
            </div>
          </li>
          {handleProductList()}
        </ul>
      </Card>
    </div>
  );
};

export default OfferList;
