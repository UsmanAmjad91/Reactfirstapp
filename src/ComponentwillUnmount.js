import React from "react";

 class ComponentwillUnmount extends React.Component {
    constructor(){
        super();
       this.state={toggle:true}
    
    }

   componentWillUnmount(){
    alert("User will bw here");
     }

    render(){
        // console.warn("render");
        return(
            <div>
             
              <ul>
                <li>Usman</li>
                <li>usmanamjad187@gmail.com</li>
                <li>Sahiwal</li>

              </ul>
            
              <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Update state</button>
            </div>
        )
    }

}   
export default ComponentwillUnmount;