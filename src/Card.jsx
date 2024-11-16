import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Card = ({ color, text, edit, deleteHandler }) => {
    return (
        <>
            {/* <div style={{ backgroundColor: color }} className={`notes flex min-w-56 w-fit flex-col text-slate-800 rounded-lg p-2 relative`}>

                <div className='absolute top-2 right-2 gap-3'>
                    <button className='p-2 rounded-md bg-blue-500 hover:scale-110 hover:bg-blue-800 font-semibold' onClick={edit}><CiEdit /></button>
                    <button className='p-2 absolute top-2 left-2 rounded-md bg-red-600 hover:scale-110 hover:bg-red-800 font-semibold' onClick={deleteHandler}><MdDeleteOutline /></button>
                </div>

                <p>{text}</p>

            </div> */}

            <div style={{ backgroundColor: color }} className={`notes flex min-w-56 flex-col text-slate-800 rounded-lg p-2 relative`}>

                <button className='absolute top-1 left-2 p-2 rounded-md bg-blue-500 hover:text-xl smooth ease-in delay-1500 transition-all hover:bg-blue-800 font-semibold' onClick={edit}>
                    <CiEdit />
                </button>

                <button className='absolute top-1 right-2 p-2 rounded-md bg-red-600 hover:text-xl smooth ease-in delay-1500 transition-all hover:bg-red-800 font-semibold' onClick={deleteHandler}>
                    <MdDeleteOutline />
                </button>
                
                <div className='mt-6'>
                    <p className='font-medium italic'>{text}</p>
                </div>

            </div>
        </>
    )
}

export default Card
