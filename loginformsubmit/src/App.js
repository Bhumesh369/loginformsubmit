import React, { useState } from "react";

const App = ()=>{

  const [name, setName] = useState("");
  const[fullName, setFullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameNew, setLastNameNew] = useState("");

  const onSubmit = (event)=>{
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastNameNew);
  };
  
  const inputEvent = (event)=>{
    console.log(event.target.value)
    setName(event.target.value);
  };
  const inputEvent2 = (event)=>{
    console.log(event.target.value)
    setLastName(event.target.value);
  };

  

  return(
    <>
    <div>
      <form>
        <div>
      <h1> Hello {fullName}{" "}{lastName} </h1>
      <input type="text" 
              placeholder="Enter your First name" 
              onChange={inputEvent}
              value={name}
              />
      <br/>
      <input type="text" 
              placeholder="Enter your Last name" 
              onChange={inputEvent2}
              value={lastName}
              />
      <button onClick={onSubmit}>Enter</button>
      </div>
      </form>
    </div>
    </>
  )
}

export default App;
