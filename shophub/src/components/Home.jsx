import React from 'react'
import './CSS/style.css';
export default function Home() {
  return (
    <>
      <div className='container-fluid p-0'>
                  {/* <Slider/> */}
              </div>
              <div className='container-fluid p-5'>
                  <div className='container'>
                      <div className='row'>
                          <div className='col-12 pb-4 text-center'>
                              <h1>Best Seller Products</h1>
                          </div>
                      </div>
                      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
                          {/* {
                              (products.length > 0)
                              ?
                              products.map((v, i) => {
                                  return (
                                  <ProductCard key={i} product={v}/>
                                  )
                              })
              
                              :
                              ''
                              } */}
                      </div>
                  </div>
              </div>
    </>
  )
}
