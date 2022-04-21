import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { userRequest } from '../request'

import { Link } from 'react-router-dom'
import { updateUser } from '../Redux/authRequest'
const Account = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [message,setMessage]=useState(false);
    const [error,setError]=useState(false);
    const user = useSelector((state)=>state.user.currentUser)
    const users = user ? user.username : "signin"
    console.log(users)
    const id=user?._id;
const handleUpdate=async()=>{
  const user={username:username,email:email,password:password}
 
    try{
       await userRequest.put(`/user/${id}`,user)
      setMessage(true)
    }catch(err){
      setError(true)
    }
 
// setEmail("")
// setPassword("")
// setUsername("")
}
  return (
    <>
   <div className='flex flex-cols items-center justify-center h-full mt-10 p-5'>
    <div className='bg-white max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3   
     items-center  w-full flex-1 text-center '>
    <div className='space-y-2 justify-start'>
     <h1 className='font-semibold text-xl text-slate-600'>username: <span>{user && user.username }</span> </h1>
     <h1 className='font-semibold text-sm text-slate-600'>email: <span>{user && user.email }</span> </h1>
     {/* <h1 className='font-semibold text-lg text-slate-600'>username: <span>{user && user._id }</span> </h1> */}
    </div>
    
    <div className='col-span-2'>
       <main className='  flex-cols  shadow-sm flex-grow p-5  m-1' >
      <h1 className='font-bold text-lg text-gray-700'>Update your account</h1>
    
      <input type="text" placeholder='user name' value={username} onChange={(e)=>setUsername(e.target.value)}
      className='w-full border border-gray-400 p-2 my-1 sm:my-2 focus:outline-2 outline-sky-500' required/>
       <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}
      className='w-full border border-gray-400 p-2 my-1 sm:my-2 focus:outline-2 outline-sky-500' required/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}
       className='w-full border focus:outline-2 outline-sky-500
       border-gray-400 p-2 my-1 sm:my-2' required/>
       <button onClick={handleUpdate}
       className='bg-sky-700 p-2 text-white text-md font-semibold 
       rounded-sm  w-full my-1 sm:my-2 py-3
       active:from-sky-600 transition duaration-700'>Update</button>
     {error && <h3 className='text-xs text-red-500'>somthing goes wrong</h3>}
     {message && <h3 className='text-xs text-green-500'>successfully updated</h3>}
      </main>
       </div>   
        
      </div>
</div>
        
    </>
  )
}

export default Account