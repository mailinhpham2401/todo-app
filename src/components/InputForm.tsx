import React, {useState} from "react";
import {TodoItem, TodoList} from "../interfaces/todo";

export interface HandleInput {
    (event: React.FormEvent<HTMLInputElement>): void;
}

interface InputFormProps {
    setTodoList: React.Dispatch<TodoList>;
    todoList: TodoList;
}

export default function InputForm({setTodoList, todoList}: InputFormProps) {
    const [inputText, setInputText] = useState<string>("");

    const handleInput: HandleInput = (event) => {
        const textTarget = event.target;
        const text = (textTarget as HTMLInputElement).value;
        setInputText(text);
    };

    const submitTodo = (event: React.FormEvent) => {
        event.preventDefault();
        let updatedList = [...todoList];
        const item: TodoItem = {
            task: inputText,
            time: new Date(),
            done: false,
            id: Math.random(),
        };
        updatedList.push(item);
        setTodoList(updatedList);
    };

    return (
        <div>
            <form onSubmit={submitTodo}>
                <input type="text" name="task" onChange={handleInput}/>
                <input type="submit" value="Add task" className="submit"/>
            </form>
        </div>
    );
}

