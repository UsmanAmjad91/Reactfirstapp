import React from "react";
import './App.css'; 
import Eventhandle from './Eventhandle';
import Eventfunction from './Eventfunction';
import Lifecycle from './Lifecycle';
import ComponentdidMount from './ComponentdidMount';
import ComponentdidUpdate from './ComponentdidUpdate';
import ComponentwillUnmount from './ComponentwillUnmount';
function Test() {
    return (
<div className="App">
<h1>Welcome</h1>
<Eventhandle />
<Eventfunction />
<Lifecycle />
<ComponentdidMount />
<ComponentdidUpdate />

<ComponentwillUnmount />
</div>
    );
}
export default Test;