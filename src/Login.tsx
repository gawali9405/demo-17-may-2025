import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
        <button>Reset</button>
        <button>Login</button>
      </div>
    </>
  );
};

export default Login;
