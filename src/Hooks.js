import React,{useState} from "react";

export default function Hooks() {
    
  const [count,setcount]=useState(0);
  
    return (
      <div>
        <h1>Hooks Function Component  {count}</h1> 
       <button onClick={()=>{setcount(count+1)}}>Increment</button>
       <button onClick={()=>{setcount(count-1)}}>Decrement</button>
       <button onClick={()=>{setcount(count=>0)}}>Reset</button>
      </div>
    );
  }