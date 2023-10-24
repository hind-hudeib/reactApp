import "./App.css";
import React from "react";
import Class from "./Class";
import Child from "./Child";
import NumbersList from "./NumbersList";
import Form from "./Form";
import Hooks from "./Hooks";
import UserForm from "./UserForm";
import Login from "./Login";
import FakeApi from "./FakeApi";

function App() {
  const message ="Hi everyone !";

  return (
    <div className="App">
      {/* <Class /> */}
      {/* <Child greeting={message}/> */}
      {/* <NumbersList/> */}
      {/* <Form/> */}
      {/* <Hooks/> */}
      {/* <UserForm/> */}
      {/* <Login/> */}
      <FakeApi/>

    </div>
  );
}

export default App;
