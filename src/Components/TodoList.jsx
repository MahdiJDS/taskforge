import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"


export default function TodoList() {
    const todos = useSelector((state) => state.todos.filtered)

    return (
        <div className="h-[50%] overflow-y-auto hide-scrollbar flex justify-center w-full">
            {todos.length === 0 ? (
                <p className="text-center mt-4 text-gray-500">No tasks yet 😴</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            )}

        </div>
    )
}
