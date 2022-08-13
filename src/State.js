import React from "react";

export default class State extends React.Component {
    constructor (){
        super();
        this.state = {
            name:'Amjad',
            email:'usman@gmail.com',
            count:1
        }
       }
       updatestate(){
        this.setState({
            name:'Usman Amjad',
            count:this.state.count+1 
       })
       }

       resetstate(){
        this.setState({
            
            count:0 
       })
       }

    render(){
        console.warn("render")
        return(
            <div>
                <h6>
                   Hello State Function {this.state.name}
                </h6>
                <h2> {this.state.email}</h2>
                <h1> {this.state.count} </h1>
                <button onClick={()=>{this.updatestate()}}> Update Name </button>
                <button onClick={()=>{this.resetstate()}}> Reset Count </button>
            </div>
        )
    }


}