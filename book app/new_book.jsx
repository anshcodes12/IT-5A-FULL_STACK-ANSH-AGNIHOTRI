import React, { useState } from "react";

function Change() {
  const [count, setCount] = useState(0);

  function change() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={change}>Click</button>
      <p>Hello clicked {count} times</p>
    </div>
  );
}
return (
  <div style = {{textAlign: "center", marginTop:"20px"}}>
    <button onClick = {change}>Click</button>
    <p>Hello clicked {count} times</p>
  </div>
)

export default Change;
import React from "react";
import './Book.css'

function Book(){
  return(
    <div id="book">
      <img src="" alt="" height={100} width={100}/>
      <h1>TITLE:Maths</h1>
      <h1>250</h1>

      <img src="" alt="" height={100} width={100}/>
      <h1>TITLE:English</h1>
      <h1>250</h1>

      <img src="" alt="" height={100} width={100}/>
      <h1>TITLE:Science</h1>
      <h1>250</h1>

      <img src="" alt="" height={100} width={100}/>
      <h1>TITLE:Hindi</h1>
      <h1>250</h1>
    </div>

    function Link1() {
      return (
        <div>
          <Routes>
            <Route path = "/" element = {<home/>} />
            <Route path = "/" element = {<home/>} />

          </Routes>
        </div>
      )
    }
  )
}
// #book{
//   border: 5px solid red;
//   height: 300px;
//   width: 300px;
//   background-color:coral;
// }class