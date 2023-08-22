import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-3 bg-white-color rounded-md">{children}</div>;
};

export default Card;
