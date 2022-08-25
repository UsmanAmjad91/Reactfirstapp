import React from "react";

 class ComponentdidMount extends React.Component {
    constructor(){
        super();
       this.state={
        data:null
       }
       console.warn("constructor"); 
    }
componentDidMount(){
    this.setstate={date:"Usman"}
    console.warn("componentDidMount");
}

    render(){
        console.warn("render");
        return(
            <div>
              <h1>Did Mount Component</h1>
            </div>
        )
    }

}   
export default ComponentdidMount;