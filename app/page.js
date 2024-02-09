"use client"
import { MyContext } from '@/Helper/Context';
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// //Showing Flash messages
// const hello = () => {
//     const flashmessage = ()=>{
//         toast.success('🦄 Wow so easy!', {
//             position: "bottom-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark"
//             });
//     }
//     return ( <>
//     <div className="div p-10">
//         <button onClick={flashmessage} className='px-4 py-2 bg-green-600 rounded text-white'>Show flash messages</button>
//         <ToastContainer/>
//         </div>
//     </> );
// };
 
// export default hello;

//Context Api
const context = () => {
    const user = useContext(MyContext);
    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
}
 
export default context;