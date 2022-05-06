import React, { useState, useEffect } from "react";

export const MyfunLifecycleexa = () => {
  const [favcolor, setFavcolor] = useState("red");
  useEffect(() => {
    console.log("didmount");
  }, []);

  useEffect(() => {
    console.log("didUpdate");
  }, [favcolor]);

  return (
    <>
      <h1>Function lifecycle example</h1>
      <h2>Fav color is {favcolor}</h2>
      <button onClick={() => setFavcolor("yellow")}>click here</button>
      <br />
    </>
  );
};
