import React, { FC, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import db from "./firebase";
import Todo from "./Todo";
import { ITodo } from "./types";

interface ITodos {
  [key: string]: ITodo;
}

const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodos | null>(null);

  useEffect(() => {
    onValue(ref(db, "todos/"), (snapshot) => {
      const data = snapshot.val();
      setTodos(data);
    });
  }, []);

  return (
    <div>
      <h3>Todo List</h3>
      {todos
        ? Object.entries(todos).map((todo) => {
            return <Todo key={todo[0]} id={todo[0]} todo={todo[1]} />;
          })
        : "No Todo"}
    </div>
  );
};

export default Todos;
