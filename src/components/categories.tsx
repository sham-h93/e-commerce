import Link from "next/link";
import { CategoryItem } from "./types/categoryItem";
import CategoryItemComponent from "./categoryItem";

const Categories = ({ categories }: { categories: CategoryItem[] }) => {
  function handleCategories() {
    return categories.map((category) => {
      return (
        <li key={category.id}>
          <Link href={"/"}>
            <CategoryItemComponent
              image={category.image}
              text={category.text}
            />
          </Link>
        </li>
      );
    });
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3 className="text-2xl text-text-color m-3">دسته بندی ها</h3>
      <ul className="flex flex-row flex-wrap gap-14 items-center justify-center">
        {handleCategories()}
      </ul>
    </div>
  );
};

export default Categories;
