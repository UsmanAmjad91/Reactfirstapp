import React,{useEffect,useState} from "react";
// import PropTypes from 'prop-types'



const Forms = () => {
      const [count,setCount]=useState(1);
      useEffect(()=>{
        console.warn(count);
      },[count==5])
    return (
      <div><h1>Use Effect Hooks in React js    ..{count}</h1>

        <button onClick={()=>setCount(count+1)}>Update State</button>
        <button onClick={()=>setCount(count=>0)}>Reset State</button>
</div>   
    );
  };


   Forms.propsTypes = {

   };

export default Forms;
