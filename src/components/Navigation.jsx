import React from 'react'

const Navigation = () => {
    return (
        <div className=' flex gap-4 bg-white p-2 rounded-t-md shadow-md shadow-gray-800  '>
            <h1 className=' text-xl font-medium'>
                Dashboard
            </h1>
            <button className=' bg-gray-400 text-white py-1 px-2 rounded-full font-medium'>
                <p className=' text-xs'>+ Add widget</p>
            </button>
        </div>
    )
}

export default Navigation