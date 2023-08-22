import Link from "next/link";

const NavItems = () => {
  return (
    <>
      <li className="pb-2 hover:text-primary-color hover:border-b-2 transition-transform">
        <Link href={""}>دسته بندی 1</Link>
      </li>
      <li className="pb-2 hover:text-primary-color hover:border-b-2 transition-transform">
        <Link href={""}>دسته بندی 2</Link>
      </li>
      <li className="pb-2 hover:text-primary-color hover:border-b-2 transition-transform">
        <Link href={""}>دسته بندی 3</Link>
      </li>
      <li className="pb-2 hover:text-primary-color hover:border-b-2 transition-transform">
        <Link href={""}>دسته بندی 4</Link>
      </li>
      <li className="pb-2 hover:text-primary-color hover:border-b-2 transition-transform">
        <Link href={""}>دسته بندی 5</Link>
      </li>
    </>
  );
};
export default NavItems;
