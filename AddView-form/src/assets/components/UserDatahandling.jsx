import React, { useState } from 'react'
import states from '../../data/FormData';
import Userform from './Userform';
import Userinfo from './Userinfo';
export default function UserDataHandling() {
    var getUserData=localStorage.getItem('userInfo');
    var getUserData=JSON.parse(getUserData);

    var [userData, setUserData ] = useState([ getUserData ? getUserData :[]]);
    // on selection of country i want to show state value so i created filterStates name of function on  onchange now here we use callback function to get value

// passing data from child to parent component
           
            return (
                    // always remember to close tag in react otherwise face error
              <>
                 <Userform userData={userData} setUserData={setUserData}></Userform>
                 {/* here we passing data using props by doing destructuring*/}
                <Userinfo userData={userData} setUserData={setUserData}></Userinfo>  
            
               </>
   
                    )
}


// in this single file we create two function
// 1:export default function FormHandling(){} this is by default function
// 2:function getUserData(){}
// note:multiple function only create when you want to use use all those function within that single file,you cant use these function in any other component
// 1st method:you can use this function as a component in same file like above
// always remember component name must start with capital letter otherwise face error
// 2nd method: ex:UserDatahandling.jsx via separate component creation aand passing through props


// localStorage method type:as we know value saved in string format
// localStorage.setItem('keyname','value')
// localStorage.getItem('keyname')
// localStorage.removeItem('keyname')