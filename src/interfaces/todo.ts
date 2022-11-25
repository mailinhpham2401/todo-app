export interface TodoItem {
    task: string;
    time: Date;
    done: boolean;
    id: number;
}

export type TodoList = Array<TodoItem>;

export type ToggleComplete = (selectedTodo:TodoItem) => void;