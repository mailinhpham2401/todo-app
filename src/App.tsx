import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./interfaces/todo";
import InputForm from "./components/InputForm";

function App() {
  const [todoList, setTodoList] = useState<TodoList>([]);

  /*  function setItwm(item) {
    setTodoList([item])
  } */

  return (
    <div className="App">
      <InputForm setTodoList={setTodoList} todoList={todoList} />

      {todoList.map((todoItem, idx) => {
        return (
          <div key={idx} style={{ margin: "10px", backgroundColor: "red" }}>
            <p>{todoItem.task}</p>
            <p>{todoItem.done ? "done" : "not done"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
