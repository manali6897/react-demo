import React, { useState } from "react";
let borndata = [
  { id: 1, name: "Mehmet", surname: "xaxa", birthYear: 1987, birthCity: 63 },
  { id: 2, name: "SFA", surname: "Baran", birthYear: 2001, birthCity: 34 },
  { id: 3, name: "jay", surname: "jf", birthYear: 2002, birthCity: 63 },
  { id: 4, name: "Zerya", surname: "kau", birthYear: 2003, birthCity: 34 },
  { id: 5, name: "raj", surname: "ijv", birthYear: 2004, birthCity: 63 },
  { id: 6, name: "darshan", surname: "ds", birthYear: 2005, birthCity: 34 },
  { id: 7, name: "lname", surname: "Basvran", birthYear: 2006, birthCity: 63 },
  { id: 8, name: "Betül", surname: "czxa", birthYear: 2017, birthCity: 34 },
  { id: 9, name: "jhn", surname: "cvvs", birthYear: 2019, birthCity: 63 },
  { id: 10, name: "tül", surname: "Baran", birthYear: 2020, birthCity: 34 },
  { id: 11, name: "Mehmet", surname: "xaxa", birthYear: 1987, birthCity: 63 },
  { id: 12, name: "SFA", surname: "Baran", birthYear: 2001, birthCity: 34 },
  { id: 13, name: "jay", surname: "jf", birthYear: 2002, birthCity: 63 },
  { id: 14, name: "Zerya", surname: "kau", birthYear: 2003, birthCity: 34 },
  { id: 15, name: "raj", surname: "ijv", birthYear: 2004, birthCity: 63 },
  { id: 16, name: "darshan", surname: "ds", birthYear: 2005, birthCity: 34 },
  { id: 17, name: "lname", surname: "Basvran", birthYear: 2006, birthCity: 63 },
  { id: 18, name: "Betül", surname: "czxa", birthYear: 2017, birthCity: 34 },
  { id: 19, name: "jhn", surname: "cvvs", birthYear: 2019, birthCity: 63 },
  { id: 20, name: "tül", surname: "Baran", birthYear: 2020, birthCity: 34 },
  { id: 21, name: "Mehmet", surname: "xaxa", birthYear: 1987, birthCity: 63 },
  { id: 22, name: "SFA", surname: "Baran", birthYear: 2001, birthCity: 34 },
  { id: 23, name: "jay", surname: "jf", birthYear: 2002, birthCity: 63 },
  { id: 24, name: "Zerya", surname: "kau", birthYear: 2003, birthCity: 34 },
  { id: 25, name: "raj", surname: "ijv", birthYear: 2004, birthCity: 63 },
  { id: 26, name: "darshan", surname: "ds", birthYear: 2005, birthCity: 34 },
  { id: 27, name: "lname", surname: "Basvran", birthYear: 2006, birthCity: 63 },
  { id: 28, name: "Betül", surname: "czxa", birthYear: 2017, birthCity: 34 },
  { id: 29, name: "jhn", surname: "cvvs", birthYear: 2019, birthCity: 63 },
  { id: 30, name: "tül", surname: "Baran", birthYear: 2020, birthCity: 34 },
  { id: 31, name: "Mehmet", surname: "xaxa", birthYear: 1987, birthCity: 63 },
  { id: 32, name: "SFA", surname: "Baran", birthYear: 2001, birthCity: 34 },
  { id: 33, name: "jay", surname: "jf", birthYear: 2002, birthCity: 63 },
  { id: 34, name: "Zerya", surname: "kau", birthYear: 2003, birthCity: 34 },
  { id: 35, name: "raj", surname: "ijv", birthYear: 2004, birthCity: 63 },
  { id: 36, name: "darshan", surname: "ds", birthYear: 2005, birthCity: 34 },
  { id: 37, name: "lname", surname: "Basvran", birthYear: 2006, birthCity: 63 },
  { id: 38, name: "Betül", surname: "czxa", birthYear: 2017, birthCity: 34 },
  { id: 39, name: "jhn", surname: "cvvs", birthYear: 2019, birthCity: 63 },
  { id: 40, name: "tül", surname: "Baran", birthYear: 2020, birthCity: 34 },
];
let bakeryArray = [
  {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0002",
    type: "donut",
    name: "Raised",
    ppu: 0.55,
    batters: {
      batter: [{ id: "1001", type: "Regular" }],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0003",
    type: "donut",
    name: "Old Fashioned",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
];
export const BirthSheet = () => {
  const [birthdata, setBirthdata] = useState(borndata);

  const handleCheck = () => {
    let newData = birthdata.filter((x) => x.birthCity === 63);
    console.log("birthCity 63 ", newData);
    let newData1 = birthdata.filter((x) => x.birthYear > 2017);
    console.log("birthYear 2017", newData1);
    const transfer = borndata.map(
      ({
        id: id,
        name: name,
        surname: surname,
        birthCity: birthCity,
        birthYear: BirthOfYear,
      }) => ({
        id,
        name,
        surname,
        birthCity,
        BirthOfYear,
      })
    );
    console.log("change obj key", transfer);
    const transfer1 = borndata.map((obj) => {
      return {
        birthofyear: obj?.birthYear,
        id: obj?.id,
        name: obj?.name,
        surname: obj?.surname,
        birthCity: obj?.birthCity,
      };
    });
    console.log("change obj key 2nd method", transfer1);

    const handleKeyTransfer = bakeryArray?.map((items) => {
      return {
        ...items,
        batters: {
          batter: items?.batters?.batter?.map((subitems) => {
            return { TYPE: subitems?.type, id: subitems?.id };
          }),
        },
      };
    });
    console.log("your message", handleKeyTransfer);
  };
  return (
    <>
      <h2>Table use with list and map function component</h2>
      <table border="1" width="100%">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>SURNAME</th>
          <th>BIRTHYEAR</th>
          <th>BIRTHCITY</th>
        </tr>
        <tbody>
          {birthdata?.map((obj, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{obj?.id}</td>
                  <td>{obj?.name}</td>
                  <td>{obj?.surname}</td>
                  <td>{obj?.birthYear}</td>
                  <td>{obj?.birthCity}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => handleCheck()}> click me</button>
    </>
  );
};
