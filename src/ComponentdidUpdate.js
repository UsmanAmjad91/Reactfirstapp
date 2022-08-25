import React from "react";

 class ComponentdidUpdate extends React.Component {
    constructor(){
        super();
       this.state={active:null,who:null}
    
    }

componentDidUpdate(){
    console.warn("componentDidUpdate");
    if(this.state.who==null){
    this.setState({who:"me"});
    }
}
    render(){
        // console.warn("render");
        return(
            <div>

              <h1>ComponentdidUpdate  Component {this.state.who}</h1>
            
              <button onClick={()=>{this.setState({active:"oh Yes"})}}>My way</button>
            </div>
        )
    }

}   
export default ComponentdidUpdate;