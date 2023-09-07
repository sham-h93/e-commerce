import Button from "./button";
import Chip from "./chip";
import { Color } from "./enums/enums";
import { MdCheck } from "react-icons/md";

const ShoppingCard = () => {
  return (
    <div className="w-full lg:w-64 h-full z-10 lg:self-end bg-background-grey-color rounded-t-2xl lg:rounded-2xl flex flex-row lg:flex-col p-4 gap-3">
      <div className="w-1/3 lg:w-full flex flex-col gap-3">
        <div className="flex flex-row items-center">
          <div className="p-1 bg-primary-color rounded-lg">
            <MdCheck color={"white"} size={12} />
          </div>
          <span className="text-xs px-2">موجود در انبار</span>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-1 bg-primary-color rounded-lg">
            <MdCheck color={"white"} size={12} />
          </div>
          <span className="text-xs px-2">تضمین اصالت کالا</span>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-1 bg-primary-color rounded-lg">
            <MdCheck color={"white"} size={12} />
          </div>
          <span className="text-xs px-2">7 روز مهلت تست</span>
        </div>
        <div className="flex flex-row items-center">
          <div className="p-1 bg-primary-color rounded-lg">
            <MdCheck color={"white"} size={12} />
          </div>
          <span className="text-xs px-2">7 روز مهلت تست</span>
        </div>
      </div>
      <div className=" lg:items-start flex flex-col items-end justify-end grow basis-1/2 gap-2">
        <div className="flex flex-row gap-1 items-center text-xs">
          <Chip text={"30% تخفیف"} />
          <span className="text-primary-color">ارسال رایگان</span>
        </div>
        <div className="flex flex-row text-text-grey-color gap-1 items-center text-xs text- line-through">
          100.000 <span className="text-xs">تومان</span>
        </div>
        <h3 className="flex flex-row text-text-color gap-1">
          136.000 <span className="text-sm">تومان</span>
        </h3>
        <Button
          width="w-full"
          color={Color.Primary}
          text="افزودن به سبد خرید"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ShoppingCard;
