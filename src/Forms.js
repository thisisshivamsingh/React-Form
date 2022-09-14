import React from "react";

const Forms = () => {
  const getData = () => {
    console.log("Function called");
  };
  return (
    <div>
      <button onClick={() => getData()}>Get Data</button>
    </div>
  );
};

export default Forms;
