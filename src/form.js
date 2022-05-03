import React, { useState } from "react";
export const Myform = () => {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = () => {
    let obj = {
      firstname: input.username,
      surname: input.surname,
      age: input.age,
      phoneno: input.phoneno,
      gender: input.gender,
    };

    console.log("obj", obj);
  };
  return (
    <>
      <label>
        Enter Firstname:
        <input
          type="text"
          name="username"
          value={input.username || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter Surname:
        <input
          type="text"
          name="surname"
          value={input.surname || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter Age:
        <input
          type="number"
          name="age"
          value={input.age || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter PhoneNo:
        <input
          type="number"
          name="phoneno"
          value={input.phoneno || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <lable>
        Enter Gender:
        <lable>
          Male
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
        </lable>
        <lable>
          Female
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
        </lable>
      </lable>
      <br />
      <button onClick={() => handleSubmit()}>Save</button>
      <br />
    </>
  );
};

export default Myform;
