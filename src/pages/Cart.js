import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import { cartTotal, clearCart, decreaseCart, increaseCart } from '../Redux/cartReducer'

const Cart = ({openCheckout}) => {
  const cart = useSelector((state)=>state.cart)
  const user = useSelector((state)=>state.user.currentUser)
  const dispach= useDispatch()

  const handleIncrement=(cartItem)=>{
    dispach(increaseCart(cartItem))
  }

  const handleDecrement=(cartItem)=>{
    dispach(decreaseCart(cartItem))
  }

  const handeleClear=()=>{
    dispach(clearCart())
  }
  useEffect(()=>{
    dispach(cartTotal())
  },[cart,dispach])
  return (
      <>
    <div className='md:max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-center m-2 '>
    <div className="  mt-10   w-full">
        
           {cart.cartItems.length === 0 ? (
         
              <h3 className='text-center font-medium  py-20
              text-xl text-gray-600'>your cart is empty,please add some products</h3>
             ) :
             
              (<>
           
              
        <div className='flex-grow w-full'>
           <div className="flex flex-col p-5  w-full bg-white shadow-lg">
           <div className='flex items-center justify-center'>
          <button  onClick={handeleClear}
        className='bg-gradient-to-b from-sky-600 
        to-sky-500 p-1 px-20 
         text-white text-sm font-semibold '>Clear cart</button> 
        </div>
        
         {cart.cartItems?.map((cartItem)=>(
           
           <div className="flex items-center justify-between  p-2  my-2 border-y" key={cartItem._id}>
           <div  className=' flex items-center justify-center '>
               <div className=''>
                    <img src={cartItem.img}  height={200} width={200} 
            className='rounded-xl w-20 min-h-32  md:w-24   md:h-24 object-cover '/>
            </div>
          <div className="pl-2">
          <h2 className="text-gray-500 text-xs sm:text-lg font-semibold">{cartItem.title}</h2>
          {/* <p className="line-clamp-2 text-gray-500 text-sm font-medium ">{cartItem.description}</p> */}
          <h2 className="text-gray-600  text-sm font-bold">{cartItem.price}</h2>
          
       </div>
       
           </div>
    
       <div className='flex-col space-y-1 items-center text-right justify-end'>
         
         
       <h2 className="text-gray-700  text-sm font-bold">{cartItem.price * cartItem.cartQuantity}</h2>
       <div className='flex space-x-1'>
                      <button  onClick={()=>handleDecrement(cartItem)}
                      className='cursor-pointer  rounded-md justify-center items-center text-center
                      shadow-lg bg-sky-100 w-6 h-6 text-sky-600 font-bold'>-</button>
                      <span>{cartItem.cartQuantity}</span>
                      <button  onClick={()=>handleIncrement(cartItem)} 
                      className='cursor-pointer rounded-md  
                      shadow-lg bg-sky-100 w-6 h-6 text-sky-600 font-bold'>+</button>
                  </div>
                 
                      </div>
      
              </div>
          ))}
        
       
            </div>
            <Link to="/">
            <h2 className='font-bold text-lg p-3 text-red-500 
            cursor-pointer hover:underline'>continue shopping</h2>
            </Link>
           </div>
           </> )}
           </div>
         
        
          {/* right side*/}
           <div className= {cart.cartItems.length === 0 ? "hidden ":"bg-white shadow-xl md:w-96 flex flex-col flex-warp p-3 mr-3"}>
           <h2 className="flex font-bold text-2xl text-sky-600
           items-center justify-center">Order Summary</h2>
           <div className="flex flex-row justify-between items-center  my-1 ">
           <h2 className="flex text-md font-semibold text-gray-600">Subtotal</h2>
           <h2 className="flex text-md font-semibold text-gray-600">{cart.cartTotalAmount} ETB</h2>
           </div>
           <div className="flex flex-row justify-between items-center  my-1 ">
           <h2 className="flex text-md font-semibold text-gray-600">Shipping Cost</h2>
           <h2 className="flex text-md font-semibold text-gray-600">15 <span> ETB</span></h2>
           </div>
           <div className="flex flex-row justify-between items-center  my-1 ">
           <h2 className="flex text-md font-semibold text-gray-600">Total</h2>
           <h2 className="flex text-md font-semibold text-gray-600">{cart.cartTotalAmount + 15} ETB</h2>
           </div>
             <button title={user ? "checkout now" : "please sign in to checkout"} onClick={user ? openCheckout : ""}
             className={user ? "w-full bg-red-500  px-4 flex-grow py-2 text-white font-medium text-xl rounded-md ": "w-full cursor-not-allowed bg-red-500  px-4 flex-grow py-2 text-white font-semibold text-xl rounded-md "}>Checkout Now</button>
           </div>
        </div>
        <Footer />
        </>
  )
}

export default Cart