import React, { useState } from 'react'
import states from '../../data/FormData';
export default function FormHandling() {

    var [userData, setUserData ] = useState([]);
    // on selection of country i want to show state value so i created filterStates name of function on  onchange now here we use callback function to get value
    var [stateData, setStateData ] = useState([]);

            const filterStates=(event) =>{
            //   console.log(event.target.value);
                const newStates=states.filter((v,i)=>{
                    if(v.country_name==event.target.value)
                        {
                        return v;
                        } 
                
                })

            setStateData([...newStates]);
        }

            const FormHandler=(event)=>
            {
                 event.preventDefault(); 
                // preventDefault() use to stop page/form refresh
                var user={
                    name: event.target.name.value,
                    email:event.target.email.value,
                    mobile_number:event.target.mobile_number.value,
                    country_name:event.target.country_name.value,
                    state_name:event.target.state_name.value,

                }
                // to save value of user object into userData we use spred operator convert in neaw arrray
                var finalData=[user,...userData];
                setUserData(finalData);
                // to make empty form after submit we use reset function
                event.target.reset();
                // to make dropdown also empty after form submit we use setStateData function and pass empty array
                setStateData([]);
            }
            const Delete=(index)=>{
                if(confirm('Are you sure you want to delete')){
                    // to filter record from array we use splice
                const finalData=userData.filter((v,i)=>{
                    if(i!=index){
                        return v;
                    }
                    })
                    // console.log(index);
                    setUserData([...finalData]);
                }
            }
            return (
                    // always remember to close tag in react otherwise face error
              <>
                    <div class="form-container">
                        <h2>Basic Form</h2>
                        <form onSubmit={FormHandler} autocomplete="off">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required/>
                            </div>
                            <div class="form-group">
                                <label for="mobile">Mobile Number</label>
                                <input type="tel" id="mobile" name="mobile" required/>
                            </div>
                            <div class="form-group">
                                <label for="country">Country</label>
                                <select onChange={filterStates} name="country" required>
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Austraila">Austraila</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="state">State</label>
                                <select id="state" name="state" required>
                                    <option value="">Select State</option>
                                    {/* lets run loop to filter state data as defined above*/}
                                    {
                                        stateData.map((v,i)=>{
                                        return(
                                            <option value={v.name}>{v.name}</option>
                                        )
                                        })
                                    }
                                </select>
                            </div>
                            <button type="Submit" class="submit-btn">Submit</button>
                        </form>
                        <div class="table-container">
                        <h2>User Data</h2>
                        <table id="data-table" border="1">
                        <tbody>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                           
                            {
                                userData.length>0
                                ?
                                userData.map((v,i)=>{
                                    return(
                                         `<tr>
                                            <td>{i+1}</td>
                                            <td>{v.name}</td>
                                            <td>{v.email}</td>
                                            <td>{v.mobile_number}</td>
                                            <td>{v.country_name}</td>
                                            <td>{v.state_name}</td>
                                            <td><button onClick={()=>delete(i)}>Delete</button></td>
                                        </tr>`
                                     )
                                })
                                :
                                `<tr align="center" className='center'>
                                    <td align="center" colSpan="7">
                                    No Record Founds!!
                                    </td>
                                </tr>`
                            }  
                            </tbody>
                        </table>
                    </div>
                </div>
                
            
               </>
   
            )
}


{/* // in this single file we create two function
// 1:export default function FormHandling(){} this is by default function
// 2:function getUserData(){}
// note:multiple function only create when you want to use use all those function within that single file,you cant use these function in any other component
// 1st method:you can use this function as a component in same file like above
// always remember component name must start with capital letter otherwise face error
// 2nd method: UserDatahandling.jsx file,Userinfo.jsx,Userform.jsx using props */}
