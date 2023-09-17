"use client";
import CartItems from "@/components/cartItems";
import Title from "@/components/title";

import charger from "./../../../../public/images/charger.png";
import headphone from "./../../../../public/images/headphone.png";
import iphone from "./../../../../public/images/iphone.png";
import CartDeliverySection from "@/components/cartDeliverySection";
import CartTotal from "@/components/cartTotal";

const list = [
  {
    id: 1,
    image: charger,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },
  {
    id: 2,
    image: headphone,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },

  {
    id: 3,
    image: iphone,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },
];

export default function Cart() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-6 pt-32 md:pt-30 ">
      <Title text="سبد خرید" />
      <div className="relative flex flex-row gap-6 lg:p-4  rounded-2xl outline outline-1 outline-grey-color bg-white-color ">
        <CartItems products={list} />
        <div className="flex flex-col gap-4">
          <CartTotal />
          <CartDeliverySection />
        </div>
      </div>
    </main>
  );
}
