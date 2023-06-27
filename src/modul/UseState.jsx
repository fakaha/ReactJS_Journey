import { useState } from "react";

const UseState = () => {
  // CARA BIASA
  //   const state = useState(0);
  //   const count = state[0];
  //   const setCount = state[1];

  // CARA SIMPLE
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default UseState;