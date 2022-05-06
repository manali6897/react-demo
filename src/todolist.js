import React, { useState } from "react";
export const Todoform = () => {
  const [input, setInput] = useState({});
  const [tableData, setTableData] = useState([]);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
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

  console.log("obj", tableData);
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
              value="Male"
              onChange={handleChange}
            />
            <lable>Male</lable>

            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            <lable>Female </lable>
          </div>
          <br />
          <div className="inputbox">
            <label>Enter City</label>
            <select name="city" onChange={handleChange}>
              <option value="">Select</option>
              <option value="Nadiad">Nadiad</option>
              <option value="Baroda">Baroda</option>
              <option value="Ahemdabad">Ahemdabad</option>
              <option value="Rajkot">rajkot</option>
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
            <button onClick={() => handleSubmit()}>ADD</button>
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
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
