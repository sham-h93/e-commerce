"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserSideMenu = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>("profile");
  const router = useRouter();

  const handleSelectefTab = (
    route: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const selectedRoute = route.currentTarget.getAttribute("data-key");
    router.push(`/user/${selectedRoute}`);
    setSelectedTab(selectedRoute);
  };

  return (
    <div className=" md:w-1/3 lg:w-1/5 flex flex-col outline outline-1 outline-gray-300">
      <ul className="flex flex-row w-full md:w-auto md:flex-col gap-2">
        <li
          data-key={"profile"}
          onClick={(e) => handleSelectefTab(e)}
          className="h-10 flex flex-1 md:flex-auto flex-col md:flex-row gap-2 items-center hover:bg-gray-50 rounded-lg select-none cursor-pointer"
        >
          {
            <div
              className={`${
                selectedTab === "profile" ? `block` : `invisible`
              } bg-primary-color p-[1px] md:p-[2px] h-full w-full md:w-auto`}
            ></div>
          }
          پروفایل
        </li>
        <li
          data-key={"orders"}
          onClick={(e) => handleSelectefTab(e)}
          className="h-10 flex flex-1 md:flex-auto flex-col md:flex-row  gap-2 items-center hover:bg-gray-50 rounded-lg  cursor-pointer"
        >
          {
            <div
              className={`${
                selectedTab === "orders" ? `block` : `invisible`
              } bg-primary-color p-[1px] md:p-[2px] h-full w-full md:w-auto`}
            ></div>
          }
          سفارشات
        </li>
        <li
          data-key={"favorites"}
          onClick={(e) => handleSelectefTab(e)}
          className="h-10 flex flex-1 md:flex-auto flex-col md:flex-row  gap-2 items-center hover:bg-gray-50 rounded-lg  cursor-pointer"
        >
          {
            <div
              className={`${
                selectedTab === "favorites" ? `block` : `invisible`
              } bg-primary-color p-[1px] md:p-[2px] h-full w-full md:w-auto`}
            ></div>
          }
          علاقه مندی ها
        </li>
        <li
          onClick={() => {}}
          className="h-10 flex flex-1 md:flex-auto flex-col justify-end md:justify-normal text-center md:flex-row gap-2 items-center hover:bg-gray-50 rounded-lg  cursor-pointer"
        >
          خروج
        </li>
      </ul>
    </div>
  );
};

export default UserSideMenu;
