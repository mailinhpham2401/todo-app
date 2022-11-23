import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./interfaces/todo";
import InputForm from "./components/InputForm";
import TodoTask from "./components/TodoTask";

function App() {
    const [todoList, setTodoList] = useState<TodoList>([]);

    return (
        <div className="App">
            <div className="header">
                <div className="inputContainer">
                    <InputForm setTodoList={setTodoList} todoList={todoList} />
                </div>
            </div>
            <div className="todoList">
                <TodoTask todoList={todoList} />
            </div>
        </div>
    );
}

export default App;
