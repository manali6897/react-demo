import "./App.css";
import MyExample from "./example1";
import Friutes from "./example2";
import { MyExample1 } from "./example3";
import { Mycal } from "./example4";
import MyElement from "./props";
import { useState } from "react";
import MyPropsExample from "./classProps";
import { Myform } from "./form";
import Myclassform from "./classForm";
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

  return (
    <>
      <MyExample />
      <Friutes />
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
    </>
  );
}
export default App;
