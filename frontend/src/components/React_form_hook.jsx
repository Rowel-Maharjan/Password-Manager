import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useForm } from "react-hook-form"
import Table from './Table'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const React_form_hook = () => {
    const [eyeOpen, setEyeOpen] = useState(false)
    const [togglePassword, setTogglePassword] = useState(false)
    const [passwordArray, setPasswordArray] = useState([])

    const {
        register,
        handleSubmit,
        watch,
        reset, // This is used to reset the value
        formState: { errors },
    } = useForm()

    const getPassword = async () => {
        let req = await fetch("http://localhost:3000/");
        let passwords = await req.json()
        //-----------------------For Local Storage----------------------
        // let passwords = localStorage.getItem("passwords"); 
        // if (passwords) {
        //     setPasswordArray(JSON.parse(passwords))
        // }
        setPasswordArray(passwords);
    }

    useEffect(() => {
        getPassword()

    }, [])

    const onSubmit = async (data) => {
        console.log(data)

        if (data._id === undefined) {
            let res = await fetch("http://localhost:3000/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            let datas = await res.json()
            setPasswordArray([...passwordArray, datas])
        }
        else {
            const { site, username, password } = data
            await fetch(`http://localhost:3000/${data._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ site, username, password })
            })
            setPasswordArray([...passwordArray, data])
        }
        
        // setPasswordArray([...passwordArray, { ...data, id: uuidv4() }]) 
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...data, id: uuidv4() }]));
        
        reset({ site: "", username: "", password: "" }); //Reset the value from the form
        toast.success('Password Saved', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const addPass = useRef()

    const showPassword = () => {
        setEyeOpen(!eyeOpen)
        setTogglePassword(!togglePassword)
    }
    return (
        <>
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
                        <input {...register("site", { required: true, minLength: 3 })} placeholder='Enter website URL' className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1' type="text" />

                        <div className='container flex flex-col md:flex-row gap-4'>
                            <div className='w-full'>
                                <input {...register("username", { required: true, minLength: 3 })} placeholder='Enter Username' className='rounded-full border border-green-500 focus:outline-green-500 px-4 py-1 w-full' type="text" />

                            </div>

                            <div className='relative flex items-center rounded-full border border-green-500 focus:outline-green-500 px-3 py-1 bg-white'>
                                <input {...register("password", { required: true, minLength: 3 })} placeholder='Enter Password' className='w-[87%] outline-none bg-transparent' type={togglePassword ? "text" : "password"} />

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


            <Table passwordArray={passwordArray} setPasswordArray={setPasswordArray} setform={reset} />
        </>
    )
}

export default React_form_hook

//////