import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import Header from './Header'
import AboutUs from './AboutUs'
import  './assets/css/style.css';
import ShowHidePassword from './ShowHidePassword'
// this import method only allow for css file:import  './assets/css/style.css';
// import Home from './Home' this is auto generate when you call function in strictmode import method used in react
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* home component start */}
    {/* welcome */}

    {/* <Header/> */}

    {/* <Home/> */}

    {/* like if i again make <Home></Home> it will call two times you can check on browser without page refresh */}

    {/* <Home></Home> */}
    {/* to create difference between tag name and function name we use first letter of function as capital letter */}

    {/* <header></header> */}

    {/* <Home/> */}

    {/* new component start */}
    {/* <AboutUs/> */}

    {/* now password show and hide component start */}
    <ShowHidePassword/>


  </StrictMode>,
)
// component means we create js files  and in this file we call function and their name must start with capital letter or only one special character allowed that is hifhen
// Component file created in src folder
// main.jsx file:parent file where we call/add multiple component(child component)
// ex:home.jsx;AboutUs.jsx;Header.jsx;ShowHidePassword.jsx; called it component