"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TabItems from "./tabItems";
import { setOpen } from "@/redux/features/navBarSlice";

const SliderMenu = () => {
  const isOpen = useSelector((state: RootState) => state.navBar.isOpen);
  const dispatch = useDispatch();

  function handleSideMenuShow() {
    dispatch(setOpen());
  }

  let sliderBackground: String = "";
  let sliderPosition: String = "";

  if (!isOpen) {
    sliderBackground = `invisible`;
    sliderPosition = `translate-x-1/3`;
  }

  return (
    <div
      className={`${sliderBackground} w-full h-full bg-gray-100 z-10 bg-opacity-50 absolute transition-all duration-100`}
      onClick={handleSideMenuShow}
    >
      <div
        className={`${sliderPosition} w-2/3 md:w-1/3 flex transition-transform bg-white h-screen p-3`}
      >
        <ul className="flex flex-col  gap-3 pt-3 text-sm text-gray-500 ">
          <TabItems />
        </ul>
      </div>
    </div>
  );
};

export default SliderMenu;
