// write rfc 
// function name and file name must be same and in single file only one function call

import React, { StrictMode } from 'react'
import Header from './Header'
// now question raised like how we called file?
// index.html call to main.jsx file in main.jsx file we called that function of file like home()etc.

// have two method to called function/home component that is opentag or closed tag 

// 1:in StrictMode: auto import when you write <H
// in this file you are using export function  to send value that import in main.jsx file

export default function Home() {
    // it will called whatever written in return keyword
    var name='Hello World';
    // var status=true;
    var status=false;
  return (
            // always make sure of having parent div of child div it is compulsory,
            //  we dont write div but create blank <> </> called it fragmaments, as a parent div inside this we create a chid div
        <>
            {/* this play role of parent div */}

            <Header/>
                    <div>
                    {/* in react img tag automatically not close like uptonow you have to closeit manually  */} 
                    {/* <img src /> */}
                      Hello World
                    </div>
                    {/* if else not used but used ternary condition in return statement function */}
                            { 
                              status
                                ?   
                                  <div>
                                    Name:-{name}
                                    {/* to fetch value of name from name variable */}
                                  </div>
                                :
                                  <div>
                                    No name found
                                    {/* to fetch value of name from name variable */}
                                  </div>
                            }

                    {/* what if i want to use operator */}

                        {
                          status==1
                          ?
                          <div>Name:-{name}</div>  
                          :
                          <div>no name found</div> 
                        }

        </> 
     )
}