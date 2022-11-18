import React, { FC } from "react";
import { ref, update } from "firebase/database";
import db from "./firebase";

interface ICompleteTodoProps {
  id: string;
}

const CompleteTodo: FC<ICompleteTodoProps> = ({ id }) => {
  const handleRemove = () => {
    const date = new Date().toLocaleString();
    update(ref(db), { ["/todos/" + id + "/complete"]: date });
  };
  return <button onClick={handleRemove}>Complete</button>;
};

export default CompleteTodo;
