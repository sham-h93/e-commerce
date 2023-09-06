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
      className={`p-4 ${color} ${outline} outline-1 outline-grey-color rounded-2xl`}
    >
      {children}
    </div>
  );
};

export default Card;
