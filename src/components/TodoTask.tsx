import React from 'react'
import { TodoItem } from '../interfaces/todo'

interface Props {
    todoTask: TodoItem;
};

const TodoTask = ({ todoTask }: Props) => {
    return (
        <div className="content" key={todoTask.id}>
            <span className='taskName'>{todoTask.task}</span>
            <span className='done'>{todoTask.done ? "v" : "x"}</span>
        </div>
    );
}

export default TodoTask

