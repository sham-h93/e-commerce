import Link from "next/link";
import { ProductItem } from "./types/productItem";
import SuggestItem from "./suggestItem";

const ProductSuggestionList = ({
  products,
  listTitle,
}: {
  products: ProductItem[];
  listTitle?: string;
}) => {
  const handleProductList = () => {
    return products.map((product) => {
      return (
        <li key={product.id}>
          <Link href={"/"}>
            <SuggestItem product={product} />
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="flex mx-6 flex-col">
      <h2 className="text-2xl text-text-color m-3">{listTitle}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 divide-solid divide-grey-color lg:grid-cols-6">
        {handleProductList()}
      </ul>
    </div>
  );
};
export default ProductSuggestionList;
