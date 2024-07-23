import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Table = ({ passwordArray, setPasswordArray, setform, focuses }) => {
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
    const deleteText = (text) => {
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            let newPasswordArray = passwordArray.filter((item) => {
                return item.id !== text.id
            })
            setPasswordArray(newPasswordArray)
            localStorage.setItem("passwords", JSON.stringify(newPasswordArray))
        }
        toast.success('Delete Successful', {
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
    const editText = (text) => {
        setform(text)
        let newPasswordArray = passwordArray.filter((item) => {
            return item.id !== text.id
        })
        setPasswordArray(newPasswordArray)
        if(focuses)
            focuses.current.focus()
    }

    return (
        <>
            <div className='mx-auto w-3/4 mt-4 mb-20'>
                <div>
                    <h2 className='text-2xl font-bold py-2'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No password to show.</div>}
                    {passwordArray.length !== 0 && <table className="table-fixed w-full text-left rounded-md overflow-hidden">
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
                                                {item.username}
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
                                                {item.password}
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
