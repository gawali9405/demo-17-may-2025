import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [count, setCount] = useState(0);
  const [dataFromLogin, setDataFromLogin] = useState({});
  const [dataFromRegister, setDataFromRegister] = useState({});
  type Product = { title: string };
  const [fectData, setFechData] = useState<Product[]>([]);

  const handleCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const response = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setFechData(data);
    };
    response();
  }, []);

  return (
    <>
      <div>
        <p>{count}</p>

        <button onClick={handleCounter}>counter</button>
        <h2> Data from Child : {JSON.stringify(dataFromLogin)}</h2>
        <Login setDataFromChild={setDataFromLogin} counter={count} />
      </div>

      <div>
        <h2>Data from Register :{JSON.stringify(dataFromRegister)}</h2>
        <Register setDataFromRegister={setDataFromRegister} />
      </div>

      <div>
        {fectData.length > 0 &&
          fectData.map((item) => (
            <div key={item.title}>
              <ul>
                <li>{item.title}</li>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
