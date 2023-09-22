import React from 'react'
import { hourglass } from '../assets'
import { AiOutlineDoubleRight } from 'react-icons/ai'

const Premium = () => {
    return (
        <div className=' flex flex-col gap-2 bg-white p-2 rounded-md shadow-sm shadow-gray-500 text-sm w-full md:w-[400px] h-fit bg-hero-pattern'>
            <div className=' flex justify-between w-full items-center gap-2'>
                <p className=' text-lg font-medium'>Trial Period</p>
                <img src={hourglass} className=' w-[40px] h-[40px]' />
            </div>
            <div className=' flex flex-col justify-center items-center rounded-full p-4 bg-primary w-24 h-24 border-2 border-white shadow'>
                <p className=' text-base text-white font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]'>30</p>
                <p className=' text-xs text-white font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]'>Days Left</p>
            </div>
            <div className=' flex justify-end w-full'>
                <button className=' bg-pink-500 hover:bg-pink-600 text-white py-1 px-2 rounded-full font-semibold text-sm flex gap-2'>
                    Upgrade to premium <AiOutlineDoubleRight size={20} />
                </button>
            </div>
        </div>
    )
}

export default Premium