import React from 'react';
import { ToggleComplete } from '../App';
import { TodoList, TodoItem } from '../interfaces/todo';
import TodoTask from './TodoTask';

interface ListProps {
    todoList: TodoList;
    toggleComplete: ToggleComplete;
    deleteTask: DeleteTask;
}

export interface DeleteTask {
    (selectedTodo: TodoItem): void;
}

const TodoTasks = ({ todoList, toggleComplete, deleteTask }: ListProps) => {
    return (
        <div className="task">
            {todoList.map((todoTask, idx) => {
                return (
                    <TodoTask todoTask={todoTask} toggleComplete={toggleComplete} deleteTask={deleteTask} key={idx} />
                );
            })};
        </div>
    )
}

export default TodoTasks;

