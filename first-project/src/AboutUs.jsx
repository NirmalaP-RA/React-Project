import React, { useState } from 'react'

export default function AboutUs() {
   
  let [counter,setCounter] =useState(5); 
  // you got one predefined hook(kind of function in react we call hook) of useState
  // (pass two parameter 1:variablename,2:functin name )=default value, 
  // which used to save value to variable and to render that variable in browser it will display 
  // value show on browser from 5 because react follow virtual dom it copy the value and save but not set it like real dom but having on console

  // useState use  three type of work:
  // 1:store variable value
  // 2: update to stored value in variable
  // 3: display/render

  // syntax:variable [variablename,function]=useState(value)
  // function use to render value on browser
  // let [counter,setCounter] =useState(0);
  // here counter is variable and setCounter is function = useState(0)is default value either numeric,string,etc.

  // useState use to render/change value on browser

  var count=10;
  const plus=()=>{
    counter++;
    setCounter(counter);
    // function use to render value on browser
    console.log(counter);
  }

  const minus=()=>{
    counter--;
    setCounter(counter)
    console.log(counter); 
  }

  return (
   <> 
      <div className="row" style={{backgroundColor:'black',color:'white'}}>
        {/* way of using inline css in react  */}
        About Us
      </div>
      {/* // what if i want to use external css than go to public folder/src and create file */}
      <div className='buttons'>
      <button onClick={plus}>+</button>
      <button>{counter}</button>
      <button onClick={minus}>-</button>
      </div>
   
    </> 
  )
}
{/* <></> this is mandatory to have */}
