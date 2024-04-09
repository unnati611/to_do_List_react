import Input from "./Input";
import List from "./List";
import React, { useState } from "react";
import ResponsiveAppBar from "./Appbar";

function Home() {
  //   const history = useHistory;

  const [names, setnames] = useState(["Gandhi", "unnati"]);
  const [newinput, setnewinput] = useState("");
  const [editIndex, setEditIndex] = useState();
  const [btnText, setbtnText] = useState("Add Task");
  const getinputvalueB = (name) => {
    console.log(name);
    if (btnText === "Edit Task") {
      setbtnText("Add Task");
      console.log(editIndex);
      names[editIndex] = name;
      setnewinput("");

      return;
    }
    setnames(names.concat(name));
    console.log(name);
  };

  const dltInputvalue = (dltInputvalueindex) => {
    const copyArr = [...names];
    copyArr.splice(dltInputvalueindex, 1);
    console.log(copyArr);
    setnames(copyArr);
  };
  const EditInputvalue = (editinputvalueindex) => {
    let inputValue = names[editinputvalueindex];
    console.log(inputValue);
    setnewinput(inputValue);
    setEditIndex(editinputvalueindex);
    setbtnText("Edit Task");
  };
  return (
    <>
      <ResponsiveAppBar />
      <div className="App">
        <div className="task">
          <Input
            getinputvalueB={getinputvalueB}
            newinput={newinput}
            btnText={btnText}
          />
          {names.map((element, index) => {
            console.log(index);
            return (
              <List
                name={element}
                idname={index}
                dltInputvalue={dltInputvalue}
                EditInputvalue={EditInputvalue}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
