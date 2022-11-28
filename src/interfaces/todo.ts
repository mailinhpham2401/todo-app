export interface TodoItem {
    task: string;
    time: Date;
    done: boolean;
    id: number;
}

export type TodoList = Array<TodoItem>;

