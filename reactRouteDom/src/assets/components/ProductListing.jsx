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
// when we get data from api we need to do error handling because where to go response or  where to go if error occur:
// catch(if server error occur than go to catch) and than (go only if you have good internet api run well on browser)
// we use callback function to get value
//        .then(()=>{
        // api successfully response
//        })
//        .catch(()=>{
        // error
//        })



// axios.get(' https://wscubetech.co/ecommerce-api/categories.php')
// .then((response)=>{
// we have to save api response in state so, let [categories,setcategories]=useState([])
//console.log(response.data)
// here data is key use to fetch data from api via key in array form and save it in state that is categories variable so we have to use setcategories function so data save in categories
// setcategories(response.data.data)
// now one more thing you saw in right click>network> shows api called many time because when you change variable value it will render your whole page means api called again
// to stop api calling we use useEffect hook and pass dependency blank and use whole syntax inside this hook as below
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
// but now i want to save  id on click categories/brands into state in array format so after that send to api 

// ------------------category section start--------------------------

let [categories,setcategories]=useState([]);
let[filterCategoryValue,setFilterCategoryValue]=useState([]);

const filterCategories=(slug)=>{
        // by running lets check which type of value i have in array or not to filter
        // before runing loop make sure that id(category_id) exits or not in array so
        if(filterCategoryValue.includes(slug)){

        // if having this value than filter it and pass variable name and index 
          var finalcategoryData=filterCategoryValue.filter((v)=>{
                                                                    if(v!=slug){
                                                                      return v
                                                                    }
          })

              var finalcategoryData=[...finalcategoryData];
              setFilterCategoryValue(finalcategoryData)

        }
        else
        {
          //  console.log(slug);
          const finalcategoryData=[...filterCategoryValue,slug];
          setFilterCategoryValue(finalcategoryData);
        }
          console.log(filterCategoryValue);
      //  we have to send this value into api but not in array format but in string format so convert it into string 
   }
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
// similar process for brands api
// suggestion: use different useEffect hook for particular api because of multiple calling on requirement


// -------------------brands api section work start-------------------


let [brands,setBrands]=useState([]);
let[filterBrandsValue,setFilterBrandsValue]=useState([]);

const filterBrands=(slug)=>{
        // by running lets check which type of value i have in array or not to filter
        // before runing loop make sure that id(brands_id) exits or not in array so

        if(filterBrandsValue.includes(slug)){
        // if having this value than filter
          var finalBrandData=filterBrandsValue.filter((v)=>{
                                                              if(v!=slug){
                                                                return v
                                                              }
                                                      })
          var finalBrandData=[...finalBrandData];
          setFilterBrandsValue(finalBrandData);
        }
        else
        {
            // console.log(slug);
          const finalBrandData=[...filterBrandsValue,slug];
          setFilterBrandsValue(finalBrandData);
        }
      console.log(filterBrandsValue);
  }
useEffect(()=>{
      axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((response)=>{
                        setBrands(response.data.data)
                      })
        .catch((error)=>{
                        toast.error('Something Went Wrong.Please try again')
                        }) 
},[]);

// ------------------product api work start-----------------------

let [products,setProducts]=useState([]);
let [sorting,setSorting] = useState('');

// here usestate is empty because we get direct value

let[priceFrom,setPriceFrom]=useState(0);
let[priceTo,setPriceTo]=useState(100000);
let[discountFrom,setDiscountFrom]=useState(0);
let[discountTo,setDiscountTo]=useState(100);
useEffect(()=>{
      axios.get('https://wscubetech.co/ecommerce-api/products.php', {
        params:{
                limit:12,
                // lets pass here one more parameter
                sorting : sorting,
                // lets send category value in api in string format but value pass only when we set dependency
                categories : filterCategoryValue.toString(),
                brands:filterBrandsValue.toString(),
                price_from:priceFrom,
                price_to: priceTo,
                discount_from:discountFrom,
                discount_to:discountTo
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
},[sorting,filterCategoryValue,filterBrandsValue,priceFrom,priceTo,discountFrom,discountTo]);
// here we assign condition of dependency of onChange to filter values
// function for sorting because i need value from dropdown(function call on onChange)
   const filterSorting=(event)=>{
      // console.log(event.target.value);
      // value getting from here pass to them in api of product for that we have to call api again 
      // to filter data so we have to pass dependency but before that we have to create state for sorting 
          setSorting(event.target.value);
      // setSorting function save value into sorting variale
  }



// now let do filter by category remember for brands you have to do by yourself
// save that cetegory value into state which is click under checkbox after that pass in category api similar like we did in  product api
// note:if that value after check on checkbox and value inserted once into state,  clicked once then make sure that value not goes again that value into state
// befor that let do work of how many product available in our page lets show total product count 
// lets go to category function decalred below


// ---------------------filter via price work start------------------------------
// now question raise that how to got price so we have to set range to adjust price between


const rangePrice=(event)=>{
  // setPrice_From(event.target.value)
  // we are not going to change from value because its fixed ,0 we on change price to value
  setPriceTo(event.target.value)
// console.log(event.target.value)
// lets save this value into state and set its default value for two things:price-from,price-to(to filter according to custom value),and also pass these value in product api params,after that also pass its dependency dont forget it
}

const priceFromFilter=(event)=>{
    setPriceFrom(event.target.value)
}

const priceToFilter=(event)=>{
   setPriceTo(event.target.value)
}

const discountRange=(event)=>{
  setDiscountTo(event.target.value)
}
const discountFromFilter=(event)=>{
  setDiscountFrom(event.target.value)
}
const discountToFilter=(event)=>{
  setDiscountTo(event.target.value)
}
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
                                    {/* lets set terninary condition that if data having in api than run  this loop only  */}

                                    {
                                      (categories.length>0)
                                      ?
                                        categories.map((v,i)=>{
                                          return(
                                            <DisplayCategories filterCategories={filterCategories} key={i} category={v}></DisplayCategories>
                                            // here we calling component of DisplayCategories
                                            // when we set anything to dynamic we define props  by name of key, key={i}  so that react know that is dynamic data which we are CgDisplaySpacing.
                                            // category={v} use to change name (dynamic name) for that i am going to pass that object as a props by using keyname of category  in which we pass object name of v
                                            // after that we have to do destructure in DisplayCategories function
                                          )
                                        })
                                      :

                                      ''
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
                                      (brands.length>0)
                                      ?
                                        brands.map((v,i)=>{
                                          return(
                                            <DisplayBrands  filterBrands={filterBrands} key={i} brands={v}></DisplayBrands>
                                            // here we calling component of DisplayCategories
                                            // when we set anything to dynamic we define props  by name of key, key={i}  so that react know that is dynamic data which we are CgDisplaySpacing.
                                            // category={v} use to change name (dynamic name) for that i am going to pass that object as a props by using keyname of category  in which we pass object name of v
                                            // after that we have to do destructure in DisplayCategories function
                                          )
                                        })
                                      :
                                      ''
                                    }
                                  </div>
      
                                  {/* <!-- Price Range Filter --> */}
                                  
                                  <div class="mb-3">
                                      <h6 class="fw-bold mb-3">Price Range</h6>

                                      <div class="d-flex justify-content-between mb-2">
                                        <span>$0</span>
                                        <span>$100000</span>
                                      </div>

                                      <input type="range" onChange={rangePrice}  class="form-range" min="0" max="100000" step="1000" id="priceRange" />
                                      {/* either you got price by setting range or by setting min max function */}
                                      {/* here we set min max value:min="0" max="100000" */}
                                      {/* it shows changes of price (in what range):step="1000" */}
                                      {/* here we call function on onChange:onChange={rangePrice} so create its callback function to get value*/}

                                      <div class="row g-2 mt-2">
                                          <div class="col-6">

                                                <div class="input-group input-group-sm">
                                                  <span class="input-group-text">$</span>
                                                  <input type="number" class="form-control" placeholder="Min" min="0" onChange={priceFromFilter} />
                                                  {/* this  attribute use to show default value when you set range point:value={0} it show zero not changeble on browser if you want like price from min:500 to max:1500 because you assign bydefault value so  */}
                                                  {/* to make changes in this attribute value={0} static value,we also assign here value into defaultValue attribute */}
                                                </div>

                                          </div>

                                          <div class="col-6">

                                              <div class="input-group input-group-sm">
                                                <span class="input-group-text">$</span>
                                                <input type="number" class="form-control" placeholder="Max" min="0" onChange={priceToFilter} />
                                                {/* this is also attribute that show  default limit of extend upto from 0 to 5000 (changable on browser) */}
                                              </div>

                                          </div>
                                      </div>
                                  </div>

                                  {/* discount range filter */}

                                  <div class="mb-3">
                                        <h6 class="fw-bold mb-3">Discount Range</h6>

                                        <div class="d-flex justify-content-between mb-2">
                                          <span>0%</span>
                                          <span>100%</span>
                                        </div>

                                        <input type="range"  onChange={discountRange} class="form-range" min="0" max="100" step="1000" id="discountRange" />
                                        {/* either you got price by setting range or by setting min max function */}
                                        {/* here we set min max value:min="0" max="100000" */}
                                        {/* it shows changes of price (in what range):step="1000" */}
                                        {/* here we call function on onChange:onChange={rangePrice} so create its callback function to get value*/}

                                        <div class="row g-2 mt-2">

                                            <div class="col-6">

                                              <div class="input-group input-group-sm">
                                                <span class="input-group-text">%</span>
                                                <input type="number" class="form-control" placeholder="Min" min="0"  onChange={discountFromFilter}/>
                                                {/* this  attribute use to show default value when you set range point:value={0} it show zero not changeble on browser if you want like price from min:500 to max:1500 because you assign bydefault value so  */}
                                                {/* to make changes in this attribute value={0} static value,we also assign here value into defaultValue attribute */}
                                              </div>

                                            </div>
                                            <div class="col-6">

                                              <div class="input-group input-group-sm">
                                                <span class="input-group-text">%</span>
                                                <input type="number" class="form-control" placeholder="Max" min="0"  onChange={discountToFilter}/>
                                                {/* this is also attribute that show  default limit of extend upto from 0 to 5000 (changable on browser) */}
                                              </div>

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
                                    (categories.length>0)
                                    ?
                                      categories.map((v,i)=>{
                                        return(
                                          <DisplayCategories filterCategories={filterCategories} key={i} category={v}></DisplayCategories>
                                          // here we calling component of DisplayCategories
                                          // when we set anything to dynamic we define props  by name of key, key={i}  so that react know that is dynamic data which we are CgDisplaySpacing.
                                        )
                                      })
                                      :
                                      ''
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
                          (brands.length>0)
                            ?
                              brands.map((v,i)=>{
                                return(
                                        <DisplayBrands filterBrands={filterBrands} key={i} brands={v}></DisplayBrands>
                                        // here we calling component of DisplayCategories
                                        // when we set anything to dynamic we define props  by name of key, key={i}  so that react know that is dynamic data which we are CgDisplaySpacing.
                                        // here i pass this props filterbrands={filterbrands} to filter brands value
                                      )
                              })
                              :
                              ''
                          }

                        </div>
      
                      {/* <!-- Price Range Filter --> */}
                      <div class="mb-4">
                               <h6 class="fw-bold mb-3">Price Range</h6>
                                  <div class="d-flex justify-content-between mb-2">
                                        <span>$0</span>
                                        <span>$100000</span>
                                  </div>
                                <input type="range" onChange={rangePrice} class="form-range" min="0" max="100000" step="10" id="mobilePriceRange"  />
                                <div class="row g-2 mt-2">

                                          <div class="col-6">
                                            <div class="input-group input-group-sm">
                                              <span class="input-group-text">$</span>
                                              <input type="number" class="form-control" placeholder="Min" min="0" onChange={priceFromFilter}  />
                                            </div>
                                          </div>

                                          <div class="col-6">
                                            <div class="input-group input-group-sm">
                                              <span class="input-group-text">$</span>
                                              <input type="number" class="form-control" placeholder="Max" min="0" onChange={priceToFilter}  />
                                            </div>
                                          </div>
                                </div>
                      </div>
                      {/* discount percentage */}
                      <div class="mb-4">
                              <h6 class="fw-bold mb-3">Discount Range</h6>
                                  <div class="d-flex justify-content-between mb-2">
                                    <span>0%</span>
                                    <span>100%</span>
                                  </div>
                              <input type="range" onChange={discountRange} class="form-range" min="0" max="100" step="10" id="mobileDiscountRange"  />
                                  <div class="row g-2 mt-2">
                                          <div class="col-6">
                                            <div class="input-group input-group-sm">
                                              <span class="input-group-text">%</span>
                                              <input type="number" class="form-control" placeholder="Min" min="0" onChange={discountFromFilter}  />
                                            </div>
                                          </div>
                                          <div class="col-6">
                                            <div class="input-group input-group-sm">
                                              <span class="input-group-text">%</span>
                                              <input type="number" class="form-control" placeholder="Max" min="0" onChange={discountToFilter}  />
                                            </div>
                                          </div>
                                  </div>
                      </div>

                      <button class="btn btn-primary w-100">Apply Filters</button>

              </div>      
            </div>
      
            {/* Main Product Content */}
            <div class="col-lg-9">
                  {/* Top bar with results count and sorting */}
              <div class="card shadow-sm mb-4">
                <div class="card-body">
                  <div class="row align-items-center">

                        <div class="col-md-6 mb-2 mb-md-0">
                          <h6 class="mb-0">{products.length}Products</h6>
                          <small class="text-muted">Filtered results</small>
                        </div>

                        <div class="col-md-6">

                                <div class="d-flex align-items-center justify-content-md-end">
                                  <i class="fa fa-sort text-muted me-2"></i>
                                  <span class="text-nowrap me-2 d-none d-sm-inline">Sort by:</span>

                                      <select class="form-select form-select-sm w-auto" onChange={filterSorting}>
                                        {/* here i call function for sorting */}
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
                            // <div class="col">

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


// we create here DisplayCategories as component than called it into function because
// if we dont do this than face error(because of same  id to create different id we create component 
// that make it possible by aloting different id) during checkbox selection only one checkbox is clicked other not allowed to check checkbox

function DisplayCategories({category,filterCategories}){
  return(
        <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id={`${'category_'+category.id}`} onClick={()=>filterCategories(category.slug)} />
                {/* here we created filterCategories function on onClick event and filtering value by id and now called this filtercategories function above  */}
                {/* but one more thing we calld this function as component  so filterCategories i have have to send through props if i want to use this so go desktop and mobile both case pass props after that destructure it into this component*/}
            <label class="form-check-label" for={`${'category_'+category.id}`}>{category.name}</label>
                {/* in our api having a key of name in which having name of category now you can see on browser name of your category is dynamic now */}
                {/* here id,for must be unique,we have two way 1:id (in category response id will always unique),2: slug(slug is also unique) use whatever way you like either id or slug*/}
                {/* i am going to use slug here( so we use template literals `${}`) but noteout:whenever you declare variable name in attribute call afer removing string operator id={brands.id}*/}
        </div>
  )
}

// similar process for brans but using id/slug because of unique id

function DisplayBrands({brands,filterBrands}){
  return(
        <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" id={brands.id}  onClick={()=>filterBrands(brands.slug)} />
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

