import React, { Component, Fragment } from "react";
class Friutes extends Component {
  constructor() {
    super();
    this.state = { color: "red", color1: "green" };
    this.state = { count: 0 };
  }
  changeColor = () => {
    this.setState({ color: "green" });
  };

  changeCount = (type) => {
    console.log("type", type);

    if (type === "add") {
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <Fragment>
        <ul>
          <li onClick={this.changeColor}>Apple is {this.state.color}</li>
          <li onClick={this.changeColor}>Cheery is {this.state.color}</li>
          <li onClick={this.changeColor}>
            Watermelon is {this.state.color} and {this.state.color1}
          </li>
        </ul>
        <h1>Conter App class component</h1>
        <h3>Counter:{this.state.count}</h3>

        <button onClick={() => this.changeCount("add")}>+</button>
        <button
          onClick={() =>
            this.state.count !== 0 ? this.changeCount("sub") : null
          }
        >
          -
        </button>
      </Fragment>
    );
  }
}
export default Friutes;
