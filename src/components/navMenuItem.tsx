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
      className="hover:text-primary-color hover:border-b-2 transition-all select-none"
      onMouseEnter={handleShowSubMenu}
      onMouseLeave={handleHideubMenu}
    >
      <div className="p-2 text-text-grey-color font-semibold bg-white-color hover:bg-background-lght-grey-color hover:text-primary-color">
        {text}
      </div>
      <div
        className={`${
          showSubMenu ? `block ` : `hidden`
        } p-4 w-[220px] bg-white-color absolute rounded-b-lg transition-all gap-1`}
      >
        <div className="flex flex-row hover:border-s-2 border-primary-color px-2 py-1 hover:bg-background-lght-grey-color transition-all duration-150">
          <h3 className="text-text-grey-color hover:text-primary-color ">
            تست
          </h3>
        </div>
      </div>
    </li>
  );
};

export default NavMenuItem;
