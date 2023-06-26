import React, { useState } from "react";

const App = ()=>{

  const[fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email : "",
    phone:"" ,
    qualification:"",
   });
  
  const inputEvent = (event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

    const{value,name} = event.target;

    setFullName((preValue)=>{

      return {
        ...preValue,
        [name]:value,
      }
      // if(name === "fname"){
      //   return{
      //     fname : value,
      //     lname : preValue.lname,
      //     email : preValue.email,
      //     phone : preValue.phone,
      //   };
      // }else if (name === "lname"){
      //   return{
      //     fname : preValue.fname,
      //     lname : value,
      //     email : preValue.email,
      //     phone : preValue.phone,
      //   };
      // }
      // else if (name === "email"){
      //   return{
      //     fname : preValue.fname,
      //     lname : preValue.lname,
      //     email : value,
      //     phone : preValue.phone,
      //   };
      // }
      // else if (name === "phone"){
      //   return{
      //     fname : preValue.fname,
      //     lname : preValue.lname,
      //     email : preValue.email,
      //     phone : value,
      //   };
      // }
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
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      <p>{fullName.qualification}</p>
      <input 
              placeholder="Enter your First name" 
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
              />
      <br/>
      <input 
              placeholder="Enter your Last name" 
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
              />
      <br/>
      <input type="email" 
              placeholder="Enter your email" 
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              />
      <br/>
      <input type="number" 
              placeholder="Enter your phone number" 
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
              />
      <br/>  
      <input type="text" 
              placeholder="Enter your qualification" 
              name="qualification"
              onChange={inputEvent}
              value={fullName.qualification}
              />              
      <button type="submit">Enter</button>
      </div>
      </form>
    </div>
    </>
  )
  };

export default App;
