import React, { useState } from "react";

const Forms = () => {
  const [h, setH] = useState("Default");
  const getData = (e) => {
    setH(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>{h}</h1>
      <input onChange={getData} type="text" />
    </div>
  );
};

export default Forms;
