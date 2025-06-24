import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from './assets/components/Product';
import Home from './assets/components/Home';
import Contact from './assets/components/Contact';
import Faq from './assets/components/Faq';

import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from './assets/components/RootLayout';
import ProductDetails from './assets/components/ProductDetails';



createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      <Route element={<RootLayout/>}>
      {/* parent component called first then after child components */}
          <Route path="/" element={<Home/>} />
          <Route path="/faqs" element={<Faq/>} />
          <Route path="/products" element={<Product/>} />
          {/* <Route path="products/product-details/:id/:slug?" element={<ProductDetails/>} /> */}
          <Route path="products/product-details/:id" element={<ProductDetails/>} />
          {/* here id is my any type of parameter name like men,women,etc. */}
          {/* ? marks means get optional value */}
          {/* now you face the problem of double time calling(because root element calling and another is because you also called in  home component ) of components */}
          <Route path="/contact-us" element={<Contact/>} />
      </Route> 
       {/* <Route path="/contact-us" element={<Contact/>} /> */}
       {/* here i put this coponent outside route because i dont want to have header and footer for this page thats why if want header and footer then put inside route*/}
    </Routes>
  </BrowserRouter>
  // without StrictMode
)
  // <StrictMode>

   {/* <RouterProvider router={router} /> */}

  {/* here router name of key is fixed inside this having varibale name of router which comes from createBrowserRouter function  as a props */}
  {/* whatever routing you passed here you pass as  a props in routerprovider */}
    {/* <Faq/> */}
    {/* <Contact/> */}
    {/* <Home/> */}
    {/* <Product/> */}

 {/* no more individual component calling required after calling this component <RouterProvider/> */}

  {/* </StrictMode>,
) */}
//   uptonow we worked on single page means at a time only one component called or if we want to work on multiple pages then we do commentout first component and called another component(main.jsx)
//  to called multiple page we use react router dom to set our package routing by installing :
//  1.React Router Dom package to handle routing of all the available pages 
// command:npm i react-router
// 2.officialdocumentation websites:react-router-dom
// note:up to date with latest package(version)
// now i dont want to comment out another component i want call them all then what so here we use router dom
// make possible to multiple component with their own individual page if i clicked means i want to called that component on another page to open because mostly cases header and footer are fixed,sticky
// steps to setup router: first method(reactrouterdom/start/datamode/installation)
// pass object in array
// 1.go to website:reactrouter.com and watchout its installation process:https://reactrouter.com/start/data/installation
// 2.import something: in main.jsx component
      //                       import {
                                  //   createBrowserRouter,
                                  // this is called function
                                  //   RouterProvider,
                                  // this is component name
                                  // } from "react-router";
  // 3.define routing inside createBrowserRouter this function:
                                                                //   let router = createBrowserRouter([
                                                                //   {
                                                                //     path: "/",
                                                                // path is fixed key and we called here by url uptonow our project run on localhost to call home page we must have to write here slash(/).
                                                                //     element:""
                                                                // element key help to display whatever you write in this to browser
                                                                //   },
                                                                // ]);
//     like this way:let router = createBrowserRouter([
//   {
//     path: "/",
//    element:<Home/>,
//   },
//   {
//     path: '/about-us',
//     element: "About Us"
    
//   },
//   {
//    path: '/contact-us',
//    element:<Contact/>, 
//   },
//   {
//    path:'/faqs',
//    element:<Faq/>,  
//   },
//   {
//    path: '/products',
//    element:<Product/>, 
//   },
// ]);
  // 4. here you create multiple object as number of component you create as many object is create here
  // 5.where you called component upto now ,from now onwords you have to called here only this:
  // <RouterProvider router={router} />

  // remember in this we use link tage at the place of anchor tag
  // if i dont want to add header and footer in each page or component then we do here grouping of routing

  // second method:https://reactrouter.com/start/declarative/routing
  // developer give second to its first preference you also use this method
  // 6 if we have to do grouping of mutiple image together then how to do?
//  import this remove first method:
//  import { BrowserRouter, Routes, Route } from "react-router";

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //   </Routes>
  // </BrowserRouter>

  // here called inside route component
  // now i want header and footer in these component so what to do is
  //     <Route path="/" element={<Home/>} />
  //     <Route path="/contact-us" element={<Contact/>} />
  //     <Route path="/faqs" element={<Faq/>} />
  // so i called route component as a close tag and inside this i pass only element key and path key not pass because we want it common
  //  so create new component name of Rootlayout.jsx
  // inside this called header and footer commonly and called inside it outlet component otherwise not work because it is fixed

  // now i want to make product detail page so create new component and mention in route
  // now i want to open that particular product details then:http://localhost:5173/products/product-details/1
  // if we have 100 pages then its not possible to create 100 page of product name based details so we need to make this value dynamically
  // for that we have to pass any parameter in product details component like:path="products/product-details/id"
  // for any type of value we place  : colon before id : path="products/product-details/:id"
// to get particular product information before that we have to get that id so go to productdetails component and do useeffect work
//  but what if i want to pass value like only then also worked or not means one of both value if i pass then what so we pass ? marks with it like:path="products/product-details/:id/:slug?" 





// now lets make home page and product listing page dynamic
// means lets add some slider and show some product informations
// so lets create new component slider.jsx and go to bootstrap site and pic one of slider/carousels from their