import React from 'react'
import { MdOutlineWorkOutline } from "react-icons/md";
import { CiRoute } from "react-icons/ci";
import { PiStudentLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';


export default function FolderList() {

    const navigate = useNavigate();

    const folders = [
        { type: 'Work', icon: MdOutlineWorkOutline },
        { type: 'Routine', icon: CiRoute },
        { type: 'Study', icon: PiStudentLight },
    ];

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center gap-12'>
            <h1 className='text-2xl font-mono text-teal-900 font-extrabold'>Select target filder :</h1>
            <div className='text-center flex  justify-center gap-6 flex-wrap'>
                {folders.map((folder, index) => (
                    <div
                        key={index}
                        className='w-56 border border-blue-900 rounded-lg px-4 py-3 flex flex-col items-center hover:scale-105 transition-transform duration-200 shadow-md cursor-pointer bg-white'
                        onClick={()=> navigate(`/folder/${folder.type}`)}
                    >
                        <folder.icon size={30} className='text-blue-700 mb-2' />
                        <h2 className='font-semibold text-gray-700'>{folder.type}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
