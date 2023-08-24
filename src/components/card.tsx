import React from "react";

const Card = ({
  color,
  children,
}: {
  color: String;
  children: React.ReactNode;
}) => {
  return <div className={`p-3 ${color} rounded-2xl`}>{children}</div>;
};

export default Card;
