import React from 'react'

const Navbar = () => {
    return (
        <div className=' bg-slate-900 text-white'>
            <nav className=' w-3/4 mx-auto flex justify-between py-3 items-center'>
                <div className='font-bold text-2xl hover:cursor-pointer'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </div>
                <ul className='flex gap-4'>
                    <a href="/" className='hover:font-bold'><li>Home</li></a>
                    <a href="#" className='hover:font-bold'><li>About</li></a>
                    <a href="#" className='hover:font-bold'><li>Contacts</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
