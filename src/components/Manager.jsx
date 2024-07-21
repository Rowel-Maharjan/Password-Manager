import React, { useState } from 'react'
import { useRef } from 'react'



const Manager = () => {
    const [eyeOpen, setEyeOpen] = useState(true)
    const [togglePassword, setTogglePassword] = useState(true)
    const [form, setform] = useState({})

    const addPass = useRef()

    const savePassword = ()=>{

    }

    const handleChange = (e)=>{
        setform({...form, [e.target.name]:e.target.value})
        console.log(form)
    }

    const showPassword = () => {
        setEyeOpen(!eyeOpen)
        setTogglePassword(!togglePassword)
    }

    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

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
                    <input name='site' value={form.site?form.site:""} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1' type="text" />

                    <div className='container flex gap-3'>
                        <input name='username' value={form.username?form.username:""} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1 w-[80%]' type="text" />

                        <div className='relative flex items-center rounded-full border border-green-500 focus:outline-green-500 px-3 py-1 bg-white'>
                            <input name='password' value={form.password?form.password:""} onChange={handleChange} placeholder='Enter Password' className='w-[87%] outline-none bg-transparent' type={togglePassword ? "password" : "text"} />

                            <span className='cursor-pointer absolute right-2' onClick={showPassword}>
                                <img width={20} src={eyeOpen ? "/icons/eye.png" : "/icons/crosseye.png"} alt="eye" />
                            </span>
                        </div>
                    </div>


                    <button onClick={savePassword} onMouseDown={() => addPass.current.trigger = "in"} className='flex items-center justify-center border border-black bg-green-500 w-fit mx-auto rounded-full px-3 py-1 font-bold'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            delay="10"
                            ref={addPass}>
                        </lord-icon>
                        Add Password
                    </button>
                </div>

            </div >
        </>
    )
}

export default Manager
