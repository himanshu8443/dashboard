import React from 'react'
import { user, face } from '../assets'

const NewUsers = () => {
    return (
        <div className=' flex flex-col gap-2 bg-white p-2 rounded-md shadow-sm shadow-gray-500 text-sm w-[800px] h-fit'>
            <div className=' flex justify-start items-center gap-2'>
                <img src={user} className=' w-[30px] h-[30px]' />
                <p className=' text-lg'>New users</p>
                <button className=' bg-primary py-1 px-2 rounded-full font-medium'>
                    see all
                </button>
            </div>
            <div className=' flex gap-2 items-center hover:bg-gray-300 rounded-sm'>
                <img src={face} className=' w-[30px] h-[30px]' />
                <div>
                    <p>Himanshu</p>
                    <p className=' text-xs'>24 min</p>
                </div>
            </div>
        </div>)
}

export default NewUsers