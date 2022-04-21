import React from 'react'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
const Dropdown = ({toggle,isOpen}) => {
  return (
    <div className={isOpen ? 'sticky top-0 h-screen  z-50 grid grid-cols-1 gap-5 bg-sky-700 text-center space-y-3 py-5' : 'hidden'}
    onClick={toggle}>
           <div className='absolute cursor-pointer right-5 top-5' onClick={toggle}>
          <FaTimes size={25} className=' text-white mr-2'/>
          </div>
      <div    div className='flex flex-col items-center  space-y-5 pt-20 h-full'>

        <Link to='/' className='font-semibold text-lg text-white'>Home</Link>
        <Link to='/login' className='font-semibold text-lg text-white'>Login</Link>
      </div>

    </div>
  )
}

export default Dropdown