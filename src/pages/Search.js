import {useState} from 'react'
import {Link,useLocation} from 'react-router-dom'
import {ShoppingCartIcon,MenuAlt1Icon,SearchIcon,StarIcon} from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/cartReducer'
import { Footer } from '../components'

const Max_Rate=5
const Min_Rate=1
const Search = () => {
  const[rating]=useState( Math.floor(Math.random() *(Max_Rate - Min_Rate +1)) + Min_Rate)
  const location = useLocation();
  const data = location.state.data;

  const dispach = useDispatch()
    const handleCart=(item)=>{
          dispach(addToCart(item))
      
    }
  return (
    <>
    <div className='max-w-7xl mx-auto'>
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {data.length === 0 ? (

     
          <h1 className='text-center font-semibold  py-20 mb-10
          text-xl text-gray-700 '>no products found</h1>
       
      ):(
        data.map((item)=>(
        <div className='flex flex-col m-4 p-5 bg-white shadow-lg cursor-pointer' key={item._id}>
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
             <p className='font-semibold text-slate-900'>{item.price}</p>
             {/* <p className='text-xs p-1'>{item.description}</p> */}
             <button className='bg-gradient-to-b from-sky-700 to-sky-800 p-2 text-white text-sm font-semibold 
             rounded-sm focus:ring-2 focus:ring-sky-600 active:from-sky-600 
             transition duaration-700' onClick={()=>handleCart(item)}>Add to Cart</button>
            </div>
       ))

      )}
    </div>
    </div>
    <Footer />
         </>

  )
}

export default Search