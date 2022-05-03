import React, { component } from "react";

function Car(props) {
  return (
    <>
      <h2>I have a{props.brand}</h2>
      <h2>{props.carName}</h2>
    </>
  );
}

const MyElement = (props) => {
  console.log("props", props);

  return (
    <>
      <Car brand="Car" carName="xuv" />
      <h1>
        My Name is {props.firstname} {props.lastname} {props.surname}
      </h1>
      <h1>item :{props?.amwayState?.item}</h1>
      <h1>Price:{props?.amwayState?.price}</h1>
      <h1>item no:{props?.amwayState?.itemno}</h1>
      <p>Name:{props?.result?.name}</p>
      <p>TotalMarks:{props?.result?.totalmarks}</p>
      <p>Obtainmarks:{props?.result?.obtainmarks}</p>
      <p>Grade:{props?.result?.grade}</p>
    </>
  );
};
export default MyElement;
