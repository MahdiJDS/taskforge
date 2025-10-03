import { add } from '../context/Todo';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { toggleThem } from '../context/Them';


export default function TodoApp() {
    const [text, setText] = useState("");
    const [isopen, setIsopen] = useState(false)
    const dispatch = useDispatch()
    const them = useSelector((state) => state.them)

    const handleInput = (e) => {
        e.preventDefault();
        if (text.trim() === '') {
            // alert('please add task')
            setIsopen(true)
        } else {
            dispatch(add(text))
            setText('')
        }
    }



    return (
        <>
            <Modal title={'text Empty'} text={'please add task'} isopen={isopen} isclose={() => setIsopen(false)} />

            <div className='shadow-2xl bg-gray-400 flex flex-col items-center justify-center w-[30%] p-4 space-y-6 rounded-lg' >

                <h1 className='font-mono font-bold'>Form</h1>
                <div className=' flex flex-col justify-center items-center md:flex-row'>
                    {them === 'darkM' ? (
                        <span className='cursor-pointer p-2 shadow-2xl bg-blue-950 rounded-lg' onClick={() => dispatch(toggleThem())}>☀️</span>
                    ) : (
                        <span className='cursor-pointer p-2 shadow-2xl bg-gray-200 rounded-lg' onClick={() => dispatch(toggleThem())}>🌙</span>
                    )}
                    <input type="text"
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleInput(e)}
                        value={text}
                        placeholder='Add task ...'
                        className='w-[90%] p-2 rounded-lg 
                    text-center
                    outline-none focus:ring-2 focus:ring-blue-400 m-3'
                    />
                    <button onClick={handleInput} className='bg-blue-500  p-1 rounded-md font-serif shadow-2xl hover:-translate-y-1 duration-300'>Add</button>
                </div>

            </div>
        </>
    )
}
