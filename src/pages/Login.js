import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../Redux/authRequest'
const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [user,setUser]=useState(false);
  const [pass,setPass]=useState(false);

  const{isFeching,error}=useSelector((state)=>state.user)
const dispach = useDispatch()
  const handleClick =(e)=>{
    e.preventDefault();
        if(!username ){
          setUser(true)
        }
        if(!password){
          setPass(true)
        }
        else{

          login(dispach,{username,password})
          setPassword("")
          setUsername("")
        }
  }
  return (
    <div className='flex flex-cols items-center justify-center h-full mt-16'>
    <div className='flex flex-cols items-center justify-center w-full flex-1 text-center sm:px-20'>
      <main className='max-w-sm  flex-cols bg-white shadow-sm flex-grow p-5  m-1' >
      <h1 className='font-semibold text-lg text-gray-600'>Sign in to your account</h1>
    
      <input type="text" placeholder='username' value={username}
      onChange={(e)=>setUsername(e.target.value)}
      className='w-full border focus:outline-1
       border-gray-400 p-2 my-1 sm:my-1 outline-sky-500' required/>
     {user && <h3 className='text-xs text-red-500'> username is required</h3>}
      <input type="password" placeholder='Password' value={password}
      onChange={(e)=>setPassword(e.target.value)}
      className='w-full border focus:outline-1
      border-gray-400 p-2 my-1 sm:my-1 outline-sky-500' password/>
     {pass && <h3 className='text-xs text-red-500'> password is required</h3>}

      <button onClick={handleClick}
      className='bg-sky-700 p-2 text-white text-md font-medium 
 rounded-sm  w-full my-1 sm:my-2 py-3
 active:from-sky-600 transition duaration-700'>Sign in</button>
     {error && <h3 className='text-xs text-red-500'>something goes wrong</h3>}

   <Link to="/signup"><h1 className='font-normal text-sm text-gray-700 hover:underline cursor-pointer'>Don't have account create now?</h1>
   </Link>   
      </main>
      </div>
</div>
  )
}

export default Login