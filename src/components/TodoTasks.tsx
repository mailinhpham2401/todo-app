import React, { useState } from 'react'
import { TodoItem, TodoList } from '../interfaces/todo'
import TodoTask from './TodoTask';

interface Props {
    todoList: TodoList;
};

const TodoTasks = ({ todoList }: Props) => {
    const [todos, setTodoList] = useState<TodoList>([]);

    const toggleComplete = (selectedTodo: TodoItem) => {
        const updatedTodos = todoList.map(todoTask => {
            if (todoTask === selectedTodo) {
                return { ...todoTask, done: !todoTask.done };
            }
            return console.log(todoTask);
        });
/*         setTodoList(updatedTodos);
 */    };
    return (
        <div className="task">
            {todoList.map((todoTask, idx) => {
                return (
                    <TodoTask todoTask={todoTask} key={idx} toggleComplete={toggleComplete}
                    />
                );
            })};
        </div>
    );
}

export default TodoTasks
