import "./App.css";
import React from "react";
import Form from "./Form";
import UserContext from "./context/UserContext";
import User from "./User";

function App() {
  const message = "Hi everyone !";

  return (
    <UserContext.Provider value={{ message }}>
      <User />
      <Form />
    </UserContext.Provider>
  );
}

export default App;
