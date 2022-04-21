import React, { useState ,useEffect} from 'react'
import {Routes,
  Route,
  useNavigate,
  Navigate
} from "react-router-dom";

import {Product,Home,ProductList,Login,Signup,Cart,Order,Search} from './pages'

import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';

import { useSelector } from 'react-redux';
import Account from './pages/Account';
import Checkout from './components/Checkout';

const App = () => {
  const [query,setQuery]= useState("")
  const navigate= useNavigate()
  
  const [isOpen,setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  useEffect(() => {
      const hideMenu=()=>{
         if(window.innerWidth > 640 && isOpen){
          setIsOpen(false)
         }

        }
         window.addEventListener('resize',hideMenu)
         return()=>{
           
           window.removeEventListener('resize',hideMenu)
         }
  
  
  })
  
 const user = useSelector((state)=>state.user.currentUser)
 const[checkoutBill,setCheckoutBill]=useState(false)

  const openCheckout=()=>{
    setCheckoutBill(!checkoutBill)
  }

  return (
    <>
    <>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} query={query} setQuery={setQuery} />
      <Checkout openCheckout={openCheckout} checkoutBill={checkoutBill}/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/products/:category' element={<ProductList />} />
       <Route path='/search'element={<Search />} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart openCheckout={openCheckout}/>} />
        <Route path='/login' element={user ? <Navigate replace to="/"/> :  <Login/>} />
        <Route path='/signup' element={user ? <Navigate replace to="/"/> : <Signup/>} /> 
        <Route path='/account/:id' element={<Account/>} />
        <Route path='/order/:id' element={<Order/>} />
        </Routes>
    
    </>
  </>
  )
}

export default App