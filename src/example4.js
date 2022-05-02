import { useState } from "react";
export const Mycal = () => {
  const [count, setCount] = useState(0);
  //const [calculation, setCalculation] = useState(0);

  //useEffect(() => {
  // setCalculation(() => count + 1);
  //}, [count]);
  //useEffect(() => {
  //setCalculation(() => count - 1);
  //}, [count]);
  const handleChange = (type) => {
    console.log("type", type);

    if (type === "add") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Counter App Function Component</h1>
      <h3>Counter: {count}</h3>
      <button onClick={() => handleChange("add")}>+</button>
      <button onClick={() => (count !== 0 ? handleChange("sub") : null)}>
        -
      </button>
    </>
  );
};
