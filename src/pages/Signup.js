import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { register } from '../Redux/authRequest'
const Signup = () => {
  const navigate = useNavigate()
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [use,setUse]=useState(false);
  const [mail,setMail]=useState(false);
  const [pass,setPass]=useState(false);

  const dispach = useDispatch()
  const {isFetching,error}= useSelector((state)=>state.user)
  console.log(isFetching)
  const handleClick =(e)=>{
    e.preventDefault();

    if(!username){
      setUse(true)
    }
    if(!email){
      setMail(true)
    }
    if(!password){
      setPass(true)
    }
    else{

      register(dispach,{username,email,password})
      setPassword("")
      setUsername("")
      setEmail("")
      navigate('/login')
    }
}
  return (
    <div className='flex flex-cols items-center justify-center h-full mt-10'>
    <div className='flex flex-cols items-center justify-center w-full flex-1 text-center sm:px-20'>
      <main className='max-w-sm  flex-cols bg-white shadow-sm flex-grow p-5  m-1' >
      <h1 className='font-semibold text-lg text-gray-600'>Create account</h1>
      <input type="text" placeholder='user name' value={username} onChange={(e)=>setUsername(e.target.value)}
      className='w-full border border-gray-400 p-2 my-1 sm:my-1 focus:outline-2 outline-sky-500' required/>
     {use && <h3 className='text-[11px] text-red-500'> username is required</h3>}
       
       <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}
      className='w-full border border-gray-400 p-2 my-1 sm:my-1 focus:outline-2 outline-sky-500' required/>
     {mail && <h3 className='text-[11px] text-red-500'> email is required</h3>}
      
      <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}
       className='w-full border focus:outline-2 outline-sky-500
       border-gray-400 p-2 my-1 sm:my-1' required/>
     {pass && <h3 className='text-[11px] text-red-500'> password is required</h3>}

       <button onClick={handleClick} disabled={isFetching}
       className='bg-sky-700 p-2 text-white text-md font-medium 
     rounded-sm  w-full my-1 sm:my-2 py-3
      active:from-sky-600 transition duaration-700'>Sign in</button>
       {error && <p className='text-[11px] text-red-500'>something went wrong</p>}
   <Link to="/login"><h1 className='font-normal text-sm text-gray-700 hover:underline 
   cursor-pointer'>Already have account</h1>
   </Link>   
      </main>
      </div>
</div>
  )
}

export default Signup