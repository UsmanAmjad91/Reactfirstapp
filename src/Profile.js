import React from "react";

/// Class Components ///
 class Profile extends  React.Component{
            
    constructor (){
    super();
    this.supplement = "Cheese";
   }
// componentDidMount(){
//     console.warn("Class Component with constructor and didmount");
// }
    render()
    {
    return(
        <div>
            <h1>Profile Component</h1>
            
        </div>
    )
    
    }
    
    }
    export default Profile;
      