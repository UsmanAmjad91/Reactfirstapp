import React from "react";

/// Function Component ///
export default function Newprofile(prop) {
  const red = () => {
    alert("Red Function Call from function Component");
  };

  return (
    <div>
      {/* <h1 onClick={red} >Hello World New profile Function Component</h1>  */}
      <h1 onClick={red}>{prop.text}</h1>
    </div>
  );
}
