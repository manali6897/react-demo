import "./App.css";
import { useState } from "react";

export const MyExample1 = () => {
  const [color, setColor] = useState("red");

  const handlechange = (value) => {
    setColor(value);
  };

  return (
    <>
      <h1>My favorite color is {color}!</h1>{" "}
      <button onClick={() => handlechange("red")}>red</button>
      <button onClick={() => handlechange("yellow")}>yellow</button>
      <button onClick={() => handlechange("pink")}>pink</button>
    </>
  );
};
