import React from "react";
import { useState } from "react";

const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState("data");

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const mobileChangeHandler = (e) => {
    setMobile(e.target.value);
  };

  const showData = (e) => {
    e.preventDefault();
    setData(firstName + "," + lastName + "," + mobile);
  };
  return (
    <div>
      <div>
        <form onSubmit={showData}>
          <input
            type="text"
            placeholder="First Name"
            onChange={firstNameChangeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            onChange={lastNameChangeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Mobile"
            onChange={mobileChangeHandler}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {data}
      </div>
    </div>
  );
};

export default Forms;
