import React from "react";

export default class Showhide extends React.Component {
    constructor (){
        super();
        this.state = {
            show:true
        }
       }
      
    render(){
       
        return(
            <div>
                
                {
                 this.state.show ? 
                 <h1>
                  Show Hide
                </h1>
                :null  
                }
              
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Click Me </button>
               
            </div>
        )
    }


}