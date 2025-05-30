import React, { useState } from 'react'
import logo from '../images/ws-cube-white-logo.svg';
import { BiLogoGmail } from "react-icons/bi";
import { CgWebsite } from 'react-icons/cg';
import Accordion from 'react-bootstrap/Accordion';
import data from '../../../FaqData';
import FaqQuestion from './FaqQuestion';


export default function Home() {
    const[getFaq, setGetFaq]=useState(data);
  return (
    <>
      <header className='container-fluid bg-black text-center text-white p-3'>
        <div className='container'>
          <div className='row'>
             <div className='col-12'>
                <img src={logo}/>
                 <h1>Welcome to wscube tech</h1>
                 <BiLogoGmail className='text-white' />
             </div>
          </div>
        </div>
      </header>

      <header className='container-fluid p-4 text-center'>
        <div className='container'>
          <div className='row'>
             <div className='col-12'>
               
                 <h2>Frequently Asked Question</h2>
             </div>
          </div>

          <div className='row'>
             <div className='col-12'>
                     <Accordion defaultActiveKey="0">
                        {/* defaultActiveKey is playing role of showing particular acordian open by its key number bydefault 0 but you can change it according to your demand  <Accordion defaultActiveKey="2"> */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                        </Accordion.Item>
                        {/* here to add more than question and answer than change eventKey number */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                
             </div>
          </div>
        </div>
      </header>
      {/* this thing i also want do by using loop than how to proceed */}
       {/* so here we using FaqData.js file and FaqQuestion.jsx component*/}
       {/* copy one question code from here and paste into FaqQuestion.jsx component */}
       <header className='container-fluid p-4 text-center'>
        <div className='container'>
          <div className='row'>
             <div className='col-12'>
               
                 <h2>Frequently Asked Question</h2>
             </div>
          </div>

          <div className='row'>
             <div className='col-12'>
                    <Accordion defaultActiveKey="0">
                       {
                        getFaq.map((v,i)=>{
                            return(
                                // when you run loop always make sure to add key name of props and pass index value
                                <FaqQuestion key={i} index={i} data={v}></FaqQuestion> 
                                // dand destructure index into FaqQuestion component, data={v} use t make it dynamic
                            )
                          
                        })
                       }
                    </Accordion>
             </div>
          </div>
        </div>
      </header>
    </>
  )
}
// if you want to use any image you must have to import
// took whatever name of variable like logo like etc. by taking use f that variable like logo to get value
// import logo from 'path'
{/* <img src={logo}/>  here using variable name assign image*/} 
// you can also change logo on browser by changing in html File:    <link rel="icon" type="image/svg+xml" href="/public/ws-cube-white-logo (1).svg" />
// now go to check react-icons website on google to get whatever icon you want like social media icons free available take as per your choice
// click on icon and import its code ex:import { BiLogoGmail } from "react-icons/bi";
// and also copy its component and where you want to show this icon call its componet there:<BiLogoGmail />
// to apply some css properties for that icon define className in that component and mention property in that class

// now let talk about how to use react bootstrap
// steps: go to react-bootstrap Website
//  select component ex. like: acordian 
//  took its code
//  always remember also import its component/acordian
//  so first create basic structure of container

