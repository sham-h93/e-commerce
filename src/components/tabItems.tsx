import Link from "next/link";
import { use, useState } from "react";
import NavMenuItem from "./navMenuItem";

const TabItems = () => {
  const [show, setShow] = useState(false);
  const showSubMenu = () => {
    setShow(true);
  };
  const hideubMenu = () => {
    setShow(false);
  };
  return (
    <>
      <NavMenuItem text="موبایل" />
      <NavMenuItem text="کامپیوت و لپ تاپ" />
      <NavMenuItem text="جانبی" />
      <NavMenuItem text="صوتی و تصویری" />
      <NavMenuItem text="دوربین" />
    </>
  );
};
export default TabItems;
