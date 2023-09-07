import Card from "./card";
import Comment from "./comment";
import TabItems from "./tabItems";
import Title from "./title";

const Comments = () => {
  return (
    <div className="flex flex-col p-4 gap-4 bg-white-color">
      <Title text="نظرات کاربران" />
      <ul className="flex flex-row gap-6 pt-3 text-sm text-text-color ">
        <TabItems />
      </ul>
      <Card color={"bg-white-colo"} outline={"outline"}>
        <Comment />
      </Card>
      <Card color={"bg-white-colo"} outline={"outline"}>
        <Comment />
      </Card>
      <Card color={"bg-white-colo"} outline={"outline"}>
        <Comment />
      </Card>
    </div>
  );
};
export default Comments;
