import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { edite } from '../context/Todo';

export default function EditInput({ title, isOpen, isClose, text, todo }) {
    const dispatch = useDispatch()
    const [textN, setTextN] = useState(text)
    const handleEdite = () => {
        if (textN.trim() !== "") {
            dispatch(edite({ id: todo.id, newText: textN }));
            isClose();
        }
    };
    if (!isOpen) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start duration-300'>
            <div className='w-[90%] md:w-[35%] bg-blue-600 flex flex-col items-center p-6 rounded-lg gap-5 text-center shadow-2xl animate-fadeIn'>
                <h1 className='font-bold font-mono text-xl'>{title}</h1>
                <input type="text"
                    placeholder={text}
                    className='rounded-md outline-none ring-blue-300 focus:ring-2 text-center p-1'
                    onChange={(e) => setTextN(e.target.value)}
                />
                <button
                    onClick={handleEdite}
                    className='bg-blue-800 px-4 py-2  text-white rounded-lg shadow-2xl hover:-translate-y-1 duration-300 '>OK</button>
            </div>
        </div>
    )
}
