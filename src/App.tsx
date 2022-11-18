import React, { FC } from "react";
import CreateTodo from "./CreateTodo";
import Todos from "./Todos";

const App: FC = () => {
  return (
    <>
      <CreateTodo />
      <Todos />
    </>
  );
};

export default App;
