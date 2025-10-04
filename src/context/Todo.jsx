import { createSlice } from "@reduxjs/toolkit";

const load = () => {
    const save = localStorage.getItem("todos");
    return save ? JSON.parse(save) : [];
}

const TodosSlice = createSlice({
    name: "todos",
    initialState: {
        items: load(),
        filtered: load(),
    },
    reducers: {
        add: (state, action) => {
            state.items.push({ id: Date.now(), text: action.payload, complate: false });
            localStorage.setItem("todos", JSON.stringify(state.items));
            state.filtered = state.items
        },
        toggle: (state, action) => {
            const find = state.items.find((t) => t.id === action.payload);
            if (find) {
                find.complate = !find.complate;
            }
            localStorage.setItem("todos", JSON.stringify(state.items));
            state.filtered = state.items;
        },
        deleteTodo: (state, action) => {
            const newsState = state.items.filter((t) => t.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(newsState));
            state.items = newsState;
            state.filtered = state.items;
            // return newsState;
        },
        edite: (state, action) => {
            const { id, newText } = action.payload;
            const editText = state.items.find((e) => e.id === id)
            if (editText) {
                editText.text = newText
            }
            localStorage.setItem("todos", JSON.stringify(state.items));

            state.filtered = state.items
        },
        search: (state, action) => {
            const query = action.payload.toLowerCase();
            console.log(query)
            state.filtered = (query.trim() === '') ?
                state.items
                : state.items.filter((t) => t.text.toLowerCase().includes(query))

        },
        delAll: (state)=>{
            state.items = [];
            state.filtered = state.items
            localStorage.removeItem('todos') 
        }

    },
});

export const { add, toggle, deleteTodo, edite, search ,delAll} = TodosSlice.actions;
export default TodosSlice.reducer