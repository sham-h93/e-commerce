import HorizontalProductList from "@/components/horizontalProductList";
import SliderBanner from "@/components/slider";
import BannerLists from "@/components/bannerList";
import { ProductItem } from "@/components/types/productItem";

export const p1: ProductItem = {
  id: 1,
  image: "https://picsum.photos/200",
  name: "نام محصول",
  previosPrice: "120.000",
  price: "109.000",
  discount: "12",
};

const list = [p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1, p1];

let banners: Array<BannerImage> = [];

for (let bannerItem = 0; bannerItem < 4; bannerItem++) {
  banners.push({
    imageUrl: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
  });
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6 pt-24">
      <SliderBanner />
      <HorizontalProductList products={list} />
      <BannerLists banners={banners} />
    </main>
  );
}
