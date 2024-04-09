import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

export default function Input(props) {
  const [Inputvalue, upadateInputvalue] = useState("");

  const setinputvalue = (ev) => {
    upadateInputvalue(ev.target.value);
  };
  useEffect(() => {
    upadateInputvalue(props.newinput);
  }, [props.newinput]);
  const getinputvalue = () => {
    console.log(Inputvalue);
    props.getinputvalueB(Inputvalue);
  };

  return (
    <div className="inputdiv">
      <TextField
        helperText="Please enter your task"
        id="demo-helper-text-aligned"
        label="Enter your task"
        onChange={setinputvalue}
        value={Inputvalue}
      />
      <Button variant="contained" onClick={getinputvalue}>
        {props.btnText}
      </Button>
    </div>
  );
}
