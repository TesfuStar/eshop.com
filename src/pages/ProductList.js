import React, { useState } from 'react'
import {Categories,Products,Footer} from '../components'
import {useLocation} from 'react-router-dom'

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const[sort,setSort] = useState("latest")
  const[email,setEmail]=useState("")
  const handleSubscribe=(e)=>{
    e.preventDefault()
    setEmail("")
  }
  return (
<>

     <div className='mx-4 sm:max-w-6xl sm:mx-auto flex flex-wrap mt-10 ml-10 items-center justify-between'>
    <h2 className=" text-gray-400 text-xl font-bold">{cat}</h2>
    <div className='flex items-center justify-end '>
   {/* <h3 className='font-bold text-red-400 text-xl px-3'>Sort By</h3> */}
   <select name="" onChange={(e)=>setSort(e.target.value)}
    className='px-3 py-2 font-medium text-gray-500 bg-white border-blue-400 border-2'>
   <option value="latest" >latest</option>
   <option value="cheapest" >chepest</option>
   <option value="expensive">expensive</option>
   </select>
      </div>
   </div>
   <Products  cat={cat} sort={sort} />
   <div className="max-w-4xl mx-auto mt-10 ">
       <div className="my-2 flex-col  sm:flex sm:flex-row justify-between ">
      <div className="w-full flex-col py-2  px-4 ">
      <h2 className="font-semibold text-2xl text-gray-700">Stay Tuned in with Our Newsletter</h2>
      <p className="font-medium text-md text-gray-600">We hand-pick our favorites and send you the hottest deals every week</p>
       </div>

       <div className="w-full flex-col  px-4 flex-grow ">
           <form action="" onSubmit={handleSubscribe}>
        <input type="email" placeholder="Email adress" value={email} onChange={(e)=>setEmail(e.target.value)}
         className=" w-full border border-sky-600 px-4 py-2 flex-grow rounded-md  mb-1 
         focus:outline-1 outline-sky-500" required/>
               <button type='submit'
          className="w-full bg-gradient-to-b from-sky-600 
          to-sky-500 px-4 flex-grow
           py-2 text-white font-medium text-xl rounded-md ">subscribe</button>
          </form>
       </div>
     </div>
    </div>
   <Footer />
 </>
  )
}

export default ProductList