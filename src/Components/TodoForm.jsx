import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, delAll } from '../context/Todo';
import { toggleThem } from '../context/Them';

import Modal from './Modal';
import EditInput from './EditInput';

import { MdOutlineManageSearch } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function TodoApp({ folder }) {
    const [text, setText] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.them);

    const handleInput = (e) => {
        e.preventDefault();

        if (text.trim() === '') {
            setIsOpen(true);
            return;
        }

        dispatch(
            add({
                textA: text.trim(),
                folderA: folder,
            })
        );

        setText('');
    };

    return (
        <>
            <Modal
                title="Text Empty"
                text="Please add task"
                isopen={isOpen}
                isclose={() => setIsOpen(false)}
            />

            <EditInput
                title="Search"
                isOpen={isSearch}
                isClose={() => setIsSearch(false)}
                type="search"
            />

            <div className="w-full max-w-xl rounded-lg bg-gray-400 p-4 shadow-2xl">
                <h1 className="mb-6 text-center font-mono font-bold">
                    Form
                </h1>

                <div className="flex flex-wrap items-center gap-3">

                    {/* Search */}
                    <button
                        type="button"
                        onClick={() => setIsSearch(true)}
                        className="shrink-0 rounded-lg bg-gray-600 p-2 text-2xl text-white shadow-2xl hover:opacity-60"
                    >
                        <MdOutlineManageSearch />
                    </button>

                    {/* Theme */}
                    {theme === 'darkM' ? (
                        <button
                            type="button"
                            onClick={() => dispatch(toggleThem())}
                            className="shrink-0 rounded-lg bg-blue-950 p-2 shadow-2xl"
                        >
                            ☀️
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => dispatch(toggleThem())}
                            className="shrink-0 rounded-lg bg-gray-200 p-2 shadow-2xl"
                        >
                            🌙
                        </button>
                    )}

                    {/* Input */}
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleInput(e);
                            }
                        }}
                        placeholder="Add task ..."
                        className="
                            order-last
                            w-full
                            rounded-lg
                            p-2
                            text-center
                            outline-none
                            focus:ring-2
                            focus:ring-blue-400

                            sm:order-none
                            sm:min-w-0
                            sm:flex-1
                        "
                    />

                    {/* Add */}
                    <button
                        type="button"
                        onClick={handleInput}
                        className="
                            shrink-0
                            rounded-md
                            bg-blue-500
                            px-4
                            py-2
                            font-serif
                            shadow-2xl
                            duration-300
                            hover:-translate-y-1
                        "
                    >
                        Add
                    </button>

                    {/* Delete All */}
                    <button
                        type="button"
                        onClick={() => dispatch(delAll())}
                        className="
                            shrink-0
                            rounded-lg
                            p-2
                            text-2xl
                            text-red-700
                            shadow-2xl
                            hover:opacity-60
                        "
                    >
                        <FaRegTrashAlt />
                    </button>
                </div>
            </div>
        </>
    );
}
