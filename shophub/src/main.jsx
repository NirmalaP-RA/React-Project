import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Home from './components/Home';
import Product from './components/Product';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home></Home> */}
   <Product></Product>
  </StrictMode>,
)


// steps:setup firstly fresh react project as usual
// after this install these package:
// 1:npm i bootstrap
// 2:npm i react-bootstrap
// 3:npm i react-icons
// note:this is not one time process,install on each individual newproject to use bootstrap