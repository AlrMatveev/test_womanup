import React, { FC, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import db from "./firebase";
import Todo from "./Todo";

// interface ITodo {
//   <string>: {}
//   title: string;
//   description: string;
//   end: Date;
// }

const Todos: FC = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    onValue(ref(db, "todos/"), (snapshot) => {
      const data = snapshot.val();
      setTodos(data);
    });
  }, []);

  return (
    <div>
      <h3>Todos</h3>

      {todos
        ? Object.entries(todos).map((todo) => {
            return <Todo key={todo[0]} id={todo[0]} todo={todo[1]} />;
          })
        : "No Todo"}
    </div>
  );
};

export default Todos;
