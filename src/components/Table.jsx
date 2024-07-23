import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = ({ passwordArray }) => {
    const copyText = (text) => {
        toast.success('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
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
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
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
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
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
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                    style={{ "width": "20px", "height": "20px" }}>
                                                </lord-icon>
                                            </div>
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
