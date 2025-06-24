import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import axios, { Axios } from 'axios'
import { toast } from 'react-toastify'
import ProductCard from './ProductCard';

export default function Home() {
  let [products,setProduct]=useState([]);
  // lets call its api
  useEffect(()=>{
    axios.get('https://wscubetech.co/ecommerce-api/products.php',{
      params:{
         limit:8,
         categories:'mens-shirts,mens-shoes'
      }
    })

    .then((response)=>{
    setProduct(response.data.data)
    })
    .catch((error)=>{
    toast.error('something went wrong');
    })
  },[]);

  return (
    <>
    {/* first lets create different different pages */}
     {/* <Header/> */}
     <div className='container-fluid p-0'>
      <Slider/>
     </div>
     <div className='container-fluid p-5'>
        <div className='container'>

             <div className='row'>
               <div className='col-12 pb-4 text-center'>
                  <h1>Best Seller Products</h1>
               </div>
             </div>

              <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
               {
                (products.length>0)
                ?
                 products.map((v,i)=>{
                 return(
                        <ProductCard key={i} products={v}/>
                       )
                })  
                :
                ''      
               }
             </div>
        </div>
     </div>
    
     {/* <Footer/>  */}
     {/* remove header and footer from heare because you called it already in rootlayout file commonly so no need to called them separately in individual comopnent */}
     {/* now header footer commonly called via rootlayout component */}
    </>
  )
}
