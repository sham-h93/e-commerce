import Link from "next/link";
import Logo from "./logo";
import Subscribtion from "./subscribtion";
import { SiYoutube, SiInstagram, SiTwitter, SiAparat } from "react-icons/si";
import Image from "next/image";
import Enamad from "../../public/pictures/enamad.png";
import Kasbokarmajazi from "../../public/pictures/kasbokarmajazi.png";
import Samandehi from "../../public/pictures/samandehi.png";

const Footer = () => {
  return (
    <div className="flex flex-col outline outline-[1px] outline-grey-color">
      <div className=" md:grid md:grid-cols-2 mt-4 bg-white-color gap-3 p-4">
        <div className="w-auto flex flex-col gap-3">
          <Logo />
          <p className="text-text-color">تلفن پشتیبانی ۲۱۲۱۲۱۲۱۲۱ - ۰۲۱</p>
        </div>
        <div className="w-auto flex flex-col gap-3">
          <p className="text-text-color text-sm">همراه ما باشید</p>
          <div className="flex flex-row gap-3">
            <Link href={"/"}>
              <SiYoutube color={"grey"} size={24} />
            </Link>
            <Link href={"/"}>
              <SiInstagram color={"grey"} size={24} />
            </Link>
            <Link href={"/"}>
              <SiTwitter color={"grey"} size={24} />
            </Link>
            <Link href={"/"}>
              <SiAparat color={"grey"} size={24} />
            </Link>
            <p className="text-xs text-text-color">دنبال کنید!</p>
          </div>
          <Subscribtion />
        </div>
        <div className="w-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg">خدمات مشتریان</h4>
            <Link className="text-sm text-text-color" href={"/"}>
              پرسش های متداول
            </Link>
            <Link className="text-sm text-text-color" href={"/"}>
              نحوه بازگشت کالا
            </Link>
            <Link className="text-sm text-text-color" href={"/"}>
              شرایط استفاده
            </Link>
            <Link className="text-sm text-text-color" href={"/"}>
              حریم خصوصی
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-lg">راهنمای خرید</h4>
            <Link className="text-sm text-text-color" href={"/"}>
              ثبت سفارش
            </Link>
            <Link className="text-sm text-text-color" href={"/"}>
              ارسال مسفارش
            </Link>
            <Link className="text-sm text-text-color" href={"/"}>
              پرداخت
            </Link>
          </div>
        </div>
        <div className="w-auto flex flex-row gap-3">
          <Link className="text-sm text-text-color" href={"/"}>
            <Image
              className="bg-background-color p-3 rounded-xl"
              src={Enamad}
              width={84}
              height={84}
              alt={"enamad"}
            />
          </Link>
          <Link className="text-sm text-text-color" href={"/"}>
            <Image
              className="bg-background-color p-3 rounded-xl"
              src={Kasbokarmajazi}
              width={84}
              height={84}
              alt={"kasbokarmajazi"}
            />
          </Link>
          <Link className="text-sm text-text-color" href={"/"}>
            <Image
              className="bg-background-color p-3 rounded-xl"
              src={Samandehi}
              width={84}
              height={84}
              alt={"samandehi"}
            />
          </Link>
        </div>
        <div className="w-auto flex flex-col gap- mt-6  col-span-2">
          <h2 className="text-base">فروشگاه اینترنتی...</h2>
          <p className="text-md text-text-color">
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
        </div>
      </div>
      <div className="bg-background-grey-color flex flex-col gap- mt-6  col-span-2 p-6 items-center justify-center">
        <p className="text-sm text-text-color">
          برای استفاده از مطالب سایت، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست.
          تمام حقوق اين وب‌سايت نیز برای شرکت --- محفوظ است.
        </p>
      </div>
    </div>
  );
};

export default Footer;
