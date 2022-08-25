import React from "react";
import './App.css'; 
import ComponentwillUnmount from './ComponentwillUnmount';

class LifecycleTest extends React.Component {
    constructor(){
        super();
       this.state={toggle:true}
    
    }
    render(){
        // console.warn("render");
        return(
            <div>
<h1> Component Will be Unmount </h1>
{
    this.state.toggle?
    <ComponentwillUnmount />:null
}
<button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Update state</button>
            </div>
       )
     }

}
export default LifecycleTest;