import { useState } from "react";

const NavMenuItem = ({ text }: { text: string }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleShowSubMenu = () => {
    setShowSubMenu(true);
  };
  const handleHideubMenu = () => {
    setShowSubMenu(false);
  };
  return (
    <li
      className="hover:text-primary-color border-b-2 border-white hover:border-primary-color transition-all select-none hover:cursor-pointer"
      onMouseEnter={handleShowSubMenu}
      onMouseLeave={handleHideubMenu}
    >
      <div className="p-2 text-gray-500 bg-white hover:bg-gray-100 hover:text-primary-color">
        {text}
      </div>
      <div
        className={`${
          showSubMenu ? `block ` : `hidden`
        } p-4 w-[220px] bg-white absolute rounded-b-lg transition-all gap-1`}
      >
        <div className="flex flex-row border-s-2 border-white hover:border-primary-color px-2 py-1 hover:bg-gray-100 transition-all duration-150">
          <h3 className="text-gray-500 hover:text-primary-color ">تست</h3>
        </div>
      </div>
    </li>
  );
};

export default NavMenuItem;
