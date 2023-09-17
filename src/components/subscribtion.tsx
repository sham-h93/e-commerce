"use client";
import Button from "./button";
import { Color } from "./enums/enums";

const Subscribtion = () => {
  return (
    <div className="gap-2 flex flex-row items-center">
      <form
        className="w-full bg-background-grey-color p-2 rounded-xl "
        action=""
      >
        <input
          type="text"
          className="w-full bg-transparent-color focus:outline-none"
          placeholder="ایمیل خود را وارد کنید"
        />
      </form>
      <Button
        color={Color.Dark}
        text={"ثبت"}
        onClick={() => {
          return alert("Hi");
        }}
      ></Button>
    </div>
  );
};

export default Subscribtion;
