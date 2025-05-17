import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [count, setCount] = useState(0);
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [dataFromRegister, setDataFromRegister] = useState({});

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <p>{count}</p>

        <button onClick={handleCounter}>counter</button>
        <h2> Data from Child : {JSON.stringify(dataFromLogin)}</h2>
        <Login setDataFromChild={setDataFromLogin} counter={setCount} />
      </div>

      <div>
        <h2>Data from Register :{JSON.stringify(dataFromRegister)}</h2>
        <Register setDataFromRegister={setDataFromRegister} />
      </div>
    </>
  );
}

export default App;
