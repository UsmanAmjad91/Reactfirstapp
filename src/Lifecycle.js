import React from "react";

 class Lifecycle extends React.Component {
    constructor(){
        super();
        console.warn("constructor");
    }
componentDidMount(){
    console.warn("componentDidMount");
}

    render(){
        console.warn("render");
        return(
            <div>
              <h1>Life Cycle</h1>
            </div>
        )
    }

}   
export default Lifecycle;