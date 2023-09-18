import Link from "next/link";
import { CategoryItem } from "./types/categoryItem";
import CategoryItemComponent from "./categoryItem";
import Title from "./title";
import Card from "./card";

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
    <Card color={"bg-white"} outline={"outline"}>
      <Title text="دسته بندی ها" />
      <ul className="w-full flex flex-row flex-wrap gap-14 items-center justify-center">
        {handleCategories()}
      </ul>
    </Card>
  );
};

export default Categories;
