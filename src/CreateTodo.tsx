import React, { FC } from "react";
import { ref, push } from "firebase/database";
import db from "./firebase";

const CreateTodo: FC = () => {
  const handleCreatet = (event: any) => {
    event.preventDefault();
    /* tslint:disable */
    const { title, description } = event.target;
    push(ref(db, "todos/"), {
      title: title.value,
      description: description.value,
      complete: false,
    });
  };
  return (
    <div>
      <h3>Create Todo</h3>
      <form onSubmit={handleCreatet}>
        <div>
          Titile
          <br />
          <input name="title" type="text"></input>
        </div>
        <div>
          Description
          <br />
          <textarea name="description"></textarea>
        </div>
        <div>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
