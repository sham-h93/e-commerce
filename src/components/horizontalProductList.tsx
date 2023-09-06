"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductItem from "./productItem";
import CrircleButton from "./circleButton";
import useOnScreen from "./hooks/useOnScreen";
import Title from "./title";

const HorizontalProductList = ({ products }: { products: ProductItem[] }) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const listFirstItemRef = useRef<HTMLLIElement | null>(null);
  const listLastItemRef = useRef<HTMLLIElement | null>(null);
  const [liElementWidth, setLiElementWidth] = useState<number>(0);
  const isListFirstItemVisible = useOnScreen(listFirstItemRef);
  const isListLastItemVisible = useOnScreen(listLastItemRef);

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
    return products.map((product: ProductItem, index: number) => {
      if (index == 0) {
        return (
          <li key={product.id} ref={listFirstItemRef}>
            <ProductItem product={product} />
          </li>
        );
      }
      if (index == products.length - 1) {
        return (
          <li key={product.id} ref={listLastItemRef}>
            <ProductItem product={product} />
          </li>
        );
      } else {
        return (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        );
      }
    });
  };

  function handleHorizontalScroll(toRight: boolean = true) {
    if (listRef.current != null) {
      console.log(listRef.current);

      if (toRight) {
        listRef.current.scrollLeft += liElementWidth;
      } else {
        listRef.current.scrollLeft -= liElementWidth;
      }
    }
  }

  return (
    <div className="flex flex-col gap-2 relative bg-white-color outline outline-1 outline-grey-color rounded-2xl py-6">
      <div className="px-6">
        <Title text={"پیشنهادات شگفت انگیز"} />
      </div>
      <div className="w-full flex bg-primary-color z-30 flex-row px-4 justify-between items-center rounded-full absolute top-1/2 bottom-1/2">
        <div className={`flex ${isListFirstItemVisible && `invisible`} `}>
          <CrircleButton onClick={() => handleHorizontalScroll()}>
            <MdKeyboardArrowRight size={40} color={"white"} />
          </CrircleButton>
        </div>
        <div className={`flex ${isListLastItemVisible && `invisible`} `}>
          <CrircleButton onClick={() => handleHorizontalScroll(false)}>
            <MdKeyboardArrowLeft size={40} color={"white"} />
          </CrircleButton>
        </div>
      </div>
      <ul
        className="flex flex-row gap-3 p-3 scroll-smooth overflow-x-scroll no-scrollbar"
        ref={listRef}
      >
        {handleProductList()}
      </ul>
    </div>
  );
};

export default HorizontalProductList;
