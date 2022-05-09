import React, { useState } from "react";
export const Todoform = () => {
  const [input, setInput] = useState({});
  const [tableData, setTableData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEditData, setSelectedEditData] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    let obj = {
      firstname: input.firstname !== undefined ? input.firstname : "",
      lastname: input.lastname !== undefined ? input.lastname : "",
      gender: input.gender !== undefined ? input.gender : "",
      city: input.city !== undefined ? input.city : "",
      email: input.email !== undefined ? input.email : "",
    };
    setTableData([...tableData, obj]);
    setInput("");
  };

  const handleDelete = (id) => {
    let newtodoList = tableData.filter((item, index) => index != id);

    setTableData(newtodoList);
  };

  const handleEdit = (data) => {
    setInput(data);
  };

  const UpdateTodo = () => {
    console.log("selected", selectedEditData, input);
    let selectedEditDatas = tableData.map((item, index) => {
      if (index == selectedEditData) {
        return input;
      }
      return item;
    });
    setTableData(selectedEditDatas);
    setIsEdit(false);
    setInput("");
  };

  return (
    <>
      <div className="container">
        <div className="user-detail">
          <div className="inputbox">
            <label>Enter Firstname </label>
            <input
              type="text"
              name="firstname"
              value={input.firstname || ""}
              onChange={handleChange}
            />
          </div>

          <br />
          <div className="inputbox">
            <label>Enter Lastname</label>
            <input
              type="text"
              name="lastname"
              value={input.lastname || ""}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="inputbox">
            <lable>Enter Gender</lable>

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
          <br />
          <div className="inputbox">
            <label>Enter City</label>
            <select name="city" onChange={handleChange}>
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
          <br />
          <div className="inputbox">
            <label>Enter Email</label>
            <input
              type="text"
              name="email"
              value={input.email || ""}
              onChange={handleChange}
            />
          </div>
          <br />
          <br />
          <div className="inputbox">
            {isEdit == false ? (
              <button
                onClick={() => {
                  handleSubmit();
                  setIsEdit(false);
                }}
              >
                ADD
              </button>
            ) : (
              <button
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
      <table border="1" width="100%">
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>City</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        <tbody>
          {tableData?.map((obj, index) => {
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
                      EDIT
                    </button>
                    <button onClick={() => handleDelete(index)}>DELETE</button>
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
