import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((prev) => prev + 1);
  };
  const decrease = () => {
    setCounter((prev) => prev - 1);
  };
  return [counter, increase, decrease] as const;
};
