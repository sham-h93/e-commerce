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
    <div className="w-1/5 bg-white-color outline outline-1 outline-grey-color p-4 flex flex-col rounded-2xl">
      <ul className="flex flex-col gap-2">
        <li
          data-key={"profile"}
          onClick={(e) => handleSelectefTab(e)}
          className="flex flex-row  h-10 gap-2 items-center hover:bg-background-grey-color rounded-lg select-none cursor-pointer"
        >
          {
            <div
              className={`${
                selectedTab === "profile" ? `block` : `invisible`
              } bg-primary-color p-[2px] h-full`}
            ></div>
          }
          پروفایل
        </li>
        <li
          data-key={"orders"}
          onClick={(e) => handleSelectefTab(e)}
          className="flex flex-row  h-10 gap-2 items-center hover:bg-background-grey-color rounded-lg  cursor-pointer"
        >
          {
            <div
              className={`${
                selectedTab === "orders" ? `block` : `invisible`
              } bg-primary-color p-[2px] h-full`}
            ></div>
          }
          سفارشات
        </li>
        <li
          data-key={"favorites"}
          onClick={(e) => handleSelectefTab(e)}
          className="flex flex-row  h-10 gap-2 items-center hover:bg-background-grey-color rounded-lg  cursor-pointer"
        >
          {
            <div
              className={`${
                selectedTab === "favorites" ? `block` : `invisible`
              } bg-primary-color p-[2px] h-full`}
            ></div>
          }
          علاقه مندی ها
        </li>
        <li
          onClick={() => {}}
          className="flex flex-row  h-10 gap-2 items-center hover:bg-background-grey-color rounded-lg  cursor-pointer"
        >
          خروج
        </li>
      </ul>
    </div>
  );
};

export default UserSideMenu;
