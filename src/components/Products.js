import {useState,useEffect} from 'react'
import Product from './Product'
import { publicRequest } from '../request';
const Products = ({cat,sort,query,searchProducts}) => {
    const [products,setProducts]=useState([])
    const [filteredProducts,setFilteredProducts]=useState([])


    useEffect(() => {
      const fechedProducts = async()=>{
        try{

          const productItems = await publicRequest.get( cat? `/product?category=${cat}` :"/product");
          setProducts(productItems.data)
        
        }catch(err){
          console.log(err)

        }
        // setProducts(productItems);
      }
      fechedProducts();
    }, [cat])
    useEffect(() => {
      cat && setFilteredProducts(products)
    }, [products,cat])
    

    useEffect(()=>{
     if((sort === "latest")){
      setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.createdAt - b.createdAt))
     }else  if((sort === "expensive")){
      setFilteredProducts((prev)=>[...prev].sort((a,b)=>b.price - a.price))
     }else{
      setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.price - b.price))
     }

    },[sort])
    
    
  return (
    <div className='max-w-7xl mx-auto z-50'>
    <div className=' grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {cat ? filteredProducts.map((item)=>(
        <Product 
         key={item._id} 
        item={item}/>
       
      )) : products.map((item)=>(
        <Product 
        key={item._id} 
        item={item}
        />
       
      ))}
    </div>
    </div>
  )
}

export default Products