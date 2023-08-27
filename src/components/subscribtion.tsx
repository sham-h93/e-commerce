"use client";
import Button from "./button";
import { Color } from "./enums/enums";

const Subscribtion = () => {
  return (
    <div className="w-full bg-background-grey-color p-3 gap-2 rounded-md h-12 flex flex-row items-center">
      <form className="w-full" action="">
        <input
          type="text"
          className="w-full bg-transparent-color focus:outline-none"
          placeholder="ایمیل خود را وارد کنید"
        />
      </form>
      <Button
        color={Color.Primary}
        text={"ثبت"}
        onClick={() => {
          return alert("Hi");
        }}
      ></Button>
    </div>
  );
};

export default Subscribtion;
