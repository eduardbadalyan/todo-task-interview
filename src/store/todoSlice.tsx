import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../models";

interface SliceState {
    list: Todo[];
}

const initialState: SliceState = { list: [] };

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ item: Todo }>) => {
            state.list = [
                { ...action.payload.item, id: Date.now() },
                ...state.list,
            ];
        },
        delete: (state, action: PayloadAction<{ id: number }>) => {
            state.list = state.list.filter(
                (todoItem) => todoItem.id !== action.payload.id
            );
        },
        edit: (state, action: PayloadAction<{ id: number; item: Todo }>) => {
            state.list = state.list.map((todoItem) => {
                if (todoItem.id === action.payload.id) {
                    return { ...todoItem, ...action.payload.item };
                }
                return todoItem;
            });
        },
    },
});
 
export const { add, delete, edit } = todoSlice.actions

export default todoSlice.reducer
