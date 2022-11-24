import React from 'react'
import { TodoList } from '../interfaces/todo'
import TodoTask from './TodoTask';

interface Props {
  todoList: TodoList;
};

const TodoTasks = ({ todoList }: Props) => {
  return (
    <div className="task">
      {todoList.map((todoTask, idx) => {
        return (
          <TodoTask todoTask={todoTask} key={idx} />
        );
      })};
    </div>
  );
}

export default TodoTasks
