import React from 'react'
import { PiTidalLogoDuotone } from 'react-icons/pi'
import { BiSolidKey } from 'react-icons/bi'

const EventLog = () => {
    return (
        <div className=' flex flex-col gap-2 bg-white p-2 rounded-md shadow-sm shadow-gray-500 w-full md:w-[900px] h-fit'>
            <div className=' flex justify-start items-center gap-2'>
                <PiTidalLogoDuotone size={20} />
                <p className=' text-lg font-medium'>Events log</p>
                <button className=' bg-primary py-1 px-2 rounded-full font-medium'>
                    see all
                </button>
            </div>
            <div className=' flex gap-2 items-center hover:bg-gray-300 rounded-sm p-1'>
                <div className=' flex justify-between w-full'>
                    <div className=' flex gap-1'>
                        <BiSolidKey size={20} />
                        <div className=' flex flex-col gap-1'>
                            <p className=' text-sm text-primary cursor-pointer'>Himanshu</p>
                            <p className=' text-xs'>Logged in</p>
                            <p className=' text-xs text-primary cursor-pointer'>more info</p>
                        </div>
                    </div>
                    <p className=' text-xs'>24 min</p>
                </div>
            </div>
        </div>
    )
}

export default EventLog