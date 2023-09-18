const Title = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row h-8 items-center gap-4">
      <div className="bg-primary-color p-[2px] h-full"></div>
      <h2 className="text-xl font-bold text-gray-500">{text}</h2>
    </div>
  );
};

export default Title;
