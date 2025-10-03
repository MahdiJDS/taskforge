import { createSlice } from "@reduxjs/toolkit";

const load = () => {
    const save = localStorage.getItem("todos");
    return save ? JSON.parse(save) : [];
}

const TodosSlice = createSlice({
    name: "todos",
    initialState: load(),
    reducers: {
        add: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, complate: false });
            localStorage.setItem("todos", JSON.stringify(state));
        },
        toggle: (state, action) => {
            const find = state.find((t) => t.id === action.payload);
            if (find) {
                find.complate = !find.complate;
            }
            localStorage.setItem("todos", JSON.stringify(state));
        },
        deleteTodo: (state, action) => {
            const newsState = state.filter((t) => t.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(newsState));
            return newsState;
        },
        edite: (state, action) => {
            const { id, newText } = action.payload;
            const editText = state.find((e) => e.id === id)
            if (editText) {
                editText.text = newText
            }
        }
    },
});

export const { add, toggle, deleteTodo ,edite } = TodosSlice.actions;
export default TodosSlice.reducer