import Link from "next/link";
import { MdCheck } from "react-icons/md";
import "./../../styles/cartDeliverySection.css";

const CartDeliverySection = () => {
  return (
    <div className="w-full z-10 rounded-t-2xl lg:rounded-2xl outline outline-1 outline-grey-color flex flex-row lg:flex-col p-4 gap-3">
      <div className="flex flex-row justify-between gap-2">
        <p className="text-sm"> آدرس</p>
        <Link href={"/"} className="text-xs font-bold  text-primary-color">
          تغییر آدرس
        </Link>
      </div>
      <p className="text-sm text-text-grey-color">
        خوزستان،آبادان، بلوار ولایت اتا 201
      </p>
      <hr />
      <p className="text-sm"> انتخاب روش ارسال</p>
      <input
        type="radio"
        id="post"
        name="delivery-method"
        value=""
        className="hidden peer"
        required
        checked
      />
      <label
        htmlFor="post"
        className="inline-flex items-center justify-between w-full p-2 text-text-grey-color bg-white border-2 border-grey-color rounded-lg cursor-pointer checked:bg-primary-color checked:text-primary-color hover:bg-background-lght-grey-color"
      >
        <span className="w-full text-lg"> پست</span>
        <div className="hidden">
          <MdCheck size={24} />
        </div>
      </label>
      <input
        type="radio"
        id="special-post"
        name="delivery-method"
        value=""
        className="hidden peer"
        required
        checked
      />
      <label
        htmlFor="special-post"
        className="inline-flex items-center justify-between w-full p-2 text-text-grey-color bg-white border-2 border-grey-color rounded-lg cursor-pointer checked:bg-primary-color checked:text-primary-color hover:bg-background-lght-grey-color"
      >
        <span className="w-full text-lg"> پست سفارشی</span>
        <div className="hidden">
          <MdCheck size={24} />
        </div>
      </label>
      <input
        type="radio"
        id="pishtaz"
        name="delivery-method"
        value=""
        className="hidden peer"
        required
        checked
      />
      <label
        htmlFor="pishtaz"
        className="inline-flex items-center justify-between w-full p-2 text-text-grey-color bg-white border-2 border-grey-color rounded-lg cursor-pointer checked:bg-primary-color checked:text-primary-color hover:bg-background-lght-grey-color"
      >
        <span className="w-full text-lg"> پست پیشتاز</span>
        <div className="hidden">
          <MdCheck size={24} />
        </div>
      </label>
      <input
        type="radio"
        id="tipax"
        name="delivery-method"
        value=""
        className="hidden peer"
        required
        checked
      />
      <label
        htmlFor="tipax"
        className="inline-flex items-center justify-between w-full p-2 text-text-grey-color bg-white border-2 border-grey-color rounded-lg cursor-pointer checked:bg-primary-color checked:text-primary-color hover:bg-background-lght-grey-color"
      >
        <span className="w-full text-lg"> تیپاکس</span>
        <div className="hidden">
          <MdCheck size={24} />
        </div>
      </label>
    </div>
  );
};

export default CartDeliverySection;
