import React from 'react'
import { ToggleComplete } from '../App';
import { TodoList } from '../interfaces/todo'
import TodoTask from './TodoTask';

interface ListProps {
    todoList: TodoList;
    toggleComplete: ToggleComplete;
};

const TodoTasks = ({ todoList, toggleComplete }: ListProps) => {
    return (
        <div className="task">
            {todoList.map((todoTask, idx) => {
                return (
                    <TodoTask todoTask={todoTask} toggleComplete={toggleComplete} key={idx} />
                );
            })};
        </div>
    );
}

export default TodoTasks
