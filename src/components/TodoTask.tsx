import React from 'react'
import { ToggleComplete } from '../App';
import { TodoItem } from '../interfaces/todo'

interface Props {
    todoTask: TodoItem;
    toggleComplete: ToggleComplete;

};

const TodoTask = ({ todoTask, toggleComplete }: Props) => {
    return (
        <div className={todoTask.done ? " task-row completed" : "task-row"} >
            <span className='taskName'>{todoTask.task}</span>
            <span className='checkbox'><input
                type="checkbox"
                onChange={() => toggleComplete(todoTask)}
                checked={todoTask.done}
            /></span>
        </div>
    );
}

export default TodoTask

