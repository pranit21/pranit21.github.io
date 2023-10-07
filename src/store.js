import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todos/todoSlice";

export default configureStore({
    reducer: {
        todos: todoSlice
    }
});