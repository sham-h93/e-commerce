import { Product } from "@/components/offerItem";
import OfferList from "@/components/offerList";
import SliderBanner from "@/components/slider";
import Image from "next/image";

const p1: Product = {
  id: 1,
  image: "https://picsum.photos/200",
  name: "نام محصول",
  previosPrice: "120.000",
  price: "109.000",
  discount: "12",
};

const list = [p1, p1];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6">
      <SliderBanner />
      <OfferList products={list} />
    </main>
  );
}
