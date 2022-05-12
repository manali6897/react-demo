import React, { Component } from "react";
class Mytodo extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      TableData: [],
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ inputValue: { ...this.state.inputValue, [name]: value } });
  };

  handleSubmit = () => {
    const { inputValue, TableData } = this.state;
    let items = {
      firstname: inputValue.firstname !== undefined ? inputValue.firstname : "",
      lastname: inputValue.lastname !== undefined ? inputValue.lastname : "",
      email: inputValue.email !== undefined ? inputValue.email : "",
      city: inputValue.city !== undefined ? inputValue.city : "",
      gender: inputValue.gender !== undefined ? inputValue.gender : "",
    };

    this.setState({ TableData: [...TableData, items] });
    this.setState(inputValue);
  };

  render() {
    const { inputValue, TableData } = this.state;
    console.log("handleSubmit", TableData);
    return (
      <>
        <span>Enter firstname: </span>
        <input
          type="text"
          name="firstname"
          value={inputValue?.firstname}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        <lable>Enter Lastname: </lable>
        <input
          type="text"
          name="lastname"
          value={inputValue?.lastname}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        <lable>Enter Email: </lable>
        <input
          type="text"
          name="email"
          value={inputValue?.email}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        <span>Enter City</span>

        <select
          name="city"
          value={inputValue?.city}
          onChange={(event) => this.handleChange(event)}
        >
          <option value="" selected={inputValue?.city == ""}>
            Select
          </option>
          <option value="Nadiad" selected={inputValue?.city == "Nadiad"}>
            Nadiad
          </option>
          <option value="Baroda" selected={inputValue?.city == "Baroda"}>
            Baroda
          </option>
          <option value="Ahemdabad" selected={inputValue?.city == "Ahemdabad"}>
            Ahemdabad
          </option>
          <option value="Rajkot" selected={inputValue?.city == "Rajkot"}>
            Rajkot
          </option>
        </select>
        <br />
        <span>Enter Gender</span>

        <input
          type="radio"
          id="male"
          name="gender"
          checked={inputValue?.gender === "male"}
          value={"male"}
          onChange={(event) => this.handleChange(event)}
        />
        <lable>Male</lable>

        <input
          type="radio"
          id="female"
          name="gender"
          checked={inputValue?.gender === "female"}
          value={"female"}
          onChange={(event) => this.handleChange(event)}
        />
        <lable>Female </lable>
        <br />
        <button type="submit" onClick={() => this.handleSubmit()}>
          ADD
        </button>
        <br />
        <br />
        <table border="1" width="100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>email</th>
            <th>city</th>
            <th>gender</th>
            <th>Action</th>
          </tr>{" "}
          <tbody>
            {TableData?.map((obj, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{obj?.firstname}</td>
                    <td>{obj?.lastname}</td>
                    <td>{obj?.email}</td>
                    <td>{obj?.city}</td>
                    <td>{obj?.gender}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default Mytodo;
