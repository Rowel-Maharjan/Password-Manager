import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useForm } from "react-hook-form"


const React_form_hook = () => {
    const [eyeOpen, setEyeOpen] = useState(true)
    const [togglePassword, setTogglePassword] = useState(true)
    const [passwordArray, setPasswordArray] = useState([])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        let values = localStorage.getItem("passwords")
        if(values){
            setPasswordArray(JSON.parse(values))
        }
        
    }, [])
    
    const onSubmit = (data) =>{
        setPasswordArray([...passwordArray,data])
        localStorage.setItem("passwords",JSON.stringify([...passwordArray,data]));
        console.log([...passwordArray,data])
    } 
        

    const addPass = useRef()

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

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='container flex flex-col gap-4 mt-8 mx-auto '>
                        <input {...register("site", { required: true })} placeholder='Enter website URL' className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1' type="text" />

                        <div className='container flex gap-3'>
                            <input {...register("username", { required: true })} placeholder='Enter Username' className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1 w-[80%]' type="text" />

                            <div className='relative flex items-center rounded-full border border-green-500 focus:outline-green-500 px-3 py-1 bg-white'>
                                <input {...register("password", { required: true })} placeholder='Enter Password' className='w-[87%] outline-none bg-transparent' type={togglePassword ? "password" : "text"} />

                                <span className='cursor-pointer absolute right-2' onClick={showPassword}>
                                    <img width={20} src={eyeOpen ? "/icons/eye.png" : "/icons/crosseye.png"} alt="eye" />
                                </span>
                            </div>
                        </div>


                        <button onMouseDown={() => addPass.current.trigger = "in"} className='flex items-center justify-center border border-black bg-green-500 w-fit mx-auto rounded-full px-3 py-1 font-bold'>
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                delay="10"
                                ref={addPass}>
                            </lord-icon>
                            Add Password
                        </button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default React_form_hook
