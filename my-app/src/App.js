import "./App.css";
import React from "react";
import Class from "./Class";
import Child from "./Child";
import NumbersList from "./NumbersList";
import Form from "./Form";
import Hooks from "./Hooks";

function App() {
  const message ="Hi everyone !";

  return (
    <div className="App">
      {/* <Class /> */}
      {/* <Child greeting={message}/> */}
      {/* <NumbersList/> */}
      {/* <Form/> */}
      <Hooks/>
    </div>
  );
}

export default App;
