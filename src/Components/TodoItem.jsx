import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggle } from '../context/Todo'
import { CiEdit } from "react-icons/ci";
import TodoForm from './TodoForm'
import EditInput from './EditInput'

export default function TodoItem({ folder }) {
    const [open, setOpen] = useState(false)
    const [selectedTodo, setSelectedTodo] = useState(null)
    const dispatch = useDispatch()

    const allTodos = useSelector((state) => state.todos.filtered)

    const todos = useMemo(() => {
        return allTodos.filter(t => t.folder === folder)
    }, [allTodos, folder])

    return (
        <>
            <TodoForm folder={folder} />

            {open && selectedTodo && (
                <EditInput
                    isOpen={open}
                    isClose={() => setOpen(false)}
                    todo={selectedTodo}
                    type="edit"
                />
            )}

            <ul className='mt-4 w-60'>
                {todos.length === 0 && (
                    <p className="text-gray-500 text-sm text-center">Not task yet!😥</p>
                )}
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`flex items-center justify-between p-2 mt-2 duration-300 rounded-md ${todo.complate ? 'bg-green-400 -translate-x-2' : 'bg-blue-400'}`}
                    >
                        <div className='flex w-full flex-row justify-between items-center select-none'>
                            <span
                                onClick={() => dispatch(toggle(todo.id))}
                                className={`hover:opacity-80 cursor-pointer ${todo.complate ? 'opacity-100' : 'opacity-40'}`}
                            >
                                ✅
                            </span>

                            <p className={`${todo.complate ? 'line-through text-gray-800' : ''}`}>
                                {todo.text}
                            </p>

                            <div className='flex gap-3 items-center'>
                                <span
                                    className='cursor-pointer'
                                    onClick={() => {
                                        setSelectedTodo(todo)
                                        setOpen(true)
                                    }}
                                >
                                    <CiEdit />
                                </span>

                                <span
                                    onClick={() => dispatch(deleteTodo(todo.id))}
                                    className='cursor-pointer'
                                >
                                    ❌
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
