import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { userRequest } from '../request';

const Order = () => {
  const [order,setOrder]=useState([]);
 
  const user = useSelector((state)=>state.user.currentUser)
  const id = user?._id;
  useEffect(() => {
   const getOrder = async()=>{
     try{
       const res = await userRequest.get('/order/find/' + id)
       setOrder(res.data)
       
      }catch(err){
        console.log(err)
      }
   }
   getOrder()
 
  }, [id]);
  return (
    <>
     <div className='white shadow-lg md:max-w-lg md:mx-auto p-2 flex flex-col flex-grow m-2 mt-6'>
             <h1 className='text-center p-2 font-bold text-xl text-gray-700'>Your orders</h1>
            <div className='w-full flex flex-col flex-grow space-y-1'>
             {order.length ===0 ? (
              <h3 className='text-center font-semibold  py-20
              text-xl text-gray-700'>your havn't order any products</h3>
             ):(
               <>
            <h2 className='font-bold text-gray-700 text-xl'>customer: <span className='font-bold text-sky-600'>{user.username}</span></h2>

               {order?.map((item)=>(
                <div key={item._id}>
              {item.products.map((product)=>(
                <div key={product.productId}>
                 <h2 className='font-semibold text-gray-500'>product: 
                 <span className='font-bold text-sky-600'> {product.productName},</span> quantity: <span className='font-bold text-sky-600'> {product.quantity}</span></h2>
                </div>
              ))}
               <h2 className='text-gray-500 font-medium '>Amount:{item.amount}</h2>
               <h2 className='text-gray-500 font-medium '>address:{item.address}</h2>
               <h2 className='text-gray-500 font-medium '>status:{item.status}</h2>
              
              
               </div>
               ))}
               </>
             )}
            </div>
     </div>
       
    </>
  )
}

export default Order