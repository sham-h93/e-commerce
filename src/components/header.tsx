"use client";
import { MdLogin, MdShoppingCart, MdMenu } from "react-icons/md";
import Logo from "./logo";
import Nav from "./nav";
import SearchBar from "./searchBar";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setOpen } from "@/redux/features/navBarSlice";

const Header = () => {
  const dispatch = useDispatch();
  function handleSideMenuShow() {
    dispatch(setOpen());
  }

  return (
    <div className="w-full grid grid-cols-3 px-2 pt-3 bg-white-color drop-shadow-md fixed z-50">
      <div className="col-span-3 lg:col-span-2 flex flex-row h-12 items-center gap-3">
        <Logo />
        <SearchBar />
      </div>
      <div
        className="flex lg:hidden xl:hidden col-span-2 p-3"
        onClick={handleSideMenuShow}
      >
        <MdMenu size={24} color={"grey"} />
      </div>
      <div className=" flex flex-row gap-2 justify-center col-span-1 items-center justify-self-end">
        <div className="p-2 outline outline-1 outline-grey-color rounded-md">
          <MdShoppingCart size={24} color={"grey"} />
        </div>
        <div className="flex flex-row p-2 outline outline-1 outline-grey-color rounded-md gap-1">
          <MdLogin className="" size={24} color={"grey"} />
          <Link className=" text-text-color" href={"/"}>
            ورود/ثبت نام
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex col-span-3 lg:col-span-2 items-center ">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
