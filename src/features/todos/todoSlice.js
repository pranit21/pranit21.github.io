import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await axios.get('http://localhost:3000/todos');
    return res.data;
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        count: 0,
        items: [],
        status: 'idle',
        error: null
    },
    // synchronous
    reducers: {
        increment: (state, action) => {
            console.log(action);
            return {
                ...state,
                count: state.count + 1
            }
        },
        incrementByCount: (state, action) => {
            console.log(action);
            return {
                ...state,
                count: state.count + action.payload
            }
        }
    },
    // asynchronous
    extraReducers(builder) {
        builder.addCase(fetchTodos.pending, (state, action) => {
            return {
                ...state,
                status: 'loading'
            }
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            return {
                ...state,
                status: 'completed',
                items: action.payload
            }
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                status: 'failed',
                error: action.payload
                // items: []
            }
        });
    }
});

// actions
export const { increment, incrementByCount } = todoSlice.actions;

// reducer
export default todoSlice.reducer;

// selectors
export const selectCount = (state) => state.todos.count;
export const selectTodos = (state) => state.todos.items;
export const selectStatus = (state) => state.todos.status;
export const selectError = (state) => state.todos.error;