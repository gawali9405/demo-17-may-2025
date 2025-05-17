import React, { useState } from "react";

interface loginProp {
  setDataFromChild: (newType: {}) => void;
}

const Register = ({ setDataFromChild }: loginProp) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showData, setShowData] = useState({});

  const handleLogin = () => {
    const userData = {
      name: name,
      password: password,
    };
    setShowData(userData);
    setDataFromChild(userData);
  };

  const handleReset = () => {
    setName("");
    setPassword("");
    setShowData({});
    setDataFromChild({});
  };

  return (
    <>
      <p> Name : {name}</p> <br />
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <p> Email : {email}</p> <br />
      <input
        type="email"
        placeholder="Enter your email"
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

export default Register;
