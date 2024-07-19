import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className='mx-auto w-3/4 mt-4'>
                <div className='flex flex-col items-center'>
                    <div className='font-bold text-3xl'>
                        <span className='text-green-700'>&lt;</span>
                        Pass
                        <span className='text-green-700'>OP/&gt;</span>
                    </div>
                    <p className='text-green-700'>Your own Password Manager</p>
                </div>
                
                <div className='container flex flex-col gap-4 mt-8 mx-auto '>
                    <input className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1' type="text" name="" id="" />
                    <div className='container flex gap-3'>
                        <input className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1' type="text" name="" id="" />
                        <input className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1' type="text" name="" id="" />
                    </div>
                    <button>Add Password</button>
                </div>
            </div>


        </>
    )
}

export default Manager
