import Button from "./button";
import { Color } from "./enums/enums";

const CartTotal = () => {
  return (
    <div className="w-full lg:w-80 z-10 bg-gray-100 rounded-t-2xl lg:rounded-2xl flex flex-row lg:flex-col p-4 gap-3">
      <div className="flex flex-row justify-between gap-2">
        <p className="text-sm justify-between"> مجموع خرید</p>
        <h3 className="text-lg font-bold text-gray-400">
          2.730.000<span className="text-xs ps-1">تومان</span>
        </h3>
      </div>
      <div className="flex flex-row justify-between gap-2">
        <p className="text-sm justify-between"> تخفیف</p>
        <h3 className="text-lg justify-between font-bold text-gray-400">
          137.000<span className="text-xs ps-1">تومان</span>
        </h3>
      </div>
      <div className="flex flex-row justify-between gap-2">
        <p className="text-sm justify-between"> هزینه ارسال</p>
        <h3 className="text-lg justify-between font-bold text-gray-400">
          49.000<span className="text-xs ps-1">تومان</span>
        </h3>
      </div>

      <Button
        width="w-full"
        height="h-[48px]"
        color={Color.Primary}
        text="تکمیل خرید  "
        onClick={() => {}}
      />
    </div>
  );
};

export default CartTotal;
