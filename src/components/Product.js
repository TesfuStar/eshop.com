import {useState} from 'react'
import {ShoppingCartIcon,MenuAlt1Icon,SearchIcon,StarIcon} from '@heroicons/react/solid'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartReducer'
const Max_Rate=5
const Min_Rate=1
const Product = ({item}) => {
  const navigate= useNavigate()
    const[rating]=useState( Math.floor(Math.random() *(Max_Rate - Min_Rate +1)) + Min_Rate)
  const dispach = useDispatch()
    const handleCart=(item)=>{
          dispach(addToCart(item))
          navigate('/cart')
      
    }
  return (
    <div className='flex flex-col m-4 p-5 bg-white shadow-lg cursor-pointer'>
,<Link to={`/product/${item._id}`}>
     <div className=" flex items-center justify-center cursor-pointer
        hover:scale-105 transition duration-600 ease-out">
     <img src={item.img} alt="Vercel Logo" 
     width={200} height={200}  className='hover:scale-105 duration-500 object-cover'/>
       </div>
     </Link>
     <h1 className='font-semibold text-md text-slate-900'>{item.title}</h1>
     <div className='flex'>
    {Array(rating).fill().map((_,i)=>(
      <StarIcon  className='h-4 text-yellow-500' key={i}/>
    ))}
     </div>
     <p className='font-semibold text-slate-900'>ETB {item.price}</p>
     <p className='text-xs p-1'>{item.description}</p>
     <button className='bg-gradient-to-b from-sky-700 to-sky-800 p-2 text-white text-sm font-semibold 
     rounded-sm focus:ring-2 focus:ring-sky-600 active:from-sky-600 
     transition duaration-700' onClick={()=>handleCart(item)}>Add to Cart</button>
    </div>
  )
}

export default Product