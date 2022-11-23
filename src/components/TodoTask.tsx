import React from 'react'
import { TodoList } from '../interfaces/todo'

interface Props {
  todoList: TodoList;
}

const TodoTask = ({ todoList }: Props) => {
  return (
    <div className="task">
      {todoList.map((todoItem, idx) => {
        return (
          <div className="content" key={idx}>
            <span className='taskName'>{todoItem.task}</span>
            <span className='done'>{todoItem.done ? "v" : "x"}</span>
          </div>
        );
      })}
    </div>
  )
}

export default TodoTask