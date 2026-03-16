import { useState } from "react";
function useIncrement(initalvalue) {
  const [count, setCount] = useState(initalvalue);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return {
    count,
    increment,
    decrement,
    reset,
  };
}
export default useIncrement;
