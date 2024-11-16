import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Card = ({ color, text, edit, deleteHandler }) => {
    return (
        <>
            <div style={{ backgroundColor: color }} className={`notes flex min-w-56 w-fit flex-col text-slate-800 rounded-lg p-2 `}>

                <div className='flex gap-3 justify-end'>
                    <button className='p-2 rounded-md bg-blue-500 hover:scale-110 hover:bg-blue-800 font-semibold' onClick={edit}><CiEdit /></button>
                    <button className='p-2 rounded-md bg-red-600 hover:scale-110 hover:bg-red-800 font-semibold' onClick={deleteHandler}><MdDeleteOutline /></button>
                </div>

                <p>{text}</p>

            </div>
        </>
    )
}

export default Card
