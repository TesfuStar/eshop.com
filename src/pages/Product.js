import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {Footer} from '../components'
import { addToCart } from '../Redux/cartReducer';
import { publicRequest } from '../request';
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [product,setProduct]=useState({})
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispach=useDispatch()
  const navigate = useNavigate()
  const handleAddproduct=(product)=>{
    dispach(addToCart(product))
    navigate('/cart')
  }

  useEffect(() => {
    const getProduct = async()=>{
      try{

        const getItem = await publicRequest.get('/product/find/' + id);
        setProduct(getItem.data)
      


      }catch(err){
        console.log(err)

      }
     
    }
    getProduct();
  }, [id])
  return (
    <>
<div className="  mx-3 md:max-w-5xl md:mx-auto grid shadow-lg
     grid-cols-1 md:grid-cols-2 justify-center items-center rounded-2xl my-20 h-auto">
         <div  className='h-auto   items-center 
           justify-center'>
       
           

                <img src={product.img} alt="" 
                 className='flex items-center justify-center rounded-xl w-full h-full object-contain' />
                
        </div>
       <div  className='relative  px-3 flex flex-col h-full 
        pt-8 rounded-b-2xl lg:rounded-2xl  '>
       
       <div className='flex flex-col w-full h-full  px-3 lg:px-5 space-y-2 my-3'>
       <h1 className='flex text-gray-600 text-4xl font-semibold md:pb-2'>{product.title}</h1>
          <p className='  font-bold text-xl text-gray-600'>
           <span className='text-2xl font-bold text-gray-700'>{product.price} ETB</span> </p>
           <p className='text-slate-700 font-normal'>{product.description} </p>
          
          <div className='flex w-full space-x-2'>
         <button onClick={()=>handleAddproduct(product)}
          className="w-full bg-gradient-to-b from-sky-600 
          to-sky-500
             flex-grow py-2 text-white font-medium text-xl rounded-md ">Add to bag</button>
             </div>
            </div>        
       </div>
       </div>
       <Footer />
      </>
  )
}

export default Product