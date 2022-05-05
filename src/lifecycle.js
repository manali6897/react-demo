import React, { Component } from "react";

class Mylifecycleexa extends Component {
  constructor() {
    super();
    this.state = { favoritecolor: "" };
  }

  componentDidMount() {
    this.setState({ favoritecolor: "yellow" });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.favoritecolor !== prevState.favoritecolor) {
      console.log(
        "prevState",
        this.state.favoritecolor !== prevState.favoritecolor
      );
      this.handleChange();
    }
  }
  handleChange = () => {
    console.log("Hello Nikunj");
  };
  render() {
    return (
      <>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button onClick={() => this.setState({ favoritecolor: "red" })}>
          Red Color
        </button>{" "}
        <button onClick={() => this.setState({ favoritecolor: "Pink" })}>
          Pink Color
        </button>
      </>
    );
  }
}
export default Mylifecycleexa;
