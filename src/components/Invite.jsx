import React from 'react'
import { FcInvite } from 'react-icons/fc'
import { useState } from 'react'
import Modal from './Modal/Modal'

const Invite = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className=' flex flex-col gap-2 bg-white p-2 rounded-md shadow-sm shadow-gray-500 text-sm w-full lg:w-[400px] h-fit bg-hero-pattern'>
            <div className=' flex justify-start items-center gap-2'>
                <FcInvite size={20} />
                <p className=' text-lg font-medium'>Invite your team</p>
            </div>
            <div className=' flex justify-center items-center'>
                <button onClick={() => { setShowModal(true) }} className=' bg-pink-500 hover:bg-pink-600 w-fit text-white text-lg py-1 px-4 rounded-full font-semibold'>
                    Invite
                </button>
            </div>
            {
                showModal ? <Modal setShowModal={setShowModal} /> : null
            }
        </div>
    )
}

export default Invite