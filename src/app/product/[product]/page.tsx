"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import charger from "./../../../../public/images/charger.png";
import headphone from "./../../../../public/images/headphone.png";
import iphone from "./../../../../public/images/iphone.png";
import laptop from "./../../../../public/images/laptop.png";
import nokia from "./../../../../public/images/nokia.png";
import samsung from "./../../../../public/images/samsung.png";
import smartwatch from "./../../../../public/images/smartwatch.png";
import HorizontalProductList from "@/components/horizontalProductList";
import "./../../../../styles/product.css";
import ShoppingCard from "@/components/shoppingCard";
import ProductDetail from "@/components/productDetail";
import Title from "@/components/title";
import Comments from "@/components/comments";
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
    name: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook R565EP-EJ629-i7 24GB 1HDD 1SSD MX330 - کاستوم شده",
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

export default function Product() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    rtl: true,
    dotsClass: "button__bar",
    arrows: true,
    nextArrow: <MdKeyboardArrowLeft size={24} />,
    prevArrow: <MdKeyboardArrowRight size={24} />,
  };
  return (
    <main className="flex min-h-screen flex-col gap-6 pt-32 md:pt-28">
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-6 bg-white-color lg:p-4">
        <Slider {...settings}>
          <div className="w-full aspect-square bg-primary-color flex items-center justify-center">
            Slider 1
          </div>
          <div className="w-full aspect-square bg-secundary-color flex items-center justify-center">
            Slider 2
          </div>
          <div className="w-full aspect-square bg-primary-color flex items-center justify-center">
            Slider 1
          </div>
        </Slider>
        <ProductDetail />
        <div className=" w-full lg:justify-end flex flex-row lg:flex-col gap-3 fixed bottom-0 lg:static">
          <ShoppingCard />
        </div>
      </div>
      <div className="flex flex-col px-4 gap-4">
        <HorizontalProductList products={list} />
      </div>
      <div className="flex flex-col p-4 bg-white-color gap-4">
        <Title text="معرفی محصول" />
        <p className="text-md text-text-grey-color leading-7">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="flex flex-col p-4 bg-white-color gap-4">
        <Title text="مشخصات فنی " />
        <table className="table-fixed w-full lg:w-2/3 text-text-grey-color">
          <tbody>
            <tr>
              <td className="p-2"> شناخت </td>
              <td className="p-2">افزارها شناخت بیشتری</td>
            </tr>
            <tr>
              <td className="p-2"> شناخت بیشتری</td>
              <td className="p-2">افزارها شناخت </td>
            </tr>
            <tr>
              <td className="p-2">افزارها شناخت بیشتری</td>
              <td className="p-2">افزارها بیشتری</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Comments />
    </main>
  );
}
