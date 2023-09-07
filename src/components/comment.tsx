import { MdPerson } from "react-icons/md";
import Card from "./card";

const Comment = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row md:flex-col p-2 bg-grey-color rounded-full">
          <MdPerson color={"grey"} size={32} />
        </div>
        <span className="text-base text-text-color">نام کاربر</span>
      </div>
      <p className=" text-text-grey-color">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت{" "}
      </p>
    </div>
  );
};

export default Comment;
