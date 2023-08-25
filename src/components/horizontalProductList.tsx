"use client";
import Link from "next/link";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import OfferItem, { Product } from "./offerItem";
import Card from "./card";
import CrircleButton from "./circleButton";

const HorizontalProductList = ({ products }: { products: [] }) => {
  const listRef = useRef(null);
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

  function handleHorizontalScroll(toRight: boolean = true) {
    if (listRef.current != null) {
      if (toRight) {
        listRef.current.scrollLeft += 172;
      } else {
        listRef.current.scrollLeft -= 172;
      }
    }
  }

  return (
    <div className="mx-6 relative">
      <div className="w-full flex flex-row justify-between items-center rounded-full absolute top-1/2 bottom-1/2 left-3">
        <CrircleButton onClick={() => handleHorizontalScroll()}>
          <MdKeyboardArrowRight size={40} />
        </CrircleButton>
        <CrircleButton onClick={() => handleHorizontalScroll(false)}>
          <MdKeyboardArrowLeft size={40} />
        </CrircleButton>
      </div>
      <Card color={`bg-primary-color`}>
        <ul
          className="flex flex-row gap-3 p-3 scroll-smooth overflow-x-scroll no-scrollbar"
          ref={listRef}
        >
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

export default HorizontalProductList;
