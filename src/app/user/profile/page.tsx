import Title from "@/components/title";
import { MdEdit } from "react-icons/md";

export default function Profile() {
  return (
    <main className="p-4 flex flex-col gap-4 bg-white-color w-full outline outline-1 outline-grey-color rounded-2xl">
      <div className="flex flex-row gap-2 items-center">
        <Title text="اطلاعات کاربر" />
        <div className="flex flex-row p-2 items-center text-sm text-primary-color hover:cursor-pointer select-none">
          ویرایش
          <MdEdit size={24} />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 flex-1">
          <a className="text-xs text-text-grey-color">نام و نام خانوادگی:</a>
          <a className="text-lg text-text-color">حسین سعدون اصل</a>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <a className="text-xs text-text-grey-color">شماره همراه:</a>
          <a className="text-lg text-text-color">09168398153</a>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <a className="text-xs text-text-grey-color">ایمیل:</a>
          <a className="text-lg text-text-color"> hoseinsadonasl@gmail.com</a>
        </div>
      </div>
      <br />
      <div className="flex flex-row gap-2 items-center">
        <Title text="آدرس" />
        <div className="flex flex-row p-2 items-center text-sm text-primary-color hover:cursor-pointer select-none">
          ویرایش
          <MdEdit size={24} />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 flex-1">
          <a className="text-xs text-text-grey-color">استان:</a>
          <a className="text-lg text-text-color">خوزستان</a>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <a className="text-xs text-text-grey-color">شهر:</a>
          <a className="text-lg text-text-color">آبادان</a>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <a className="text-xs text-text-grey-color">ایمیل:</a>
          <a className="text-lg text-text-color">
            کوی کارگر، ردیف کیو 27، اتاق 3
          </a>
        </div>
      </div>
    </main>
  );
}
