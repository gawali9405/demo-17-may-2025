import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const[showData,setShowData]= useState({})

  const handleLogin = () => {
    const userData = {
      name: name,
      password: password,
    };
    setShowData(userData)
  };

  const handleReset = () => {
    setName("");
    setPassword("");
  };

  return (
    <>
      <p> userName : {name}</p> <br />
      <input
        type="text"
        placeholder="Enter your user"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <p> password : {password}</p> <br />
      <input
        type="password"
        placeholder="Enter your user"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLogin}>Login</button>
      </div>
      <h2>{JSON.stringify(showData)}</h2>
    </>
  );
};

export default Login;
