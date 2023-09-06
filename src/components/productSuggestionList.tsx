import Link from "next/link";
import ProductItem from "./productItem";
import Card from "./card";
import Title from "./title";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ProductSuggestionList = ({
  products,
  listTitle,
}: {
  products: ProductItem[];
  listTitle?: string;
}) => {
  const handleProductList = () => {
    return products.map((product, i) => {
      if (i >= 4) {
        return (
          <li className="col-auto" key={product.id}>
            <ProductItem product={product} />
          </li>
        );
      }
    });
  };

  return (
    <Card color={"bg-white-color"} outline={"outline"}>
      <div className="flex flex-row justify-between">
        <Title text="پر بازدیدترین محصولات" />
        <Link
          className="flex flex-row items-center text-primary-color"
          href={"/"}
        >
          <span className="text-sm">مشاهده همه</span>
          <MdKeyboardArrowLeft size={24} />
        </Link>
      </div>
      <ul className="h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[1px]">
        {handleProductList()}
      </ul>
    </Card>
  );
};
export default ProductSuggestionList;
