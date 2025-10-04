import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, edite, toggle } from '../context/Todo'
import { CiEdit } from "react-icons/ci";
import EditInput from './EditInput'

export default function TodoItem({ todo }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <EditInput title={'new task'} isOpen={open} isClose={() => setOpen(false)} text={todo.text} todo={todo} type={'edit'}/>

            <li className={`w-52 flex items-center justify-between p-2 mt-2 duration-300 rounded-md ${todo.complate ? 'bg-green-400 -translate-x-8' : ' bg-blue-400'}`}>
                <div className='flex w-full flex-row justify-between items-center select-none'>
                    <span onClick={() => dispatch(toggle(todo.id))} className={` hover:opacity-80 cursor-pointer ${todo.complate ? 'opacity-100' : 'opacity-40'}`}>✅</span>
                    <p>{todo.text}</p>
                    <div className='flex gap-3 items-center'>
                        <span className='cursor-pointer' onClick={()=> setOpen(true)}><CiEdit /></span>
                        
                        <span onClick={() => dispatch(deleteTodo(todo.id))} className='cursor-pointer'>❌</span>
                    </div>
                </div>
            </li>
        </>
    )
}
