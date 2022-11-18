import React, { FC, useState } from "react";
import { ref, update } from "firebase/database";
import db from "./firebase";
import RemoveTodo from "./RemoveTodo";
import CompleteTodo from "./ComleteTodo";
import { ITodo } from "./types";

interface ITodoProps {
  id: string;
  todo: ITodo;
}
interface IFixTodo {
  title: string | null;
  description: string | null;
  on: boolean;
}

const Todo: FC<ITodoProps> = ({ id, todo }) => {
  const [fixTodo, setFixTodo] = useState<IFixTodo>({
    title: null,
    description: null,
    on: false,
  });

  const style = {
    container: {
      padding: "5px",
      border: todo.complete ? "1px solid green" : "1px solid red",
    },
  };

  const handleFix = (): void => {
    if (fixTodo.on) {
      const updateTodo = {
        title: fixTodo.title ? fixTodo.title : todo.title,
        description: fixTodo.description
          ? fixTodo.description
          : todo.description,
      };

      update(ref(db), {
        ["/todos/" + id]: updateTodo,
      });
      setFixTodo({ ...fixTodo, on: false });
    } else {
      setFixTodo({ ...fixTodo, on: true });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFixTodo({
      ...fixTodo,
      [name]: value,
    });
  };

  return (
    <div style={style.container}>
      <div>
        Title:
        <br />
        {fixTodo.on ? (
          <input name="title" onChange={handleChange}></input>
        ) : (
          todo.title
        )}
      </div>
      <div>
        Description:
        <br />
        {fixTodo.on ? (
          <textarea name="description" onChange={handleChange}></textarea>
        ) : (
          todo.description
        )}
      </div>
      <div>{todo.complete ? "Complete: " + todo.complete : "not done"}</div>
      <div>
        <button onClick={handleFix}>Fix</button>
        {!todo.complete && <CompleteTodo id={id} />}
        <RemoveTodo id={id} />
      </div>
    </div>
  );
};

export default Todo;
