import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ITodo, ITodoAppSliceInitialState} from "../types";

const todoSliceInitialState: ITodoAppSliceInitialState = {
    todos: [
        {
            id: "1",
            title: 'Finish the prototype',
            isCompleted: false
        },
        {
            id: "2",
            title: 'Order pizza',
            isCompleted: true
        },
        {
            id: "3",
            title: 'Get some sleep :)',
            isCompleted: false
        }
    ],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState: todoSliceInitialState,
    reducers: {
        toggleTodoState(state: ITodoAppSliceInitialState, action: PayloadAction<string>) {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
        addTodo(state: ITodoAppSliceInitialState, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload);
        },
        removeTodos(state: ITodoAppSliceInitialState, action: PayloadAction<string[]>) {
            state.todos = state.todos.filter(todo => !action.payload.includes(todo.id));
        }
    },
});

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;