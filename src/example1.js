import React, { Component } from "react";

class MyExample extends Component {
  render() {
    return (
      <>
        <ul className="menu">
          <li>Banana</li>
          <li>Mango</li>
          <li>Orange</li>
        </ul>
        <MyExample1 />
      </>
    );
  }
}

export default MyExample;

export const MyExample1 = () => {
  return <h1>Hello World</h1>;
};
