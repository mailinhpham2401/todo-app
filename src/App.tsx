import React, { useState } from "react";
import "./App.css";
import { TodoList, TodoItem } from "./interfaces/todo";
import InputForm from "./components/InputForm";
import TodoTasks, { DeleteTask } from "./components/TodoTasks";

export interface ToggleComplete {
    (selectedTodo: TodoItem): void;
}

function App() {
    const [todoList, setTodoList] = useState<TodoList>([]);
    
    const toggleComplete: ToggleComplete = (selectedTodo: TodoItem) => {
        const updatedTodos = todoList.map(todoTask => {
            if (todoTask.id === selectedTodo.id) {  
                return { ...todoTask, done: !todoTask.done }
            }
            return todoTask;
        });
        setTodoList(updatedTodos);
    };
    
    const deleteTask: DeleteTask = (selectedTodo: TodoItem) => {
        const updatedTodos = todoList.filter(todoTask => todoTask.id !== selectedTodo.id);
        setTodoList(updatedTodos);
    }
    
    return (
        <div className="App">
            <div className="header">
                <div className="inputContainer">
                    <InputForm setTodoList={setTodoList} todoList={todoList} />
                </div>
            </div>
            <div className="todoList">
                <TodoTasks todoList={todoList} toggleComplete={toggleComplete} deleteTask={deleteTask} />
            </div>
        </div>
    )
}

export default App;

