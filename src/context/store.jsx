import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from './Todo'
import themSlice from './Them'

export const store = configureStore({
    reducer: {
        todos: TodosSlice,
        them: themSlice
    },
})