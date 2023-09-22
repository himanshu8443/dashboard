import React from 'react'
import { FaBlog } from 'react-icons/fa'

const CoursesBlog = () => {
    return (
        <div className=' flex items-start flex-col gap-2 bg-white p-4 rounded-md shadow-sm shadow-gray-500 text-sm md:w-[1000px]'>
            <div className=' flex gap-2 justify-center items-center text-lg'>
                <FaBlog />
                <p className=' font-medium'>How to sell courses blog</p>
                <button className=' bg-primary py-1 px-2 rounded-full font-medium text-sm'>
                    see all
                </button>
            </div>
            <ul className=' flex flex-col gap-2 list-disc text-[#62b9b1] list-outside '>
                <li className=' w-full list-item ml-3'>
                    <div className=' flex justify-between pr-5'>
                        <p className=' max-w-[80%] hover:underline cursor-pointer'>
                            Blended learning. what is it and how to implement it.
                        </p>
                        <p className=' text-gray-400'>1 min</p>
                    </div>
                </li>
                <li className=' w-full list-item ml-3'>
                    <div className=' flex justify-between pr-5'>
                        <p className=' max-w-[80%] hover:underline cursor-pointer'>
                            Join the course creation challenge [Free 5-day course!]
                        </p>
                        <p className=' text-gray-400'>40 min</p>
                    </div>
                </li>
                <li className=' w-full list-item ml-3'>
                    <div className=' flex justify-between pr-5'>
                        <p className=' max-w-[80%] hover:underline cursor-pointer'>
                            12 steps to creating awesome live classes in 2023
                        </p>
                        <p className=' text-gray-400'>2 hours</p>
                    </div>
                </li>
                <li className=' w-full list-item ml-3'>
                    <div className=' flex justify-between pr-5'>
                        <p className=' max-w-[80%] hover:underline cursor-pointer'>
                            Guy Kawasaki: on how to create a great course in 2023
                        </p>
                        <p className=' text-gray-400'>2 days</p>
                    </div>
                </li>
                <li className=' w-full list-item ml-3'>
                    <div className=' flex justify-between pr-5'>
                        <p className=' max-w-[80%] hover:underline cursor-pointer'>
                            How to create a course that sells itself and increases your user base
                        </p>
                        <p className=' text-gray-400'>4 days</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CoursesBlog