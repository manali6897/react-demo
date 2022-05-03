import React, { Component } from "react";
class MyPropsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("this", this.props);
    return (
      <>
        <h2>Hello</h2>
        <p>firstname:{this.props?.firstname}</p>
        <p>item:{this.props?.amwayState?.item}</p>
      </>
    );
  }
}
export default MyPropsExample;
