import React from "react";
import { useState } from "react";

const Forms = () => {
  const [persInfo, setPersInfo] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
  });

  const inputChangeHandler = (e) => {
    setPersInfo({ ...persInfo, [e.target.name]: e.target.value });
  };

  // const showData = (e) => {
  //   e.preventDefault();
  //   setData(firstName + "," + lastName + "," + mobile);
  // };

  return (
    <div>
      <div>
        <form>
          {/* <form onSubmit={showData}> */}
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={inputChangeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={inputChangeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Mobile"
            name="mobile"
            onChange={inputChangeHandler}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {JSON.stringify(persInfo)}
      </div>
    </div>
  );
};

export default Forms;
