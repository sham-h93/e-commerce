import Link from "next/link";
import ProductItem from "./productItem";

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
        <li className="col-auto" key={product.id}>
          <ProductItem product={product} />
        </li>
      );
    });
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl text-text-color m-6 text-center">{listTitle}</h2>
      <ul className="h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[1px]">
        {handleProductList()}
      </ul>
    </div>
  );
};
export default ProductSuggestionList;
