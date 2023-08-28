import HorizontalProductList from "@/components/horizontalProductList";
import SliderBanner from "@/components/slider";
import BannerLists from "@/components/bannerList";
import { ProductItem } from "@/components/types/productItem";
import Categories from "@/components/categories";
import digital from "./../../public/images/digital.png";
import charger from "./../../public/images/charger.png";
import headphone from "./../../public/images/headphone.png";
import iphone from "./../../public/images/iphone.png";
import laptop from "./../../public/images/laptop.png";
import nokia from "./../../public/images/nokia.png";
import samsung from "./../../public/images/samsung.png";
import smartwatch from "./../../public/images/smartwatch.png";

import Banner from "@/components/banner";
import Image from "next/image";
import ProductSuggestionList from "@/components/productSuggestionList";

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
  {
    id: 4,
    image: samsung,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },
  {
    id: 5,
    image: nokia,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },
  {
    id: 6,
    image: laptop,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },
  {
    id: 7,
    image: smartwatch,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },
  {
    id: 8,
    image: headphone,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },
  {
    id: 9,
    image: laptop,
    name: "نام محصول",
    previosPrice: "120.000",
    price: "109.000",
    discount: "12",
  },
];

let banners: Array<BannerImage> = [];

for (let bannerItem = 0; bannerItem < 4; bannerItem++) {
  banners.push({
    imageUrl: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
  });
}

let categories = [
  { text: "دیجیتال", image: digital },
  { text: "دیجیتال", image: digital },
  { text: "دیجیتال", image: digital },
  { text: "دیجیتال", image: digital },
  { text: "دیجیتال", image: digital },
  { text: "دیجیتال", image: digital },
  { text: "دیجیتال", image: digital },
  { text: "دیجیتال", image: digital },
  { text: "دیجیتال", image: digital },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6 pt-24">
      <SliderBanner />
      <HorizontalProductList products={list} />
      <BannerLists banners={banners} />
      <Categories categories={categories} />
      <div className=" h-32 bg-warning-color mx-4 rounded-2xl">
        {/* <Image src={} fill={} /> */}
      </div>
      <ProductSuggestionList listTitle="پر بازدیدترین ها" products={list} />
    </main>
  );
}
