import React, { useState } from 'react'

export default function ShowHidePassword() {

    let[inputType,setInputType]=useState('password');

    // let[inputType,setInputType]=useState('text');
    const hidePassword=()=>{
        if(inputType=='password'){
            setInputType('text')
        }else{
            setInputType('password')
        }
    }
  return (
          <div>
            <input type={inputType=='password'? 'password':'text'}/>
            {/* using ternary condition , easy*/}

            <button onClick={hidePassword}>
              {inputType=='password'? 'Show' :'Hide'}
            </button>
            
          </div>
        )
}

// props use to transfer data from one file to another file (parent to child data transfer)
// contextAPI,Redux Toolkit by using them we transfer data of any file to any other file