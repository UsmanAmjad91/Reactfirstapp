import React from "react";

 class ComponentwillUnmount extends React.Component {
   

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
            
             
            </div>
        )
    }

}   
export default ComponentwillUnmount;