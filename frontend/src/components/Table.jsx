import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Table = ({passwordArray, setPasswordArray, setform, focuses }) => {
    const [eyeOpen, setEyeOpen] = useState(false)
    const [togglePassword, setTogglePassword] = useState(false)

    const copyText = (text) => {
        toast.success('Copied to Clipboard', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text);
    }

    const showPassword = () => {
        setEyeOpen(!eyeOpen)
        setTogglePassword(!togglePassword)
    }


    // ----------------------Can Be Done In case of No UUIDV4 attached in form------------------------

    // const deleteText = (text, passIndex) => {
    //     let newPasswordArray = passwordArray.filter((item, index) => {
    //         return index !== passIndex
    //     })
    //     setPasswordArray(newPasswordArray)
    //     localStorage.setItem("passwords", JSON.stringify(newPasswordArray))

    // }

    // const editText = (text, passIndex) => {
    //     setform(text)
    //     let newPasswordArray = passwordArray.filter((item, index) => {
    //         return index !== passIndex
    //     })
    //     setPasswordArray(newPasswordArray)
    //     localStorage.setItem("passwords", JSON.stringify(newPasswordArray))
    // }



    // ----------------------Using UUIDV4------------------------
    const deleteText = async(text) => {
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            let res = await fetch(`http://localhost:3000/${text._id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            })
            let newPasswordArray = passwordArray.filter((item) => {
                return item._id !== text._id
            })
            setPasswordArray(newPasswordArray)
            // localStorage.setItem("passwords", JSON.stringify(newPasswordArray))
     
            toast.success('Password Deleted!', {
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
    }
    const editText = async(text) => {
        setform(text)
        let newPasswordArray = passwordArray.filter((item) => {
            return item._id !== text._id
        })
        setPasswordArray(newPasswordArray)
        if (focuses)
            focuses.current.focus()
    }

    return (
        <>
            <div className='mx-auto w-3/4 mt-4'>
                <div>
                    <div className='flex items-center gap-3 py-2'>
                        <h2 className='text-2xl font-bold'>Your Passwords</h2>
                        <div className='cursor-pointer' onClick={showPassword}>
                            <img width={25} src={eyeOpen ? "/icons/eye.png" : "/icons/crosseye.png"} alt="eye" />
                        </div>
                    </div>
                    {passwordArray.length === 0 && <div>No password to show.</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full text-left rounded-md overflow-hidden">
                        <thead className='text-white bg-green-700'>
                            <tr>
                                <th className='py-2 border border-white pl-2'>Site</th>
                                <th className='py-2 border border-white pl-2'>Username</th>
                                <th className='py-2 border border-white pl-2'>Password</th>
                                <th className='py-2 border border-white pl-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map(((item, index) => {
                                return (<tr key={index}>
                                    <td className='py-2 border border-white pl-2'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <a href={item.site} target='__blank' className='text-blue-800 underline'>{item.site}</a>
                                            </div>
                                            <div className='cursor-pointer pr-1' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                    style={{ "width": "20px", "height": "20px" }}>
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white pl-2'>
                                        <div className='flex justify-between'>
                                            <div>
                                            {togglePassword? item.username:"XXXXX"}
                                            </div>
                                            <div className='cursor-pointer pr-1' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                    style={{ "width": "20px", "height": "20px" }}>
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white pl-2'>
                                        <div className='flex justify-between'>
                                            <div>
                                                {togglePassword? item.password:"XXXXX"}
                                            </div>

                                            <div className='cursor-pointer pr-1' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                    style={{ "width": "20px", "height": "20px" }}>
                                                </lord-icon>
                                            </div>

                                        </div>
                                    </td>
                                    <td className='py-2 border border-white pl-2'>
                                        <div className='flex justify-left gap-2'>
                                            <div className='cursor-pointer' onClick={() => { editText(item) }}><lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "20px", "height": "20px" }}>
                                            </lord-icon></div>
                                            <div className='cursor-pointer' onClick={() => deleteText(item)}><lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "20px", "height": "20px" }}>
                                            </lord-icon></div>
                                        </div>
                                    </td>
                                </tr>)
                            }))}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Table

