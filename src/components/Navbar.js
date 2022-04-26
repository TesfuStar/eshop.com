import React, { useState,useEffect } from 'react'
import {ShoppingCartIcon,MenuAlt1Icon,SearchIcon,MenuIcon} from '@heroicons/react/solid'
import {FaBars} from 'react-icons/fa'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import Categories from './Categories'
import { useSelector,useDispatch } from 'react-redux'
import { logouting } from '../Redux/userReducer'
import { logout } from '../Redux/authRequest'
import { publicRequest } from '../request'
import { createBrowserHistory } from 'history'

const Navbar = ({toggle}) => {
  const navigate= useNavigate()
 
  const [search,setSearch]=useState("")
  const userId = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = userId && JSON.parse(userId).currentUser;
  const id = currentUser?._id;

  const {cartQuantity} = useSelector(state=>state.cart )

  const name = useSelector((state)=>state.user.currentUser)
  const user = useSelector((state)=>state.user.currentUser?.accessToken)
  const username = user ? name.username : "signin"
  const dispach = useDispatch()
  const handleClick =(e)=>{
       e.preventDefault();
       logout(dispach);
       navigate('/')
  }



const handleSearch=async(e)=>{
  e.preventDefault();
  if(search.trim()){

    try{
  
      const productItems = await publicRequest.get(  `/product/search?searchQuery=${search}`);
      navigate(`/search?products=${search}`,{state:{data:productItems.data}})
      setSearch('')
     }catch(err){
       console.log(err)
  
     }
  }else{
    navigate('/')
  }
}


  return (
    <nav className=''>
     
    <div className=' bg-sky-700 flex flex-grow items-center py-2 p-1'>
     <div className='flex items-center flex-grow sm:flex-grow-0
      hover:cursor-pointer text-white mx-1 p-1 w-16 sm:w-32'>
      <Link to='/' >
     <img src="/logo.png" alt="Vercel Logo" width={120} height={40} />
      </Link>
     </div>
     <div className='hidden sm:flex items-center flex-grow cursor-pointer
      bg-red-500 hover:bg-red-600 rounded-[4px] h-12 shadow-lg'>
         <input type='search' placeholder='search products' value={search} onChange={(e)=>setSearch(e.target.value)}
          className='h-full w-4 flex-grow p-2 py-3 focus:outline-none rounded-l-[4px]'
          />
         <SearchIcon className='h-12 p-4 text-white ' onClick={handleSearch}/>
    
     </div>
     <div className=' flex flex-col group relative text-white text-xs p-2 mx-1 cursor-pointer hover:outline outline-1'>
     <p className='font-medium'>Hello,{ username}</p>
     <p className='font-semibold'>Account & orders</p>
     <div className='absolute bg-white shadow-lg top-12 z-50 right-0 hidden group-hover:flex group-hover:flex-col'>
      <div className='p-2 px-4 py-4'>
        {user ? <button  onClick={handleClick}
        className='bg-gradient-to-b from-red-600 
        to-red-500 p-1 px-20  text-white text-sm font-medium '>logout</button> :
        <Link to="/login">
         <button className='bg-gradient-to-b from-red-600 
        to-red-500 p-1 px-20  text-white text-sm font-medium '>signin</button>
          </Link>
          } 
        </div>
        <div className='flex flex-col   px-4'>
        <h2 className=' text-slate-600  text-[16px] text-center  font-semibold pb-2'>Your Account</h2>
        <div className='flex flex-col space-y-1'>

        <Link to={user ? `/account/${id}` : "/login"}>
          <h2 className=' text-slate-600 font-medium  text-[14px] hover:underline'>account</h2>
          </Link>
          <Link to={user ? `/order/${id}` : "/login"}>
          <h2 title={user ? "" :"sign in to see your orders"}
          className=' text-slate-600  font-medium  text-[14px] pb-3 hover:underline'>orders</h2>
          </Link>
        </div>
        </div>
     </div>
      </div>
     <Link to='/cart'>

     <div className='relative flex items-center px-2 mr-4 py-1 cursor-pointer hover:outline outline-1 text-white'>
        <ShoppingCartIcon className='h-10 text-white '/>
        <span className='absolute top-0 right-0 md:right-12 text-gray-700 font-semibold text-xs
          bg-yellow-400 rounded-full h-4 w-4 text-center'>{cartQuantity}</span>
         <span className='hidden sm:flex text-white font-medium text-xs sm:text-sm'>Basket</span>
     </div>
          </Link>
          <div className='flex sm:hidden cursor-pointer' onClick={toggle}>
          <FaBars size={25} className=' text-white mr-2 hover:animate-ping'/>
          </div>
    
    </div>
    {/* search */}
    <div  className='sm:hidden  bg-sky-700 flex flex-grow items-center py-2 p-1 '>
    <div className=' flex items-center flex-grow cursor-pointer
      bg-red-500 hover:bg-red-600 rounded-[4px] h-12 shadow-lg'>
         <input type='text' placeholder='search products' value={search} onChange={(e)=>setSearch(e.target.value)}
          className='h-full w-4 flex-grow p-2 py-3 focus:outline-none rounded-l-[4px]'
        //   onChange={(e)=>setFilter(e.target.value)}
          />
         <SearchIcon className='h-12 p-4 text-white ' onClick={handleSearch}/>
    
     </div>
    </div>
    <Categories />
    

    </nav>
  )
}

export default Navbar