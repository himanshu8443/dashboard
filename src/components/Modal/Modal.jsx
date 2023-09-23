import React from 'react'
import { useState } from 'react'
import Chart from './Chart'
import './Model.css'
import { IoCloseSharp } from 'react-icons/io5'

const Modal = ({ setShowModal }) => {
    const basePrice = 10;
    const durationMultiplier = 2;
    const [noOfInvites, setNoOfInvites] = useState(1)
    const [duration, setDuration] = useState(30)
    const [cost, setCost] = useState(basePrice * noOfInvites + durationMultiplier * duration)
    return (
        <div className=' fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <div className=' bg-white p-4 rounded-md shadow-md'>
                <div className=' flex justify-between items-center w-[80vw] md:w-[700px]'>
                    <h1 className=' text-3xl font-bold'>Invite your team</h1>
                    <button
                        onClick={() => { setShowModal(false) }}
                        className=' font-medium text-gray-500'><IoCloseSharp size={30} /></button>
                </div>
                <div className='flex flex-col md:flex-row gap-8 justify-between items-center mt-10'>
                    <div className='flex flex-col gap-8 justify-center items-starts'>
                        <div className='flex gap-5 justify-center items-center'>
                            <label className=' text-xl font-medium whitespace-nowrap'>Full Name</label>
                            <input placeholder='Your Name' type='text' className=' placeholder:text-lg placeholder:mx-auto p-2 border-b-2 border-gray-800 ' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-7 justify-between items-center'>
                                <label className=' text-xl font-medium whitespace-nowrap'>No. of Invites</label>
                                <p className=' text-xl font-medium mr-5 border-dotted border-gray-400 border-2 px-2 py-1 rounded-md'>{noOfInvites}</p>
                            </div>
                            <input type='range' min={1} max={500} value={noOfInvites}
                                onChange={(e) => { setNoOfInvites(e.target.value); setCost(e.target.value * basePrice + durationMultiplier * duration) }}
                                className=' w-full p-2 border-2 border-gray-300 rounded-md win10-thumb' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-7 justify-between items-center'>
                                <label className=' text-xl font-medium whitespace-nowrap'>Duration</label>
                                <p className=' text-xl font-medium mr-5 border-dotted border-gray-400 border-2 px-2 py-1 rounded-md'>{duration} min</p>
                            </div>
                            <input type='range' min={30} max={240} value={duration}
                                onChange={(e) => { setDuration(e.target.value); setCost(e.target.value * durationMultiplier + noOfInvites * basePrice) }}
                                className=' w-full p-2 border-2 border-gray-300 rounded-md win10-thumb' />
                        </div>
                        <div className='flex flex-col gap-2 ml-4'>
                            <div className=' gap-8 justify-between items-center flex'>
                                <label className=' text-lg font-medium whitespace-nowrap'>Duration Cost</label>
                                <p className=' text-lg font-medium mr-5'>₹ {durationMultiplier * duration}</p>
                            </div>
                            <div className=' gap-8 justify-between items-center flex'>
                                <label className=' text-lg font-medium whitespace-nowrap'>Invitation Cost</label>
                                <p className=' text-lg font-medium mr-5'>₹ {basePrice * noOfInvites}</p>
                            </div>
                            <div className='flex gap-8 justify-between items-center'>
                                <label className=' text-xl font-medium whitespace-nowrap '>Total Cost</label>
                                <input readOnly type='text' value={'₹ ' + cost} className=' w-20 text-lg p-2 border-2 border-gray-300 rounded-md mr-4' />
                            </div>
                        </div>
                    </div>
                    <Chart invitationCost={basePrice * noOfInvites} durationCost={durationMultiplier * duration} />
                </div>
                < div className='flex justify-center items-center'>
                    <button className=' bg-pink-500 active:bg-pink-600 text-white text-lg font-medium py-2 px-4 rounded-md mt-8'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Modal