import React from 'react'

export default function Header(props) {

    // two methods to get value:
    //1: with destructure
    //2:without destructure

    // props is variable name to get value

    // without destructure
    console.log(props)
    // props used to get value like a return function
          return (
                  <div>
                      <h2>{props.heading}</h2>

                    {/* <p className=''>{props.content}</p> */}

                    {/* destructuring to avoid repeation of variable declaration */}

                    <p className=''>{props.children}</p>
                    {/* children key is fixed you can see in console */}

                  </div>
          )
}
