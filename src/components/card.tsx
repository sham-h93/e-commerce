import React from "react";

const Card = ({
  color,
  outline,
  children,
}: {
  color: String;
  outline: String;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex flex-col gap-2 p-4 ${color} ${outline} outline-1 outline-gray-300 rounded-2xl`}
    >
      {children}
    </div>
  );
};

export default Card;
