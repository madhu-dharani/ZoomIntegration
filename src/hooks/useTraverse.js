import React, { useState } from "react";

const useTraverse = () => {
  const [next, setNext] = useState(0);

  const nextHandler = () => {
    setNext((prev) => prev + 1);
  };
  return {
    next,
    nextHandler,
  };
};

export default useTraverse;
