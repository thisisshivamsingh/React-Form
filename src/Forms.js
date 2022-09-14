import React from "react";

const Forms = () => {
  const getData = (e) => {
    console.log(e.target.innerHTML);
  };
  return (
    <div>
      <div onClick={getData}>
        <h1>Test</h1>
        Get Data
      </div>
    </div>
  );
};

export default Forms;
