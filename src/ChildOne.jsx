import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./Recoil/AtomStore";

let id = 0;
function getId() {
  return id++;
}

const ChildOne = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  
  // const onChange = (e) => {
  //   console.log(e);
  //   setInputValue(e.target.value);
  // };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default ChildOne;
