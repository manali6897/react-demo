import React, { useState } from "react";

import { BiEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
let checkArray = [
  { id: 1, name: "banana" },
  { id: 2, name: "apple" },
  { id: 3, name: "mango" },
  { id: 4, name: "grap" },
  { id: 5, name: "chikoo" },
  { id: 6, name: "pineapple" },
  { id: 7, name: "evakado" },
  { id: 8, name: "strawbarry" },
  { id: 9, name: "watermalon" },
  { id: 10, name: "raspbarry" },
  { id: 11, name: "bluebarry" },
  { id: 12, name: "cherry" },
  { id: 13, name: "date" },
  { id: 14, name: "dragon fruit" },
];
export const Todoform = () => {
  const [input, setInput] = useState({});
  const [tableData, setTableData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEditData, setSelectedEditData] = useState("");
  const [errors, setErrors] = useState({});
  const [filteredResults, setFilterdResults] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [ischeckitem, setIscheckItem] = useState([]);
  const [checkList, SetcheckList] = useState(checkArray);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    if (isValidate()) {
      let obj = {
        firstname: input.firstname !== undefined ? input.firstname : "",
        lastname: input.lastname !== undefined ? input.lastname : "",
        gender: input.gender !== undefined ? input.gender : "",
        city: input.city !== undefined ? input.city : "",
        email: input.email !== undefined ? input.email : "",
      };
      setTableData([...tableData, obj]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    let newtodoList = tableData.filter((item, index) => index != id);

    setTableData(newtodoList);
  };

  const handleEdit = (data) => {
    setInput(data);
  };

  const UpdateTodo = () => {
    if (isValidate()) {
      let selectedEditDatas = tableData.map((item, index) => {
        if (index == selectedEditData) {
          return input;
        }
        return item;
      });
      setTableData(selectedEditDatas);
      setIsEdit(false);
      setInput("");
    }
  };

  const isValidate = () => {
    let errors = {};
    let flag = true;

    if (!input.firstname) {
      errors.firstname = "Firstname is required";
      flag = false;
    }
    if (!input.lastname) {
      errors.lastname = "Lastname is required";
      flag = false;
    }
    if (!input.gender) {
      errors.gender = "Gender is required";
      flag = false;
    }
    if (!input.city) {
      errors.city = "City is required";
      flag = false;
    }
    if (!input.email) {
      errors.email = "email is required";
      flag = false;
    }
    setErrors(errors);
    return flag;
  };
  const handleSearch = (searchValue) => {
    if (searchValue !== "") {
      const filterdData = tableData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilterdResults(filterdData);
      setIsFilter(true);
    } else {
      setFilterdResults(tableData);
      setIsFilter(false);
    }
  };
  const handleCheck = (checkitem, e) => {
    let flag = e.target.checked;
    console.log("checkfruit", e.target.checked);

    if (flag) {
      let newData = checkList.filter((x) => x.id === checkitem.id);
      console.log("newData", newData);
      setIscheckItem([...ischeckitem, newData[0]]);
    } else {
      const newcheck = checkList.filter((x) => x.id !== checkitem.id);
      console.log("uncheckfruit", newcheck);
      setIscheckItem(newcheck[0]);
    }

    // if (checkList.filter((x) => x.id === checkitem.id).length === 0) {
    //   console.log("checkitem", checkitem);
    //   SetcheckItem([...checkList, checkitem]);
    // } else {

    //   const newcheck = .filter((x) => x.id !== checkitem.id);
    //   SetcheckItem(newcheck);
    // }
  };
  console.log("fruites", ischeckitem);
  const newTbaleData = isFilter ? filteredResults : tableData;
  console.log("search", newTbaleData);
  return (
    <>
      {checkList?.map((checkitem, index) => {
        return (
          <>
            <input
              type="checkbox"
              checked={checkitem.checked}
              name={checkitem.name}
              value={checkitem.name}
              onClick={(e) => handleCheck(checkitem, e)}
            />
            {checkitem.name}
          </>
        );
      })}

      <div className="container">
        <div className="heading">
          <p>Registration Form</p>
        </div>
        <div className="user-detail">
          <div className="inputbox">
            <span className="details">Enter Firstname </span>
            <input
              className="input"
              type="text"
              name="firstname"
              value={input.firstname || ""}
              onChange={handleChange}
              placeholder="Enter your firstname"
            />
          </div>
          <div className="errormsg">
            {" "}
            {errors?.firstname ? <span>{errors?.firstname}</span> : null}{" "}
          </div>

          <br />
          <div className="inputbox">
            <span className="details">Enter Lastname</span>
            <input
              className="input"
              type="text"
              name="lastname"
              value={input.lastname || ""}
              onChange={handleChange}
              placeholder="Enter your lastname"
            />
          </div>

          <div>
            {" "}
            {errors?.lastname ? <span>{errors?.lastname}</span> : null}{" "}
          </div>
          <br />

          <div className="inputbox">
            <span className="details">Enter Email</span>
            <input
              className="input"
              type="text"
              name="email"
              value={input.email || ""}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div> {errors?.email ? <span>{errors?.email}</span> : null} </div>
          <br />
          <div className="inputbox">
            <span className="details">Enter City</span>

            <select className="input" name="city" onChange={handleChange}>
              <option value="" selected={input.city == ""}>
                Select
              </option>
              <option value="Nadiad" selected={input.city == "Nadiad"}>
                Nadiad
              </option>
              <option value="Baroda" selected={input.city == "Baroda"}>
                Baroda
              </option>
              <option value="Ahemdabad" selected={input.city == "Ahemdabad"}>
                Ahemdabad
              </option>
              <option value="Rajkot" selected={input.city == "Rajkot"}>
                Rajkot
              </option>
            </select>
          </div>
          <div>
            {""} {errors?.city ? <span>{errors?.city}</span> : null}{" "}
          </div>
          <br />
          <div className="inputbox">
            <span className="details">Enter Gender</span>

            <input
              type="radio"
              id="male"
              name="gender"
              checked={input.gender === "Male"}
              value={"Male"}
              onChange={handleChange}
            />
            <lable>Male</lable>

            <input
              type="radio"
              id="female"
              name="gender"
              checked={input.gender === "Female"}
              value={"Female"}
              onChange={handleChange}
            />
            <lable>Female </lable>
          </div>
          <div>
            {""} {errors?.gender ? <span>{errors?.gender}</span> : null}
            {""}
          </div>

          <br />
          <div className="inputbox">
            {isEdit == false ? (
              <button className="addbtn" onClick={() => handleSubmit()}>
                ADD
              </button>
            ) : (
              <button
                className="updatebtn"
                onClick={() => {
                  UpdateTodo();
                }}
              >
                UPDATE
              </button>
            )}
          </div>
        </div>
      </div>
      <br />
      <div>
        <span>Search</span>
        <input
          onChange={(e) => {
            handleSearch(e.target.value);
            setSearch(e.target.value);
          }}
          name="search"
          value={search}
          placeholder="Serach here"
        />
      </div>
      <br />
      <br />
      <table border="1" width="100%">
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>City</th>
          <th>Gender</th>
          <th>Email</th>
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
                  <td>{obj?.city}</td>
                  <td>{obj?.gender}</td>
                  <td>{obj?.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(obj);
                        setIsEdit(true);
                        setSelectedEditData(index);
                      }}
                    >
                      <BiEdit size={24} color="red" />
                    </button>
                    <button onClick={() => handleDelete(index)}>
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
};
