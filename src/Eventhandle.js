import React from "react";

export default class Eventhandle extends React.Component {
      test(){
alert("This is On Click Function");
      }
      change(){
        alert("This is On Change Function");
              }
            
              Keyup(){
                const value = document.getElementById('key').value;
               console.log(value);
              }
    render(){
        return(
            <div>
               <button onClick={()=>this.test()}>Click Me</button>
               <button onClick={this.test.bind(this)}>Click Me</button>
                      <h1>On Change</h1>
               <input type={"checkbox"}onChange={()=>this.change()} />
                  <h1>On Keyup</h1>
                  <input type={"text"} onKeyUp={this.Keyup.bind(this)}  id={"key"}  />
            </div>
        )
    }
}