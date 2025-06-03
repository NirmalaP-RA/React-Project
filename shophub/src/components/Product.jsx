import React, { useEffect } from 'react'
import Header from './commonComponent/Header'
import DiscoverProduct from './DiscoverProduct'
import Footer from './commonComponent/Footer'
import '../CSS/Product.css'
import ProductListing from './ProductListing'
import { ToastContainer } from 'react-toastify'

export default function Product() {

  // useEffect is use to call function single time  it cannot run again  on refresh if you use useEffect hook
  useEffect(()=>{
    // dependency and function name must be mention in case of useEffect hook almost similar like useState
    // now you can see here function is already mention in form of callback function
    // [] this shows us a blank dependency means when to run again any function
  },[])
  // api also called onetime after single time execution must not run again so for that we are going to use useEffect hook 
  // without permission api not called repeately(function called on requirement)
  return (
    <>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <DiscoverProduct></DiscoverProduct>
      <ProductListing></ProductListing>
      <Footer></Footer>
    </>
  )
}
