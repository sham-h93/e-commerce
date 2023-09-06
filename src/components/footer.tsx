import Link from "next/link";
import Logo from "./logo";
import Subscribtion from "./subscribtion";
import { SiYoutube, SiInstagram, SiTwitter, SiAparat } from "react-icons/si";
import Image from "next/image";
import Enamad from "../../public/images/enamad.png";
import Kasbokarmajazi from "../../public/images/kasbokarmajazi.png";
import Samandehi from "../../public/images/samandehi.png";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 mt-4 bg-primary-color gap-4 p-4">
        <div className="w-auto flex flex-col gap-4 lg:col-span-2">
          <Logo />
          <p className="text-white-color">تلفن پشتیبانی ۲۱۲۱۲۱۲۱۲۱ - ۰۲۱</p>
        </div>
        <div className=" flex flex-col gap-4 lg:items-start">
          <p className="text-white-color text-sm">همراه ما باشید</p>
          <div className="flex flex-row gap-3">
            <Link href={"/"}>
              <SiYoutube color={"white"} size={24} />
            </Link>
            <Link href={"/"}>
              <SiInstagram color={"white"} size={24} />
            </Link>
            <Link href={"/"}>
              <SiTwitter color={"white"} size={24} />
            </Link>
            <Link href={"/"}>
              <SiAparat color={"white"} size={24} />
            </Link>
            <p className="text-xs text-white-color">دنبال کنید!</p>
          </div>
          <Subscribtion />
        </div>
        <div className="w-auto grid md:grid-cols-2 lg:grid-cols-3 lg:col-span-2 gap-4 py-4 md:py-0">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg text-white-color">خدمات مشتریان</h4>
            <Link className="text-sm text-white-color" href={"/"}>
              پرسش های متداول
            </Link>
            <Link className="text-sm text-white-color" href={"/"}>
              نحوه بازگشت کالا
            </Link>
            <Link className="text-sm text-white-color" href={"/"}>
              شرایط استفاده
            </Link>
            <Link className="text-sm text-white-color" href={"/"}>
              حریم خصوصی
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg text-white-color">راهنمای خرید</h4>
            <Link className="text-sm text-white-color" href={"/"}>
              ثبت سفارش
            </Link>
            <Link className="text-sm text-white-color" href={"/"}>
              ارسال مسفارش
            </Link>
            <Link className="text-sm text-white-color" href={"/"}>
              پرداخت
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg text-white-color">راهنمای خرید</h4>
            <Link className="text-sm text-white-color" href={"/"}>
              ثبت سفارش
            </Link>
            <Link className="text-sm text-white-color" href={"/"}>
              ارسال مسفارش
            </Link>
            <Link className="text-sm text-white-color" href={"/"}>
              پرداخت
            </Link>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-row gap-4">
          <Link className=" text-sm text-white-color" href={"/"}>
            <Image
              className="h-full md:h-24 bg-background-color p-3 rounded-xl"
              src={Enamad}
              width={84}
              height={84}
              alt={"enamad"}
            />
          </Link>
          <Link className="text-sm text-white-color" href={"/"}>
            <Image
              className="h-full md:h-24 bg-background-color p-3 rounded-xl"
              src={Kasbokarmajazi}
              width={84}
              height={84}
              alt={"kasbokarmajazi"}
            />
          </Link>
          <Link className="text-sm text-white-color" href={"/"}>
            <Image
              className="h-full md:h-24 bg-background-color p-3 rounded-xl"
              src={Samandehi}
              width={84}
              height={84}
              alt={"samandehi"}
            />
          </Link>
        </div>
        {/* <div className="w-auto flex flex-col gap- mt-6  col-span-2">
          <h2 className="text-xl text-white-color">فروشگاه اینترنتی...</h2>
          <p className="text-md text-white-color">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div> */}
      </div>
      <div className="bg-dark-background-color flex flex-col col-span-2 p-6 items-center justify-center">
        <p className="text-sm text-white-color">
          برای استفاده از مطالب سایت، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست.
          تمام حقوق اين وب‌سايت نیز برای شرکت --- محفوظ است.
        </p>
      </div>
    </div>
  );
};

export default Footer;
