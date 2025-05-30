import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/CSS/style.css';
import Home from './assets/CSS/Components/Home';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)


// steps:setup firstly fresh react project as usual
// after this install these package:
// 1:npm i bootstrap
// 2:npm i react-bootstrap
// 3:npm i react-icons
// note:this is not one time process,install on each individual newproject to use bootstrap

// add bootstrap css by importing these file:
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// to add google font:
// go to google search google font and select any random font for a while 
// click on get font,it wll add font
// now we have to take get embeded code and see here available import option
// click and copy and paste in style.css file
// after that write body tag and mention that font family in it
// one more thing is import style.css file after importing bootstrap css file not before otherwise face overlapping error