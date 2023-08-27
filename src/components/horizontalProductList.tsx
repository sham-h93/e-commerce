"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import OfferItem from "./offerItem";
import Card from "./card";
import CrircleButton from "./circleButton";
import useOnScreen from "./hooks/useOnScreen";
import { ProductItem } from "./types/productItem";

const HorizontalProductList = ({ products }: { products: ProductItem[] }) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const listFirstItemRef = useRef<HTMLLIElement | null>(null);
  const [liElementWidth, setLiElementWidth] = useState<number>(0);
  const isVisible = useOnScreen(listFirstItemRef);

  useEffect(() => {
    const handleListEventListener = (event: any) => {};
    listRef.current?.addEventListener("scroll", handleListEventListener);
    listFirstItemRef.current &&
      setLiElementWidth(listFirstItemRef.current.offsetWidth);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      listRef.current?.removeEventListener("scroll", handleListEventListener);
    };
  }, []);

  const handleProductList = () => {
    return products.map((product: ProductItem) => {
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
        listRef.current.scrollLeft += liElementWidth;
      } else {
        listRef.current.scrollLeft -= liElementWidth;
      }
    }
  }

  return (
    <div className="mx-6 relative">
      <div className="w-full flex flex-row justify-between items-center rounded-full absolute top-1/2 bottom-1/2 left-3">
        <div className={`flex ${isVisible && `invisible`} `}>
          <CrircleButton onClick={() => handleHorizontalScroll()}>
            <MdKeyboardArrowRight size={40} />
          </CrircleButton>
        </div>
        <CrircleButton onClick={() => handleHorizontalScroll(false)}>
          <MdKeyboardArrowLeft size={40} />
        </CrircleButton>
      </div>
      <Card color={`bg-primary-color`}>
        <ul
          className="flex flex-row gap-3 p-3 scroll-smooth overflow-x-scroll no-scrollbar"
          ref={listRef}
        >
          <li ref={listFirstItemRef}>
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
