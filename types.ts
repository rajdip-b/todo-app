export interface ITodo {
    id: string;
    title: string;
    isCompleted: boolean;
}

export interface ITodoAppSliceInitialState {
    todos: ITodo[];
}

export interface IStoreState {
    todo: ITodoAppSliceInitialState
}