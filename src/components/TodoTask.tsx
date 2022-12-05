import React from 'react';
import { ToggleComplete } from '../App';
import { TodoItem } from '../interfaces/todo'
import { DeleteTask } from './TodoTasks';
import { AiOutlineDelete } from "react-icons/ai";

interface Props {
    todoTask: TodoItem;
    toggleComplete: ToggleComplete;
    deleteTask: DeleteTask;
}

const TodoTask = ({ todoTask, toggleComplete, deleteTask }: Props) => {
    return (
        <div className={todoTask.done ? " task-row completed" : "task-row"} >
            <span className='taskName'>{todoTask.task}</span>
            <span className='checkbox'><input
                type="checkbox"
                onChange={() => toggleComplete(todoTask)}
                checked={todoTask.done}
            /></span>
            <span className='delete-btn' onClick={() => deleteTask(todoTask)}>
                <span className='delete-icon'><AiOutlineDelete/></span>
            </span>
        </div>
    )
}

export default TodoTask;

