import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from './assets/components/Product';
import Home from './assets/components/Home';
import Contact from './assets/components/Contact';
import Faq from './assets/components/Faq';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


let router = createBrowserRouter([
  {
    path: "/",
    Component:<Home/>,
    loader: loadRootData,
  },
  {
    path: '/about-us',
    Component:<AboutUs/>,
    loader: loadRootData,
  },
  {
   path: '/contact-us',
    Component:<ContactUs/>,
    loader: loadRootData, 
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={router} />

  {/* here router name of key is fixed inside this having varibale name of router which comes from createBrowserRouter function  as variable */}
  {/* whatever routing you passed here you pass as  a props in routerprovider */}
    {/* <Faq/> */}
    {/* <Contact/> */}
    {/* <Home/> */}
    {/* <Product/> */}

 {/* no more individual component calling required after calling this component <RouterProvider/> */}

  </StrictMode>,
)
//   uptonow we worked on single page means at a time only one component called or if we want to work on multiple pages then we do commentout first component and called another component(main.jsx)
//  to called multiple page we use react router dom to set our package routing by installing :
//  1.React Router Dom package to handle routing of all the available pages 
// command:npm i react-router
// 2.officialdocumentation websites:react-router-dom
// note:up to date with latest package(version)
// now i dont want to comment out another component i want call them all then what so here we use router dom
// make possible to multiple component with their own individual page if i clicked means i want to called that component on another page to open because mostly cases header and footer are fixed,sticky
// steps to setup router:
// 1.go to website:reactrouter.com and watchout its installation process:https://reactrouter.com/start/modes
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
                                                                //     Component: Root,
                                                                //     loader: loadRootData,
                                                                //   },
                                                                // ]);
  // 4. here you create multiple object as number of component you create as many object is create here
  // 5.where you called component upto now ,from now onwords you have to called here only this:
  // <RouterProvider router={router} />

                     