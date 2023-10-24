import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

// e is the event object.
// e.target is the element that triggered the event, in this case, the input element 
// where the user is typing
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to store user data
    const userData = {
      username,
      password,
      rememberMe,
    };

    // Save the user data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    console.log("User Data:", userData);
  };


  return (
    <div className="containe flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl mb-4 text-red-900">Login</h2>
      <form onSubmit={handleSubmit} className="w-1/2 border-4 border-red-200 p-12 rounded-xl shadow-xl">
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2"
            />
            Remember Me
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
