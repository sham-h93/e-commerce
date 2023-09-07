"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdStar } from "react-icons/md";
import Button from "@/components/button";
import { Color } from "@/components/enums/enums";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Chip from "@/components/chip";
import Categories from "@/components/categories";
import digital from "./../../../../public/images/digital.png";
import charger from "./../../../../public/images/charger.png";
import headphone from "./../../../../public/images/headphone.png";
import iphone from "./../../../../public/images/iphone.png";
import laptop from "./../../../../public/images/laptop.png";
import nokia from "./../../../../public/images/nokia.png";
import samsung from "./../../../../public/images/samsung.png";
import smartwatch from "./../../../../public/images/smartwatch.png";
import ProductSuggestionList from "@/components/productSuggestionList";
import HorizontalProductList from "@/components/horizontalProductList";
import "./../../../../styles/product.css";
import CrircleButton from "@/components/circleButton";
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
    <main className="flex min-h-screen flex-col gap-6 pt-36 md:pt-[104px]">
      <h4 className="text-sm text-primary-color px-4">تست / تست</h4>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-6">
        <Slider {...settings}>
          <div className="w-full h-[360px] bg-primary-color flex items-center justify-center">
            Slider 1
          </div>
          <div className="w-full h-[360px] bg-secundary-color flex items-center justify-center">
            Slider 2
          </div>
          <div className="w-full h-[360px] bg-primary-color flex items-center justify-center">
            Slider 1
          </div>
          <div className="w-full h-[360px] bg-secundary-color flex items-center justify-center">
            Slider 2
          </div>
          <div className="w-full h-[360px] bg-primary-color flex items-center justify-center">
            Slider 1
          </div>
          <div className="w-full h-[360px] bg-secundary-color flex items-center justify-center">
            Slider 2
          </div>
        </Slider>
        <div className="flex flex-col p-4 gap-3 bg-white-color">
          <h2 className="text-2xl font-bold text-grey-color">
            سامسونگ گلکسی اس 22 الترا
          </h2>
          <h4 className="text-xs text-grey-color flex flex-row">
            امتیاز کاربران:
            <span className="flex flex-row">
              <MdStar size={16} color={"orange"} />
              <MdStar size={16} color={"orange"} />
              <MdStar size={16} color={"orange"} />
              <MdStar size={16} color={"grey"} />
              <MdStar size={16} color={"grey"} />
            </span>
          </h4>
          <div className="flex flex-row items-center gap-3 mt-2">
            <span className="text-sm text-text-color ">رنگ: </span>
            <div className="p-4 bg-primary-color outline outline-2 outline-grey-color rounded-full"></div>
            <div className="p-4 bg-white-color outline outline-2 outline-secundary-color rounded-full"></div>
            <div className="p-4 bg-white-color outline outline-2 outline-warning-color rounded-full"></div>
          </div>
        </div>
        <div className="w-full bg-white-color rounded-md flex flex-row p-4 gap-3 fixed bottom-0 lg:static">
          <Button
            width="w-full"
            height="h-full"
            color={Color.Primary}
            text="افزودن به سبد خرید"
            onClick={() => {}}
          />
          <div className="h-full flex flex-col items-end justify-center grow basis-1/2">
            <h3 className="flex flex-row">
              136.000 <span>تومان</span>
            </h3>
            <div className="flex flex-row gap-1 items-center text-xs text-grey-color line-through">
              100.000 <span>تومان</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 bg-white-color gap-4">
        <HorizontalProductList products={list} />
      </div>
      <div className="flex flex-col p-4 bg-white-color gap-4">
        <h3 className="text-md text-text-color">معرفی محصول</h3>
        <p className="text-md text-grey-color leading-7">
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
        <h3 className="text-md text-text-color">مشخصات</h3>

        <table className="table-fixed w-full text-grey-color">
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
      <div className="flex flex-col p-4 bg-white-color gap-4">
        <h3 className="text-md text-text-color">نظرات کاربران</h3>
      </div>
    </main>
  );
}
