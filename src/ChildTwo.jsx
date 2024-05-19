import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./Recoil/AtomStore";

const ChildTwo = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {todoList.map((todoItem) => (
        <div key={todoItem.id}>{todoItem.text}</div>
      ))}
    </div>
  );
};

export default ChildTwo;
