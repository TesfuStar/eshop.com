import React, { useEffect, useState } from 'react'
import {FaLongArrowAltLeft,FaMoneyBillAlt,FaTimes} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { orderProduct } from '../Redux/authRequest'
import { addToOrder,orderFailed } from '../Redux/orderReducer'
import { useLocation } from "react-router-dom";
import { userRequest } from '../request'
const Checkout = ({checkoutBill,openCheckout}) => {
 
  const cart = useSelector((state)=>state.cart)
  const user = useSelector((state)=>state.user.currentUser)
  const amount = cart.cartTotalAmount + 15;
  const [address,setAddress]=useState("");
  const [name,setName]=useState("");
  const [phoneNumber,setPhoneNumber]=useState('');
    const [message,setMessage]=useState(false);
    const [error,setError]=useState(false);
    const handleClick=async()=>{
      const orderItems={ userId: user._id, phoneNo:phoneNumber, name:name,  products: cart.cartItems.map((item) => ({
        productId: item._id,
        productName:item.title,
        quantity: item.quantity,
      })),  amount:amount, address:address}
      
        try{
           await userRequest.post('/order',orderItems)
          setMessage(true)
        }catch(err){
          setError(true)
        }
  
     
    }
  return (
    <div className={checkoutBill ?  'fixed top-0 z-50 overflow-hidden w-screen min-h-screen bg-slate-500/90' : 'hidden'}>

    <div 
    className='relative  top-20    items-center justify-center text-center sm:max-w-md sm:mx-auto bg-white rounded-lg shadow-xl px-5 mx-2 mr-3 '>
           <div onClick={openCheckout}
           className=' absolute  flex justify-center rounded-lg cursor-pointer
            w-9 h-9 hover:bg-green-50 right-3 top-5 items-center border-white
            active:border-red-400 focus:outline-none focus:ring focus:ring-red-400'>
           <FaTimes size={25} className='text-gray-700  '/>
           </div>
        <div className='flex flex-col items-center space-y-3 my-5 py-10'>
            <div className='flex flex-col items-center space-y-1'>

            <h1 className='font-semibold text-slate-700 text-xl'>Order now</h1>
            <h2 className="flex text-md font-medium text-gray-600">Total:{amount} ETB</h2>
            </div>
            <input type="text" placeholder='Your name' value={name}  onChange={(e)=>setName(e.target.value)}
             className=' border focus:outline-1
             border-gray-400 p-2 my-1 sm:my-2 outline-sky-500 w-4/5'/>
            <input type="number" placeholder='Your Phone' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
              className=' w-4/5 border focus:outline-1
              border-gray-400 p-2 my-1 sm:my-2 outline-sky-500'/>
              
           <textarea name=""  placeholder='Your address' value={address} onChange={(e)=>setAddress(e.target.value)}
            className=' border focus:outline-1
            border-gray-400 p-2 my-1 sm:my-2 outline-sky-500 w-4/5'
           id="" cols="30" rows="2"></textarea>
            <div  className=' flex   cursor-text space-x-2 items-center justify-start'>
                  <FaMoneyBillAlt size={25} className='text-pink-600  '/>
                  <p className=' font-normal text-gray-400 text-lg'>cash at delivery</p>
                  </div>
            <button onClick={handleClick}
            className='bg-gradient-to-b from-sky-600 
          to-sky-500 w-[80%] font-medium p-2 
            text-white text-lg rounded-md '>Submit Order</button>
             {error && <h2 className='flex duration-300 text-xs text-red-600'>please log in again</h2>}
            
             { message && <h2 className='flex duration-300'>Your order is successfully submitted</h2>}
        </div>
      </div>
        
    </div>
  )
}

export default Checkout


//  const dispach=useDispatch()
//   const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
//     const id = currentUser?._id;
//     const cart = useSelector((state)=>state.cart)
//     const amount = cart.cartTotalAmount + 15;
//     const cartItems=cart.cartItems
//     console.log(cartItems)
//     const [address,setAddress]=useState("");
//     const [message,setMessage]=useState(false);
//     const handleClick=()=>{
//         setMessage(true)
//         orderProduct(dispach,{amount,address})
//     }