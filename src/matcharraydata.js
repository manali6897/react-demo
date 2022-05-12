import React, { useState } from "react";
const name1 = [
  { id: 1, name: "Mark" },
  { id: 1, name: "David" },
  { id: 2, name: "Ellie" },
  { id: 2, name: "Zuank" },
  { id: 3, name: "Philip" },
  { id: 4, name: "Den" },
];

const name2 = [1, 2, "mark", "david"];
export const Matchdata = () => {
  const handleMatch = () => {
    let newData = name1.filter(({ id }) => name2.includes(id));
    console.log("Match data ", newData);
    //second method
    let newData1 = name1.filter((data) =>
      name2.some((data2) => data.id === data2)
    );
    console.log("2nd method", newData1);
    //third method
    let newData2 = name1.filter((data) => {
      return name2.indexOf(data.id) !== -1;
    });
    console.log("3rd method", newData2);
  };

  return (
    <>
      <h3>Match array data</h3>
      <button onClick={() => handleMatch()}>Click here</button>
    </>
  );
};
