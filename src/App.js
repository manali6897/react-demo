import { useState } from "react";

import "./App.css";
import MyExample from "./example1";
import Friutes from "./example2";
import { MyExample1 } from "./example3";
import { Mycal } from "./example4";
import MyElement from "./props";
import MyPropsExample from "./classProps";
import { Myform } from "./form";
import Myclassform from "./classForm";
import Mysheet from "./map";
import { BirthSheet } from "./functionMap";
import { NestedArray } from "./nestedarraymap";
import Mylifecycleexa from "./lifecycle";
function App() {
  // let obj = {
  //   item: "Personasoap",
  //   price: 100,
  //   itemno: "2664041d",
  // };
  const [AmwayState, setAmwayState] = useState({
    item: "Personasoap",
    price: 100,
    itemno: "2664041d",
  });
  const [resultState, setResultState] = useState({
    name: "xyz",
    totalmarks: 100,
    obtainmarks: 50,
    grade: "a",
  });
  const [birthDetail, setbirthdetail] = useState([
    { id: 1, name: "Mehmet", surname: "xaxa", birthYear: 1987, birthCity: 63 },
    { id: 2, name: "SFA", surname: "Baran", birthYear: 2001, birthCity: 34 },
    { id: 3, name: "jay", surname: "jf", birthYear: 2002, birthCity: 63 },
    { id: 4, name: "Zerya", surname: "kau", birthYear: 2003, birthCity: 34 },
    { id: 5, name: "raj", surname: "ijv", birthYear: 2004, birthCity: 63 },
    { id: 6, name: "darshan", surname: "ds", birthYear: 2005, birthCity: 34 },
    {
      id: 7,
      name: "lname",
      surname: "Basvran",
      birthYear: 2006,
      birthCity: 63,
    },
    { id: 8, name: "Betül", surname: "czxa", birthYear: 2017, birthCity: 34 },
    { id: 9, name: "jhn", surname: "cvvs", birthYear: 2019, birthCity: 63 },
    { id: 10, name: "tül", surname: "Baran", birthYear: 2020, birthCity: 34 },
    { id: 11, name: "Mehmet", surname: "xaxa", birthYear: 1987, birthCity: 63 },
    { id: 12, name: "SFA", surname: "Baran", birthYear: 2001, birthCity: 34 },
    { id: 13, name: "jay", surname: "jf", birthYear: 2002, birthCity: 63 },
    { id: 14, name: "Zerya", surname: "kau", birthYear: 2003, birthCity: 34 },
    { id: 15, name: "raj", surname: "ijv", birthYear: 2004, birthCity: 63 },
    { id: 16, name: "darshan", surname: "ds", birthYear: 2005, birthCity: 34 },
    {
      id: 17,
      name: "lname",
      surname: "Basvran",
      birthYear: 2006,
      birthCity: 63,
    },
    { id: 18, name: "Betül", surname: "czxa", birthYear: 2017, birthCity: 34 },
    { id: 19, name: "jhn", surname: "cvvs", birthYear: 2019, birthCity: 63 },
    { id: 20, name: "tül", surname: "Baran", birthYear: 2020, birthCity: 34 },
    { id: 21, name: "Mehmet", surname: "xaxa", birthYear: 1987, birthCity: 63 },
    { id: 22, name: "SFA", surname: "Baran", birthYear: 2001, birthCity: 34 },
    { id: 23, name: "jay", surname: "jf", birthYear: 2002, birthCity: 63 },
    { id: 24, name: "Zerya", surname: "kau", birthYear: 2003, birthCity: 34 },
    { id: 25, name: "raj", surname: "ijv", birthYear: 2004, birthCity: 63 },
    { id: 26, name: "darshan", surname: "ds", birthYear: 2005, birthCity: 34 },
    {
      id: 27,
      name: "lname",
      surname: "Basvran",
      birthYear: 2006,
      birthCity: 63,
    },
    { id: 28, name: "Betül", surname: "czxa", birthYear: 2017, birthCity: 34 },
    { id: 29, name: "jhn", surname: "cvvs", birthYear: 2019, birthCity: 63 },
    { id: 30, name: "tül", surname: "Baran", birthYear: 2020, birthCity: 34 },
    { id: 31, name: "Mehmet", surname: "xaxa", birthYear: 1987, birthCity: 63 },
    { id: 32, name: "SFA", surname: "Baran", birthYear: 2001, birthCity: 34 },
    { id: 33, name: "jay", surname: "jf", birthYear: 2002, birthCity: 63 },
    { id: 34, name: "Zerya", surname: "kau", birthYear: 2003, birthCity: 34 },
    { id: 35, name: "raj", surname: "ijv", birthYear: 2004, birthCity: 63 },
    { id: 36, name: "darshan", surname: "ds", birthYear: 2005, birthCity: 34 },
    {
      id: 37,
      name: "lname",
      surname: "Basvran",
      birthYear: 2006,
      birthCity: 63,
    },
    { id: 38, name: "Betül", surname: "czxa", birthYear: 2017, birthCity: 34 },
    { id: 39, name: "jhn", surname: "cvvs", birthYear: 2019, birthCity: 63 },
    { id: 40, name: "tül", surname: "Baran", birthYear: 2020, birthCity: 34 },
  ]);
  return (
    <>
      <div>
        // <MyExample />
        // <Friutes />
        <MyExample1 />
        <Mycal />
        <MyElement
          firstname="xyz"
          lastname="pqr"
          surname="abc"
          amwayState={AmwayState}
          result={resultState}
        />
        <MyPropsExample
          firstname="xyz"
          lastname="pqr"
          surname="abc"
          amwayState={AmwayState}
          result={resultState}
        />
        <Myform />
        <Myclassform />
        <Mysheet bdetail={birthDetail} />
        <BirthSheet />
        <NestedArray />
        <Mylifecycleexa />
      </div>
    </>
  );
}
export default App;
