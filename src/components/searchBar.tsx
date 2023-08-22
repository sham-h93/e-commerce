import { MdSearch } from "react-icons/md";
const SearchBar = () => {
  return (
    <div className="w-full bg-background-grey-color p-3 gap-2 rounded-md h-12 flex flex-row">
      <MdSearch size={24} color={"grey"} />
      <form className="w-full" action="">
        <input
          type="text"
          className="w-full bg-transparent-color focus:outline-none"
          placeholder="جستجوی کالا"
        />
      </form>
    </div>
  );
};

export default SearchBar;
