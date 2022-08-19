import React from "react";
// Eventfunction

export default  function Eventfunction() {
    function click(){
        alert("this is click function in function component")
        
    }
  const change=()=>{
    alert("this is change function in function component")
  }
  const keyup=()=>{
    const value = document.getElementById('went').value;
   console.log(value);
  }
    return (
      <div>
       <h6>Function Events </h6>
       <label>click</label>
       <button onClick={click}>Click Me</button>
       <label>change</label>
       <input type={"checkbox"} onChange={change} />

       <label>Keyup</label>
       <input type={"text"} onKeyUp={keyup} id={"went"} />

      </div>
    );
  }