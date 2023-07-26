import React from "react";
import classes from "./card.module.css";
export const Card = ({ className, children }) => {
  const combinedClassName = `${classes.card} ${className}`;

  return <div className={combinedClassName}>{children}</div>;
};
