import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
      <>
  


<div  className=" grid grid-cols-1 md:grid-cols-3 gap-y-10 px-12 md:px-32 py-16 bg-sky-700 ">
 
  <div className="flex items-center justify-center cursor-pointer" >
  <img src="/logo.png" alt="Vercel Logo" width={220} height={40} />
 </div>
  <div className="space-y-2 text-center">
 <h4 className='text-white hover:text-sky-600 duration-300  font-semibold '>  <Link to="/">About Us</Link></h4>
 <h4 className='text-white hover:text-sky-600 duration-300  font-semibold '>  <Link to="/">Terms & conditions</Link></h4>
 <h4 className='text-white hover:text-sky-600 duration-300  font-semibold '>  <Link to="/">Community guidelines</Link></h4>
 </div>
 <div className="space-y-2 text-center">
 <h4 className='text-white hover:text-sky-600 duration-300  font-semibold '>  <Link to="/cart">Cart</Link></h4>
 <h4 className='text-white hover:text-sky-600 duration-300  font-semibold '>  <Link to="/login">Log in</Link></h4>
 <h4 className='text-white hover:text-sky-600 duration-300  font-semibold '>  <Link to="/signup">Register</Link></h4>
 </div>


 </div>
  <div className="flex flex-col items-center justify-center bg-sky-700 pb-3">
    <h3 className='font-semibold text-gray-300'>follow us</h3>
<div className="flex  items-center justify-center ">
  <Link to="/" title='facebook'> <AiFillFacebook size={30} className='text-white hover:animate-bounce'/>
  </Link>
  <Link to="/" title='twiter'> <AiFillTwitterSquare size={30} className='text-white hover:animate-bounce'/></Link>
  <Link to="/" title='instagram'> <AiFillInstagram size={30} className='text-white hover:animate-bounce'/></Link>
  <Link to="/" title='linkedin'> <AiFillLinkedin size={30} className='text-white hover:animate-bounce'/></Link>
 </div>
 </div>
<div className='bg-sky-800'>

<h1 className="font-semibold text-sm text-gray-200 text-center p-1">Copyright © 2022 || All right reserved</h1>
</div>

</>
 
  )
}

export default Footer

