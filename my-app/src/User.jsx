import React, { useContext } from "react";
import UserContext from "./context/UserContext";

const User = () => {
  const { message } = useContext(UserContext);
  return (
    <div className="text-center flex-row justify-center mx-80">
      <h1 className="font-thin text-4xl py-10 m-10 text-red-400 border-2 border-purple-500 rounded-xl block">
        {message}
      </h1>
    </div>
  );
};

export default User;
