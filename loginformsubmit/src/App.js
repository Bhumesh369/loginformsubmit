import React, { useState } from "react";

const App = ()=>{

  const[fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email : "",
    phone:"" ,
   });
  
  const inputEvent = (event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

    const{value,name} = event.target;

    setFullName((preValue)=>{
      if(name === "fname"){
        return{
          fname : value,
          lname : preValue.lname,
          email : preValue.email,
          phone : preValue.phone,
        };
      }else if (name === "lname"){
        return{
          fname : preValue.fname,
          lname : value,
          email : preValue.email,
          phone : preValue.phone,
        };
      }
      else if (name === "email"){
        return{
          fname : preValue.fname,
          lname : preValue.lname,
          email : value,
          phone : preValue.phone,
        };
      }
      else if (name === "phone"){
        return{
          fname : preValue.fname,
          lname : preValue.lname,
          email : preValue.email,
          phone : value,
        };
      }
    })
  };
  const onSubmit = (event)=>{
    event.preventDefault();
    alert("Form Submitted");
  };

  return(
    <>
    <div className="main_div">
      <form onSubmit={onSubmit}>
        <div>
      <h1> Hello {fullName.fname}{" "}{fullName.lname} </h1>
      <input type="text" 
              placeholder="Enter your First name" 
              name="fName"
              onChange={inputEvent}
              value={fullName.fname}
              />
      <br/>
      <input type="text" 
              placeholder="Enter your Last name" 
              name="lName"
              onChange={inputEvent}
              value={fullName.lname}
              />
      <br/>
      <input type="email" 
              placeholder="Enter your First name" 
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              />
      <br/>
      <input type="number" 
              placeholder="Enter your First name" 
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
              />
      <br/>                
      <button type="submit">Enter</button>
      </div>
      </form>
    </div>
    </>
  )
  };

export default App;
