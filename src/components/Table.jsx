import React from 'react'

const Table = ({ passwordArray }) => {
    return (
        <div className='mx-auto w-3/4 mt-4'>
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
                            return (
                                <tr key={index}>
                                    <td className='py-2 border border-white pl-2'><a href={item.site} target='__blank' className='text-blue-800 underline'> {item.site}</a></td>
                                    <td className='py-2 border border-white pl-2'>{item.username}</td>
                                    <td className='py-2 border border-white pl-2'>{item.password}</td>
                                </tr>)
                        }))}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}

export default Table
