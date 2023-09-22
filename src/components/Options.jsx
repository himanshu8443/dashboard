import React from 'react'
import { bag, course, time, user, convert, category } from '../assets'

const Options = () => {
    return (
        <div>
            <div className=' grid grid-cols-3 gap-12 w-full mt-14 text-base font-medium text-gray-500'>
                <button className=' flex flex-col items-center justify-center hover:bg-gray-200 rounded-md px-2 p-1 '>
                    <img src={user} className=' w-[50px] h-[50px]' />
                    <p>All users</p>
                    <p>1200</p>
                </button>
                <button className=' flex flex-col items-center justify-center hover:bg-gray-200 rounded-md px-2 p-1 '>
                    <img src={convert} className=' w-[50px] h-[50px]' />
                    <p>Conversions</p>
                    <p>0</p>
                </button>
                <button className=' flex flex-col items-center justify-center hover:bg-gray-200 rounded-md px-2 p-1 '>
                    <img src={bag} className=' w-[50px] h-[50px]' />
                    <p>30 days sale</p>
                    <p>$400</p>
                </button>
                <button className=' flex flex-col items-center justify-center hover:bg-gray-200 rounded-md px-2 p-1 '>
                    <img src={time} className=' w-[50px] h-[50px]' />
                    <p>Avg time</p>
                    <p>300 min</p>
                </button>
                <button className=' flex flex-col items-center justify-center hover:bg-gray-200 rounded-md px-2 p-1 '>
                    <img src={course} className=' w-[50px] h-[50px]' />
                    <p>Courses</p>
                    <p>10</p>
                </button>
                <button className=' flex flex-col items-center justify-center hover:bg-gray-200 rounded-md px-2 p-1 '>
                    <img src={category} className=' w-[50px] h-[50px]' />
                    <p>Categories</p>
                    <p>5</p>
                </button>
            </div>
        </div>
    )
}

export default Options