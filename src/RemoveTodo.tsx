import React, { FC } from "react";
import { ref, remove } from "firebase/database";
import db from "./firebase";

interface IRemoveTodoProps {
  id: string;
}

const RemoveTodo: FC<IRemoveTodoProps> = ({ id }) => {
  const handleRemove = () => {
    remove(ref(db, "todos/" + id));
  };
  return <button onClick={handleRemove}>Remove</button>;
};

export default RemoveTodo;
