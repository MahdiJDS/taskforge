import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TodoItem from '../Components/TodoItem'
import { GiBackForth } from "react-icons/gi";

export default function FolderPage() {
    const { type } = useParams()
    const navigate = useNavigate()

    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col p-6'>
            <div className='flex gap-5 justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold capitalize text-blue-700'>{type} Tasks</h1>
                <button onClick={() => navigate(-1)} className='absolute top-0 left-0 m-5 bg-gray-300 px-3 py-1 rounded-md'><GiBackForth/></button>
            </div>

            <TodoItem folder={type} />
        </div>
    )
}
