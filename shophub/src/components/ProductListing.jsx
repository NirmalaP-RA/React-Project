import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';

export default function ProductListing() {



  // Ecommerce listing page with axios api
// steps:install axios package to call api
// go to google search:axios npm
// command: npm i axios on terminal
// after insallation call  to api in productlisting component
// api:        https://wscubetech.co/ecommerce-api/categories.php
            // https://wscubetech.co/ecommerce-api/brands.php
            // https://wscubetech.co/ecommerce-api/products.php

// api that run on browser have method that is:get()
// syntax:
//        axios.get('api url')
// // when we get data from api we need to do error handling because where to go response or  where to go if error occur:catch(if server error occur than go to catch) and than (go only if you have good internet api run well on browser)
// // we use callback function to get value
//        .then(()=>{
        // api successfully response
//        })
//        .catch(()=>{
        // error
//        })

let [categories,setcategories]=useState([]);
// axios.get(' https://wscubetech.co/ecommerce-api/categories.php')
// .then((response)=>{
// // we have to save api response in state so, let [categories,setcategories]=useState([])
// // console.log(response.data)
// // here data is key use to fetch data from api via key in array form and save it in state that is categories variable so we have to use setcategories function so data save in categories
// setcategories(response.data.data)
// // now one more thing you saw in right click>network> shows api called many time because when you change variable value it will render your whole page means api called again
// // to stop api calling we use useEffect hook and pass dependency blank and use whole syntax inside this hook as below
// })
// .catch((error)=>{

// })


// useEffect(()=>{
//       axios.get(' https://wscubetech.co/ecommerce-api/categories.php')
//       .then((response)=>{
//                         setcategories(response.data.data)
//                       })
//         .catch((error)=>{
//                         console.log('Error');
//                         }) 
// },[]);
// now your code run single time when you refresh your page,to make difference you can checked it in network

// now how we know that api is responded or showing some error api called or not
// we know that console have error but user dont know where the problem is
//  so to make sure user also know that website facing some error so  for that we want to notify them by messaging like "Refresh your page"
// for that we have to install react toastify package
// command: npm i react-toastify
// package installation:react tostify done
// in this we have two things:
// 1:toast() function:work to display message
// 2:toast container name of component:work to display message on browser(page where you want to display you have add <ToastContainer/> component of react-toastify)
// lets set message for toast like:toast.error('Something Went Wrong.Please try again');


useEffect(()=>{
      axios.get(' https://wscubetech.co/ecommerce-api/categories.php')
      .then((response)=>{
                        setcategories(response.data.data)
                      })
        .catch((error)=>{
                        toast.error('Something Went Wrong.Please try again')
                        }) 
},[]);

// now you can go and check after change  something in api or see notification occcure on browser
// visit:https://fkhadra.github.io/react-toastify/introduction/
// this link will guide you where to place our notification or it looks set your things in two way:
// 1:Toast Container
// 2:Toast Emitter we use this method to configure setting

// now as we saved our data in arrray form lets work to display it so for that we go to categories variable or in categories filter and make it dynamic


// brands api work

// similar process for brands api
// suggestion: use different useEffect hook for particular api because of multiple calling on requirement
let [brands,setBrands]=useState([]);

useEffect(()=>{
      axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((response)=>{
                        setBrands(response.data.data)
                      })
        .catch((error)=>{
                        toast.error('Something Went Wrong.Please try again')
                        }) 
},[]);

// -----------product api work

let [products,setProducts]=useState([]);
useEffect(()=>{
      axios.get('https://wscubetech.co/ecommerce-api/products.php', {
        params:{
        limit:12
      }
       // in limit key we assign like we want 12 value
      // here params is key inside this pass parameter
    })
      .then((response)=>{
                        setProducts(response.data.data)
                      })
        .catch((error)=>{
                        toast.error('Something Went Wrong.Please try again')
                        }) 
},[]);

  return (
    <>
       {/* <!-- Main Content --> */}
            <div class="container py-5">
              <div class="row">
                {/* <!-- Filter Button (Mobile) --> */}
                <div class="col-12 d-lg-none mb-3">
                  <button class="btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center gap-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#filterSidebar">
                    <i class="fa fa-filter"></i> Filter Products
                  </button>
                </div>
      
                {/* <!-- Sidebar Filters --> */}
                <div class="col-lg-3">
                  {/* <!-- Desktop Filters --> */}
                  <div class="card shadow-sm d-none d-lg-block">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="card-title mb-0">Filters</h5>
                        <button class="btn btn-sm btn-link text-decoration-none p-0">Clear All</button>
                      </div>
      
                      {/* <!-- Categories Filter --> */}
                      <div class="mb-4 category-scroll">
                        <h6 class="fw-bold mb-3">Categories</h6>
                         {
                            categories.map((v,i)=>{
                               return(
                                <DisplayCategories key={i} category={v}></DisplayCategories>
                                // here we calling component of DisplayCategories
                                // when we set anything to dynamic we define props  by name of key, key={i}  so that react know that is dynamic data which we are CgDisplaySpacing.
                                // category={v} use to change name (dynamic name) for that i am going to pass that object as a props by using keyname of category  in which we pass object name of v
                                // after that we have to do destructure in DisplayCategories function
                               )
                            })
                        }
                        {/* on saving dont forget to format documenting on right click */}

                         {/* <div class="form-check mb-2">
                             <input class="form-check-input" type="checkbox" id="category1" />
                             <label class="form-check-label" for="category1">Electronics</label>
                        </div> */}

                        {/* lets make it dynamic to this div above */}

                        {/* <div class="form-check mb-2">
                             <input class="form-check-input" type="checkbox" id="category1" />
                             <label class="form-check-label" for="category1">Audio</label>
                        </div> */}
                      </div>
      
                      {/* <!-- Brands Filter --> */}
                      <div class="mb-4 category-scroll">
                        <h6 class="fw-bold mb-3">Brands</h6>
                        {/* i this case we may face if we use id because id must be unique so here we use slug method */}
                         {
                            brands.map((v,i)=>{
                               return(
                                <DisplayBrands key={i} brands={v}></DisplayBrands>
                                // here we calling component of DisplayCategories
                                // when we set anything to dynamic we define props  by name of key, key={i}  so that react know that is dynamic data which we are CgDisplaySpacing.
                                // category={v} use to change name (dynamic name) for that i am going to pass that object as a props by using keyname of category  in which we pass object name of v
                                // after that we have to do destructure in DisplayCategories function
                               )
                            })
                        }
                      </div>
      
                      {/* <!-- Price Range Filter --> */}
                      <div class="mb-3">
                        <h6 class="fw-bold mb-3">Price Range</h6>
                        <div class="d-flex justify-content-between mb-2">
                          <span>$0</span>
                          <span>$100000</span>
                        </div>
                        <input type="range"  class="form-range" min="0" max="100000" step="1000" id="priceRange" />
      
                        <div class="row g-2 mt-2">
                          <div class="col-6">
                            <div class="input-group input-group-sm">
                              <span class="input-group-text">$</span>
                              <input type="number" class="form-control" placeholder="Min" min="0"/>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="input-group input-group-sm">
                              <span class="input-group-text">$</span>
                              <input type="number" class="form-control" placeholder="Max" min="0"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* <!-- Mobile Filters (Offcanvas) --> */}
                  <div class="offcanvas offcanvas-start" tabindex="-1" id="filterSidebar">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title">Filters</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">

                      {/* <!-- Categories Filter --> */}
                      <div class="mb-4">
                        <h6 class="fw-bold mb-3">Categories</h6>
                        {/* lets run this below div into loop */}
                        {/* <div class="form-check mb-2">
                             <input class="form-check-input" type="checkbox" id="mcategory1" />
                             <label class="form-check-label" for="mcategory1">Electronics</label>
                        </div> */}

                        {
                            categories.map((v,i)=>{
                               return(
                                <DisplayCategories key={i} category={v}></DisplayCategories>
                                // here we calling component of DisplayCategories
                                // when we set anything to dynamic we define props  by name of key, key={i}  so that react know that is dynamic data which we are CgDisplaySpacing.
                               )
                            })
                        }

                        {/* lets make it dynamic to this div above */}

                        {/* after making dynamic you can remove this code so for better understanding i commented it out */}

                        {/* <div class="form-check mb-2">
                             <input class="form-check-input" type="checkbox" id="mcategory1" />
                             <label class="form-check-label" for="mcategory1">Audio</label>
                        </div> */}
                      </div>
      
                      {/* <!-- Brands Filter --> */}
                      <div class="mb-4">
                        <h6 class="fw-bold mb-3">Brands</h6>

                         {
                            brands.map((v,i)=>{
                               return(
                                <DisplayBrands key={i} brands={v}></DisplayBrands>
                                // here we calling component of DisplayCategories
                                // when we set anything to dynamic we define props  by name of key, key={i}  so that react know that is dynamic data which we are CgDisplaySpacing.
                               )
                            })
                        }

                      </div>
      
                      {/* <!-- Price Range Filter --> */}
                      <div class="mb-4">
                        <h6 class="fw-bold mb-3">Price Range</h6>
                        <div class="d-flex justify-content-between mb-2">
                          <span>$0</span>
                          <span>$1500</span>
                        </div>
                        <input type="range" class="form-range" min="0" max="1500" step="10" id="mobilePriceRange" />
                        <div class="row g-2 mt-2">
                          <div class="col-6">
                            <div class="input-group input-group-sm">
                              <span class="input-group-text">$</span>
                              <input type="number" class="form-control" placeholder="Min" min="0" />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="input-group input-group-sm">
                              <span class="input-group-text">$</span>
                              <input type="number" class="form-control" placeholder="Max" min="0" />
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <button class="btn btn-primary w-100">Apply Filters</button>
                    </div>
                  </div>
                </div>
      
                {/* <!-- Main Product Content --> */}
                <div class="col-lg-9">
                  {/* <!-- Top bar with results count and sorting --> */}
                  <div class="card shadow-sm mb-4">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-md-6 mb-2 mb-md-0">
                          <h6 class="mb-0">Products</h6>
                          <small class="text-muted">Filtered results</small>
                        </div>
                        <div class="col-md-6">
                          <div class="d-flex align-items-center justify-content-md-end">
                            <i class="fa fa-sort text-muted me-2"></i>
                            <span class="text-nowrap me-2 d-none d-sm-inline">Sort by:</span>
                            <select class="form-select form-select-sm w-auto">
                              <option value="">Newest</option>
                              <option value="1">Name : A-Z</option>
                              <option value="2">Name : Z-A</option>
                              <option value="3">Price: Low to High</option>
                              <option value="4">Price: High to Low</option>
                              <option value="5">Discounted Price: Low to High</option>
                              <option value="6">Discounted Price: High to Low</option>
                              <option value="7">Rating: Low to High</option>
                              <option value="8">Rating: High to Low</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  {/* <!-- Product Grid --> */}
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
                    {/* <!-- Product 1 --> */}
                    {/* <div class="col">

                      <div class="card h-100 product-card">

                        <div class="position-relative">
                                  <img src="" class="card-img-top" alt="Ultra HD 4K Smart TV" />
                                  <span class="position-absolute top-0 start-0 badge bg-danger m-2">
                                    Sale
                                  </span>
                        </div>

                        <div class="card-body">
                          <h5 class="card-title"> Ultra HD 4K Smart TV 55-inch</h5>
                          <p class="card-text text-muted small mb-0">Samsung</p>

                              <div class="d-flex align-items-center mb-2">
                                  <div class="text-warning me-1">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star-half-alt"></i>
                                  </div>
                                  <span class="text-muted small">
                                  4.5
                                  </span>
                              </div>

                            <div class="d-flex justify-content-between align-items-center">

                            </div>
                            <div>
                              <span class="fs-5 fw-bold">$699.99</span>
                              <span class="text-decoration-line-through text-muted ms-2">$899.99</span>
                            </div>

                            <button class="btn btn-sm btn-outline-primary">
                              <i class="fa fa-shopping-cart"></i>
                            </button>

                        </div>
                      </div>
                    </div> */}

                    {
                      products.map((v,i)=>{
                        return(
                    //     <div class="col">

                    //     <div class="card h-100 product-card">

                    //     <div class="position-relative">
                    //               <img src="" class="card-img-top" alt="Ultra HD 4K Smart TV" />
                    //               <span class="position-absolute top-0 start-0 badge bg-danger m-2">
                    //                 Sale
                    //               </span>
                    //     </div>

                    //     <div class="card-body">
                    //       <h5 class="card-title"> Ultra HD 4K Smart TV 55-inch</h5>
                    //       <p class="card-text text-muted small mb-0">Samsung</p>

                    //         <div class="d-flex align-items-center mb-2">
                    //               <div class="text-warning me-1">
                    //               <i class="fa fa-star"></i>
                    //               <i class="fa fa-star"></i>
                    //               <i class="fa fa-star"></i>
                    //               <i class="fa fa-star"></i>
                    //               <i class="fa fa-star-half-alt"></i>
                    //               </div>
                    //               <span class="text-muted small">
                    //               4.5
                    //               </span>
                    //         </div>

                    //         <div class="d-flex justify-content-between align-items-center">

                    //         </div>
                    //         <div>
                    //           <span class="fs-5 fw-bold">$699.99</span>
                    //           <span class="text-decoration-line-through text-muted ms-2">$899.99</span>
                    //         </div>

                    //         <button class="btn btn-sm btn-outline-primary">
                    //           <i class="fa fa-shopping-cart"></i>
                    //         </button>

                    //     </div>
                    //   </div>
                    // </div>
                    // because for this we created separate component name of ProductCard.jsx we use props to pass data dont forget to destructure otherwise it will not work
                    <ProductCard key={i} products={v}></ProductCard>
                        )
                      })
                    }
                {/* here we use callback function */}
                  {/* product2
                   <div class="col">
                     <div class="card h-100 product-card">
                      <div class="position-relative">
                            <img src="" class="card-img-top" alt="Ultra HD 4K Smart TV" />
                            <span class="position-absolute top-0 start-0 badge bg-danger m-2">
                               Sale
                            </span>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title"> Ultra HD 4K Smart TV 55-inch</h5>
                         <p class="card-text text-muted small mb-0">Samsung</p>
                         <div class="d-flex align-items-center mb-2">
                            <div class="text-warning me-1">
                             <i class="fa fa-star"></i>
                             <i class="fa fa-star"></i>
                             <i class="fa fa-star"></i>
                             <i class="fa fa-star"></i>
                             <i class="fa fa-star-half-alt"></i>
                            </div>
                            <span class="text-muted small">
                             4.5
                            </span>
                         </div>
                         <div class="d-flex justify-content-between align-items-center">

                         </div>
                         <div>
                          <span class="fs-5 fw-bold">$699.99</span>
                          <span class="text-decoration-line-through text-muted ms-2">$899.99</span>
                         </div>
                         <button class="btn btn-sm btn-outline-primary">
                          <i class="fa fa-shopping-cart"></i>
                         </button>
                      </div>
                     </div>
                    </div> */}
                  </div>
                </div>
              </div>
         </div>   
    </>
  )
}


// we create here DisplayCategories as component than called it into function because if we dont do this than face error(because of same  id to create different id we create component that make it possible by aloting different id) during checkbox selection only one checkbox is clicked other not allowed to check checkbox
function DisplayCategories({category}){
  return(
        <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id={`${'category_'+category.id}`} />
            <label class="form-check-label" for={`${'category_'+category.id}`}>{category.name}</label>
            {/* in our api having a key of name in which having name of category now you can see on browser name of your category is dynamic now */}
            {/* here id,for must be unique,we have two way 1:id (in category response id will always unique),2: slug(slug is also unique) use whatever way you like either id or slug*/}
            {/* i am going to use slug here( so we use template literals `${}`) but noteout:whenever you declare variable name in attribute call afer removing string operator id={brands.id}*/}
        </div>
  )
}

// similar process for brans but using id because of unique id
function DisplayBrands({brands}){
  return(
        <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id={brands.id} />
            <label class="form-check-label" for={brands.id}>{brands.name}</label>
            {/* in our api havinh a key of name in which having name of category now you can see on browser name of your category is dynamic now */}
            {/* here id,for must be unique,we have two way 1:id (in category response id will always unique),2: slug(slug is also unique) use whatever way you like either id or slug*/}
            {/* i am going to use id  but noteout:whenever you declare variable name in attribute call afer removing string operator id={category.id}*/}
        </div>
  )
}

// note:you can also use slug here in case brands but i have to read about it more here good to have example of using both method


// now  move forwards towards product view and sortBy filter in listing page
// in this case first of all we set maximum height in css file of category section than we show our category data through scroll bar so that in case of 200+ category its easy to show are category for better user experience

//important: now we dont follow same proces of component making because this style  only works inside single component but what if we have multiple pages so we create separate component for product api because of multiple use

