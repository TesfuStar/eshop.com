import { MenuAlt3Icon, MenuAlt1Icon } from '@heroicons/react/solid'
import React from 'react'
import {Link} from 'react-router-dom'
const Categories = () => {
  return (
    <header >
    <div className='bg-sky-700 flex items-center text-white space-x-3 p-1 text-sm font-medium pl-5
    overflow-x-scroll scrollbar-hide whitespace-nowrap'>
{/* <p className='flex items-center  cursor-pointer hover:outline outline-1 p-1'>
<MenuAlt1Icon className='h-6 text-white mr-1'/>All </p> */}

<Link to="/products/menfashion" ><h2  className='flex items-center p-1 cursor-pointer 
 hover:outline outline-1'>men fashion</h2></Link>
<Link to="/products/womenfashion" ><h2  className='flex items-center p-1 cursor-pointer  hover:outline outline-1'>women's fashion</h2></Link>
<Link to="/products/kids" ><h2  className='flex items-center p-1 cursor-pointer  hover:outline outline-1'>kid's fashion</h2></Link>
<Link to="/products/watch" ><h2  className='flex items-center p-1 cursor-pointer  hover:outline outline-1'>watch's</h2></Link>
<Link to="/products/shoes" ><h2  className='flex items-center p-1 cursor-pointer  hover:outline outline-1'>shoes</h2></Link>

</div>
</header>
  )
}

export default Categories