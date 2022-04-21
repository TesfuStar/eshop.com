import {useState} from 'react'
import axios from 'axios';
import {Categories,Products,Footer,Banner} from '../components'
const Home = () => {
  const[email,setEmail]=useState("")
  const handleSubscribe=(e)=>{
    e.preventDefault()
    setEmail("")
  }
  return (
    <div className="bg-gray-50">
     <Banner />
      <Products />

      {/* tay tunned news letter */}
      <div className="max-w-4xl mx-auto mt-10 ">
       <div className="my-2 flex-col  sm:flex sm:flex-row justify-between ">
      <div className="w-full flex-col py-2  px-4 ">
      <h2 className="font-bold text-2xl text-gray-800">Stay Tuned in with Our Newsletter</h2>
      <p className="font-semibold text-lg text-gray-800">We hand-pick our favorites and send you the hottest deals every week</p>
       </div>

       <div className="w-full flex-col  px-4 flex-grow ">
           <form action="" onSubmit={handleSubscribe}>
        <input type="email" placeholder="Email adress" value={email} onChange={(e)=>setEmail(e.target.value)}
         className=" w-full border border-sky-600 px-4 py-2 flex-grow rounded-md  mb-1 
         focus:outline-1 outline-sky-500" required/>
          <button type='submit'
          className="w-full bg-gradient-to-b from-sky-600 
          to-sky-500 px-4 flex-grow
           py-2 text-white font-semibold text-xl rounded-md ">subscribe</button>
          </form>
       </div>
     </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home