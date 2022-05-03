import React, { Component } from "react";
class Myclassform extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ inputValue: { ...this.state.inputValue, [name]: value } });
  };

  handleSubmit = () => {
    let obj = {
      firstname: this.state.inputValue.username,
      surname: this.state.inputValue.password,
    };

    console.log("handleSubmit", obj);
  };
  render() {
    return (
      <>
        <lable>Enter firstname: </lable>
        <input
          type="text"
          name="username"
          value={this.inputValue?.username}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        <lable>Enter password: </lable>
        <input
          type="text"
          name="password"
          value={this.inputValue?.password}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        <button type="submit" onClick={() => this.handleSubmit()}>
          Save
        </button>
      </>
    );
  }
}
export default Myclassform;
