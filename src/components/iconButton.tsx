const IconButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="p-1 rounded-lg bg-gray-100 hover:cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;
