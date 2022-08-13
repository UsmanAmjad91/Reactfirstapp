import React from "react";
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Newprofile from './Newprofile';
import Props from './Props';
import Propsclass from './Propsclass';
import State from './State';
import Showhide from './Showhide';
function App() {
  return (
    <div className="App">
      
       <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

<Showhide />
        <h1>JSX with React</h1>
        
        <Home/>
        <Props text="Function prop" />
        <Props text={{name:'usman'}} data ="Props Data Component function" />
        <Propsclass text={{name:'usman'}} data ="Props Data Component Class"  />
     <Profile/>
     <State />
     <Newprofile text="Function NewProfile Component show on screen"/>
  </header> 

      {/* With out JSX Header */}
      {/* {
      React.createElement(
        'h1',
       {className:'head-tag'},
        'Hello JSX'
      )
      } */}
    </div>
  );
}

export default App;
