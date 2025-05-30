import React, { useState } from 'react'

export default function Userform({userData, setUserData}) {
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
                        // convert value into string
                        var newData=JSON.stringify(finalData);
                        // saved in local storage
                        
                        localStorage.setItem('userInfo',newData)
                        setUserData(finalData);
                        // to make empty form after submit we use reset function
                        event.target.reset();
                        // to make dropdown also empty after form submit we use setStateData function and pass empty array
                        setStateData([]);
                    }
                   
  return (
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
        </div>
    </>
  )
}
