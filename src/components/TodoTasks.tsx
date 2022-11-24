import React, { useState } from 'react'
import { TodoList } from '../interfaces/todo'
import TodoTask from './TodoTask';

interface Props {
  todoList: TodoList;
};

const TodoTasks = ({ todoList }: Props) => {
  const [todoTask, setTodoTask] = useState<TodoList>([]);

  return (
    <div className="task">
      {todoList.map((todoTask) => {
        return (
          <TodoTask todoTask={todoTask} />
        );
      })};
    </div>
  );
}

export default TodoTasks
