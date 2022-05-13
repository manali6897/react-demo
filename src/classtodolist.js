import React, { Component } from "react";
import { BiEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
class Mytodo extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      tableData: [],
      isEdit: false,
      selectedEditData: "",
      errors: "",
      filteredResults: [],
      isFilter: false,
      search: "",
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ inputValue: { ...this.state.inputValue, [name]: value } });
  };

  handleSubmit = () => {
    const { inputValue, tableData } = this.state;
    if (this.isValidate()) {
      let items = {
        firstname:
          inputValue.firstname !== undefined ? inputValue.firstname : "",
        lastname: inputValue.lastname !== undefined ? inputValue.lastname : "",
        email: inputValue.email !== undefined ? inputValue.email : "",
        city: inputValue.city !== undefined ? inputValue.city : "",
        gender: inputValue.gender !== undefined ? inputValue.gender : "",
      };
      this.setState({ tableData: [...tableData, items], inputValue: "" });
    }
  };
  handleDelete = (id) => {
    const { tableData } = this.state;
    let newtodoList = tableData.filter((item, index) => index != id);
    this.setState({ tableData: newtodoList });
  };
  handleEdit = (data) => {
    const { inputValue } = this.state;
    this.setState({ inputValue: data });
  };
  UpdateTodo = () => {
    if (this.isValidate()) {
      const { inputValue, tableData, selectedEditData } = this.state;
      let selectedEditDatas = tableData.map((item, index) => {
        if (index == selectedEditData) {
          return inputValue;
        }
        return item;
      });
      this.setState({
        tableData: selectedEditDatas,
        inputValue: "",
        isEdit: false,
      });
    }
  };
  isValidate = () => {
    const { inputValue } = this.state;
    let error = {};
    let flag = true;

    if (!inputValue?.firstname) {
      error.firstname = "Firstname is required";
      flag = false;
    }
    if (!inputValue?.lastname) {
      error.lastname = "Lastname is required";
      flag = false;
    }
    if (!inputValue?.email) {
      error.gender = "email is required";
      flag = false;
    }
    if (!inputValue?.city) {
      error.city = "City is required";
      flag = false;
    }
    if (!inputValue?.gender) {
      error.email = "gender is required";
      flag = false;
    }
    this.setState({ errors: error });
    return flag;
  };
  handleSearch = (searchValue) => {
    const { tableData } = this.state;
    if (searchValue !== "") {
      const filterdData = tableData?.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      this.setState({ filteredResults: filterdData, isFilter: true });
    } else {
      this.setState({ filteredResults: tableData, isFilter: false });
    }
  };
  render() {
    const { inputValue, tableData, isEdit, errors, filteredResults, isFilter } =
      this.state;
    const newTbaleData = isFilter ? filteredResults : tableData;
    return (
      <>
        <span>Enter firstname: </span>
        <input
          type="text"
          name="firstname"
          value={inputValue?.firstname || ""}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        {errors?.firstname ? <span>{errors?.firstname}</span> : null} <br />
        <lable>Enter Lastname: </lable>
        <input
          type="text"
          name="lastname"
          value={inputValue?.lastname || ""}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        {errors?.lastname ? <span>{errors?.lastname}</span> : null} <br />
        <lable>Enter Email: </lable>
        <input
          type="text"
          name="email"
          value={inputValue?.email || ""}
          onChange={(event) => this.handleChange(event)}
        />
        <br />
        {errors?.email ? <span>{errors?.email}</span> : null} <br />
        <span>Enter City</span>
        <select
          name="city"
          value={inputValue?.city || ""}
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
        {errors?.city ? <span>{errors?.city}</span> : null} <br />
        <span>Enter Gender</span>
        <input
          type="radio"
          id="male"
          name="gender"
          checked={inputValue?.gender === "male" || ""}
          value={"male"}
          onChange={(event) => this.handleChange(event)}
        />
        <lable>Male</lable>
        <input
          type="radio"
          id="female"
          name="gender"
          checked={inputValue?.gender === "female" || ""}
          value={"female"}
          onChange={(event) => this.handleChange(event)}
        />
        <lable>Female </lable>
        <br />
        {errors?.gender ? <span>{errors?.gender}</span> : null} <br />
        {isEdit ? (
          <button
            onClick={() => {
              this.UpdateTodo();
            }}
          >
            UPDATE
          </button>
        ) : (
          <button type="submit" onClick={() => this.handleSubmit()}>
            ADD
          </button>
        )}
        <br />
        <br />
        <span>Search </span>
        <input
          onChange={(e) => {
            this.handleSearch(e.target.value);
            this.setState(e.target.value);
          }}
          name="search"
          placeholder="Serach here"
        />
        <br />
        <br />
        <table border="1" width="100%">
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>email</th>
            <th>city</th>
            <th>gender</th>
            <th>Action</th>
          </tr>{" "}
          <tbody>
            {newTbaleData?.map((obj, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{obj?.firstname}</td>
                    <td>{obj?.lastname}</td>
                    <td>{obj?.email}</td>
                    <td>{obj?.city}</td>
                    <td>{obj?.gender}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.handleEdit(obj);
                          this.setState({ isEdit: true });
                          this.setState({ selectedEditData: index });
                        }}
                      >
                        <BiEdit size={24} color="red" />
                      </button>
                      <button onClick={() => this.handleDelete(index)}>
                        <TiDelete size={24} color="red" />
                      </button>
                    </td>
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
